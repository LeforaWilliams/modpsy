const spicedPg = require("spiced-pg");
let dbUrl;
if (process.env.DATABASE_URL) {
    dbUrl = process.env.DATABASE_URL;
} else {
    dbUrl = `postgres:postgres:postgres@localhost:5432/modernpsyche`;
}
const db = spicedPg(dbUrl);

module.exports.registerAdmin = (name, lastName, email, password) => {
    let instertAdmin = `
    INSERT INTO admin (name, lastname, email, password)
    VALUES ($1,$2,$3,$4)
    RETURNING id`[(name, lastName, email, password)];
    return db.query(insertAdmin).catch(err => {
        console.log("Error when saving admin registration to db >>>>", err);
    });
};
