# 1. 리엑트는 어쩌다가 만들어졌을까?

JavaScript를 사용하여 HTML로 구성한 UI를 제어할 때, DOM을 변형시키기 위해 브라우저의 DOM Selector API를 사용해서 특정 DOM을 선택한 뒤, 특정 이벤트가 발생하면 변화를 주도록 설정해야 함

- 사용자와의 인터랙션이 별로 없는 웹페이지라면 상관없지만, 인터랙션이 자주 발생하고 이에 따라 동적으로 UI를 표연해야 한다면 규칙이 다양해지고 관리하기도 힘들 것
- 웹 애플리케이션의 규모가 커져, DOM을 직접 건드리면서 작업하면 코드가 난잡해지기 쉬움!
- 그래서 Ember, Backbone, AngularJS 등의 프레임워크가 만들어짐
  - 쉽게 말하면 자바스크립트의 특정 값이 바뀌면 특정 DOM의 속성이 바뀌도록 연결해주어 업데이트하는 작업을 간소화해줌
- 리액트의 경우는 위의 프레임워크와는 다른 발상에서 만들어짐
  - 상태가 바뀌었을 때 그 상태에 따라 DOM을 어떻게 업데이트할 지 규칙을 정하는게 아니라 **아예 다 날려버리고 처음부터 모든걸 만들어서 보여주면 어떨까?** 라는 아이디어에서 시작됨
  - 업데이트를 어떻게 해야 할 지에 대한 고민을 안해도 되기 때문에 개발이 쉬워짐
  - 하지만 동적인 UI를 보여주기 위해 모든걸 날리고 새로 만들면 속도가 굉장히 느릴 것
  - 리액트에서는 **Virtual DOM** 이라는 것을 사용해서 이를 해결
  - **Virtual DOM** 은 가상의 DOM으로 브라우저에 실제로 보여지는 것이 아닌 메모리에 가상으로 존재하는 DOM으로 JavaScript객체임
  - 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해 렌더링하고 실제 브라우저에 보여지고 있는 DOM과 비교한 후 차이가 있는 곳을 감지하여 이를 실제 DOM에 fetch시켜줌
  - UI를 어떻게 업데이트 할 지가 아닌 **어떻게 보여줄지에 집중** 하면서 프로젝트 개발 가능!
  - 리액트는 UI를 **컴포넌트** 를 사용하여 선언함

# 2. 새로운 리액트 프로젝트 만들어보기

- 터미널에서 다음 명령어 실행
  ```
  $ npx create-react-app begin-react
  ```
- begin-react라는 디렉터리가 생기고 그 안에 리액트 프로젝트가 생성됨
- begin-react 디렉터리에 들어가서 다음 명령어 입력
  ```
  $ yarn start
  ```
- 브라우저에 http://localhost:3000/ 이 열리고 리액트 아이콘이 보임

# 3. 나의 첫번째 리액트 컴포넌트

- Hello.js 파일을 작성

  ```js
  import React from "react";

  function Hello() {
    return <div>안녕하세요</div>;
  }

  export default Hello;
  ```

- 리액트 컴포넌트를 만들 때는 `import React from 'react';`를 통해 리액트를 불러와야 함
- 리액트 컴포넌트는 함수 형태로 작성할 수도 있고 클래스 형태로도 작성할 수 있음
- 현재 단계에서는 함수로 작성하는 방법만 알아볼 것임
- HTML코드와 비슷한 태그는 JSX라고 함(나중에 알아볼 것임)
- 세미콜론은 써도 되고 안써도 됨
- `export default Hello;`코드는 Hello 컴포넌트를 내보내겠다는 의미
  - 이렇게 하면 다른 컴포넌트에서 불러와서 사용 가능
- 이 컴포넌트를 App.js에서 불러와서 사용

  ```js
  import React from "react";
  import Hello from "./Hello";

  function App() {
    return (
      <div>
        <Hello />
      </div>
    );
  }

  export default App;
  ```

- index.js파일

  ```js
  import React from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  import App from "./App";
  import * as serviceWorker from "./serviceWorker";

  ReactDOM.render(<App />, document.getElementById("root"));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  ```

