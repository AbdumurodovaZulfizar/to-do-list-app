import {
  expect
} from "@jest/globals";
import {
  describe
} from "yargs";
import todoModel from "../model/todoModel";
const TodoModel = todoModel()

const todo = TodoModel.todo('To-Do', 'high', '10/10/2021', 'Todo Description');

test('should set the title with the given value', () => {
  expect(todo.title).toEqual('To-Do')
})
test('should not be equal to Null', () => {
  expect(todo.title).not.toBeNull()
})
test('should not be equal to Undefined', () => {
  expect(todo.title).not.toBeUndefined()
})
test('should set the priority with the given value', () => {
  expect(todo.priority).toEqual('high')
})
test('should not set the priority as Undefined', () => {
  expect(todo.priority).not.toBeUndefined()
})
test('should not set the priority as Null', () => {
  expect(todo.priority).not.toBeNull()
})
test('should set the date with the given value', () => {
  expect(todo.date).toEqual('10/10/2021')
})
test('should not set the date as Undefined', () => {
  expect(todo.date).not.toBeUndefined()
})
test('should not set the date as Null', () => {
  expect(todo.date).not.toBeNull()
})
test('should set the description with the given value', () => {
  expect(todo.description).toEqual('Todo Description')
})
test('should not set the description as Undefined', () => {
  expect(todo.description).not.toBeUndefined()
})
test('should not set the description as Null', () => {
  expect(todo.description).not.toBeNull()
})
test('should set the isCompleted as false by default', () => {
  expect(todo.isCompleted).toEqual(false)
})
test('should not set the isCompleted as Undefined', () => {
  expect(todo.isCompleted).not.toBeUndefined()
})
test('should not set the isCompleted as Null', () => {
  expect(todo.isCompleted).not.toBeNull()
})