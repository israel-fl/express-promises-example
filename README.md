# Promise to Build Me A REST API - Pt 2
You will be building a few APIs using Express and Bookshelf.js, a Node ORM. Use dotenv to store your database credentials, and make sure your .env file isn't committed to your repo.

## 1. GET /api/v1/reviews
Rebuild question 1 from the previous assignment using Bookshelf.js. It is fine if the JSON response contains extra attributes like createdat, updatedat, etc.

## 2. GET /api/v1/books/:id
Rebuild question 2 from the previous assignment using Bookshelf.js. It is fine if the JSON response contains extra attributes like createdat, updatedat, etc.

## 3. POST /api/v1/reviews
Create an endpoint that allows you to create a new review in the database. Use Bookshelf.js. The request payload should contain the book_id, headline, body, and rating. The response should contain the newly generated review (all fields including the ID). It is fine if the JSON response contains extra attributes like createdat, updatedat, etc.
