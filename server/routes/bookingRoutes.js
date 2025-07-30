import express from "express";
import { changeBookingStatus, checkAvailabilityOfCar, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";

const BookingRouter = express.Router();
BookingRouter.post('/check-availability', checkAvailabilityOfCar)
BookingRouter.post('/create', protect, createBooking)
BookingRouter.get('/user', protect, getUserBookings)
BookingRouter.get('/owner', protect, getOwnerBookings)
BookingRouter.post('/change-status', protect, changeBookingStatus)

export default BookingRouter;
