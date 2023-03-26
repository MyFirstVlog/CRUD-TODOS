import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todos } from './todos.entity';
import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Resolver()
export class TodosResolver {

  constructor(
    private readonly todoService: TodosService
  ){}

  @Query(() => [Todos], {name: "todos"})
  findAll(): Todos[]{
    return this.todoService.findAlll();
  }

  @Query(() => Todos, {name: "todo"})
  findOne(
    @Args("id", {type: () => Int}) id: number
  ){
    return this.todoService.findOne(id);
  }

  @Mutation( () => Todos, { name: 'createTodo' })
    createTodo(
        @Args('createTodoInput') createTodoInput: CreateTodoInput
    ) {
      console.log({createTodoInput});
      return this.todoService.create(createTodoInput);
    }

  @Mutation(() => Todos, {name: "updateTodo"})
  updateTodo(
    @Args("updateTodoInput") updateTodoInput: UpdateTodoInput
  ){
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }
}
