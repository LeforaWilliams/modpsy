const express = require("express");
const app = express();
const compression = require("compression");
const { saveDraft, saveContent, getContent } = require("./sql/db.js");
const { registerAdmin } = require("./sql/adminDb.js");
const { hashPass, checkPass } = require("./encryption.js");

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

app.use(express.static("./public"));

///////Routing//////////
//register and login for admin
app.post("/admin/register", (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        res.json({
            success: false
        });
    } else {
        hashPass(password)
            .then(hashedPass => {
                return registerUser(firstName, lastName, email, hashedPass);
            })
            .then(adminCred => {
                let { adminName, adminId, adminEmail, loggedIn } = req.session;
                adminName = firstName;
                adminId = adminCred.rows[0].id;
                adminEmail = email;
                loggedIn = adminCred.rows[0].id;
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
