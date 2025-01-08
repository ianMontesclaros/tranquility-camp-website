"use client";

import { differenceInDays } from "date-fns";
import { User } from "next-auth";
import { useReservation } from "../_context/ReservationContext";
import { createBooking } from "../_lib/actions";
import { IBooking, IBookingAction, ICabin } from "../_types/database";

import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }: { cabin: ICabin; user: User }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  let startDate = new Date(range?.from);
  startDate.setDate(startDate.getDate() + 1);

  let endDate = new Date(range?.to);
  endDate.setDate(endDate.getDate() + 1);

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData: Partial<IBookingAction> = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const handleSubmit = async (formData: FormData) => {
    await createBooking.call(null, bookingData, formData);
    resetRange();
  };

  return (
    <div className="grid">
      <form
        className="bg-primary-900 py-20 px-16 text-lg flex gap-5 flex-col"
        action={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(range?.from && range?.to) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Placing reserve...">
              Reserve now
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
