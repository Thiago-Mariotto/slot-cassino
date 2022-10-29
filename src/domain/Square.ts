
export default class Square {
  private xAxis: number;
  private yAxis: number;
  private actualFigure: number;
  private gameFigures: number[];

  constructor(xAxis: number, yAxis: number, gameFigures: number[]) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.gameFigures = gameFigures;
    this.actualFigure = this.randomFigurePosition(this.gameFigures);
  }

  private randomFigurePosition(figure: number[]) {
    return Math.floor(Math.random() * figure.length);
  };

  public getFigure() {
    return this.actualFigure;
  }

  public spinFigure() {
    this.actualFigure = this.randomFigurePosition(this.gameFigures);
  }
}