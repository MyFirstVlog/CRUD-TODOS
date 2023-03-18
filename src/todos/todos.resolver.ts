import { Query, Resolver } from '@nestjs/graphql';
import { Todos } from './todos.entity';

@Resolver()
export class TodosResolver {

  @Query(() => [Todos])
  findAll(): Todos[]{
    return []
  }

  findOne(){

  }

  createTodo(){

  }

  updateTodo(){

  }
}
