# 개요

## 기본 문법

```CSS
선택자 {
    속성: 속성값;
    속성: 속성값;
}
```

- 선택자
  - HTML의 특정한 부분을 검색해서 연결해주는 역할
- 속성과 값
  - 검색된 대상에 지정될 CSS명령
- 주석
  - /\* \*/
  - 문서 내 수정사항이나 설명 등을 작성

## 선언 방식

- 인라인(inline) 방식
  - HTML 태그 내부에 직접 작성하는 방식
- 내장(embedded) 방식
  - HTML 헤드 태그에 \<style>태그를 이용하여 작성하는 방식
- 링크(link) 방식
  - HTML \<link>를 이용하여 외부 문서로 CSS를 불러와서 이용하는 방식
  - \<link>태그 여러개를 불러올 때 거의 동시에 불러오게 됨
- @import 방식
  - CSS @import를 이용하여 외부 문서로 CSS를 불러와 적용하는 방식
  - CSS가 CSS를 가져오는 방식
  - @import로 여러개를 불러올 때 순서대로 불러오게 됨(위에거를 완전히 불러온 다음 다음거를 불러옴)

# 선택자(Selector)

## 기본 선택자

1. 전체 선택자(Universal Selector)

   - (요소 내부의)모든 요소를 선택
   - `*` 로 사용

2. 태그 선택자(Type Selector)

   - 태그 이름이 `E`인 요소 선택
     - `E`는 그냥 기호(element)

3. 클래스 선택자(Class Selector)

   - HTML `class`속성의 값이 `E`인 요소 선택
   - `.E`로 사용
   - 같은 이름으로 여러번 사용 가능

4. 아이디 선택자(ID selector)
   - HTML `id`속성의 값이 `E`인 요소 선택
   - `#E`로 사용
   - `id`속성은 고유해야 함

## 복합 선택자

1. 일치 선택자(Basic Combinator)
   - `E`와 `F`를 동시에 만족하는 요소 선택
   - `EF`로 사용
     - E와 F는 기본 선택자 중 하나
2. 자식 선택자(Child Combinator)
   - `E`의 자식 요소 `F`를 선택
   - `E > F`로 사용
3. 후손(하위) 선택자(Descendant Combinator)
   - `E`의 후손(하위) 요소 `F`를 선택
   - `E F`로 사용
     - 띄어쓰기를 해야 함
   - 자식도 후손에 포함
4. 인접 형제 선택자(Adjacent Sibling Combinator)
   - `E`의 **다음** 형제 요소 `F` **하나만** 선택
   - `E + F`로 사용
5. 일반 형제 선택자(General Sebling Combinator)
   - `E`의 **다음** 형제 요소 `F` **모두** 선택
   - `E ~ F`로 사용

## 가상클래스 선택자(Pseudo-Classes Selectors)

- HOVER
  - `E`에 마우스(포인터)가 올라가 있는 동안에만 `E` 선택
  - `E:hover`로 사용
- ACTIVE
  - `E`를 마우스로 클릭하는 동안에만 `E`선택
  - `E:active`로 사용
- FOCUS
  - `E`가 포커스 된 동안에만 `E` 선택
  - `E:focus`로 사용
  - **대화형 콘텐츠**에서 사용 가능
- HOVER, ACTIVE, FOCUS는 선택자의 특이한 케이스!(이벤트 개념에 가까움)
- FIRST CHILD
  - `E`가 형제 요소 중 첫번째 요소라면 선택
  - `E:first-child`로 사용
- LAST CHILD
  - `E`가 형제 요소 중 마지막 요소라면 선택
  - `E:last-child`로 사용
- NTH CHILD
  - `E`가 형제 요소 중 `n`번째 요소라면 선택
  - `E:nth-child(n)`로 사용
  - `n`키워드 사용 시 `0`부터 해석(Zero-base)
  - `E:nth-child(2n)`
    - 짝수번째 형제 요소만 선택
  - `E:nth-child(n+3)`
    - 세번째 이후의 모든 형제 요소 선택
- XXX-CHILD 주의사항

  - .fruits p:nth-child(1) 로 선택자를 선택했을 때 HTML의 fruits클래스의 첫번째 요소가 p태그가 아니면 **아무것도 선택되지 않음**
    - 오른쪽에서부터 해석하는 것이 정확함
  - .box-group div:first-child 로 선택자를 선택했을 때 HTML의 box-group클래스의 내부 div태그 중 자식을 갖는 태그가 있으면 box-group의 첫번째 자식과 box-group내부 div의 첫번째 자식 **둘 다 선택됨**
    - 후손 선택자가 아닌 자식 선택자를 사용
    - .box-group > div:first-child

- NTH OF TYPE

  - `E`의 타입(태그 이름)과 동일한 타입인 형제 요소 중 `E`가 `n`번째 요소라면 선택
  - `E:nth-of-type(n)`로 사용
  - **태그를 찾는 개념**으로 `E`에다가 클래스 선택자를 사용하면 그 클래스 선택자의 **태그**를 기준으로 찾는데 찾은 태그에 E에 작성한 클래스 선택자가 없으면 아무것도 선택되지 않음

    - 클래스 선택자는 되도록 사용하지 말 것

  - `n`키워드 사용시 `0`부터 해석(Zero-base)

