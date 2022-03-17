const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLenght: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 150
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  confirm_password: {
    type: String,
    required: true,
    validate: function (value) {
      return value === this.password;
    }
  },
  created_at: {
    type: Date,
    default: Date.now(),
    select: false
  },
  updated_at: {
    type: Date,
    default: Date.now(),
    select:false
  }
})

userSchema.pre('save', async function () {
  this.password =  await bcrypt.hash(this.password, 12);
  this.confirm_password = undefined;
})

userSchema.statics.comparePasssword = async (candidatePassword, password) => {
  return  await bcrypt.compare(candidatePassword, password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;