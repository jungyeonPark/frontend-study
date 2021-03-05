# CSS Grid

CSS Grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공함

- Flexible Box는 단순한 1차원 레이아웃을 위한 것
- 더 복잡한 레이아웃을 위해서는 Grid를 사용

## Grid Properties

Grid는 Flex와 같이 Container(컨테이너)와 Item(아이템)이라는 두 가지 개념으로 구분됨

## Grid Container Properties

Grid Container를 위한 속성들

### display

그리드 컨테이너(Container)를 정의

- 정의된 컨테이너의 자식 요소들은 자동으로 Grid Items(아이템)로 정의됨
- 그리드를 사용하기 위해 컨테이너에 필수로 작성!
- 값
  - grid
    - 의미: Block 특성의 Grid Container를 정의
  - inline-grid
    - 의미: Inline 특성의 Grid Container를 정의

### grid-template-rows

명시적 행(Track)의 크기 및 개수를 정의

- 동시에 라인(Line)의 이름도 정의 가능
- `fr`(fraction, 공간 비율) 단위를 사용 가능
- `repeat()` 함수 사용 가능
- 사용 방법
  ```css
  /* 각 행의 크기를 정의 */
  .container {
    grid-template-rows: 100px 200px;
  }
  /* 동시에 각 라인의 이름도 정의할 수 있음 */
  .container {
    grid-template-rows: [first] 100px [second] 200px [third];
  }
  /* 라인에 중복된 이름을 지정할 수 있음 */
  .container {
    grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];
  }
  ```
- 각 라인은 행과 열의 개수대로 숫자(양수/음수) 라인 이름이 자동으로 지정되어 있어, 꼭 필요한 경우가 아니면 라인 이름을 정의할 필요가 없음

### grid-template-columns

명시적 열(Track)의 크기 및 개수를 정의

- 사용 방법은 `grid-template-rows`와 같음

### grid-template-areas

지정된 그리드 영역 이름(`grid-area`) 이름을 참조해 템플릿 생성

- `grid-area`는 Grid Container가 아닌 Grid Item에 적용하는 속성
- 빈 공간을 정의하고 싶을 때는 .(마침표)를 사용하거나 명시적으로 `none`을 입력해 정의 가능

### grid-template

`grid-template-xxx`(`grid-template-rows`, `grid-template-columns` 그리고 `grid-template-areas`)의 단축 속성

- 사용법
  ```css
  .container {
    grid-template: <grid-template-rows> / <grid-template-columns>;
    grid-template: <grid-template-areas>;
  }
  ```
- 다음과 같이 작성 가능
  ```css
  .container {
    grid-template:
      [1행시작선이름] "AREAS" 행너비 [1행끝선이름]
      [2행시작선이름] "AREAS" 행너비 [2행끝선이름]
      / <grid-template-columns>;
  }
  ```

### row-gap(grid-row-gap)

행과 행 사이의 간격(Gutter)을 지정

- 더 명확하게는 그리드 선(Grid Line)의 크기를 지정한다고 표현 가능
- 사용법
  ```css
  .container {
    row-gap: 크기;
  }
  ```

### column-gap(grid-column-gap)

열과 열 사이의 간격(Gutter)을 정의

- 사용법
  ```css
  .container {
    column-gap: 크기;
  }
  ```

### gap(grid-gap)

각 행과 행, 열과 열 사이의 간격(Gutter)을 지정(`xxx-gap`의 단축 속성)

- 사용법
  ```css
  .container {
    gap: <grid-row-gap> <grid-column-gap>;
  }
  ```
- grid-gap(grid-row-gap, grid-column-gap)의 접두사 grid-는 더 이상 사용되지 않음
- gap(row-gap, column-gap)로 교체됨
- 하지만 일부 버전의 브라우저 지원을 위해 grid- 접두사의 사용을 고려할 수 있음

### grid-auto-rows

암시적인 행(Track)의 크기를 정의

- 아이템(Item)이 `grid-template-rows`로 정의한 명시적 행 외부에 배치되는 경우 암시적 행의 크기가 적용

### grid-auto-columns

암시적인 열(Track)의 크기를 정의

- 아이템(Item)이 `grid-template-columns`로 정의한 명시적 열 외부에 배치되는 경우 암시적 열의 크기가 적용

### grid-auto-flow

배치하지 않음 아이템(Item)을 어떤 방식의 '자동 배치 알고리즘' (정렬 순서)방식을 정의

- 배치한 아이템은 `grid-area`를 사용한 아이템을 의미
- 값
  - row(기본값)
    - 의미: 각 행 축(수평)을 따라 차례로 배치
  - column
    - 의미: 각 열 축(수직)을 따라 차례로 배치
  - row dense(dense)
    - 의미: 각 행 축을 따라 차례로 배치, **빈 영역 메움**!
  - column dense
    - 의미: 각 열 축을 따라 차례로 배치, **빈 영역 메움**!

