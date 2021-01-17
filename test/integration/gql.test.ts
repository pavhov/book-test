import "./globals";
import { books, change, count } from "./book.gql";

describe("Api integration tests", () => {
  test("Query books", books);
  test("Query count", count);
  test("Mutation change", change);
});
