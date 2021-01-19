# 기본 문법과 선택자의 역할

## 기본 문법

- 선택자, 속성, 값이 존재
- 예)
  ```css
  div {
    font-size: 20px;
    color: red;
  }
  ```

## 선택자의 역할

- 선택자는 HTML의 특정한 요소를 선택하는 사인(sign)
- 예)
  - HTML
    ```html
    <div>
      <h1>제목..</h1>
      <p>본문..</p>
    </div>
    ```
  - CSS
    ```css
    h1 {
      color: red;
    }
    p {
      color: blue;
    }
    ```
  - h1, p태그에 빨강, 파랑 글자색을 적용하겠다는 의미
  - h1, p를 선택자로 나타냄

# 속성(Properties)과 값(Value)

- 속성과 값은 글자색은 무엇, 너비는 얼마, 여백은 얼마 같이 스타일을 지정할 때 사용
- HTML의 속성은 attribute, CSS의 속성은 property
- 속성과 값은 많이 아는 것이 중요!

# CSS 선언 방식

- 내가 작성한 CSS코드를 어떻게 HTML에 적용할 수 있을까?

## 태그에 직접 작성하기(인라인)

- HTML태그에 직접 작성하기 때문에 선택자 필요X
- 예)
  ```html
  <div style="color: red;">태그에 직접 작성1</div>
  <div style="color: red;">태그에 직접 작성2</div>
  <div style="color: red;">태그에 직접 작성3</div>
  ```
- 태그에 직접 작성할 때 가장 큰 단점은 적용하고 싶은 태그가 여러개이면 그 태그마다 다 CSS를 작성해줘야 함
  - 만약 적용한 CSS의 값을 나중에 바꾸게 된다면 다 직접 바꿔줘야함..
  - 유지/보수가 어려움

## HTML에 포함하기(내장)

- CSS만 따로 작성해서 선택자 필요
- CSS가 HTML의 \<style>\</style>안에 포함
- \<head>태그 안에 작성
- 예)
  ```html
  <head>
    <style>
      div {
        color: red;
      }
    </style>
  </head>
  <body>
    <div>HTML에 포함1</div>
    <div>HTML에 포함2</div>
    <div>HTML에 포함3</div>
  </body>
  ```

## HTML 외부에서 불러오기

- CSS코드를 완전히 분리 가능
- 분리된 CSS파일을 여러 HTML파일이 불러올 수도 있다!
- \<head>태그 안에서 \<link>태그로 불러옴
- stylesheet는 css를 의미
- 예)
  - HTML
    ```html
    <head>
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <div>HTML에 외부에서 불러오기</div>
    </body>
    ```
  - CSS
    ```css
    div {
      color: red;
    }
    ```

# 선택자

- HTML의 특정한 요소를 선택하는 사인(sign)
- 여러 종류 중 2가지만 알아보자

## 태그

- 선택자를 입력하는 부분에 적용하려는 태그를 입력
- 예)
  - CSS
    ```css
    h1 {
      color: red;
    }
    ```
  - HTML
    ```html
    <h1>제목1</h1>
    <h1>제목2</h1>
    ```
- 만약 제목1에만 색상을 적용하고 싶다면?
- 태그 선택자만 가지고는 어렵다

## 클래스

- 더 명확하게 원하는 요소를 찾기 위해 '클래스 선택자'가 존재
- class라는 HTML 속성에 원하는 별명을 입력
- CSS에서는 이 별명 앞에 .을 붙여서 선택자로 사용 가능
- 예)
  - CSS
    ```CSS
    .title {
        color: red;
    }
    ```
  - HTML
    ```html
    <h1 class="title">제목1</h1>
    <h1>제목2</h1>
    ```

# 속성

- 크기, 여백, 색상 같은 눈에 보이는 스타일을 지정 가능

## 크기

### \- width(가로 너비)

- 요소의 가로 너비를 지정
- 단위는 px(pixels)를 사용
- 대부분의 단위는 px를 사용한다고 보면 됨!
- 예)
  ```css
  div {
    width: 300px;
  }
  ```

### \- height(세로 너비)

- 요소의 세로 너비를 지정
- 예)
  ```css
  div {
    height: 150px;
  }
  ```

## font-size(클자 크기)

- 요소 내용(Text)의 글자 크기를 지정
- 기본값은 16px
- 예)
  ```css
  div {
    font-size: 16px;
  }
  ```

## 여백

### \- margin(요소의 바깥 여백)

- 요소의 바깥 여백을 지정
- 바깥 여백은 요소와 요소 사이의 여백(거리, 공간)을 생성할 때 사용
- 예1)
  ```css
  div {
    margin: 20px;
  }
  ```
- 위 코드에서 margin은 요소의 위, 아래, 좌, 우 모두 20px의 여백을 지정하겠다는 의미
- 단축 속성이라고 함
- 예2)
  ```css
  div {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  ```
- 위 코드는 margin을 위, 아래, 좌, 우를 각각 지정
- 개별 속성이라고 함

### \- padding(요소의 내부 여백)

- 요소의 내부 여백을 지정
- 내부 여백은 자식 요소를 감싸는 여백을 의미
- padding을 사용하면 요소의 원래 크기보다 padding을 적용한 크기만큼 커짐
- margin과 같이 단축, 개별 속성 존재
- 예1)
  ```css
  div {
    padding: 20px;
  }
  ```
- 예2)
  ```css
  div {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  }
  ```

## 색상

### \- color(글자 색상)

- 요소 내용(Text)의 글자 색상을 지정
- font-color, text-color로 많이 실수하지만 그런 속성들은 존재하지 않음!
- 예)
  ```css
  div {
    color: red;
  }
  ```

### \- background(요소 색상)

- 요소의 배경 색상을 지정
- background-color로 지정
- background는 단축 속성, background-color은 개별 속성
- 예)
  ```css
  div {
    background-color: red;
  }
  ```
