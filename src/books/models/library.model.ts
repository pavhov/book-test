import { Field, ID, ObjectType }          from "@nestjs/graphql";

import * as uuid          from "uuid";

@ObjectType()
export class Library {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
