import { CircularQueue } from "./circular-queue";

export class AdacencyMatrix {
  constructor(
    private verticesCount: number,
    private adjMat: number[][] = []
  ) {
    // 모든 인접 행렬의 연결 관계를 0 (false) 로 초기화
    for (let i = 0; verticesCount > i; i++) {
      const tempList: number[] = [];
      for (let x = 0; verticesCount > x; x++) {
        tempList.push(0);
      }
      this.adjMat.push(tempList)
    }
  }

  insertEdge(start: number, end: number) {
    /**
     * 간선을 만들지 못하는 경우
     * 정점의 번호가 그래프의 최대치 보다 클 경우
     */
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

  DepthFirstSearch(value: number, visited: number[] = []): number[] {
    if (value > this.verticesCount) {
      throw new Error();
    }

    // 정점을 방문한 순서를 visited 에 인덱스 순으로 기록
    visited.push(value)
    for (let i = 0; i < this.verticesCount; i++) {
      /**
       * Array.includes 때문에 시간 복잡도가 늘어남.
       * 원래는 인덱스 위치에 boolean 으로 저장해야함 
       */
      if (this.adjMat[value][i] && !visited.includes(i)) {
        return this.DepthFirstSearch(i, visited);
      }
    }

    return visited;
  }

  BreathFirstSearch(value: number) {
    const visited: number[] = [];
    const queue = new CircularQueue<number>(100);

    if (value > this.verticesCount - 1) {
      throw new Error();
    }
    queue.enqueue(value);
    visited.push(value);
    while (!queue.isEmpty()) {
      value = queue.dequeue();
      for (let i = 0; i < this.verticesCount; i++) {
        if (this.adjMat[value][i] && !visited.includes(i)) {
          visited.push(i);
          queue.enqueue(i);
        } 
      }
    }
    return visited;
  }

  returnAdjMat() {
    return this.adjMat;
  }
}