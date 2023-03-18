import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TodoModule } from './todo/todo.module';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [
    TodoModule, 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false, //Para deshabilitar la interfaz grafica
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // plugins: [
      //   ApolloServerPluginLandingPageLocalDefault()
      // ]
    }), HelloWorldModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
