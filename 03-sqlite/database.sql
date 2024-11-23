-- 01 create table
-- CREATE TABLE mytable(
--     id INTEGER NOT NULL PRIMARY KEY,
--     name VARCHAR(200),
--     place VARCHAR(200),
--     salary INTEGER
-- );

-- 02 insert data
-- INSERT INTO
--     mytable(id, name, place, salary)
--     VALUES(1, "Praveen", "Hyderabad", 50000),
--           (2, "Navya", "Bangalore", 80000),
--           (3, "Swathi", "Chennai", 70000);

-- 03 select

-- all columns
-- SELECT * FROM mytable;

-- specific column
-- SELECT name FROM mytable;

-- specific row
-- SELECT name
-- FROM mytable
-- WHERE name LIKE "Praveen";

-- 04 update

-- update all rows
-- UPDATE mytable
-- SET salary = 40000;

-- update specific row
-- UPDATE mytable
-- SET salary = 80000
-- WHERE name LIKE "Praveen";

-- delete

-- delete all rows
-- DELETE FROM mytable;

-- delete specific row
-- DELETE FROM mytable
-- WHERE name LIKE "Navya";

-- drop

-- DROP TABLE mytable;

--  order
-- SELECT *
-- FROM mytable
-- ORDER BY
--     salary DESC;

-- pagination
-- SELECT *
-- FROM mytable
-- ORDER BY
--     salary DESC
-- LIMIT 1
-- OFFSET 1;
