import Board from "../domain/Board";
import { gameMock } from "./mocks/game.mock";

describe('Board Tests', function () {
  test('Deve ser possível gerar um board 6x5', function () {
    const board = new Board(gameMock);
    expect(board).toBeDefined();
  });

  test('Deve ser possível gerar os quadrados do board 6x5', function () {
    const board = new Board(gameMock);
    const expectTotalGameSquare = gameMock.xSize * gameMock.ySize;
    const boardTotalSquares = board.getSquares().length;
    expect(boardTotalSquares).toBe(expectTotalGameSquare);
  });

  test('Deve ser possível girar os quadrados do jogo', function () {
    const board = new Board(gameMock);
    const firstSpin = board.getSquares();
    //console.table(firstSpin);
    board.spinSquare();
    const secondSpin = board.getSquares();
    //console.table(secondSpin);
    //board.spinSquare();
    //const thirdSpin = board.getSquares();
    //console.table(thirdSpin);
    expect(firstSpin).toBe(secondSpin);
  });

  test.only('Deve pontuar, caso tenha 8 ou mais figuras iguais', function () {
    const board = new Board(gameMock);
    board.spinSquare();
  });
});