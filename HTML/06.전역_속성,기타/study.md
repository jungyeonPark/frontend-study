# 전역 속성(Global Attributes)

- 모든 HTML 요소에서 공통적으로 사용 가능한 속성

## class

- 공백으로 구분된 요소의 별칭을 지정
- CSS의 요소 선택기: CSS 선택자
- JavaScript의 요소 선택기: GetElementsByClassName, QuerySelectorAll 등
- 위와 같은 선택기를 통해서 요소를 선택하거나 접근

## id

- 문서에서 **고유**한 식별자(identifier, ID)를 정의
- CSS또는 JS의 요소 선택기를 통해 요소를 선택하거나 접근

## style

- 요소에 적용할 CSS를 선언

## title

- 요소의 정보(설명)을 지정
- 마우스를 가져다 대면 지정한 설명이 나옴

## lang

- 요소의 언어(ISO 639-1)를 지정
- 보통 HTML태그에 설정됨(문서 전체에 한 번만 사용)
  - 다른 언어가 나올 때만 사용
- 예)
  ```html
  <p lang="en">This paragraph is English</p>
  <p lang="ko">이 단락은 한글입니다.</p>
  <p lang="fr">Ce paragraphe est défini en français.</p>
  ```

## data-\*

- 사용자 정의 데이터 속성을 지정
- HTML에 JavaScript에서 이용할 수 있는 데이터(정보)를 저장하는 용도로 사용
- 예)
  - HTML
    ```html
    <!-- data-custom-data-attributes -->
    <div id="me" data-my-name="Heropy" data-my-age="851">Heropy</div>
    ```
  - JavaScript
    ```js
    // dataset.customDataAttributes
    const $me = document.getElementById("me");
    console.log($me.dataset.myName); // "Heropy"
    console.log($me.dataset.myAge); // "851"
    ```
    - HTML에서는 \-(하이픈)으로 작성했지만 JS에서는 CamelCase로 바꿔서 써야 함!

## draggable

- 요소가 Drag and Drop API를 사용 가능한지 여부를 지정
- 예)
  ```html
  <div draggable="true">The element to drag.</div>
  ```
- 기본값은 auto(브라우저가 자동으로 결정)

## hidden

- 요소를 숨김
- 예)
  ```html
  <form id="hidden-form" action="/form-action" hidden>
    <!-- 숨겨진 양식들.. -->
  </form>
  <button form="hidden-form" type="submit">전송</button>
  ```
  - form태그 내부에 양식의 기본값을 주고 전송 버튼을 누르면 값이 눈에 보이지는 않았지만 기본값이 전달된다!

## tabindex

- `Tab`키를 이용해 요소를 순차적으로 포커스 탐색할 순서를 지정
- 대화형 콘텐츠(Interactive Content)는 기본적으로 코드 순서대로 탭 순서가 지정됨
- 비대화형 콘텐츠에 `tabindex="0"`을 지정하여 대화형 콘텐츠와 같이 탭 순서를 사용
- `tabindex="-1"`을 통해 포커스는 가능하지만 탭 순서에서 제외 가능
- `tabindex="1"`이상의 양수 값은 논리적 흐름을 방해하기 때문에 사용을 추천하지 않음
  - 탭 순서가 HTML이 작성된 순서대로 되도록 냅두는게 좋다
- 예)
  ```html
  <h1 tabindex="0">Sign In</h1>
  <label>Username: <input type="text" /></label>
  <label>Password: <input type="password" /></label>
  <label>PS: <input type="text" tabindex="-1" /></label>
  <input type="submit" value="Sign In" />
  ```

# 기타

## 절대 경로와 상대 경로

- 상대경로
  - 현재 위치를 기준으로 하는 경로
  - ./ : 현재 폴더 안에서 찾아라(생략 가능)
  - ../ : 폴더 밖으로 나가서 찾아라
- 절대경로
  - 바뀌지 않는 경로
  - http(https)
  - / (//)

## 주석

- \<!-- -->
- 주석처리 하고 싶은 영역을 드래그하고 ctrl+/ (window의 경우) 를 누르면 주석처리됨
  - 언어에 상관없이 가능

## 특수기호

- 띄어쓰기
  - \&nbsp;
  - space키로 띄어쓰기 여러번 불가능
- html의 태그를 화면에 출력
  - '<'는 \&lt;로, '>'는 \&gt;로 바꾸면 됨
  - ex) \<div>\</div>를 화면에 출력
    - \&lt;div\&gt;\&lt;/div\&gt;
- 다른 기호들은 필요할 때 찾아보기!
