### binary search tree array
#### 정의
- binary search tree 는 탐색/삭제/삽입의 시간 복잡도가 O(log2n) 으로 일반적인 트리에 (O(n)) 비해 성능이 월등
- 하지만 array 로 이를 표현하면, 코드의 복잡도와 성능의 조금은 문제가 있다.
- 일반적으로 linked 된 데이터로 표현을 한다.
- 최악의 경우 한쪽으로 치우친 "경사 이진 트리" 에 경우 O(n) 의 복잡도가 발생할 수 있지만, 이를 예방하기 위해 **AVL 트리** 같은 기법들이 있다.