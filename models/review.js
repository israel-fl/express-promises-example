var bookshelf = require('../bookshelf');
var Book = require('./book')

var Review = bookshelf.Model.extend({
    tableName: 'reviews',
    book: function() {
        return this.belongsTo(Book);
    },
});

module.exports = Review;
