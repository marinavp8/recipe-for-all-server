const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, 'El nombre de usuario debe ser único'],
      minlength: [3, 'El usuario necesita mínimo 3 caracteres.']
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio.'],
      unique: [true, 'El email debe ser unico.'],
      lowercase: true,
      trim: true,
      minlength: [5, 'El correro necesita mínimo 5 caracteres.']
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria.']
    },
    avatar: {
      type: String,
      default: "../images/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
