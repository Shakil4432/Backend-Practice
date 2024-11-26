export type IAuthor = {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  biography: string;
  books: string[];
};
