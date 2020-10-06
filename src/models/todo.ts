import { getModelForClass, prop } from "@typegoose/typegoose";

class Todo {
  @prop()
  public title?: string;

  @prop()
  public description?: string;
}

const TodoModel = getModelForClass(Todo);

export { Todo, TodoModel };
