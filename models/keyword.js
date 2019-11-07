const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const keywordSchema = new Schema({
    keyword: {
        type: String,
        required:[true, "Name is required"]
    },
    endTime: {
        type: Date,

    }
});


const Keyword = mongoose.model('keyword', keywordSchema);
module.exports = Keyword; 