const db = require('../database/database');

const Slide = {
    getAll: (callback) => {
        const query = 'SELECT * FROM slide';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Slide;