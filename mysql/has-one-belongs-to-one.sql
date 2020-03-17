INSERT INTO families.people (spouseId, name, dateOfBirth, gender) 
VALUES (3, 'Mark', '1990-01-01', 'male'), (4, 'John', '1991-02-02', 'male'), 
(1, 'Mary', '1992-03-03', 'female'), (2, 'Emily', '1993-04-04', 'female');

SELECT people1.*, people2.name AS spouseName FROM families.people people1
JOIN families.people people2 ON people1.spouseId = people2.id;