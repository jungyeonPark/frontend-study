# CSS Flex(Flexible Box)

Flex는 요소의 크기가 불분명하거나 동적인 경우에도 각 요소를 정렬할 수 있는 효율적인 방법을 제공함

- Flex는 2개의 개념으로 나뉨
  - Container
    - Items를 감싸는 부모 요소
    - 각 Item을 정렬하기 위해서 필요
    - `display`, `flex-flow`, `justify-content` 등의 속성을 사용 가능
    - display: flex를 적용하는 곳이라고 생각하면 됨
  - Items
    - `order`, `flex`, `align-self` 등의 속성 사용 가능
  - Container와 Items에 적용하는 속성이 각각 다름

## Flex Container

Flex Container를 위한 속성들

### display

Flex Container를 정의

- 같은 요소의 표시 방법으로 Block이나 Inline이 아닌 Flex(display: flex, display: inline-flex)로 정의
- 값
  - flex
    - 의미: Block 특성(수직 쌓임)의 Flex Container를 정의
  - inline-flex
    - 의미: Inline 특성(수평 쌓임)의 Flex Container를 정의
- 여기서 말하는 수직과 수평 쌓임은 Items가 아니라 Container이다!!
- 두 값의 차이는 내부의 Items에는 영향을 주지 않음

### flex-flow

`flex-direction`과 `flex-wrap`의 단축 속성으로 Flex Items의 주 축(main-axis)를 설정하고 Items의 여러 줄 묶음(줄 바꿈)도 설정

- 사용법
  ```
  flex-flow: 주축 여러줄묶음;
  ```
- 값
  - flex-direction
    - 의미: Items의 주 축(main-axis)을 설정
    - 기본값: row
  - flex-wrap
    - 의미: Items의 여러 줄 묶음(줄 바꿈)을 설정
    - 기본값: nowrap

### flex-direction

Items의 주 축(main-axis)을 설정

- 값

  - row(기본값)
    - 의미: Items를 수평축(왼쪽에서 오른쪽으로)으로 표시
  - row-reverse
    - 의미: Items를 row의 반대 축으로 표시
  - column
    - 의미: Items를 수직축(위에서 아래로)으로 표시
  - column-reverse
    - 의미: Items를 column의 반대 축으로 표시

- 주 축(main-axis)과 교차 축(cross-axis)
  - `row`값은 Items를 수평축으로 표시
    - 주 축: 수평
    - 교차 축: 수직
  - `column`값은 Items를 수직축으로 표시
    - 주 축: 수직
    - 교차 축: 수평
- 시작점(flex-start)과 끝점(flex-end)
  - row와 column 그리고 각각이 reverse인지 아닌지에 따라 달라짐
  - 교차축의 시작점과 끝점은 reverse에 따라 달라지지 않음!

### flex-wrap

Items의 여러 줄 묶음(줄 바꿈) 설정

- 값
  - nowrap(기본값)
    - 의미: 모든 Items를 여러 줄로 묶지 않음(한 줄에 표시)
  - wrap
    - 의미: Items를 여러 줄로 묶음
  - wrap-reverse
    - 의미: Items를 wrap의 역 방향으로 여러 줄로 묶음
- 기본적으로 Items는 한 줄에서만 표시되고 줄바꿈 되지 않음
- 이는 지정된 크기(주 축에 따라 width나 height)를 무시하고 한 줄 안에서만 가변함
- Items를 줄 바꿈 하려면 값으로 wrap을 사용해야 함

### justify-content

주 축(main-axis)의 정렬 방법을 설정

- 값
  - flex-start(기본값)
    - 의미: Items를 시작점(flex-start)으로 정렬
  - flex-end
    - 의미: Items를 끝점(flex-end)으로 정렬
  - center
    - 의미: Items를 가운데 정렬
  - space-between
    - 의미: 시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 균등한 여백을 포함하여 정렬됨
  - space-around
    - 의미: Items를 균등한 여백을 포함하여 정렬

### align-content

교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)

- 주의할 점은 `flex-wrap`속성을 통해 Items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있음
- Items가 한 줄일 경우 `align-items`속성 사용
- 값
  - stretch(기본값)
    - 의미: Container의 교차 축을 채우기 위해 Items를 늘림
  - flex-start
    - 의미: Items를 시작점(flex-start)으로 정렬
  - flex-end
    - 의미: Items를 끝점(flex-end)으로 정렬
  - center
    - 의미: Items를 가운데 정렬
  - space-between
    - 의미: 시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 균등한 여백을 포함하여 정렬됨
  - space-around
    - 의미: Items를 균등한 여백을 포함하여 정렬

### align-items

교차 축(cross-axis)에서 Items의 정렬 방법을 설정(**1줄**)

- 주의할 점은 Items가 `flex-wrap`을 통해 여러 줄(2줄 이상)일 경우에는 `align-content`속성이 우선함
- `align-items`를 사용하려면 `align-content`속성을 기본값(`stretch`)으로 설정해야 함
- 값
  - stretch(기본값)
    - 의미: Container의 교차 축을 채우기 위해 Items를 늘림
  - flex-start
    - 의미: Items를 각 줄의 시작점(flex-start)으로 정렬
  - flex-end
    - 의미: Items를 각 줄의 끝점(flex-end)으로 정렬
  - center
    - 의미: Items를 가운데 정렬
  - baseline
    - 의미: Items를 문자 기준선(문자의 밑부분)에 정렬
