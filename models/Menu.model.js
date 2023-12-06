const { Schema, model } = require("mongoose")

const menuSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
        },
        days: [{
            day: {
                type: String,
                enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                required: true
            },
            recipeBreakfastId: String,
            recipeLunchId: String,
            recipeDinnerId: String,
        }]
    },
    {
        timestamps: true
    }
)

const Menu = model("Menu", menuSchema)

module.exports = Menu
