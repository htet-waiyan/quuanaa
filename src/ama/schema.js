/* eslint-disable no-underscore-dangle */
import mongoose, { Schema } from 'mongoose';
import { AMA_LIFE_TIME } from './enum';

const AmaSchema = new Schema({
  email: { type: String, required: true },
  phone: String,
  enterCode: String,
  lifetime: { type: Number, enum: Object.keys(AMA_LIFE_TIME), default: AMA_LIFE_TIME._1_DAY },
  questions: [{
    type: String,
    questionTime: Number,
    questionTimeZone: String,
    upVote: { type: Number, default: 0 },
    downVote: { type: Number, default: 0 },
    answer: {
      answerTime: Number,
      answerTimeZone: String,
      comment: String,
      likes: { type: Number, default: 0 },
    },
  }],
  amaDateTime: Number,
  amaDateTimeZone: String,
}, { timestamps: true });

export default mongoose.model('Ama', AmaSchema);
