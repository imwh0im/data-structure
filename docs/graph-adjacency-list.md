### graph adjacency list
#### 정의
- 각각의 정점의 인접한 정점들을 연결리스트로 표현 
- 인접 리스트로 그래프를 표현할 때 (무방향), 정점의 수개 n 이고 간선이 e 라면 n 개의 연결 리스트와 n 개의 헤더노드, 2e 개의 노드가 필요
- 간선의 개수가 적은 "희소 그래프" 표현하는 데 "인접 행렬" 보다 유리하다.
- 그래프에서 노드 간 간선 존재 여부를 확인하는 데는 O(n) 의 시간 복잡도
- 특정 정점의 차수를 알기 위해서는 O(n)
  - 해당 정점이 모든 정점과 간선이 있을 수 있으므로
- 전체 간선의 수를 알기 위해서는 O(n+e)