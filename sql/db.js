const spicedPg = require("spiced-pg");
// const { password } = require("./secrets.json");
let dbUrl;
if (process.env.DATABASE_URL) {
    dbUrl = process.env.DATABASE_URL;
} else {
    dbUrl = `postgres:postgres:postgres@localhost:5432/modernpsyche`;
}

const db = spicedPg(dbUrl);

// post post
// schedule post
// delete post

module.exports.saveDraft = function() {
    return db.query(
        ` INSERT INTO posts
        (title, subtitle, author, content_text title_image, image_2, image_3, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`[
            (title,
            subtitle,
            author,
            content_text,
            title_image,
            image_2,
            image_3,
            status)
        ]
    );
};

module.exports.saveContent = function(sampleText) {
    return db.query(
        `
    INSERT INTO test (text) VALUES ($1) RETURNING id
    `,
        [sampleText]
    );
};

module.exports.getContent = () => {
    return db.query(`SELECT text FROM test ORDER BY id DESC LIMIT 1`);
};

module.exports.editDraft = function() {
    return db.query(``);
};
