# 변수와 상수

특정 이름에 특정 값을 설정할 때 사용

- 이것을 **선언**이라고 함

## 변수

- 바꿀 수 있는 값
- `let`으로 선언
- 예)
  ```js
  let value = 1;
  console.log(value); // 1
  value = 2;
  console.log(value); // 2
  ```
- 한 번 선언했으면 같은 이름으로 선언 불가
  - 하지만 `var`은 가능(쓰지 말자!!!)

## 상수

- 바꿀 수 없는 값, 즉 값이 고정적
- `const`로 선언
- 예)
  ```js
  const a = 1;
  console.log(a); // 1
  ```

# 데이터 타입

변수나 상수를 선언할 때 숫자 외에도 다른 값들을 선언 가능

## 숫자(Number)

- 숫자는 값을 바로 대입 가능
- 예)
  ```js
  let value = 1;
  ```

## 문자열(String)

- 문자열 형태의 값은 작은 따옴표나 큰 따옴표로 감싸서 선언
  - 작은 따옴표와 큰 따옴표 아무거나 써도 차이X
  - 둘 중 하나로 통일
- 예)
  ```js
  let text = "hello";
  let name = "좌바스크립트";
  ```

## 참/거짓(Boolean)

- 참 혹은 거짓 두가지 종류의 값만 가능
- 참은 true, 거짓은 false
- 예)
  ```js
  let goot = true;
  let loading = false;
  ```

## null과 undefined

- 자바스크립트에서 "없음"을 의미하는 데이터 타입 두 종류
- null
  - 아예 값이 없음을 의미
  - 우리가 없다고 고의적으로 설정하는 값
  - 셜록: "난 친구 같은거 없어"
    ```js
    const friend = null;
    ```
- undefined
  - 아직 값이 설정되지 않은 것
  - 우리가 설정을 안했기 때문에 없는 값
  - 범죄가 일어났지만 범죄자가 누군지 모름
    ```js
    let criminal;
    console.log(criminal); // undefined
    ```
    - criminal이라는 변수를 선언했지만 값을 지정해주지 않았을 때 `undefined`값을 가짐
