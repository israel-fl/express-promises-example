var bookshelf = require('../bookshelf');
var Author = require('./author')
var Publisher = require('./publisher')

var Book = bookshelf.Model.extend({
    tableName: 'books',
    authors: function() {
        return this.belongsTo(Author);
    },
    publishers: function() {
        return this.belongsTo(Publisher);
    }
});

module.exports = Book;
