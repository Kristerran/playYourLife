import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    stress: {
      type: Number,
    },
    energy: {
      type: Number,
    },
    social: {
      type: Number,
    },
    fun: {
      type: Number,
    },
    selfCare: {
      type: Number,
    },
    lastDaySlidersUpdated: {
      type: Date,
    },
    currentQuests: [{ type: Schema.Types.ObjectId, ref: 'Quest' }],
    dailyQuests: [{ type: Schema.Types.ObjectId, ref: 'Quest' }],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// userSchema.pre('findOneAndUpdate', async function (next) {
//   const user = await this.model.findOne(this.getQuery());
//   const saltRounds = 10;
//   const newPass = await bcrypt.hash(user.password, saltRounds);
//   user.password = newPass;
//   user.save();

//   next();
// });

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  console.log(this.password);
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export { User };
