import { Field, ID, ObjectType }          from "@nestjs/graphql";

import * as uuid   from "uuid";
import { Library } from "./library.model";

@ObjectType()
export class Book {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  createdDate: Date;

  @Field()
  libraryId: String;

  @Field()
  library: Library;
}
