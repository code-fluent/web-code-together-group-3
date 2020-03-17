INSERT INTO pets.people (name, dateOfBirth, gender) VALUES ('Mark', '1990-01-01', 2), ('Amy', '1991-02-02', 1), 
('Emily', '1992-03-03', 1);

INSERT INTO pets.animals (ownerId, type, name) VALUES (1, 'dog', 'Rex'), (1, 'cat', 'Billy'), (2, 'dog', 'Brutus');

SELECT people.*, animals.name AS animalName FROM pets.people 
LEFT JOIN pets.animals ON animals.ownerId = people.id