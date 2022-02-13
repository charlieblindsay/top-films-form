const Film = require('./film_model')

exports.getFilmNames = async (req, res) => {
    const films = await Film.find();

    res.status(200).render('base', {
        films: films
    })
}