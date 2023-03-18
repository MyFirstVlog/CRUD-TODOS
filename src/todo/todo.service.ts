import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    {
      id: 0,
      description: "Piedra del Alma",
      done: false,
    },
    {
      id: 1,
      description: "Piedra del Tiempo",
      done: false,
    },
    {
      id: 2,
      description: "Piedra del Espacio",
      done: false,
    },
  ];

  create({description}: CreateTodoDto): Todo{
    const todo = new Todo();
    
    todo.description = description;
    todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;

    this.todos = [...this.todos, todo];

    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOneById(id: number): Todo{
    const todoInstance: Todo = this.todos.find(todo => todo.id === id);

    if(todoInstance)
      return todoInstance;

    throw new NotFoundException(`todo with id ${id} not found`);
  }

  updateTodo(id: number, {description, done}: UpdateTodoDto): Todo{

    const todoToUpdate = this.findOneById(id);

    if(description) todoToUpdate.description = description;
    if(done) todoToUpdate.done = done;

    this.todos.forEach(todo => {
      if(todo.id === id){
        todo = {
          ...todo,
          ...todoToUpdate
        }
      }
    });
    return todoToUpdate;
  }

  deleteTodo(id: number){

    const todo = this.findOneById(id);

    this.todos = this.todos.filter(todo => todo.id !== id);

    return todo;
  }
}
