# CSS Reset

- 브라우저마다 출력되는 스타일이 다름
- html의 헤드에 내가 연결한 css파일 **위에** 다음 코드를 작성
  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
  />
  ```
- https://www.jsdelivr.com/package/npm/reset-css 참고

# Codepen

- Codepen사이트에서 간단하게 HTML, CSS, JS 코딩 가능!
- HTML의 코드 작성칸은 body태그 내부임(body태그를 따로 작성하지 않아도 됨)
- HTML은 CSS와 연결되어있음
- CSS Reset을 추가하고 싶으면 설정에서 CSS Base를 Reset으로 바꾸면 됨

# Emmet

- Emmet문법을 통해 HTML과 CSS를 빠르게 작성 가능
- Emmet문법을 사용하려면 Emmet 플러그인이 깔려있어야 함
  - 많은 에디터에서 내장하고 있음!

## HTML

- .box + enter/tab키
  - box라는 class를 가지는 div태그 생성
- ul.list + enter/tab키
  - list라는 class를 가지는 ul태그 생성
- .container>ul.list>li.list-item\*10>a{list$}
  - container라는 class를 가지는 div태그
  - div태그의 자식인 list라는 class를 가지는 ul
  - ul태그의 자식인 list-item이라는 class를 가지는 li태그를 10개 생성
  - 각 li태그의 자식인 a태그는 list + (1~10)를 값으로 가짐

## CSS

- w(h): 100 + tab/enter
  - width(height): 100px;
  - %단위를 붙이면 %단위로도 가능(기본은 px)
