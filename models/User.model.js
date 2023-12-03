const { Schema, model } = require("mongoose")

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, 'Username must be unique'],
      minlength: [3, 'El usuario necesita mínimo 3 caracteres.']
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: [true, 'Email must be unique.'],
      lowercase: true,
      trim: true,
      minlength: [5, 'El correro necesita mínimo 5 caracteres.']
    },

    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [2, 'La contraseña debe tener mas de dos caracteres']
    },

    avatar: {
      type: String,
      required: [true, 'Profile image is required.'],
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    favouriteRecipies: {
      type: [String]
    }

  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()

})

userSchema.methods.signToken = function () {
  const { _id, username, email, avatar } = this
  const payload = { _id, username, email, avatar }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )

  return authToken
}

userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}


const User = model("User", userSchema)

module.exports = User;
