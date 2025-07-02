import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

export const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
