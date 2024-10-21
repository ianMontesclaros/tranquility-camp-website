import { User } from "next-auth";

// auth lib
declare module "next-auth" {
  interface Session {
    user: User & {
      guestId: number;
    };
  }
}

// date-fns lib
export interface IReservation {
  from: string | number | Date | undefined;
  to: string | number | Date | undefined;
}
