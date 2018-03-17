const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  due_date: Date,
  position: Number,
  list: {
    type: String,
    enum: ['ToDo', 'WorkInProgress', 'Done'],
    required: true
  }
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
});

module.exports = mongoose.model('Card', cardSchema);
