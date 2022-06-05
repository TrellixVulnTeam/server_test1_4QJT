const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const chapter = new Schema({
    name: {type: String},
    slugComic: {type: String},
    slugChapter: {type: String},
    linkImage: {type: String},
})

const Comic = new Schema({
    name: {type: String, unique: true},
    urlImage: {type: String},
    chapters: {type: Number, default: 0},
    status: {type: String, default: 'Đang cập nhật'},
    genre: {type: String, default: 'Đang cập nhật'},
    author: {type: String, minlength: 1, default: 'Đang cập nhật'},
    slug: {type: String, slug: 'name', unique: true },
    content: {type: String},
    country: {type: String, default: 'Nhật Bản'},
    detailChapter: [chapter],
});

module.exports = mongoose.model('Comic', Comic)