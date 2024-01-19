### binary tree array
#### 정의
- [binary tree link](/docs/binary-tree-link.md) 와 같은 자료구조이나 구현 방식이 다름
- Array 로 구현된 이진 트리
- Array 에서 편의상 첫번째 인덱스 (Array[0]) 은 사용하지 않음
- 자식 노드 찾기
  - 왼쪽: i * 2
  - 오른쪽: i * 2 + 1
- 부모 노드 찾기: i / 2
