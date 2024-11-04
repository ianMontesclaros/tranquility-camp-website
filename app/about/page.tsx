import { Metadata } from "next";
import { getCabins } from "../_lib/data-service";

import Image from "next/image";
import img1 from "@/public/about-1.jpg";
import img2 from "@/public/about-2.jpg";

// Revalidate every 1 day
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About",
};

// &apos;

export default async function Page() {
  const numCabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-green-500 font-medium">
          Welcome to Tranquility Camp
        </h1>

        <div className="space-y-8">
          <p>
            Tranquility Camp is your perfect getaway nestled in the serene
            wilderness of Oulu, Finland. Our {numCabins.length} cabins offer a
            peaceful retreat where nature&apos;s beauty and comfort meet,
            providing you with an unforgettable experience. Whether you&apos;re
            looking to escape the hustle and bustle of everyday life, connect
            with nature, or embark on an adventure, Tranquility Camp is the
            ideal destination.
          </p>
          <p>
            What truly sets us apart is our exceptional location for witnessing
            one of nature&apos;s most awe-inspiring spectacles: the Aurora
            Borealis. Situated in one of the best spots in Finland for viewing
            the Northern Lights, our camp provides a front-row seat to this
            celestial phenomenon. From the comfort of your cozy cabin or while
            relaxing by the firepit, you&apos;ll be treated to breathtaking
            views of the dancing lights across the night sky.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={img1} placeholder="blur" alt="Tranquility Camp cabin" />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image src={img2} placeholder="blur" alt="Karjalainen family" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-green-500 font-medium">
          Managed since 1984
        </h1>

        <div className="space-y-8">
          <p>
            The story of Tranquility Camp started decades ago when our family
            first settled in Oulu, enchanted by the region&apos;s breathtaking
            landscapes. What began as a small family cabin soon evolved into the
            resort it is today, a haven where guests can disconnect from the
            stresses of modern life and reconnect with nature and loved ones.
          </p>
          <p>
            We, the Karjalainen family, have been proud to welcome guests into
            our home and hearts for generations. When you stay at Tranquility
            Camp, you&apos;re not just a guest—you become part of our extended
            family. We look forward to sharing our home, traditions, and love
            for this incredible region with you.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-green-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-green-600 transition-all"
            >
              Explore our cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
