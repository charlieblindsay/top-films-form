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

exports.addUserChoices = async (req, res) => {
    try{
        let films = await Film.find();
        let selectedFilmIDs = []
        films.forEach(film => {
            if (req.body[film._id] == true){
                selectedFilmIDs.push(film._id);
            }
        })
        await Film.updateMany({_id: selectedFilmIDs}, {$push: {whoHasWatched: req.body.username}})
        res.status(200).json({
            status: 'success',
            name: req.body.username,
        })
    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}