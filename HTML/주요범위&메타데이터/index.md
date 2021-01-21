# 블록, 인라인

## 블록 요소

- div, h1, p태그 등
- 최대 가로 너비를 사용
- 크기를 지정할 수 있다
- width: 100%; height: 0; 로 시작
- 수직으로 쌓임
- margin, padding 위, 아래, 좌, 우 사용 가능
- 레이아웃을 잡을 때 유용함

## 인라인 요소

- span, img태그 등
- 필요한 만큼의 가로 너비만 사용
- 크기를 지정할 수 없다
- width: 0; height: 0; 로 시작
- 수평으로 쌓임
  - 태그들을 줄바꿈하지 않고 한 줄에 붙여서 쓰면 요소 사이에 빈칸 없음
  - 태그들을 줄바꿈해서 쓰면 요소 사이에 빈칸이 생김
- margin, padding의 위, 아래는 사용 불가
- 텍스트를 다룰 때 유용함

# 주요 범위

## \<html>

- HTML문서의 범위를 설정
- 속성
  - lang
    - 의미: 문서의 언어(ISO 639-1)
    - 값: ko(한국어), en(영어), ...

## \<head>

- HTML문서의 정보를 설정
- HTML문서의 정보들
  - HTML문서의 제목
  - 스타일(CSS) 직접 입력
  - 스타일(CSS) 외부에서 가져와서 연결
  - 메타 태그(기타 정보들 입력 가능)

## \<body>

- HTML문서의 구조를 설정

# 메타데이터

- 태그가 가지는 모든 속성을 외우려고 하지 말 것!
- 궁금한 태그나 속성에 대해 찾아보려면 <a href="https://developer.mozilla.org/ko/">MDN</a>사이트에서 찾아보기!

## \<title>

- 브라우저의 제목 표시줄이나 페이지 탭에 보여지는 문서의 제목을 설정

## \<meta>

- \<link>, \<style> 등으로 나타낼 수 없는 메타데이터를 나타내기 위해 설정
- 속성
  - charset
    - 의미: 문자인코딩 방식
    - 값: **UTF-8**, EUC-KR, ...
  - name
    - 의미: 메타 데이터의 이름(정보의 종류)
    - 값: author, description, ...
  - http-equiv
    - 의미: 서버/사용자 에이전트의 작동방식 변경에 대한 지시(HTTP 응답 헤더 제공)
    - 값: refresh, X-UA-Compatible
  - content
    - 의미: name, http-equiv의 값
- http-equiv는 주로 다음과 같이 쓰인다
  ```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  ```
  - HTML문서가 IE에서 렌더링 될 때 최신의 IE 렌더링 방법으로 화면에 출력되도록 설정한다는 의미

## \<link>

- 외부 리소스의 연결 및 현재 문서와의 관계를 명시
- HTML, CSS, ICON 등 가져오기
- 속성
  - rel
    - 의미: (필수)현재 문서와 외부 리소스와의 관계
    - 값: stylesheet, icon, ...
  - href
    - 의미: 외부 리소스의 URL
    - 값: URL
  - type
    - 의미: 외부 리소스의 MIME타입
    - 값: text/css, image/x-icon, ...

## \<style>

- 스타일 정보(CSS)를 설정
- 속성
  - type
    - 의미: MIME 타입
    - 기본값: text/css

## \<base>

- HTML문서에 포함된 모든 상대 URL들의 기준 URL을 설정
- 속성
  - href
    - 의미: 기준 URL
    - 값: URL
  - target
    - 의미: A요소처럼 target속성을 사용하는 요소의 기본값
    - 값: \_self, \_blank
    - 기본값: \_self
- base태그는 html문서에서 한번만 가능!
- 모든 상대 경로에 영향을 줘서 주의해야 함(별로 안쓰는 듯)

## MIME 타입

- 문서의 타입 정보를 http헤더에 실어 나르는 방법
- 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작을 결정하기 위해 MIME 타입을 사용
- text, image, audio, video, application타입 존재
- 각각의 타입은 서브타입을 가짐
- 예) text타입 안에 서브타입 text/css, text/html, text/plain 등 존재
