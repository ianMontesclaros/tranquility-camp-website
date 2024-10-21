import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height={150}
        width={150}
        alt="Tranquility Camp logo"
        quality={100}
      />
    </Link>
  );
}

export default Logo;
