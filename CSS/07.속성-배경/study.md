# background

요소의 배경을 설정(단축 속성)

- 개별 속성

  - background-color
    - 의미: 배경 색상
    - 기본값: transparent
  - background-image
    - 의미: 하나 이상의 배경 이미지
    - 기본값: none
  - background-repeat
    - 의미: 배경 이미지의 반복
    - 기본값: repeat
  - background-position
    - 의미: 배경 이미지의 위치
    - 기본값: 0 0
  - background-attachment
    - 의미: 배경 이미지의 스크롤 여부(특성)
    - 기본값: scroll

- 사용법
  ```css
  background: 색상 이미지경로 반복 위치 스크롤특성;
  ```
  - 속성을 누락하는 것도 가능

## background-color

요소의 배경 색상을 지정(개별 속성)

- 속성 값
  - 색상
    - 의미: 요소의 배경 색상
  - transparent(기본값)
    - 의미: 투명

## background-image

요소의 배경에 하나 이상의 이미지를 삽입(개별 속성)

- 속성 값

  - none(기본값)
    - 의미: 이미지 없음
  - url("경로")
    - 의미: 이미지 경로(URL)

- 사용법
  ```css
  background-image: url("경로");
  ```
- 하나 이상의 배경 이미지를 삽입할 경우 `,`로 구분
  - 먼저 작성된 이미지가 더 위에 쌓임
  - IE8이하 버전에서 사용 불가

## background-repeat

배경 이미지의 반복을 설정(개별 속성)

- 속성 값
  - repeat(기본값)
    - 의미: 배경 이미지를 수직, 수평으로 반복
  - repeat-x
    - 의미: 배경 이미지를 수평으로 반복
  - repeat-y
    - 의미: 배경 이미지를 수직으로 반복
  - no-repeat
    - 반복 없음

## background-position

배경 이미지의 위치를 설정(개별 속성)

- 속성 값

  - %
    - 의미: 왼쪽 상단 모서리는 0% 0%, 오른쪽 하단 모서리는 100% 100%
    - 기본값: 0% 0%
  - 방향
    - 의미: 방향을 입력하여 위치 설정(top, bottom, left, right, center)
  - 단위
    - 의미: px, em, cm 등 단위로 지정

- 사용법
  - 값이 방향일 경우
    ```css
    background-position: 방향1 방향2;
    ```
    - 순서를 뒤바꿀 수 있음
  - 값이 단위(%, px등)일 경우
    ```css
    background-position: X축 Y축;
    ```
    - 순서를 뒤바꿀 수 없음
  - 방향과 값을 혼합해서 사용할 수 있음
    - 혼합해서 사용할 때 방향과 값의 순서에 유의해야 함
    - left와 right는 X축, bottom과 top은 Y축으로 생각

## background-attachment

요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정(개별 속성)

- 속성 값

  - scroll(기본값)
    - 의미: 배경 이미지가 요소를 따라서 같이 스크롤 됨
  - fixed
    - 의미: 배경 이미지가 뷰포트에 고정되어, 요소와 같이 스크롤되지 않음
  - local
    - 의미: 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨

- fixed속성을 이용해서 **Parallax Scrolling**을 구현 가능함!

## background-size

배경 이미지의 크기를 지정

- 속성 값
  - auto(기본값)
    - 의미: 배경 이미지가 원래의 크기로 표시됨
  - 단위
    - p, em, % 등 단위로 지정
    - width height 형태로 입력 가능(E.g. 120px 370px)
    - width만 입력하면 비율에 맞게 지정됨(E.g. 120px)
  - cover
    - 배경 이미지의 크기 비율을 유지하며, **요소의 더 넓은 너비에 맞춰짐**
    - 이미지가 잘릴 수 있음
  - contain
    - 배경 이미지의 크기 비율을 유지하며, **요소의 더 짧은 너비에 맞춰짐**
    - 이미지가 잘리지 않음
