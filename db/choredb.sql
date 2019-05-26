DROP TABLE IF EXISTS chores CASCADE;

CREATE TABLE chores(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    category VARCHAR(50)
);
INSERT INTO chores (title,category)
    VALUES ('Batman', 'movie');
INSERT INTO chores (title,category)
    VALUES ('Bright', 'movie');
INSERT INTO chores (title,category)
    VALUES ('Of Mice and Men', 'book');
