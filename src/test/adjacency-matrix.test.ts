import { AdacencyMatrix } from "../adjacency-matrix"

describe('adjacency matrix', () => {
  it('case 1', () => {
    const adjMat = new AdacencyMatrix(10);
    adjMat.insertEdge(1, 9);
    adjMat.insertEdge(0, 3);
    adjMat.insertEdge(2, 5);
    const adjMatList = adjMat.returnAdjMat();
    expect(adjMatList[1][9]).toEqual(1);
    expect(adjMatList[0][2]).toEqual(0);
  })

  it('DFS', () => {
    const adjMat = new AdacencyMatrix(4);
    adjMat.insertEdge(0, 2);
    adjMat.insertEdge(2, 1);
    adjMat.insertEdge(1, 3);

    const visitedList = adjMat.DepthFirstSearch(0);

    expect(visitedList[0]).toEqual(0);
    expect(visitedList[1]).toEqual(2);
    expect(visitedList[2]).toEqual(1);
    expect(visitedList[3]).toEqual(3);
  });

  it('BFS', () => {
    const adjMat = new AdacencyMatrix(6);

    adjMat.insertEdge(0, 3);
    adjMat.insertEdge(0, 4);
    adjMat.insertEdge(3, 2);
    adjMat.insertEdge(4, 1);
    adjMat.insertEdge(4, 5);

    const visitedList = adjMat.BreathFirstSearch(0);

    expect(visitedList[0]).toEqual(0);
    expect(visitedList[1]).toEqual(3);
    expect(visitedList[2]).toEqual(4);
    expect(visitedList[3]).toEqual(2);
    expect(visitedList[4]).toEqual(1);
    expect(visitedList[5]).toEqual(5);
  })
})