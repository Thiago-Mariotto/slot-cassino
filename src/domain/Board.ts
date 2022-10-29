import BoardPoints from "../types/BoardPoints";
import GameType from "../types/GameTypes";
import Square from "./Square";

export default class Board {
  private xSize: number;
  private ySize: number;
  private game: GameType;
  private totalSquares: number;
  private squares: Square[] = [];
  private actualPoints: BoardPoints[] = [];

  constructor(game: GameType) {
    this.game = game;
    this.xSize = game.xSize;
    this.ySize = game.ySize;
    this.totalSquares = this.xSize * this.ySize;
    this.generateSquares();
  }

  private generateSquares() {
    for (let xAxis = 1; xAxis <= this.xSize; xAxis++) {
      for (let yAxis = 1; yAxis <= this.ySize; yAxis++) {
        this.squares.push(new Square(xAxis, yAxis, this.game.figures));
      }
    }
  };

  public spinSquare() {
    for (let index = 0; index < this.totalSquares; index++) {
      this.squares[index].spinFigure()
    }

    this.checkPoints();
  };

  private checkPoints() {
    console.table(this.squares);
    let rep = [];
    let total = 1;
    for (let i = 0; i < this.squares.length; i++) {
      for (let y = 1; y < this.squares.length; y++) {
        if (this.squares[i].getFigure() === this.squares[y].getFigure()) {
          total += 1;
        }
      }
      if (total > 1) rep.push({ figure: this.squares[i].getFigure(), total: total });
      total = 0;
    }
    this.removeDuplicity(rep);
    this.calculateScore();
  };

  private removeDuplicity(boardPoints: BoardPoints[]) {
    let pointsWithoutDuplicity: BoardPoints[] = [];

    boardPoints.forEach((item) => {
      var duplicated = pointsWithoutDuplicity.findIndex(reduceItem => {
        return item.figure == reduceItem.figure;
      }) > -1;

      if (!duplicated) {
        pointsWithoutDuplicity.push(item);
      }
    });
    console.log('points:', pointsWithoutDuplicity);
    this.actualPoints = pointsWithoutDuplicity;
    return pointsWithoutDuplicity;
  }

  private calculateScore() {
    console.log('+SCORE:', this.actualPoints.filter((i) => i.total >= 8));
  }

  public getSquares() {
    return this.squares;
  };
}