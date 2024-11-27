import { Types } from "mongoose";

export type Ibook = {
  title: string;
  author: Types.ObjectId;
  ISBN: string;
  category: "fiction" | "non-fiction" | "science";
  availableCopies: number;
  totalCopies: number;
};