- `ReactDOM.render`의 역할을 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
- id가 root인 DOM을 선택하고 있음
  - 이 DOM은 public/index.html을 열어보면 `<div id="root"></div>` 코드가 있음
- 결국, 리액트 컴포넌트가 렌더링 될 때는, 렌더링된 결과물이 위 div내부에 렌더링 되는 것!

# 4. JSX

JSX는 리액트에서 생김새를 정의할 때 사용하는 문법

- HTML같이 생겼지만 실제로는 JavaScript임
- ex
  ```js
  return <div>안녕하세요</div>;
  ```
- 리액트 컴포넌트 파일에서 위와 같이 XML형태로 코드를 작성하면 babel이 JSX를 JavaScript로 변환해줌
- Babel은 자바스크립트의 문법을 확장해주는 도구
  - 아직 지원되지 않는 최신 문법 등을 정식 자바스크립트 형태로 변환해줘서 구형 브라우저 환경에서도 제대로 실행 할 수 있게 해줌
- JSX가 JavaScript로 제대로 변환이 되려면 지켜줘야 하는 규칙이 존재

## 꼭 닫혀야 하는 태그

태그는 꼭 닫혀있어야 함!

- HTML에서는 `input` 또는 `br`태그를 사용할 때 닫지 않고 사용하기도 하지만 리액트에서는 그렇게 하면 안됨!
- `<input />`이렇게 Self Closing으로 닫는거는 가능
  - Self Closing은 열리고, 바로 닫히는 태그를 의미
- 태그와 태그 사이에 내용이 들어가지 않을 때는 Self Closing 태그를 사용해야 함

## 꼭 감싸져야 하는 태그

두가지 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함

- 하지만 불필요한 태그를 사용하는 것이 좋지 않을 수 있음
- 이럴 땐 Fragment라는 것을 사용
  ```js
  <>
    <Hello />
    <div>안녕히계세요</div>
  </>
  ```
- 위와 같이 태그를 작성할 때 이름 없이 작성하면 Fragment가 만들어짐
- Fragment는 브라우저 상에서 별도의 엘리먼트로 나타나지 않음

## JSX 안에 자바스크립트 값 사용하기

JSX 내부에 자바스크립트 변수를 보여줘야 할 때는 `{}`으로 감싸면 됨

## style과 className

JSX에서 태그에 `style`과 CSS class를 설정하는 방법은 HTML에서 설정하는 방법과 다름

- 인라인 style은 객체 형태로 작성해야 함
- `background-color`처럼 `-`로 구분되어 있는 이름들은 `backgroundColor`처럼 camelCase형태로 작성해야 함

```js
function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}
```

- CSS class를 설정 할 때는 `class=`가 아닌 `className=`으로 설정해주어야 함
- 예) `<div className="gray-box"></div>`

## 주석

- JSX 내부의 주석은 `{/* 이런 형태로 */}` 작성함
- 태그 내부에서는 `// 이렇게` 작성함

# 5. props를 통해 컴포넌트에게 값 전달하기

컴포넌트의 props 라는 개념에 대해 알아보자

- props는 properties의 줄임말
- 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props를 사용

## props의 기본 사용법

예를 들어 App 컴포넌트에서 Hello 컴포넌트를 사용할 때 `name`이라는 값을 전달해주고 싶으면 다음과 같이 작성

- App.js

  ```js
  import React from "react";
  import Hello from "./Hello";

  function App() {
    return <Hello name="react" />;
  }

  export default App;
  ```

Hello 컴포넌트에서 name값을 사용할 때

- Hello.js

  ```js
  import React from "react";

  function Hello(props) {
    return <div>안녕하세요 {props.name}</div>;
  }

  export default Hello;
  ```

- 컴포넌트에게 전달되는 props는 파라미터를 통해서 조회 가능
- props는 객체 형태로 전달됨
- `name` 값을 조회하고 싶으면 `props.name`을 조회하면 됨

## 여러개의 props, 비구조화 할당

App컴포넌트에 또 다른 props `color`을 설정

- App.js

  ```js
  import React from "react";
  import Hello from "./Hello";

  function App() {
    return <Hello name="react" color="red" />;
  }

  export default App;
  ```

  Hello컴포넌트에서 `color`값을 조회해서 폰트의 색상으로 설정

