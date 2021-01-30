# 박스 모델

## width

- 요소의 가로 너비를 지정
- 속성 값
  - 단위: `px`, `em`, `cm` 등 단위로 지정
    - `auto`: 브라우저가 너비를 계산
    - 기본값: `auto`

## height

- 요소의 세로 너비를 지정
- 속성 값
  - 단위: `px`, `em`, `cm` 등 단위로 지정
    - `auto`: 브라우저가 너비를 계산
    - 기본값: `auto`
- 아무것도 들어있지 않은 block요소는 width는 100px, height는 0부터 시작하므로 배경색을 넣어 보고싶으면 height를 늘려야 함
- inline요소는 width는 0, height도 0부터 시작하고 값을 조정할 수 없음

## max-width, min-width

- max-width: 요소의 최대 가로 너비를 지정
  - 속성 값
    - 단위: `px`, `em`, `%` 등 단위로 지정
      - `auto`: 브라우저가 너비를 계산
      - 기본값: `none`
- min-width: 요소의 최소 가로 너비를 지정
  - 속성 값
    - 단위: `px`, `em`, `%` 등 단위로 지정
      - `auto`: 브라우저가 너비를 계산
      - 기본값: `0` (0보다는 작아질 수 없기 때문)

## max-height, min-height

- max-height: 요소의 최대 세로 너비를 지정
  - 속성 값
    - 단위: `px`, `em`, `%` 등 단위로 지정
      - `auto`: 브라우저가 너비를 계산
      - 기본값: `none`
- min-height: 요소의 최소 세로 너비를 지정
  - 속성 값
    - 단위: `px`, `em`, `%` 등 단위로 지정
      - `auto`: 브라우저가 너비를 계산
      - 기본값: `0` (0보다는 작아질 수 없기 때문)

## margin

- 요소의 '외부(바깥) 여백'을 지정
- 단축 속성
  - top, bottom, left, right를 모두 아우르는 속성
- 음수 값을 사용 가능
- 속성 값
  - 단위: `px`, `em`, `cm` 등 단위로 지정
    - `auto`: 브라우저가 너비를 계산
    - `%`: 부모 요소의 **가로 너비**에 대한 비율로 지정
    - 기본값: `0`
- 사용법
  - margin; 위 우 아래 좌; &nbsp; &nbsp; // 시계방향
  - margin: 위 [좌,우] 아래;
  - margin: [위,아래] [좌,우];
  - margin: [위,아래,좌,우];
- 개별 속성
  - margin-top: 요소의 '외부 **위쪽** 여백'을 지정
  - margin-bottom: 요소의 '외부 **아래쪽** 여백'을 지정
  - margin-left: 요소의 '외부 **왼쪽** 여백'을 지정
  - margin-right: 요소의 '외부 **오른쪽** 여백'을 지정
- 마진 중복(병합, Collapse)

  - 마진의 특정 값들이 '중복'되어 합쳐지는 현상

  1. 형제 요소들의 `margin-top`과 `margin-bottom`이 만났을 때
  2. 부모 요소의 `margin-top`과 자식 요소의 `margin-top`이 만났을 때
  3. 부모 요소의 `margin-bottom`과 자식 요소의 `margin-bottom`이 만났을 때

  - '마진 중복'은 버그(오류)가 아님!
    - 현상을 이용하거나 우회할 수 있음
  - 마진 중복 계산법
    - 마진 중복 현상이 발생시, 중복 값을 계산하는 방법
    - 둘다 양수: 더 큰 값으로 중복
    - 둘 다 음수: 더 작은 값으로 중복
    - 각각 양수와 음수: 양수와 음수를 더한 값으로 중복

## padding

- 요소의 '내부(안) 여백'을 지정
- 단축 속성
- 속성 값
  - 단위: `px`, `em`, `cm` 등 단위로 지정
    - `%`: 부모 요소의 너비에 대한 비율로 지정
    - 기본값: `0`
- 사용법(margin과 동일)
  - padding; 위 우 아래 좌; &nbsp; &nbsp; // 시계방향
  - padding: 위 [좌,우] 아래;
  - padding: [위,아래] [좌,우];
  - padding: [위,아래,좌,우];
- 개별 속성
  - padding-top: 요소의 '내부 **위쪽** 여백'을 지정
  - padding-bottom: 요소의 '내부 **아래쪽** 여백'을 지정
  - padding-left: 요소의 '내부 **왼쪽** 여백'을 지정
  - padding-right: 요소의 '내부 **오른쪽** 여백'을 지정
