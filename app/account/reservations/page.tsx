import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import { Metadata } from "next";

import ReservationList from "@/app/_components/ReservationList";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  if (!session || !session.user) return;
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-green-500 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-green-600" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}