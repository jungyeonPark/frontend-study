# 콘텐츠 구분

- 콘텐츠를 구분하는(영역을 나타내는) 태그는 다 block요소

## \<header>

- 문서의 소개나 탐색을 돕는 헤더를 설정
- 로고, 제목, 검색 등을 포함

## \<footer>

- 문서의 푸터를 설정
- 푸터는 일반적으로 가장 하단에 있는 바
- 작성자 구획, 저작권 데이터, 관련된 문서 등을 포함

## \<h1>~\<h6>

- 6단계의 문서 제목 구현
- 숫자가 낮을수록 높은 단계(중요한)의 제목
- 제목 폰트를 줄이기 위해 사용하면 안된다!!
  - 글자 크기가 브라우저마다 다를 수 있고 크기가 정확하지 않음
  - CSS에서 font-size속성을 사용
- 제목 단계를 건너뛰지 말 것(h1부터 차례대로!)
- h1제목은 한 페이지에 하나만

## \<main>

- body의 주요 컨텐츠를 나타냄
- 한 문서에 하나만 존재
- IE에서 지원되지 않음

## \<article>

- 독립적으로 구분되거나 재사용 가능한 영역을 설정
- 매거진/신문 기사, 블로그 등
- 일반적으로 h1~h6를 포함하여 식별
- 작성일자와 시간을 \<time>의 datetime속성으로 작성
- 애매하다 싶으면 다른 대체 가능한 태그(section, div 등)를 사용하자

## \<section>

- 문서의 일반적인 영역을 설정
- 일반적으로 h1~h6를 포함하여 식별
- article안에 section포함 가능
- 반대로 section안에 article포함도 가능

## \<aside>

- 문서의 별도 콘텐츠(전체적인 컨텐츠에서 벗어난) 설정
- 보통 광고나 기타 링크 등의 사이드바를 설정

## \<nav>

- 다른 페이지 링크를 제공하는 영역을 설정
- navigation, 보통 메뉴, 목차, 색인 등을 설정
- 보통 헤더 안에서 메뉴를 묶을 때 사용
- 메뉴를 나타낼 때 \<ol>, \<ul> 태그로 많이 쓰임

## \<address>

- body, article, footer 등에서 연락처 정보를 제공하기 위해 포함하여 사용

## \<div>

- 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정
- division, 꾸미는 목적으로 사용

# 문자 콘텐츠

## \<ol>, \<ul>, \<li>

- 목록을 설정하는 태그
- \<ol>은 정렬된 목록(Ordered List), \<ul>은 정렬되지 않은 목록(Unordered List)
- \<li>는 \<ol>과 \<ul>의 자식으로 쓰이며 각 항목(List Item)을 나타냄
- \<ol>과 \<ul>은 자식으로 \<li>만 포함 가능
- \<li>는 단독으로 사용할 수 없으며 \<ol>이나 \<ul>에 자식으로 포함되어야 함
- 정렬된 목록\<ol>의 항목 순서는 중요도를 의미할 수 있음
- \<ul>이 \<ol>보다 더 많이 쓰임
- \<ol>과 \<ul>은 block요소
- \<li>는 list-item요소(block요소에 포함되어있는 요소)
- \<ol>의 속성
  - start
    - 의미: 항목에 매겨지는 번호의 시작 값
    - 값: 숫자(Number)
  - type
    - 의미: 항목에 매겨지는 번호의 유형
    - 값: a, A, i, I, 1
- \<li>의 속성
  - value
    - 의미: 항목의 순서를 설정
    - 값: 숫자(Number)
    - 특징: 이하 항목들의 순서가 다시 지정됨

## \<dl>, \<dt>, \<dd>

- \<dl>은 용어와 정의의 쌍들의 영역을 설정
- \<dt>는 용어, \<dd>는 정의를 표시
- 키(key)/값(value) 형태를 표시할 때 유용
- \<dl>은 \<dd>, \<dt>만을 포함해야 함
  - 키와 값 쌍을 묶어 스타일링할 수 없어서 별로 안쓰임(div를 쓰지 못함)
  - 대신 ul태그 안에 li태그로 \<dfn>태그와 \<p>태그를 묶어서 많이 사용
- 3개 다 block요소
- 예)
  ```html
  <dl>
    <dt>Coffee</dt>
    <dd>
      Coffee is a brewed drink prepared from roasted coffee beans, the seeds of
      berries from certain Coffea species.
    </dd>
  </dl>
  ```
- ul태그로 대체 예)
  ```html
  <ul>
    <li>
      <dfn>Coffee</dfn>
      <p>
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
        of berries from certain Coffea species.
      </p>
    </li>
  </ul>
  ```

## \<p>

- 하나의 문장, 문단을 설정(Paragraph)
- 일반적으로 정보통신보조기기 등은 다음 문단으로 넘어갈 수 있는 단축키를 제공
- block요소

## \<hr>

- 문단의 분리(주제에 의한)을 위해 설정(Horizontal Rule)
- 대부분의 경우 수평선(border)으로 표시되나 의미적 관점으로만 사용해야 함
- block요소

## \<pre>

- 서식이 미리 지정된(우리가 html에 작성한 서식) 텍스트를 설정(Preformatted Text)
- 텍스트의 `공백과 줄바꿈을 유지`하여 표시 가능
- 기본적으로 Monospace 글꼴 계열로 표시됨
  - 글자 하나하나 너비가 동일한 글꼴 계열
- 주의할 점은 가독성을 위한 태그 안의 탭(Tab)도 그대로 출력되기 때문에 태그 옆에다 바로 붙여서 써야 함

## \<blockquote>

- 일반적인 인용문을 설정(Block Quotation)
- 속성
  - cite
    - 의미: 인용된 정보의 URL
    - 값: URL
- block요소