- 요소의 height가 적용되어있는 경우 stretch와 flex-start가 동일함

## Flex Items

Flex Items를 위한 속성들

### order

Item의 순서를 설정

- Item에 숫자를 지정하고 숫자가 클수록 순서가 밀림
- 음수 허용
- HTML 구조와 상관없이 순서를 변경 가능
- 값
  - 숫자
    - 의미: Item의 순서를 설정
    - 기본값: 0

### flex

Item의 너비(`flex-grow`, `flex-shrink`, `flex-basis`)를 설정하는 단축 속성

- 값
  - flex-grow
    - 의미: Item의 증가 너비 비율을 설정
    - 기본값: 0
  - flex-shrink
    - 의미: Item의 감소 너비 비율을 설정
    - 기본값: 1
  - flex-basis
    - 의미: Item의 (공간 배분 전) 기본 너비 설정
    - 기본값: auto(개별 속성의 기본값)
- 사용법
  ```
  flex: 증가너비 감소너비 기본너비;
  ```
- 주의할 점은 단축 속성에서의 `flex-basis`의 기본값은 **0**이다!

### flex-grow

Item의 증가 너비 비율을 설정

- 숫자가 크면 더 많은 너비를 가짐
- Item이 가변 너비가 아니거나, 값이 0일 경우 효과X
- 값
  - 숫자
    - 의미: Item의 증가 너비 비율을 설정
    - 기본값: 0
- 모든 Items의 총 증가 너비(`flex-grow`)에서 각 Item의 증가 너비의 비율 만큼 너비를 가질 수 있음
- 예를 들어 Item이 3개이고 증가 너비가 각각 1, 2, 1이면
  - 첫 번째 Item은 총 너비의 25%(1/4)
  - 두 번째 Item은 총 너비의 50%(2/4)
  - 세 번째 Item은 총 너비의 25%(1/4)를 가지게 됨
- 각각의 Item들이 기본 너비를 가지고 있으면 비율이 완벽하게 일치하지 않음

### flex-shrink

Item의 감소 너비 비율을 설정

- 숫자가 크면 더 많은 너비가 감소
- Item이 가변 너비가 아니거나, 값이 0일 경우 효과X
- 값
  - 숫자
    - 의미: Item의 감소 너비 비율을 설정
    - 기본값: 1
- 감소 너비(`flex-shrink`)는 요소의 너비에 영향을 받기 때문에 계산하기 까다로움(`flex-grow`도 마찬가지)
- 영향을 받는다는 요소의 너비는 `width` `height`, `flex-basis`등으로 너비가 지정된 경우를 의미
- Container의 너비가 줄어 Items의 너비에 영향을 미칠 경우, 영향을 미치기 시작한 지점부터 줄어든 거리 만큼 감소 너비 비율에 맞게 Item의 너비가 줄어듦
- 예를 들어 Container의 너비가 줄어 Item의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 90px일 때 요소 너비가 같은 Item이 2개이고 지정된 감소 너비가 각각 2와 1이라면 감소 너비는 2:1비율이며
  - 첫 번째 Item은 90px의 2/3인 60px 만큼 너비가 감소
  - 두 번째 Item은 90px의 1/3인 30px 만큼 너비가 감소

### flex-basis

Item의 (공간 배분 전) 기본 너비 설정

- 값이 `auto`일 경우 `width`, `height` 등의 속성으로 Item의 너비를 설정할 수 있음
- flex-basis의 값이 주어질 경우 `width`, `height` 등의 속성으로 설정 불가
- 값
  - auto(기본값)
    - 의미: 가변 Item과 같은 너비
  - 단위
    - 의미: px, em, cm 등 단위로 지정
- `flex`속성에서 설명한 것 같이 단축 속성 내에서 `flex-basis`를 생략하면 값이 0이 되는 것을 주의
- `flex-grow`에 맞게 증가시키고 싶으면 `flex-basis`를 0으로 설정

### align-self

교차 축(cross-axis)에서 개별 Item의 정렬 방법을 설정

- `align-items`는 Container 내 모든 Items의 정렬 방법을 설정했었음
- 필요에 의해 일부 Item만 정렬 방법을 변경할 경우 `align-self`사용 가능
- 이 속성은 `align-items` 속성보다 우선함
- 값
  - auto(기본값)
    - 의미: Container의 `align-items`속성을 상속받음
  - stretch
    - 의미: Container의 교차 축을 채우기 위해 Item을 늘림
  - flex-start
    - 의미: Item을 각 줄의 시작점(flex-start)으로 정렬
  - flex-end
    - 의미: Item을 각 줄의 끝점(flex-end)으로 정렬
  - center
    - Item을 가운데 정렬
  - baseline
    - Item을 문자 기준선에 정렬

# 참고

https://heropy.blog/2018/11/24/css-flexible-box/
