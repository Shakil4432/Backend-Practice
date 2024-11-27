import { IAuthor } from "./authors.interface";
import { authorModel } from "./authors.model";

const createAuthorIntoDB = async (author: IAuthor) => {
  const result = await authorModel.create(author);
  return result;
};

export const AuthorServices = {
  createAuthorIntoDB,
};
