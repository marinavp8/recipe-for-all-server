const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
    {
        owner: {
            type: String,
            ref: 'User'
        },
        comment: {
            type: String,
            maxlength: [50, 'Máximo de 50 carácteres']
        },
        created: {
            type: Date,
            default: Date.now
        }

    }
)


const Comment = model("comment", commentSchema)

module.exports = Comment