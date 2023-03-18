import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOneById(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto){
    return this.todoService.create(createTodoDto);
  }

  @Patch(':id')
  updateTodo(@Param('id', ParseIntPipe)id: number, @Body() updateTodoDto: UpdateTodoDto){
    return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number){
    return this.todoService.deleteTodo(id);
  }

}
