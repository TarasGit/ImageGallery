var models = require('../models');

module.exports = {
    popular: function(callback) {
        //models.Image.find({}, {}, { limit: 9, sort: { likes: -1 }},
        models.Image.find().sort({'likes': -1}).limit(1).exec(

            function(err, images) {
                if (err) throw err;

                callback(null, images);
            });
    }
};