### grid

`grid-template-xxx`과 `grid-auto-xxx`의 단축 속성

- 사용법
  ```css
  .container {
    grid: <grid-template>;
    grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;
    grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;
  }
  ```
- `grid-auto-flow`를 작성할 때는 `auto-flow` 키워드를 사용
- `/`로 구분해 작성하는 위치가 곧 row, column 값을 의미
- 따라서 row, column 값은 작성하지 말 것
- dense 값은 `auto-flow`뒤에 붙여줌

### align-content

그리드 콘텐츠(Grid Contents)를 수직(열 축) 정렬

- 그리드 콘텐츠의 세로 너비가 그리드 컨테이너(Container)보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 의미: 수직 가운데 정렬
  - end
    - 의미: 끝점(아래쪽) 정렬
  - space-around
    - 의미: 각 행 위아래에 여백을 고르게 정렬
  - space-between
    - 의미: 첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬
  - space-evenly
    - 의미: 모든 여백을 고르게 정렬
  - stretch
    - 의미: 열 축을 채우기 위해 그리드 콘텐츠를 늘림

### justify-content

그리드 콘텐츠를 수평(행 축) 정렬

- 그리드 콘텐츠의 가로 너비가 그리드 컨테이너(Container)보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 의미: 수직 가운데 정렬
  - end
    - 의미: 끝점(아래쪽) 정렬
  - space-around
    - 의미: 각 행 위아래에 여백을 고르게 정렬
  - space-between
    - 의미: 첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬
  - space-evenly
    - 의미: 모든 여백을 고르게 정렬
  - stretch
    - 의미: 열 축을 채우기 위해 그리드 콘텐츠를 늘림

### place-content

`align-content`와 `justify-content`의 단축 속성

- 하나의 값만 입력하면 두 속성에 모두 적용됨
- Edge(IE) 브라우저에서 지원하지 않음
- 사용법
  ```css
  .container {
    place-content: <align-content> <justify-content>;
  }
  ```

### align-items

그리드 아이템(Items)들을 수직(열 축) 정렬

- 그리드 아이템의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 의미: 수직 가운데 정렬
  - end
    - 의미: 끝점(아래쪽) 정렬
  - stretch
    - 의미: 열 축을 채우기 위해 그리드 아이템을 늘림

### justify-items

그리드 아이템들을 수평(행 축) 정렬

- 그리드 아이템의 가로 너비가 자신이 속한 그리드 열(Track)의 크기보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 의미: 수직 가운데 정렬
  - end
    - 의미: 끝점(아래쪽) 정렬
  - stretch
    - 의미: 열 축을 채우기 위해 그리드 아이템을 늘림

### place-items

`align-items`와 `justify-items`의 단축 속성

- 하나의 값만 입력하면 두 속성에 모두 적용됨
- Edge(IE) 브라우저에서 지원하지 않는 속성
- 사용법
  ```css
  .container {
    place-items: <align-items> <justify-items>;
  }
  ```

## Grid Item Properties

Grid Item을 위한 속성들

### grid-row-start, grid-row-end, grid-column-start, gric-column-end

그리드 아이템(Item)을 배치하기 위해 그리드 선(Line)의 '시작 위치'와 '끝 위치'를 지정

- 숫자를 지정하거나, 선 이름을 지정하거나, `span`키워드를 사용
- `span`키워드와 '숫자'를 조합하면 '숫자'만큼 라인을 확장하는 개념
  - 숫자를 명시하지 않으면 `span 1`이 기본값

### grid-row

`grid-row-xxx`(`grid-row-start`, `grid-row-end`)의 단축 속성(행 시작/끝 위치)

- 각 속성을 / 로 구분
- 각 속성에는 음수 값 사용 가능(암시적 행은 불가)
- 사용법
  ```css
  .item {
    grid-row: <grid-row-start> / <grid-row-end>;
  }
  ```

### grid-column

`grid-column-xxx`(`grid-column-start`, `grid-column-end`)의 단축 속성(열 시작/끝 위치)

- 각 속성을 / 로 구분
- 각 속성에는 음수 값 사용 가능(암시적 열은 불가)
- 사용법
  ```css
  .item {
    grid-column: <grid-column-start> / <grid-column-end>;
  }
  ```

### grid-area

영역(Area) 이름을 설정하거나, `grid-row`와 `grid-column`의 단축 속성

- 영역 이름을 설정할 경우 `grid-row`와 `grid-column`개념은 무시됨
- 사용법
  ```
  .item {
    grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>;
    grid-area: 영역이름;
  }
  ```

### align-self