- Hello.js

  ```js
  import React from "react";

  function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>;
  }

  export default Hello;
  ```

- props 내부의 값을 조회할 때마다 `props.`을 입력하기 번거롭기 때문에 **비구조화 할당** 문법을 사용

## defaultProps로 기본값 설정

컴포넌트에 props를 지정하지 않았을 때, 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 `defaultProps`라는 값을 설정하면 됨

- Hello.js

  ```js
  import React from "react";

  function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>;
  }

  Hello.defaultProps = {
    name: "이름없음",
  };

  export default Hello;
  ```

## props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, `props.children`을 조회하면 됨

- 새로운 컴포넌트 Wrapper.js를 src 디렉터리에 생성

  - Wrapper.js

    ```js
    import React from "react";

    function Wrapper() {
      const style = {
        border: "2px solid black",
        padding: "16px",
      };
      return <div style={style}></div>;
    }

    export default Wrapper;
    ```

- 이 컴포넌트를 App컴포넌트에서 사용

  - App.js

    ```js
    import React from "react";
    import Hello from "./Hello";
    import Wrapper from "./Wrapper";

    function App() {
      return (
        <Wrapper>
          <Hello name="react" color="red" />
          <Hello color="pink" />
        </Wrapper>
      );
    }

    export default App;
    ```

  - 이렇게 Wrapper태그 내부에 Hello컴포넌트 두개를 넣음
  - 브라우저를 확인하면 Hello컴포넌트들은 보여지지 않을 것임

- 내부의 내용이 보여지게 하기 위해서는 Wrapper에서 `props.children`을 렌더링해줘야 함

  - Wrapper.js

    ```js
    import React from "react";

    function Wrapper({ children }) {
      const style = {
        border: "2px solid black",
        padding: "16px",
      };
      return <div style={style}>{children}</div>;
    }

    export default Wrapper;
    ```

# 6. 조건부 렌더링

조건부 렌더링이란 특정 조건에 따라 다른 결과물을 렌더링하는 것을 의미

- 예를 들어, App컴포넌트에서 Hello컴포넌트를 사용할 때, `isSpecial`이라는 props를 설정
- App.js

  ```js
  import React from "react";
  import Hello from "./Hello";
  import Wrapper from "./Wrapper";

  function App() {
    return (
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
    );
  }

  export default App;
  ```

  - 여기서 `true`는 자바스크립트 값이기 때문에 중괄호로 감싸줌

- Hello컴포넌트에서는 isSpecial이 `true`인지 `false`인지에 따라 컴포넌트 좌측에 \*표시를 보여줌
- 삼항연산자를 사용한 방법
- Hello.js

  ```js
  import React from "react";

  function Hello({ color, name, isSpecial }) {
    return (
      <div style={{ color }}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
      </div>
    );
  }

  Hello.defaultProps = {
    name: "이름없음",
  };

  export default Hello;
  ```

  - `isSpecial`값이 `true`이면 `<b>*</b>`를, 그렇지 않다면 `null`을 보여주도록 함
  - 참고로 JSX에서 null, false, undefined를 렌더링하면 아무것도 나타나지 않지만 falsy한 값인 0을 렌더링하면 0이 나타남

- 지금은 내용이 달라지는게 아니라, 단순히 특정 조건이 `true`이면 보여주고 그렇지 않으면 숨겨줌
- 이런 상황에서는 `&&`연산자를 사용해서 처리하는 것이 더 간편함
  - Hello.js
    ```js
    {
      isSpecial && <b>*</b>;
    }
    ```
  - 단축 평가 논리 계산법 참고!

## props 값 설정을 생략하면 ={true}

컴포넌트의 props값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 `true`로 설정한 것으로 간주

- App.js 예)
  ```js
  <Hello name="react" color="red" isSpecial />
  ```
- 이렇게 `isSpecial`이름만 넣어주면 `isSpecial={true}`와 동일한 의미

# 7. useState를 통해 컴포넌트에서 바뀌는 값 관리하기

지금까지 리액트 컴포넌트를 만들 때는 동적인 부분이 없었음.

