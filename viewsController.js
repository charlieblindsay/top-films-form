const Film = require('./film_model')

exports.getFilmForm = async (req, res) => {
    const films = await Film.find();

    res.status(200).render('form', {
        films: films
    })
}

exports.getFilmData = async (req, res) => {
    const films = await Film.find();
    
    res.status(200).render('data', {
        films: films
    })
}