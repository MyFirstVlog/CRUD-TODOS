import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { skipUntil } from 'rxjs';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, {name: 'Hello', description: 'Hello world which returns "Hello World" message'})
    helloWorld(): string {
        return "Hola Mundo"
    }

    @Query(() => Int, {name: 'Random', description: 'Random number from 0 to specified number'})
    randomNumbert(@Args('to', {nullable: true ,type: () => Int}) tillNumber: number  = 6): number{
        //* 'to' on @Args() is the one exposed on apollo to wotk with
        return Math.floor(Math.random() * tillNumber);
    }


}
