const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const { saveDraft, saveContent, getContent } = require("./sql/db.js");
const { registerAdmin } = require("./sql/adminDb.js");
const { hashPass, checkPass } = require("./encryption.js");
const { adminEmail, cookieSecret } = "./secrets.json";

app.disable("x-powered-by");
app.use(require("body-parser").json());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//session object middleware
app.use(
    cookieSession({
        secret: { cookieSecret },
        maxAge: 1000 * 60 * 60 * 24 * 16
    })
);

app.use(express.static("./public"));

///////Routing//////////
//Admin Registration--soon only with specific email.
app.post("/admin/register", (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        res.json({
            success: false
        });
    } else {
        hashPass(password)
            .then(hashedPass => {
                return registerAdmin(firstName, lastName, email, hashedPass);
            })
            .then(adminCred => {
                req.session.adminName = firstName;
                req.session.adminId = adminCred.rows[0].id;
                req.session.adminEmail = email;
                req.session.loggedIn = adminCred.rows[0].id;
                res.json({
                    success: true
                });
            })
            .catch(err => {
                console.error("error in register route index.js", err);
            });
    }
});

app.get("/save-draft", (req, res) => {
    getContent().then(content => res.json(content));
});

app.post("/save-draft", (req, res) => {
    console.log("SNAIL MAIL FROM THE FRONT END", req.body);
    saveContent(req.body)
        .then(() => res.json("ok"))
        .catch(err => console.log("ERR IN POST ROUTE SAVE DRAFT", err));

    // saveDraft(); //all the things that I get back from the request body
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
