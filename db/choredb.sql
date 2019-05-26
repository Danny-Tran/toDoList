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



INSERT INTO chores (title, category)
    VALUES ('Cactus Club Cafe','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Earls','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Popeyes','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Minas Brazilian Steakhous','restaurant');
INSERT INTO chores (title, category)
    VALUES ('The Keg','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Osteria','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Menyatai','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Muku Japanese Ramen','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Little Spice','restaurant');
INSERT INTO chores (title, category)
    VALUES ('A&W','restaurant');
INSERT INTO chores (title, category)
    VALUES ('El Furniture Warehouse','restaurant');
INSERT INTO chores (title, category)
    VALUES ('Joey Eau Claire','restaurant');