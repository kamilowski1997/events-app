import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  eventDate: Date,
});

export default mongoose.model('Event', eventSchema);
