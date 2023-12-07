const { Schema, model } = require('mongoose')

const commentSchema = new Schema(

    {
        recipeCommented: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String,
            maxlength: [50, 'Max of 50 characters']
        },
        created: {
            type: Date,
            default: Date.now
        }

    }
)

const Comment = model("comment", commentSchema)

module.exports = Comment