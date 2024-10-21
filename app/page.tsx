import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <div className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-bottom"
        alt="A cabin surrounded by trees and aurora borealis"
        placeholder="blur"
        quality={80}
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to tranquility.
        </h1>
        <a
          href="/cabins"
          className="bg-green-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-green-600 transition-all"
        >
          Explore our cabins
        </a>
      </div>
    </div>
  );
}
