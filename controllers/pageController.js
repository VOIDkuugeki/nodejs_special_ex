const Slide = require('../models/slideModel');

exports.home = (req, res) => {
    Slide.getAll((err, slides) => {
        if (err) {
            console.error('Error fetching slides:', err);
            res.status(500).send('Server Error');
            return;
        }
        res.render('index', { title: 'Home', slides });
    });
};

exports.about = (req, res) => {
  res.render("index", { content: "partials/about" });
};

exports.contact = (req, res) => {
  res.render("index", { content: "partials/contact" });
};
