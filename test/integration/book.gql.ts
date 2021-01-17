import { expect }             from "chai";
import { gql, request } from "graphql-request";
import { vars }         from "./globals";


export const books = async () => {
  const mockReq: any[] = [
    gql`
        query {
            books(search: "book1") {
                id,
                title,
                description,
                createdDate,
                library{
                    id,
                    title
                }
            }
        }
    `
  ];

  vars.books = mockReq;
  for await (const reqBody of mockReq) {
    await booksTest(reqBody);
  }
};
export const booksTest = async (reqBody) => {
  const response = await request("http://localhost:3000/graphql", reqBody);
  expect(response).is.not.empty;
  expect(response).to.be.an('object');
  expect(response.books).to.be.an("array");
};

export const count = async () => {
  const mockReq: any[] = [
    gql`
        query {
            count(fromDate: 1600831196825) {
                total
            }
        }


    `
  ];

  vars.count = mockReq;
  for await (const reqBody of mockReq) {
    await countTest(reqBody);
  }
};
export const countTest = async (reqBody) => {
  const response = await request("http://localhost:3000/graphql", reqBody);
  expect(response).is.not.empty;
  expect(response).to.be.an('object');
  expect(response.count).to.be.an("object");
  expect(response.count.total).to.be.a("number");
};

export const change = async () => {
  const mockReq: any[] = [
    gql`
        mutation {
            change(id: "cad4dad0-8804-4562-af02-e94e26f0e7d5", input: {
                title: "dasdsasdaaaas"
            }) {
                id,
                title
            }
        }
    `
  ];

  vars.change = mockReq;
  for await (const reqBody of mockReq) {
    await changeTest(reqBody);
  }
};
export const changeTest = async (reqBody) => {
  const response = await request("http://localhost:3000/graphql", reqBody);
  expect(response).is.not.empty;
  expect(response).to.be.an('object');
  expect(response.change).to.be.an('object');
};
