# 기본 문법

## 태그

- 태그는 각자의 의미를 가지며 다음과 같은 형태
  ```html5
  <TAG></TAG>
  <TAG>CONTENT</TAG>
  ```
- 열리고 닫히는 구조를 가짐
- 이 구조는 태그의 범위를 만들어 줌
- 닫히는 태그는 태그 이름 앞에 '/'(슬래시)가 붙음

# 속성(Attributes)와 값(Value)

- 태그의 기능을 확장하기 위해 '속성' 사용 가능34ㅎ
  ```html5
  <TAG 속성="값"></TAG>
  ```
- 예)
  ```html5
  <img src="./my_photo.jpg" alt="내 프로필 사진" >
  ```
  - img태그는 사진을 삽입하는 태그
  - 하지만 img태그만 사용하면 어떤 사진을 삽입하는지 알 수 없음
  - src(source)라는 속성을 사용해서 삽입할 이미지의 경로를 지정
  - alt(alternative)속성은 이미지를 출력하지 못하는 상황에 이미지 대신 보여질 대체 텍스트를 지정

# 부모 요소(Parent Element), 자식 요소(Child Element)

- 태그A가 태그B의 콘텐츠로 사용되면, 태그B는 태그A의 부모 요소, 태그 A는 태그B의 자식 요소

  ```html5
  <PARENT>
      <CHILD></CHILD>
  </PARENT>
  ```

- 예)
  ```html5
  <section class="fruits">
      <h1>과일 목록</h1>
      <ul>
          <li>사과</li>
          <li>딸기</li>
          <li>바나나</li>
          <li>오렌지</li>
      </ul>
  </section>
  ```
- \<section>은 \<h1>과 \<ul>의 부모 요소
- \<h1>과 \<ul>은 \<section>의 자식 요소
- \<ul>은 \<section>의 자식이면서 \<li>의 부모 요소
- 이처럼 부모와 자식 요소는 상대적인 개념
- \<section>은 \<li>의 조상(상위) 요소, \<li>는 \<section>의 후손(하위) 요소
- 추후 선택자(Selector)를 통해 CSS와 JS로 HTML을 다룰 때 중요!

# 빈 태그(Empty tag)

- HTML에는 닫히는 개념이 없는 태그들이 존재

  ```html5
  <!-- '/'가 없는 빈 태그 -->
  <TAG>

  <!-- '/'가 있는 빈 태그 -->
  <TAG />
  ```

- HTML5에서는 2가지 형태 다 사용 가능
- XHTML이나 린트(Lint) 환경 혹은 프레임워크 세팅에 따라 '/'를 사용하는 것이 필수가 될 수 있음
- 원하는 형태를 사용하되 섞어쓰지는 말자!

# HTML문서의 범위를 나타내는 태그

```html5
<!DOCTYPE html>
<html>
    <head>
        문서의 정보
    </head>
    <body>
        문서의 구조
    </body>
</html>
```

## HTML(전체 범위)

- \<html>은 HTML 문서의 전체 범위를 지정
- 웹 브라우저가 해석해야 할 HTML문서의 시작과 끝을 알려줌

## HEAD(정보 범위)

- 웹 브라우저가 해석해야 할 HTML문서의 정보 범위를 지정
- 정보는 웹 페이지의 제목, 웹 페이지의 문자 인코딩 방식, 연결할 외부 파일의 위치, 웹 페이지를 구조화하기 위한 기본 세팅 값 등을 의미
- 화면을 구성하기 위한 기본 설정

## BODY(구조 범위)

- 웹 브라우저가 해석해야 할 HTML 문서의 구조 범위 지정
- 구조는 사용자가 화면을 통해 볼 수 있는 내용(콘텐츠)의 형태나 레이아웃 등을 의미
- 로고, 헤더, 푸터, 네비게이션, 메뉴, 버튼, 입력창, 팝업, 광고 등 보이는 모든 것들
- 구조는 BODY 범위 안에서만 생성

## DOCTYPE(DTD, 버전 지정)

- DOCTYPE(DTD, Type Definition)은 마크업 언어에서 문서 형식을 정의
- 웹 브라우저가 어떤 HTML 버전의 해석 방식으로 구조화할지 알려줌
- 현재 표준 모드는 HTML

