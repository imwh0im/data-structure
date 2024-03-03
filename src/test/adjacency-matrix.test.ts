import { AdacencyMatrix } from "../adjacency-matrix"

describe('adjacency matrix', () => {
  it('case 1', () => {
    const adjMat = new AdacencyMatrix(10);
    adjMat.insertEdge(1, 9);
    adjMat.insertEdge(0, 3);
    adjMat.insertEdge(2, 5);
    adjMat.printAdjMat();
  })
})