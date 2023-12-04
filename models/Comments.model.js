const {Schema, model} = require('mongoose')

const commentSchema = new Schema(

    
    {
        recipeCommented:{
            type:String,
            required: true
        },
        owner: {
               type: String,
                required: true 
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