- 크기 증가
  - 추가된 `padding`값만큼 요소의 크기가 커지는 현상
  - padding: 10px 20px;를 가지는 요소의 width와 height를 100px로 만들려면?
    - 직접 계산
      ```css
      .box {
        height: 80px;
        width: 60px;
        padding: 10px 20px;
      }
      ```
    - 자동으로 계산(`box-sizing: border-box;`추가)
      ```css
      .box {
        height: 100px;
        width: 100px;
        padding: 10px 20px;
        box-sizing: border-box;
      }
      ```

## bolder

- 요소의 '테두리 선'을 지정
- 단축 속성
- 속성 값
  - border-width: 선의 두께(너비)
    - 기본값: medium
  - border-style: 선의 종류
    - 기본값: none
  - border-color: 선의 색상
    - 기본값: black
- 사용법
  - border: 두께 종류 색상;
- border가 추가되면 요소의 크기가 border의 크기만큼 늘어남
  - padding과 마찬가지로 `box-sizing: border-box` 사용 가능
- border의 개별 속성은 단축속성이기도 하다(위, 아래, 좌, 우 4면을 가지고 있기 때문)
  - 4개씩 있음(필요할 때 찾아보기)

### border-width: 선의 두께(너비)를 지정

- 속성 값
  - medium(기본값): 중간 두께
  - thin: 얇은 두께
  - thick: 두꺼운 두께
  - 단위: px, em, cm 등 단위로 지정
- 사용법(margin과 동일)
  - border-width; 위 우 아래 좌; &nbsp; &nbsp; // 시계방향
  - border-width: 위 [좌,우] 아래;
  - border-width: [위,아래] [좌,우];
  - border-width: [위,아래,좌,우];

### border-style: 선의 종류를 지정

- 속성 값
  - none(기본값): 선 없음
  - hidder: 선 없음과 동일 `table`요소에서 사용
  - solid: 실선(일반선)
  - dotted: 점선
  - dashed: 파선
  - double: 두줄선
  - groove: 홈이 파여있는 모양(선)
  - ridge: 솟은 모양(선, `groove`의 반대)
  - inset: 요소 전체가 들어간 모양(선)
  - outset: 요소 전체가 나온 모양(선)

### border-color: 선의 색상을 지정

- 속성 값
  - 색상: 선의 색상을 지정
    - 기본값: black
    - `transparent`: 투명한 선(요소의 배경색이 보임)

## box-sizing

- 요소의 크기 계산 기준을 지정
- 속성 값
  - content-box(기본값): 너비(width, height)만으로 요소의 크기를 계산
  - border-box: 너비(width, height)에 안쪽 여백(padding)과 테두리 선(border)를 포함하여 요소의 크기를 계산

## display

- 요소의 박스 타입(유형)을 설정
- 속성 값
  - block: 블록 요소(\<div> 등)
  - inline: 인라인 요소(\<span> 등)
  - inline-block: 인라인-블록 요소(\<input> 등)
    - 기본적으로 inline요소지만 width와 height값을 가질 수 있고 margin과 padding의 위,아래 값도 가질 수 있다
  - 기타: `table`, `table-cell`, `flex` 등
  - ⭐none: 요소의 박스 타입이 없음(요소가 사라짐)

## overflow

- 요소의 크기 이상으로 내용(자식 요소)이 넘쳤을 때, 내용을 어떻게 보여줄건지
- 단축 속성
- 속성 값
  - visible(기본값): 넘친 부분을 자르지 않고 그대로 보여줌
  - hidden: 넘친 부분을 잘라내고, 보이지 않도록 함
  - scroll: 넘친 부분을 잘라내고, 스크롤바를 이용하여 볼 수 있도록 함(무조건 스크롤바 생성)
  - auto: 넘친 부분이 있는 경우만 잘라내고, 스크롤바를 이용하여 볼 수 있도록 함(넘치면 스크롤바 생성)

## opacity

- 요소의 투명도를 지정
- 속성 값
  - 숫자: 0부터 1사이의 소수점 숫자
    - 기본값: 1
- opacity에 값을 0으로 넣으면 요소는 **공간을 차지하지만 안보이게** 되고, display에 값을 none을 넣으면 **아예 공간을 차지하지 않게 됨**
