const Film = require("./film_model");

exports.getAllFilms = async (req, res) => {
    try{
        const films = await Film.find();
        res.status(200).json({
            status: 'success',
            results: films.length,
            data: films
        })
    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};