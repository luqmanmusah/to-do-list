/* eslint-disable import/named */
/* eslint-disable quotes */
import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { displayTasks } from './tests-files/index.js';
import { tasks } from "./tests-files/add_remove.js";

displayTasks();

describe("Functions for testing clear all completed", () => {
  test("parses the tasks list to the clear function", () => {
    const btn = global.document.getElementById("clear-btn");
    fireEvent.click(btn);
    setTimeout(500, () => {
      expect(tasks).not.toBe(tasks);
    });
  });
});