단일 그리드 아이템을 수직(열 축) 정렬

- 그리드 아이템의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 수직 가운데 정렬
  - end
    - 끝점(아래쪽) 정렬
  - stretch
    - 열 축을 채우기 위해 그리드 아이템을 늘림

### justify-self

단일 그리드 아이템을 수평(행 축) 정렬

- 그리드 아이템의 가로 너비가 자신이 속한 그리드 열(Track)의 크기보다 작아야 함
- 값
  - normal(기본값)
    - 의미: `stretch`와 같음
  - start
    - 의미: 시작점(위쪽) 정렬
  - center
    - 수직 가운데 정렬
  - end
    - 끝점(아래쪽) 정렬
  - stretch
    - 열 축을 채우기 위해 그리드 아이템을 늘림

### place-self

`align-self`와 `justify-self`의 단축 속성

- 하나의 값만 입력하면 두 속성에 모두 적용됨
- Edge(IE) 브라우저에서 지원하지 않음
- 사용법
  ```css
  .item {
    place-self: <align-self> <justify-self>;
  }
  ```

### order

그리드 아이템의 배치 순서를 지정

- 숫자가 작을수록 앞에 배치

### z-index

그리드 아이템의 쌓이는 순서를 지정

## Grid Functions

그리드에서 사용하는 주요 함수들

### repeat

`repeat()`함수는 행/열의 크기 정의를 반복

- '반복되는 횟수'와 '행/열의 크기 정의'를 인수로 사용
- `grid-template-rows`와 `grid-template-columns`에서 사용
- 예)
  ```css
  /* 9컬럼 그리드 */
  .container {
    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px;
  }
  .container {
    grid-template-columns: repeat(9, 100px);
  }
  ```

### minmax

`minmax()`함수는 행/열의 '최소/최대 크기'를 정의

- 첫 번째 인수는 '최솟값'이고 두 번째 인수는 '최댓값'
- `grid-template-rows`, `grid-template-columns`, `grid-auto-rows`, `grid-auto-columns`에서 사용
- 일반 요소에 `min-width`와 `max-width` 속성을 동시 지정하는 것과 유사
- 예)
  ```css
  .container {
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 1fr);
  }
  ```
- `minmax()`를 통해 암시적 행/열 크기를 더 유연하게 사용 가능
  ```css
  .container {
    grid-auto-rows: minmax(200px, auto);
    grid-auto-columns: minmax(300px, auto);
  }
  ```

### fit-content

`fit-content()`함수는 행/열의 크기를 그리드 아이템(Item)이 포함하는 내용(Contents) 크기에 맞춤

- '내용의 최대 크기'를 인수로 사용
- `minmax(auto, max-content)`와 유사
- 예)
  ```css
  .container {
    grid-template-columns: fit-content(300px) fit-content(300px);
  }
  ```

## Grid Units

그리드에서 사용하는 주요 단위들

### fr

`fr`(fractional unit)은 **사용 가능한 공간에 대한 비율**을 의미

- 예)
  ```css
  .container {
    grid-template-columns: 1fr 2fr 100px 25%;
  }
  ```

### min-content

그리드 아이템이 포함하는 내용(Contents)의 최소 크기를 의미

- 예)
  ```css
  .container {
    grid-template-columns: min-content 1fr;
  }
  ```
- 한글을 사용하는 경우 `word-break: keep-all;`를 설정해야 정상적으로 동작

### max-content

그리드 아이템이 포함하는 내용(Contents)의 최대 크기를 의미

- 예)
  ```css
  .container {
    grid-template-columns: max-content 1fr;
  }
  ```
- 그리드 함수들과 같이 더 유용하게 활용 가능
  ```css
  .container {
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
  }
  ```

### auto-fill, auto-fit

행/열의 개수를 그리드 컨테이너(Container) 및 행/열 크기에 맞게 자동으로(암시적) 조정함

- `repeat()`함수와 같이 사용하며, 행/열과 아이템(Item) 개수가 명확할 필요가 없거나 명확하지 않음 경우 유용(반응형 그리드)
- 만약 4컬럼 그리드를 고집할 필요가 없다면 다음과 같이 수정 가능
  ```css
  .container {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  ```
  - 이는 컨테이너의 크기가 아이템들을 수용하기 충분하지 않을 경우 아이템을 자동으로 줄바꿈 처리함
  - 그에 맞게 암시적 행/열도 자동으로 수정
- auto-fill과 auto-fit의 차이
  - 그리드 컨테이너가 하나의 행/열에 모든 아이템을 수용하고 **남는 공간이 있을 때** 발생함
  - `auto-fill`은 남는 공간(빈 트랙)을 그대로 유지
  - `auto-fit`은 남는 공간(빈 트랙)을 축소
