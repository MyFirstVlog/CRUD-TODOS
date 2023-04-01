import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType({description: "all, completed and pending todos"})
export class AggregationsType {

    @Field(() => Int)
    all: number;

    @Field(() => Int)
    completed: number;

    @Field(() => Int)
    pending: number;

    @Field(() => Int, {deprecationReason: "Old measuring method"})
    allTodosNumber: number;
}