# HEAD 태그(TITLE, META, LINK, STYLE, SCRIPT)

- \<head>태그 안에서 사용하는 태그들은 HTML 문서의 정보를 가짐

## TITLE(웹 페이지의 제목)

- HTML 문서의 제목을 정의
- 웹 브라우저의 사이트 탭에서 이름으로 표시

```html5
<head>
    <title>네이버</title>
</head>
```

## META(웹 페이지의 정보)

- HTML 문서(웹페이지)에 관한 정보(표시 방식, 제작자(소유자), 내용, 키워드 등)을 검색엔진이나 브라우저에 제공
- 빈(Empty) 태그

```html5
<head>
    <meta charset="UTF-8">
    <meta name="author" content="홍길동">
    <meta name="description" content="우리 사이트가 최고!">
</head>
```

- \<meta>에서 사용할 수 있는 속성
  - charset
    - 의미: 문자 인코딩 방식
    - 값: UTF-8, EUC-KR 등
  - name
    - 의미: 검색엔진 등에 제공하기 위한 정보의 종류(메타 데이터)
    - 값: author, description, keywords, viewport 등
  - content
    - 의미: name이나 http-equiv속성의 값을 제공

## LINK(CSS 불러오기)

- 외부 문서를 연결할 때 사용
- 특히 외부에서 작성된 CSS 문서를 불러와 연결할 때 사용
- 빈(Empty) 태그

```html5
<head>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="icon" href="./favicon.png">
</head>
```

- \<link>태그에서 사용할 수 있는 속성
  - rel
    - 의미: (필수)현재 문서와 외부 문서와의 관계를 지정
    - 값: stylesheet, icon 등
  - href
    - 의미: 외부 문서의 위치를 지정
    - 값: 경로

## STYLE(CSS 작성하기)

- CSS를 외부 문서에서 작성하여 연결하는 것이 아니고 HTML 문서 내부에 작성할 때 사용

```html5
<style>
    img {
        width: 100px;
        height: 200px;
    }
    p {
        font-size: 20px;
        font-weight: bold;
    }
</style>
```

## SCRIPT(JS 불러오거나 작성하기)

- JS는 \<script>\</script>로 외부 문서를 불러오거나 HTML 내부에 작성이 가능함

```html5
<!-- 불러오기 -->
<script src="./js/main.js></script>

<!-- 작성하기 -->
<script>
    function windowOnClickHandler(event) {
        console.log(event);
    }
    window.addEventListener('click', windowOnClickHandler);
</script>
```

# BODY 태그(div, image), 웹 표준 검사

- \<body> 태그 안에서 사용하는 태그들은 HTML 문서의 구조를 나타냄

## DIV(막 쓰는 태그)

- \<div>\</div>의 'div'는 'division'으로 분할을 뜻하고 '문서의 부분이나 섹션을 정의'함
- 명확한 의미를 가지지 않음
- 단순히 특정 범위를 묶는(wrap)용도로 사용
- 보통 이렇게 묶인 부분들에 CSS나 JS를 적용

```html5
<body>
    <div>
        <p></p>
    </div>
    <div>
        <div>
            <h1></h1>
            <p></p>
        </div>
    </div>
</body>
```

## IMG(이미지 넣는 태그)

- \<img>는 HTML에 이미지를 삽입할 때 사용
- 웹 페이지에 이미지를 삽입하는 방식
  1. HTML에서 삽입(IMG)
  2. CSS에서 삽입(background)
- \<img>태그의 속성들
  - src
    - 의미: (필수)이미지의 URL
    - 값: URL
  - alt
    - 의미: (필수)이미지의 대체 텍스트(alternate)를 지정
- alt 속성이 누락되어도 이미지를 표시하는 데에는 문제가 없지만 웹 표준에 어긋남!

## 웹 표준 검사하기

- 작성한 HTML문서가 표준에 부합하는지 테스트 가능
- https://validator.w3.org/#validate_by_upload 에 접속하여 작성한 HTML문서를 업로드하고 테스트
- 사이트 주소로도 검사 가능
- 테스트 통과가 웹 표준/웹 접근성의 준수 여부를 최종적으로 결정하진 않음
- 기본 문법 검사에 가깝다!
