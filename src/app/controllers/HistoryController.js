const Comic = require('../models/Comic')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class HistoryController {
    history(req, res, next) {
        var arrayComic = []

        if(req.session.comic) {
            req.session.comic.forEach(element => {
                arrayComic.push(element.comic)
            });
        }

        Comic.find({slug: {$in: arrayComic}})
            .then((historyComic) => {
                return res.render('history/history', {
                    historyComic: mutipleMongooseToObject(historyComic),
                })
            })
    }
}

module.exports = new HistoryController()