import { AdjacencyList } from "../graph-adjacency-list"

describe('graph adjacency list', () => {
  it('case 1', () => {
    const graph = new AdjacencyList();

    graph.insertVertex(); // 0
    graph.insertVertex(); // 1
    graph.insertVertex(); // 2
    graph.insertVertex(); // 3
    graph.insertVertex(); // 4
    graph.insertVertex(); // 5

    graph.insertEdge(0, 1);
    graph.insertEdge(0, 2);
    graph.insertEdge(0, 3);

    graph.insertEdge(1, 4);
    graph.insertEdge(1, 5);

    graph.insertEdge(2, 3);
    graph.insertEdge(2, 5);

    graph.insertEdge(3, 4);

    graph.insertEdge(4, 5);

    let result = graph.getAdjacency(0);

    expect(result.includes(2)).toBe(true);
    expect(result.includes(5)).toBe(false);

    result = graph.getAdjacency(5);

    expect(result.length).toEqual(0);
  })
})