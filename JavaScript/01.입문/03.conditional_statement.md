# 조건문

특정 조건이 만족됐을 때 특정 코드를 실행

## if문

- 가장 기본적인 조건문
- "~하다면 ~을 해라"를 의미
- 예)
  ```js
  const a = 1;
  if (a + 1 === 2) {
    console.log("a + 1 이 2 입니다."); // 출력
  }
  ```
- 코드 블록
  - `{ }`로 감싸져있는 부분
  - 다른 블록 범위에서는 똑같은 이름으로 선언 가능

## if-else문

- "~하다면 ~하고, 그렇지 않다면 ~해라"를 의미
- 특정 조건이 만족할 때와 만족하지 않을 때 서로 다른 코드를 실행해야 할 경우 사용
- 예)
  ```js
  const a = 10;
  if (a > 15) {
    console.log("a 가 15 큽니다.");
  } else {
    console.log("a 가 15보다 크지 않습니다."); // 출력
  }
  ```

## if-else if문

- 조건에 따라 다른 작업을 해야 할 때 사용
- 예)
  ```js
  const a = 10;
  if (a === 5) {
    console.log("5입니다!");
  } else if (a === 10) {
    console.log("10입니다!"); // 출력
  } else {
    console.log("5도 아니고 10도 아닙니다.");
  }
  ```

## switch/case문

- 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용
- 예)
  ```js
  const device = "iphone";
  switch (device) {
    case "iphone":
      console.log("아이폰!"); // 출력
      break;
    case "ipad":
      console.log("아이패드!");
      break;
    case "galaxy note":
      console.log("갤력시 노트!");
      break;
    default:
      console.log("모르겠네요..");
  }
  ```
- 각 case에서 실행할 코드를 작성하고 맨 마지막에 `break;`를 꼭 해줘야 함
  - `break;`를 하지 않으면 그 다음 case의 코드까지 실행됨
- 맨 아래의 `default:`는 case에 없는 값일 경우를 의미
