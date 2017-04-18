var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var Book = require('./models/book');
var Review = require('./models/review');

// Adding validation to our request parameters
const Joi = require('joi');
const review_schema = Joi.object().keys({
    book_id: Joi.number().integer(),
    headline: Joi.string(),
    body: Joi.string(),
    rating: Joi.number().integer()
});

app.use(bodyParser.json()); // for parsing application/json

app.get('/api/v1/reviews', function(request, response) {
  Review
    .query(function (qb) {
        qb.limit(20);  // limit displayed results to 20
    })
    .fetchAll({
                withRelated: ['book']
              })
    .then(function(reviews) {
        response.json(reviews);
    });
});


app.get('/api/v1/books/:id', function(request, response) {
  Book
    .where('id', request.params.id)
    .fetch({
                require: true,
                withRelated: ['author', 'publisher']
            })
    .then(function(book) {
      response.json(book);
    }, function(e) {
        response.status(404).json({
            error: {
              success: false,
              message: "not_found"
            }
        });
    });
});


app.post('/api/v1/reviews', function(request, response) {
    Joi.validate(request.body, review_schema, { presence: "required" }, function(err, value) {
        // Check if the request matches the schema, the request MUST include all values
        if (err) {
            response.json(err);
        } else {
            var review = new Review({
                book_id: request.body.book_id,
                headline: request.body.headline,
                body: request.body.body,
                rating: request.body.rating
            });

            review.save().then(function() {
                response.json({success: true, message: "review_added", review: review});
            });
        }
    });
});

app.listen(8000);
