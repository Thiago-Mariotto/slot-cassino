import Square from "../domain/Square";
import { gameMock } from "./mocks/game.mock";

describe('* Square Test', function () {
  test('Deve criar um quadrado', function () {
    const square = new Square(1, 1, gameMock.figures);
    expect(square).toBeDefined();
  });

  test('Deve sortear um número aleátorio entre 0 e 10', function () {
    const square = new Square(1, 1, gameMock.figures);
    const sortedFigure = square.getFigure();
    expect(sortedFigure).toBeGreaterThanOrEqual(0);
    expect(sortedFigure).toBeLessThanOrEqual(10)
  })
});