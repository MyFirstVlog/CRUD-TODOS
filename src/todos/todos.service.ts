import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {

    private todos: Todos[] = [
        {id: 1, description: "Piedra del alma", done: false},
        {id: 2, description: "Piedra del espacio", done: true},
        {id: 3, description: "Piedra del poder", done: false},
    ];

    findAlll(): Todos[]{
        return this.todos;
    }

    findOne(id: number){
        const todo = this.todos.find(todo => todo.id === id);

        if(!todo) throw new NotFoundException(`Todo with id ${id} not found !!!`);

        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todos{
        const todo = new Todos();

        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        
        this.todos.push(todo);

        return todo;
    }

    update(id: number , updateTodoInput :UpdateTodoInput): Todos {
        
        const todo: Todos = this.findOne(id);

        const {description, done} = updateTodoInput;

        todo.description = description;
        todo.done = done;

        return todo;
    }

}
