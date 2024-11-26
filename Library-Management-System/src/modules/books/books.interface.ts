export type Ibook = {
  title: string;
  author: string;
  ISBN: string;
  category: "fiction" | "non-fiction" | "science";
  availableCopies: number;
  totalCopies: number;
};