이번에는 컴포넌트에서 보여줘야 하는 내용이 사용자 인터렉션에 따라 바뀌어야 할 때 어떻게 구현할 수 있는지에 대해 알아보자

- 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 상태를 관리할 수 없었음
- 리액트 16.8 에서부터 Hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 됨
- 이번에 사용하게 될 **useState** 라는 함수가 리액트의 Hooks 중 하나
- 버튼을 누르면 숫자가 바뀌는 Counter 컴포넌트를 만들어보자
- src디렉터리에 Counter.js를 다음과 같이 작성

  - Counter.js

    ```js
    import React from "react";

    function Counter() {
      return (
        <div>
          <h1>0</h1>
          <button>+1</button>
          <button>-1</button>
        </div>
      );
    }

    export default Counter;
    ```

- 다음에는 App 컴포넌트에서 Counter를 렌더링

  - App.js

    ```js
    import React from "react";
    import Counter from "./Counter";

    function App() {
      return <Counter />;
    }

    export default App;
    ```

## 이벤트 설정

Counter에서 버튼이 클릭되는 이벤트가 발생했을 때, 특정 함수가 호출되도록 설정

- Counter.js

  ```js
  import React from "react";

  function Counter() {
    const onIncrease = () => {
      console.log("+1");
    };
    const onDecrease = () => {
      console.log("-1");
    };
    return (
      <div>
        <h1>0</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
  }

  export default Counter;
  ```

  - 함수를 만들고, button의 `onClick`으로 각 함수를 연결

- 리액트에서 엘리먼트에 이벤트를 설정해줄 때는 `on이벤트이름={실행하고싶은함수}` 형태로 설정
- 여기서 주의할 점은 함수형태를 넣어주어야 하지, 함수를 실행하면 안됨!!
  ```js
  onClick={onIncrease()} // X
  ```
  - 이렇게 하면 이벤트가 일어날 때만 함수가 호출되어야 하는데 렌더링되는 시점에서 함수가 호출되기 때문

## 동적인 값 끼얹기, useState

컴포넌트에서 동적인 값을 상태(state)라고 부름.

리액트의 `useState`함수를 통해 컴포넌트에서 상태를 관리할 수 있음

- Counter컴포넌트를 다음과 같이 수정

  ```js
  import React, { useState } from "react";

  function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
      setNumber(number + 1);
    };

    const onDecrease = () => {
      setNumber(number - 1);
    };

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
  }

  export default Counter;
  ```

```js
import React, { useState } from "react";
```

- 이 코드는 리액트 패키지에서 `useState`라는 함수를 불러와줌

```js
const [number, setNumber] = useState(0);
```

- useState()함수를 사용할 때는 상태의 기본값을 파라미터로 넣어서 호출
  - 위 코드에서는 0이 상태의 기본값
- 이 함수를 호출해주면 배열이 반환되는데, 첫번째 원소는 현재 상태, 두번째 원소는 Setter함수를 의미
  - 즉 [number, setNumber]은 각각 useState()의 리턴값
  - 원래는 다음과 같은 코드를 **배열 비구조화 할당** 을 통하여 각 원소를 추출한 것임
    ```js
    const numberState = useState(0);
    const number = numberState[0];
    const setNumber = numberState[1];
    ```

```js
const onIncrease = () => {
  setNumber(number + 1);
};

const onDecrease = () => {
  setNumber(number - 1);
};
```

- 위와 같이 Setter함수는 파라미터로 전달 받은 값을 최신 상태로 설정해줌

```js
<h1>{number}</h1>
```

- h1태그에서는 이제 0이 아닌 `{number}` 값을 보여줘야 함

## 함수형 업데이트

지금은 Setter함수를 사용할 때, 업데이트하고 싶은 새로운 값을 파라미터로 넣어주고 있는데, 그 대신 기존 값을 어떻게 업데이트 할 지에 대한 **함수** 를 등록하는 방식으로도 값을 업데이트할 수 있음

