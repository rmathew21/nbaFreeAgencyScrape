const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: false
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
});

const Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;