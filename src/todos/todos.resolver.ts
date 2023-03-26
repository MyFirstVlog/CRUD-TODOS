import { Query, Resolver } from '@nestjs/graphql';
import { Todos } from './todos.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {

  constructor(
    private readonly todoService: TodosService
  ){}

  @Query(() => [Todos])
  findAll(): Todos[]{
    return this.todoService.findAlll();
  }

  findOne(){

  }

  createTodo(){

  }

  updateTodo(){

  }
}