- Counter컴포넌트를 다음과 같이 수정

  ```js
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  ```

  - `setNumber`를 사용할 때 그 다음 상태를 파라미터로 넣어준 것이 아니라, 값을 업데이트하는 함수를 파라미터로 넣어줌
  - 함수형 업데이트는 나중에 컴포넌트를 최적화할 때 사용하게 됨
  - 지금 당장은 이런게 있다 정도로만 이해

# 8. input상태 관리하기

리액트에서 사용자가 입력할 수 있는 input태그의 상태를 관리하는 법을 알아보자

- src 디렉터리에 InputSample.js라는 파일을 생성

  - InputSample.js

    ```js
    import React from "react";

    function InputSample() {
      return (
        <div>
          <input />
          <button>초기화</button>
          <div>
            <b>값: </b>
          </div>
        </div>
      );
    }

    export default InputSample;
    ```

- 그 다음, 이 컴포넌트를 App에서 렌더링

  - App.js

    ```js
    import React from "react";
    import InputSample from "./InputSample";

    function App() {
      return <InputSample />;
    }

    export default App;
    ```

- input에 입력하는 값이 하단에 나타나게 하고, 초기화 버튼을 누르면 input에 값이 비워지도록 구현해보자
- 이번에도 `useState`를 사용
- input의 `onChange`라는 이벤트를 사용
- 이벤트에 등록하는 함수에서는 이벤트 객체 `e`를 파라미터로 받아와서 사용할 수 있음
  - 이 객체의 `e.target`은 이벤트가 발생한 DOM인 input DOM을 가르키게 됨
  - 이 DOM의 `value`값, 즉 `e.target.value`를 조회하면 현재 input에 입력한 값이 무엇인지 알 수 있음
  - 이 값을 `useState`를 통해서 관리
- 코드를 다음과 같이 수정

  - InputSample.js

    ```js
    import React, { useState } from "react";

    function InputSample() {
      const [text, setText] = useState("");

      const onChange = (e) => {
        setText(e.target.value);
      };

      const onReset = () => {
        setText("");
      };

      return (
        <div>
          <input onChange={onChange} value={text} />
          <button onClick={onReset}>초기화</button>
          <div>
            <b>값: {text}</b>
          </div>
        </div>
      );
    }

    export default InputSample;
    ```

  - input의 상태를 관리할 때는 input태그의 `value` 값도 설정해주는 것이 중요
  - 그렇게 해야 상태가 바뀌었을 때 input의 내용도 업데이트됨!

# 9. 여러개의 input 상태 관리하기

이번에는 input이 여러개일 때 어떻게 관리해야 하는지 알아보자

8번에서 만들었던 InputSample에서 새로운 input을 추가하고 코드를 수정

- input의 개수가 여러개가 됐을 때는, 단순히 useState를 여러번 사용하고 onChange도 여러개 만들어서 구현할 수는 있지만 좋은 방법은 아님
- 좋은 방법은 input에 `name`을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것
- 그리고 `useState`에서는 문자열이 아닌 **객체** 의 상태를 관리해줘야 함

- InputSample.js

  ```js
  import React, { useState } from "react";

  function InputSample() {
    const [inputs, setInputs] = useState({
      name: "",
      nickname: "",
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value, // name 키를 가진 값을 value 로 설정
      });
    };

    const onReset = () => {
      setInputs({
        name: "",
        nickname: "",
      });
    };

    return (
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: </b>
          {name} ({nickname})
        </div>
      </div>
    );
  }

  export default InputSample;
  ```

- 리액트 상태에서 객체를 수정해야 할 때는 다음과 같이 직접 수정하면 안됨
  ```js
  inputs[name] = value;
  ```
- 대신 새로운 객체를 만들어 기존 객체를 복사하고 나서 변화된 값을 덮어씌워 이를 상태로 사용해야 함
  ```js
  setInputs({
    ...inputs,
    [name]: value,
  });
  ```
  - 여기서 사용한 `...`문법은 spread문법으로 기존 객체를 복사해줌
  - 이러한 작업을 "불변성을 지킨다"라고 부름
  - 불변성을 지켜주어야 리액트 컴포넌트에서 상태가 업데이트 됐음을 감지 가능하고 이에 따라 필요한 리렌더링이 진행됨
  - 만약 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않음
- 리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있음(나중에 자세히 알아볼 것임)

