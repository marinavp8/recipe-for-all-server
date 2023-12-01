const {Schema, model} = require('mongoose')

const commentSchema = new Schema(
    {
        owner: {
               type: Schema.Types.ObjectId,
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


const Comment = model("Comment", commentSchema)

module.exports = Comment