- 부정 선택자(Negation Selector)
  - `S`를 제외한 `E`선택
  - `E:not(S)`로 사용

## 가상요소 선택자(Pseudo-Elements Selectors)

- 가상 요소는 CSS로 HTML에 내용을 삽입하는 것
- 가상 요소는 가상 클래스와 다르게 `::`(콜론 2개) 사용
  - `:`(콜론 1개)로 동작 가능하지만 표준이 아님
- **content속성**을 꼭! 넣어줘야 함
- BEFORE
  - `E` 요소 **내부의 앞**에, 내용(content)을 삽입
  - `E::before`로 사용
- AFTER
  - `E` 요소 **내부의 뒤**에, 내용(content)을 삽입
  - `E::after`로 사용

## 속성 선택자(Attribute Selectors)

- Attribute는 HTML의 속성을 의미
  - CSS의 속성은 Property
- **대괄호**를 사용
- ATTR
  - 속성 `attr`을 포함한 요소 선택
  - `[attr]`로 사용
- ATTR=VALUE
  - 속성 `attr`을 포함하며 속성 값이 `value`인 요소 선택
  - `[attr=value]`로 사용
- ATTR^=VALUE
  - 속성 `attr`을 포함하며 속성 값이 `value`로 **시작하는** 요소 선택
  - `[attr^=value]`로 사용
- ATTR$=VALUE
  - 속성 `attr`을 포함하며 속성 값이 `value`로 **끝나는** 요소 선택
  - `[attr$=value]`로 사용

# 상속(Inheritance)

- 조상 요소에 적용한 스타일이 모든 하위(후손) 요소에도 영향을 미치는 것
- 상속되는 속성이 따로 있다(대부분 글자를 다루는 속성)
- 상속되는 속성들(properties)
  - font
    - font-size, font-weight, font-style, line-height, font-family
  - color
  - text-align
  - text-indent
  - text-decoration
  - letter-spacing
  - opacity
  - 등등...

## 강제 상속

- 원래 상속되지 않는 속성을 강제로 상속되게 만드는 것
- 상속받고 싶은 속성의 값을 `inherit`으로 설정

# 우선순위

- 같은 요소가 여러 선언의 대상이 될 경우, 어떤 선언의 CSS속성(property)을 우선 적용할지 결정하는 방법
- 우선순위에는 '중요도, 명시도, 선언 순서'의 개념 존재
  - 명시도 점수가 높은 선언이 우선(명시도)
  - 점수가 같은 경우, 가장 마지막에 해석(늦게 작성한)되는 선언이 우선(선언 순서)
  - 명시도는 '상속' 규칙보다 우선(중요도)
  - `!important`가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)

1. 가장 중요(`!important`)

   - 모든 선언을 무시하고 **가장 우선**
   - 점수: `∞`pt

   ```css
   div {
     color: red !important;
   }
   ```

2. 인라인 선언 방식(Style Attribute)
   - 인라인 선언(HTML `style`속성을 사용)
   - 점수: `1000`pt
   ```html
   <div style="color:orange;">Hello world!</div>
   ```
3. 아이디(ID Selector)
   - 아이디 선택자
   - 점수: `100`pt
   ```css
   #color_yellow {
     color: yellow;
   }
   ```
4. 클래스(Class Selector)
   - 클래스 선택자
   - 점수: `10`pt
   ```css
   .color_green {
     color: green;
   }
   ```
5. 태그(Type Selector)
   - 태그 선택자
   - 점수: `1`pt
   ```css
   div {
     color: blue;
   }
   ```
6. 전체(Universal Selector)
   - 전체 선택자
   - 점수: `0`pt
   ```css
   * {
     color: darkblue;
   }
   ```
7. 상속(CSS Inheritance)
   - 상속 받은 속성은 항상 우선하지 않음
   - 점수: 계산하지 않음(0점보다 낮음)
   ```css
   body {
     color: violet;
   }
   ```

- `:hover`처럼 '가상 클래스'는 '클래스'선택자의 점수(10pt)를 가지며, `::before`처럼 '가상 요소'는 '태그'선택자의 점수(1pt)를 가집니다. 부정 선택자 `::not()`은 점수를 가지지 않습니다.
- 계산해보기!)
  ```css
  /* 21pt */
  .list li.item {
    color: red;
  }
  /* 21pt */
  .list li:hover {
    color: red;
  }
  /* 11pt */
  .box::before {
    content: "Good ";
    color: red;
  }
  /* 101pt */
  #submit span {
    color: red;
  }
  /* 22pt */
  header .menu li:nth-child(2) {
    color: red;
  }
  /* 1pt */
  h1 {
    color: red;
  }
  /* 10pt */
  :not(.box) {
    color: red;
  }
  /* 1pt */
  :not(span) {
    color: red;
  }
  ```
