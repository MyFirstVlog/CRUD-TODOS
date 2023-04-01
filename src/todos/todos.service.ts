import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todos } from './todos.entity';
import { StatusArgs } from './dto/args/status-todos.args';

@Injectable()
export class TodosService {

    private todos: Todos[] = [
        {id: 1, description: "Piedra del alma", done: false},
        {id: 2, description: "Piedra del espacio", done: true},
        {id: 3, description: "Piedra del poder", done: false},
    ];

    findAll(statusArgs: StatusArgs): Todos[]{
        
        const {status} = statusArgs;
        if(status === undefined) return this.todos;

        return this.todos.filter(todo => todo.done === status);
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

        if(description) todo.description = description;
        if(done !== undefined) todo.done = done;

        return todo;
    }

    remove(id: number){
        const todo = this.findOne(id);

        this.todos = this.todos.filter(todo => todo.id !== id);

        return todo;
    }

}
