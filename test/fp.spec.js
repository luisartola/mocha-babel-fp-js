import { equal } from "assert";
import procesar from "../src/fp.js";

describe("Programación Funcional", () => {
  it("Procesando arrays", () => {
    equal(procesar([0, 1, 2, 3, 4, 5]), 39);
  });
});