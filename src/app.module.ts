import { Module }          from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BooksModule }   from "./books/books.module";

@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.gql",
      debug: true,
      playground: true,
    })
  ]
})
export class AppModule {
}
