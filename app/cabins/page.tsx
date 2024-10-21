import { Metadata } from "next";
import { Suspense } from "react";

import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cabins",
};

interface SearchProps {
  searchParams: {
    capacity?: string;
  };
}

export default function Page({ searchParams }: SearchProps) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-green-500 font-medium">Our Cabins</h1>
      <p className="text-primary-200 text-lg mb-10">
        Blended with rustic charm and modern comfort, each cabin comes equipped
        with cozy furnishings and amenities, ensuring a relaxing stay while
        providing the perfect vantage point for witnessing the aurora borealis.
        With private decks and fire pits, guests can unwind in the fresh Finnish
        air, creating memorable moments beneath the shimmering northern lights.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
