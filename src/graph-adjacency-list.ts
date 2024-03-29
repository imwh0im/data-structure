import { Node } from "./linked-list"

class GraphNode extends Node<number> {};

export class AdjacencyList {
  constructor() {
    this.adjList.push(null);
  }

  public n: number = 0
  public adjList: (GraphNode | null)[] = [];

  insertVertex() {
    // 전체 정점 수 증가
    this.n++;
    // 간선 배열 초기화
    this.adjList.push(null);
  }

  insertEdge(targetValue: number, linkValue: number) {
    // 파라미터가 최대 정점수보다 크면 에러
    if (targetValue >= this.n || linkValue >= this.n) {
      throw Error();
    }

    const node = new GraphNode(linkValue);
    // 기존에 있던 간선 정보를 저장
    // 새로 추가된 간선을 맨 앞으로 함
    node.next = this.adjList[targetValue];
    // 기존 간선에 Node 업데이트
    this.adjList[targetValue] = node;
  }

  deepFirstSearch() {}

  BreathFirstSearch() {}
}
