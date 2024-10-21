import { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_context/ReservationContext";

import Header from "./_components/Header";

import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Tranquility Camp",
    default: "Welcome — Tranquility Camp",
  },
  description: "Luxurious cabin hotel, located in the heart of Oulu, Finland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 px-8 py-12 grid">
          <div className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