# 10. useRef로 특정 DOM 선택

JavaScript를 사용할 때, 우리가 특정 DOM을 선택해야 하는 상황에 `getElementById`, `querySelector`같은 DOM Selector함수를 사용해서 DOM을 선택함

리액트를 사용하는 프로젝트에서도 가끔 DOM을 직접 선택해야 하는 상황이 발생함

- 특정 엘리먼트의 크기를 가져올 때, 스크롤바 위치를 가져오거나 설정할 때, 포커스를 설정할 때 등
- 이럴 땐, 리액트에서 `ref`라는 것을 사용함
- 함수형 컴포넌트에서 `ref`를 사용할 때는 `useRef`라는 Hook함수를 사용함
- 클래스형 컴포넌트에서는 콜백 함수나 `React.createRef`라는 함수를 사용함(나중에 클래스 컴포넌트를 배울 때 다룸)
- 8번과 9번에서 만든 InputSample 컴포넌트에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있음
- 초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히도록 `useRef`를 사용하여 구현해보자
- InputSample.js

  ```js
  import React, { useState, useRef } from "react";

  function InputSample() {
    const [inputs, setInputs] = useState({
      name: "",
      nickname: "",
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value, // name 키를 가진 값을 value 로 설정
      });
    };

    const onReset = () => {
      setInputs({
        name: "",
        nickname: "",
      });
      nameInput.current.focus();
    };

    return (
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: </b>
          {name} ({nickname})
        </div>
      </div>
    );
  }

  export default InputSample;
  ```

  - `useRef()`를 사용하여 Ref객체를 만듦
  - 이 객체를 우리가 선택하고 싶은 DOM에 `ref`값으로 설정해주어야 함
    ```js
    ref = { nameInput };
    ```
  - 그러면 Ref객체의 `.current`값은 우리가 원하는 DOM을 가르키게 됨
  - `onReset`함수에서 input에 포커스를 하는 `focus()` DOM API를 호출

# 11. 배열 렌더링하기

리액트에서 배열을 렌더링하는 방법을 알아보자

아래 배열이 있다고 가정하자

```js
const users = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
  },
];
```

위 배열의 내용을 컴포넌트로 렌더링하려면 어떻게 해야 할까?

- 배열 원소가 적으니 각각 태그를 만들어 렌더링해도 되지만 배열 원소가 많거나 배열이 자주 업데이트된다면 매우 비효율적임
- 컴포넌트를 재사용할 수 있도록 새로 만들면 효율적
  - 한 파일에 여러개의 컴포넌트 선언 가능!
- 자바스크립트 배열 내장함수 `map()`을 사용
  - 리액트에서 동적인 배열을 렌더링해야 할 때 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환
- UserList.js

  ```js
  import React from "react";

  function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }

  function UserList() {
    const users = [
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
      },
    ];

    return (
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }

  export default UserList;
  ```

  - 리액트에서 배열을 렌더링할 때는 `key`라는 `props`를 설정해야 함
    - 설정해주지 않으면 콘솔창에 경고메세지가 뜸
  - `key`값은 각 원소마다 가지고 있는 고유값으로 설정해야 함
    - 지금의 경우엔 `id`가 고유값
  - 만약 배열 안의 원소가 가지는 고유한 값이 없다면 `map()`함수를 사용할 때 설정하는 콜백함수의 두번째 파라미터 `index`를 key로 사용하면 되지만 비효율적
    - key설정을 하지 않으면 자동으로 index값을 key로 사용

## key의 존재유무에 따른 업데이트 방식

- key가 없을 때
  - 중간에 새 태그를 삽입하는 경우 리렌더링을 할 때 원래 삽입할 인덱스에 있던 값이 삽입할 값으로 바뀌고 그 뒤로 한칸씩 바뀌면서 밀리고 맨 마지막 인덱스의 값이 새로 삽입됨
  - 맨 앞의 태그를 제거하는 경우 리렌더링을 할 때 뒤에 있던 인덱스가 한칸씩 앞으로 당겨지면서 바뀌고 맨 마지막 태그가 제거됨
- key가 있을 때
  - 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제함
  - key가 없을 때보다 훨씬 효율적
