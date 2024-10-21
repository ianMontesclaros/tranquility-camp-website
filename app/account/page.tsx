import { Metadata } from "next";
import { auth } from "../_lib/auth";

export const metadata: Metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-green-500 mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
