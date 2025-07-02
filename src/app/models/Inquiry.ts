import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  typeOfCoaching: { type: String, enum: ['Personal', 'Group', 'Online'], required: true },
  message: String,
  location: String,
});

export const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
