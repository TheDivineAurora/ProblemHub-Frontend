import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from 'mongoose';


export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}


export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    throw new Error("Connection failed!");
  }
}

export default dbConnect;

