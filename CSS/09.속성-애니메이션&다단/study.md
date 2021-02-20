# animation

요소에 애니메이션을 설정/제어(단축 속성)

- 값

  - animation-name
    - 의미: `@keyframes`규칙의 이름을 지정
    - 기본값: none
  - animation-duration
    - 의미: 애니메이션의 지속시간 설정
    - 기본값: 0s
  - animation-timing-function
    - 의미: 타이밍 함수 지정
    - 기본값: ease
  - animation-delay
    - 의미: 애니메이션의 대기 시간 설정
    - 기본값: 0s
  - animation-iteration-count
    - 의미: 애니메이션의 반복 횟수 설정
    - 기본값: 1
  - animation-direction
    - 의미: 애니메이션의 반복 방향 설정
    - 기본값: noramal
  - animation-fill-mode
    - 의미: 애니메이션의 전후 상태(위치) 설정
    - 기본값: none
  - animation-play-state
    - 의미: 애니메이션의 재생과 정지 설정
    - 기본값: running

- 사용법
  ```
  animation: 애니메이션이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지];
  ```

## @keyframes

2개 이상의 애니메이션 중간 상태(프레임)을 지정

- 퍼센트를 이용해서 지정
- transition은 0%와 100%만 지정이 가능하지만 keyframes 규칙을 이용하면 0%와 100% 사이 다른 값도 지정 가능

## animation-name

@keyframes규칙(애니메이션 프레임)의 이름을 지정(개별 속성)

- 값
  - none(기본값)
    - 의미: 애니메이션을 지정하지 않음
  - @keyframes 이름
    - 의미: 이름이 일치하는 @keyframes규칙의 애니메이션을 적용

## animation-duration

애니메이션의 지속 시간 설정(개별 속성)

- 값
  - 시간
    - 의미: 지속 시간을 설정
    - 기본값: 0s

## animation-timing-function

타이밍 함수(애니메이션 효과를 계산하는 방법) 지정(개별 속성)

- transition-timing-function과 동일
- 값
  - ease(기본값)
    - 의미: 빠르게-느리게
    - Cubic Bezier값: cubic-bezier(.25, .1, .25, 1)
  - linear
    - 의미: 일정하게
    - Cubic Bezier값: cubic-bezier(0, 0, 1, 1)
  - ease-in
    - 의미: 느리게-빠르게
    - Cubic Bezier값: cubic-bezier(.42, 0, 1, 1)
  - ease-out
    - 의미: 빠르게-느리게
    - Cubic Bezier값: cubic-bezier(0, 0, .58, 1)
  - ease-in-out
    - 의미: 느리게-빠르게-느리게
    - Cubic Bezier값: cubic-bezier(.42, 0, .58, 1)
  - cubic-bezier(n, n, n, n)
    - 의미: 자신만의 값을 정의(0~1)
  - steps(n)
    - n번 분할된 애니메이션

## animation-delay

애니메이션의 대기 시간 설정(개별 속성)

- 값
  - 시간
    - 의미: 대기 시간을 설정
    - 기본값: 0s
- 음수가 허용됨
- 음수가 있을 경우 애니메이션은 바로 시작되지만, 그 값만큼 애니메이션이 앞서 시작(애니메이션 주기 도중에 시작)
- 단축 속성(animation)으로 사용할 때 duration뒤에만 있으면 됨

## animation-iteration-count

애니메이션의 반복 횟수를 설정(개별 속성)

- 값
  - 숫자
    - 의미: 반복 횟수를 설정
    - 기본값: 1
  - infinite
    - 의미: 무한 반복

## animation-direction

애니메이션의 반복 방향을 설정(개별 속성)

- 값
  - normal(기본값)
    - 의미: 정방향만 반복
  - reverse
    - 의미: 역방향만 반복
  - alternate
    - 의미: 정방향에서 역방향으로 반복(왕복)
  - alternate-reverse
    - 의미: 역방향에서 정방향으로 반복(왕복)
- alternate를 사용할 때는 iteration count가 2번(왔다 갔다) 필요

## animation-fill-mode

애니메이션의 전후 상태(위치)를 설정(개별 속성)

- 값
  - none(기본값)
    - 의미: 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 기존 위치에서 끝
  - forwards
    - 의미: 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 애니메이션 끝 위치에서 끝
  - backwards
    - 의미: 애니메이션 시작 위치에서 시작 -> 동작 -> 기존 위치에서 끝
  - both
    - 의미: 애니메이션 시작 위치에서 시작 -> 동작 -> 애니메이션 끝 위치에서 끝

## animation-play-state

애니메이션의 재생과 정지를 설정(개별 속성)

- 값
  - running(기본값)
    - 의미: 애니메이션을 동작
  - paused
    - 의미: 애니메이션 동작을 정지

# Multi-Columns

일반 블록 레이아웃을 확장하여 여러 텍스트 다단으로 쉽게 정리하며, 가독성 확보

## columns

다단을 정의(단축 속성)

- 값

  - auto(기본값)
    - 의미: 브라우저가 단의 너비와 개수를 설정
  - column-width
    - 의미: 단의 최적 너비를 설정(개별 속성)
  - column-count
    - 의미: 단의 개수를 설정(개별 속성)

- column-width

  - 값
    - auto(기본값)
      - 의미: 브라우저가 단의 너비를 설정
    - 단위
      - 의미: px, em, cm 등 단위로 지정
  - 각 단이 줄어들 수 있는 최적 너비(최소 너비)를 설정하며, 요소의 너비가 가변하여 하나의 단이 최적 너비보다 줄어들 경우 단의 개수가 조정됨

## column-gap

단과 단 사이의 간격 설정

- 값
  - normal(기본값)
    - 의미: 브라우저가 단과 단 사이의 간격을 설정(1em)
  - 단위
    - 의미: px, em, cm 등 단위로 지정

## column-rule

단과 단 사이의 (구분)선을 지정(단축 속성)

- 값
  - column-width
    - 의미: 선의 두께를 지정
    - 기본값: medium
  - column-style
    - 의미: 선의 종류를 지정
    - 기본값: none
  - column-color
    - 의미: 선의 색상을 지정
    - 기본값: 요소의 글자색과 동일
- 구분선(column-rule)은 단과 단 사이의 간격 중간에 위치
- border과 값이 같음
- 단축 속성으로 사용할 때 column-color을 따로 지정하지 않으면 기본 색상인 검정으로 나오는데, color로 글자 색상을 지정하면 구분선의 색상도 변경됨
- color속성의 색으로 바뀌는 것을 원하지 않으면 색을 지정해줘야 함
