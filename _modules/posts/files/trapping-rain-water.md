---
title: "[알고리즘] leetcode 42 빗물 트래핑"
date: "2022-09-15"
---

### ref:

- [https://www.youtube.com/watch?v=ZI2z5pq0TqA&t=324s](https://www.youtube.com/watch?v=ZI2z5pq0TqA&t=324s)

### idea:

- 배열은 기둥을 의미함.
- 배열의 값을 기둥으로 세운 구조에서 채울 수 있는 물의 양을 구해라.
- 양 끝은 물을 가둘 기둥이 없으니 스킵.
- 즉, 감싸일 수 있어야 함.
- 이걸 결정하는 알고리즘
  - ‘현재칸'을 감싸고 있는 왼쪽, 오른쪽의 가장 큰 기둥의 높이 중 작은 쪽을 기준으로 함.
  - 기준 높이 - ‘현재칸' 의 높이 가 양수일 경우 그 값만큼 물을 가둘 수 있음.
  - 예를 들어, `[1,0,2,1,0,3]` 인 경우 현재칸이 ‘2’ 일 때 왼쪽은 1, 오른쪽은 3. 기준값은 1이 됨. 그러면 `1 - 2 = -1` 로, 음수가 되니까 제외.
- 정리하자면 `min(max_of_l, max_of_r) - h[i]` 가 가둘 수 있는 물의 양을 결정하는 알고리즘.

### 코드

- 시간 초과

  ```python
  class Solution:
      def trap(self, height: List[int]) -> int:
          result = 0

          for i in range(len(height)):
              if i != 0 and i != len(height) - 1:
                  max_of_l = max(height[:i])
                  max_of_r = max(height[i:])
                  value = min(max_of_l, max_of_r) - height[i]
                  if value > 0:
                      result += value

          return result
  ```

- 스캔하고 기록 - 통과

  - 매번 max 로 조회하지 말고 한번 훑으면서 기록하자.
  - 다시 한번 배열을 순회하면서 인덱스를 통해 계산

  ```python
  class Solution:
      def trap(self, height: List[int]) -> int:
          result = 0

          l, r = collections.deque(), collections.deque()

          for i in range(len(height)):
              maxL = max(0 if i == 0 else l[-1], height[i])
              maxR = max(0 if i == 0 else r[0], height[-1-i])
              l.append(maxL)
              r.appendleft(maxR)

          for i in range(len(height)):
              value = min(l[i], r[i]) - height[i]
              if value > 0:
                  result += value

          return result
  ```

- 투 포인터

  - 배열 처음과 끝에 포인터를 잡음
  - 각 포인터를 배열 처음과 끝의 각 값으로 초기화함.
    - maxL = h[0], maxR = h[-1]
  - 둘 중 더 작은쪽을 한칸 움직임
  - 움직인 위치의 값과 비교할 기준 값은 그 상태의 maxL 또는 maxR 임. maxL 을 한칸 움직인 상태라면 maxL 이 기준값이 됨.
    - maxL - h[i]
    - 오른쪽의 정확한 최댓값을 모르는 상태인데 그래도 계산이 되는 이유
      - 트래핑할 빗물을 알아내는 알고리즘에서 필요한 정보는 L 과 R 중 작은 값임.
      - maxL 이 한칸 움직였다는 것은 maxL 이 더 작은 값이라는 뜻. 그러니까 그 값이 바로 원하는 기준값. 그렇기 때문에 이때 알지 못하는 다른 오른쪽의 값들은 의미가 없음.
      - 반대로도 마찬가지
      - 양쪽의 값이 같아도 괜찮음. 양쪽 어느쪽이든 작은쪽이면 되는데 둘 다 같으므로 둘 중 어느쪽을 사용해도 원하는 기준값에 부합함.
  - 생각의 포인트는 왼쪽이든 오른쪽이든 작은쪽을 선택하면 된다는 것.

  - 코드1

    - max 값과 max index 를 둘 다 가지고 계산함.
    - 뭔가 줄일 수 있을 것 같은데 일단 여기까지.
    - 확실히 빨라졌다.

    ```python
    from typing import List

    class Solution:
        def trap(self, height: List[int]) -> int:
            result = 0
            maxL, maxR = height[0], height[len(height) - 1]
            left, right = 0, len(height) - 1

            while left < right:
                value = 0
                if maxL < maxR:
                    left += 1
                    value = maxL - height[left]
                    maxL = max(maxL, height[left])
                else:
                    right -= 1
                    value = maxR - height[right]
                    maxR = max(maxR, height[right])

                if value > 0:
                    result += value


            return result

    print(Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]))
    ```

    - 코드2

      - left, right, maxL, maxR 을 뭔가 줄일 수 있지 않을까 싶었는데 둘 다 필요하긴 하다.
      - 포인터가 옮겨져도 값은 바뀌지 않을 수 있으므로.
      - 수정사항
        - height 가 없는 경우에는 0을 리턴하는 코드 추가.
        - maxL, maxR 초기 인덱스를 선언한 left, right 변수로 사용.

      ```python
      from typing import List

      class Solution:
          def trap(self, height: List[int]) -> int:
              result = 0
              left, right = 0, len(height) - 1
              maxL, maxR = height[left], height[right]

              while left < right:
                  value = 0
                  if maxL < maxR:
                      left += 1
                      value = maxL - height[left]
                      maxL = max(maxL, height[left])
                  else:
                      right -= 1
                      value = maxR - height[right]
                      maxR = max(maxR, height[right])

                  if value > 0:
                      result += value


              return result

      print(Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]))
      ```

### 정리

- 포인트는 정확히 필요한 알고리즘이 무엇인지 파악하고 거기에 필요한 요소가 무엇인지 아는 것.
  - 알고리즘: `(왼쪽, 오른쪽 중의 작은 값) - (현재 높이)`
  - 필요한 요소: `(왼쪽, 오른쪽 중의 작은 값)`, `(현재 높이)`
