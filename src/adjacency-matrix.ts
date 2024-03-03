export class AdacencyMatrix {
  constructor(
    private verticesCount: number,
    private adjMat: number[][] = []
  ) {
    for (let i = 0; verticesCount > i; i++) {
      for (let x = 0; verticesCount > x; x++) {
        this.adjMat[i][x] = 0;
      }
    }
  }

  insertEdge(start: number, end: number) {
    if (
      start > this.verticesCount ||
      end > this.verticesCount ||
      start === end
    ) {
      throw new Error();
    }

    this.adjMat[start][end] = 1;
    this.adjMat[end][start] = 1;
  }

  printAdjMat() {
    for (let i = 0; this.verticesCount > i; i++) {
      console.log(this.adjMat[i]);      
    }
  }
}