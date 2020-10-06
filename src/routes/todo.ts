import express, { Request, Response } from "express";
import { Todo, TodoModel } from "../models/todo";

const router = express.Router();

// Read All
router.get("/todo", async (req: Request, res: Response) => {
  const todos = await TodoModel.find({});
  return res.status(200).send(todos);
});

// Read One
router.get("/todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = await TodoModel.findById(id).exec();
  return res.status(200).send(todo);
});

// Create
router.post("/todo", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const todo = { title, description } as Todo;
  const newTodo = await TodoModel.create(todo);
  return res.status(201).send(newTodo);
});

// Update
router.put("/todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = req.body as Todo;

  const updatedTodo = TodoModel.findByIdAndUpdate(id, todo).exec();
  return res.status(200).send(updatedTodo);
});

// Delete
router.delete("/todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  await TodoModel.findByIdAndDelete(id);
  // TODO: catch errors and return proper status
  return res.status(202);
});

export { router as todoRouter };
