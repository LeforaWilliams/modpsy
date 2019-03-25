DROP TABLE IF EXISTS posts
DROP TABLE IF EXISTS admin

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    name VARCHAR (168) NOT NULL,
    lastname VARCHAR (168) NOT NULL,
    email VARCHAR (168) NOT NULL UNIQUE,
    password VARCHAR (168) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR (300) NOT NULL,
    sub_title VARCHAR (300),
    author VARCHAR (168),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    content_text TEXT,
    title_image TEXT,
    image_2 TEXT,
    image_3 TEXT,
    status INT NOT NULL DEFAULT 1
);

CREATE TABLE test (
  id SERIAL PRIMARY KEY,
  text TEXT
);
