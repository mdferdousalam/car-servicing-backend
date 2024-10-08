import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";
import { Vehicle } from "./booking.enumeration";

const bookingSchema = new Schema<IBooking>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    slotId: { type: Schema.Types.ObjectId, ref: "Slot", required: true },
    vehicleType: {
      type: String,
      enum: Object.values(Vehicle),
      required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true }
);

export const BookingModel = model<IBooking>("Booking", bookingSchema);
