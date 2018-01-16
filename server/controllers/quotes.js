var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
  show: function(req, res) {
    Quote.find({}).sort({createdAt: "descending"}).exec(function(err, quotes) {
      res.render('main', {quotes: quotes});
    });
  },
  create: function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  },
  back: function(req, res) {
    res.redirect('/');
  }
}
