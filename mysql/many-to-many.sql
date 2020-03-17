INSERT INTO books.authors (name, dateOfBirth) 
VALUES ('Octavian Paler', '1930-11-10'), ('Lev Tolstoi', '1828-09-09'), ('Feodor Dostoievski', '1821-11-11')

SELECT * FROM books.authors

INSERT INTO books.books (title, publishDate) 
VALUES ('Anna Karenina', '1848-11-11'), ('War and peace', '1858-09-09'), ('Karamazov Brothers', '1888-11-11')

SELECT * FROM books.books

INSERT INTO books.authorsBooks (bookId, authorId) VALUES (1, 2), (1, 3), (3, 1)
INSERT INTO books.authorsBooks (authorId, bookId) VALUES (2, 2);

SELECT * FROM books.authorsBooks

SELECT authors.*, books.title AS bookTitle FROM books.authors
JOIN books.authorsBooks ON authors.id = authorsBooks.authorId
JOIN books.books ON authorsBooks.bookId = books.id
ORDER BY authors.id

SELECT books.*, authors.name as authorName FROM books.books
JOIN books.authorsBooks ON books.id = authorsBooks.bookId
JOIN books.authors ON authorsBooks.authorId = authors.id
ORDER BY books.publishDate




