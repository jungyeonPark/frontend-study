# 표 콘텐츠

## \<table>, \<tr>, \<th>, \<td>

- \<table>은 데이터 표
- \<tr>은 데이터 표의 행(Table Row)
- \<th>는 데이터 표의 열 제목(Table Header)
  - '머리글 칸'을 지정
- \<td>는 데이터 표의 열(Table Data)

  - '일반 칸'을 지정

- **table영역 안에 행(tr)부터 구조를 잡고 행마다(tr태그 안에) 각 열(td 또는 th)을 작성**
- \<th>의 속성

  - abbr
    - 의미: 열에 대한 간단한 설명
  - headers
    - 의미: 관련된 하나 이상의 다른 머리글 칸 id 속성 값
  - colspan
    - 의미: 확장하려는(병합) 열의 수
    - 기본값: 1
  - rowspan
    - 의미: 확장하려는(병합) 행의 수
    - 기본값: 1
  - scope
    - 의미: 자신이 누구의 '머리글 칸'인지 명시
    - 값: col(자신의 열), colgroup(모든 열), row(자신의 행), rowgroup(모든 행), auto
    - 기본값: auto

- \<td>의 속성
  - headers
    - 의미: 관련된 하나 이상의 다른 머리글 칸 id 속성 값
  - colspan
    - 의미: 확장하려는(병합) 열의 수
    - 기본값: 1
  - rowspan
    - 의미: 확장하려는(병합) 행의 수
    - 기본값: 1

## \<caption>

- 표의 제목을 설정
- 열리는 table태그 바로 다음에 작성해야 함
- table 당 하나의 \<caption>만 사용 가능

## \<colgroup>, \<col>

- \<col>은 표의 열들을 공통적으로 정의하는 컬럼(Column)
- \<colgroup>은 \<col>들의 집합(Column Group)
- 속성
  - span
    - 의미: 연속되는 열 수(같은 속성을 적용하고 싶은 칸 수를 입력하면 입력한 개수만큼 연속되는 열들을 합쳐서 적용 가능)
    - 값: 숫자(Number)
    - 기본값: 1

# \<thead>, \<tbody>, \<tfoot>

- \<thead>는 표의 머리글
- \<tbody>는 본문
- \<tfoot>은 바닥글을 지정
- 기본적으로 테이블의 레이아웃에 영향을 주지 않음

# 양식

## \<form>

- 웹 서버에 정보를 제출하기 위한 양식 범위를 정의
- \<form>이 다른 \<form>을 자식 요소로 포함할 수 없읔
- 속성
  - action
    - 의미: 전송한 정보를 처리할 웹페이지의 URL
    - 값: URL
  - autocomplete
    - 의미: 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
    - 값: on, off
    - 기본값: on
  - method
    - 의미: 서버로 전송할 HTTP 방식
    - 값: GET, POST
    - 기본값: GET
  - name
    - 의미: 고유한 양식의 이름
  - novalidate
    - 의미: 서버로 전송 시 양식 데이터의 유효성을 검사하지 않도록 지정
  - target
    - 의미: 서버로 전송 후 응답받을 방식을 지정
    - 값: \_self, \_blank
    - 기본값: \_self
- block 요소
- HTTP프로토콜의 GET방식과 POST방식
  - GET
    - URL에 전송된 정보가 표시됨
    - 안중요한 정보를 전송할 때 사용!
  - POST
    - URL에 전송한 정보가 표시되지 않음
    - 로그인 정보 등 중요한 정보를 전송할 때 사용!
    - 하지만 개발자 도구에 network를 보면 볼 수 있음
      - 암호화 등 보안이 필요

## \<input>

- 사용자에게 입력 받을 데이터 양식
- 빈 태그
- 속성
  - autocomplete
    - 의미: 사용자가 이전에 입력한 값으로 자동완성 기능을 사용할 것인지 여부
    - 값: on, off
    - 기본값: on
  - autofocus
    - 의미: 페이지가 로드될 때 자동으로 포커스
    - 값: 불린(Boolean)
    - 특징: 문서 내 고유해야 함
  - checked
    - 의미: 양식이 선택되었음을 표시
    - 값: 불린(Boolean)
    - 특징: type속성 값이 radio, checkbox일 경우만
  - disabled
    - 의미: 양식을 비활성화
    - 값: 불린(Boolean)
  - form
    - 의미: \<form>의 id 속성 값
    - 특징: 해당 \<form>의 후손이 아닐 경우만(form태그 바깥에 input을 사용한 경우)
  - list
    - 의미: 참조할 \<datalist>의 id 속성 값
  - max
    - 의미: 지정 가능한 최대 값
    - 값: 숫자(Number)
    - 특징: type 속성 값이 number일 경우만, min 속성보다 큰 값만 허용
  - min
    - 의미: 지정 가능한 최소 값
    - 값: 숫자(Number)
    - 특징: type 속성 값이 number일 경우만, max 속성보다 작은 값만 허용
  - maxlength
    - 의미: 입력 가능한 최대 문자 수
    - 값: 숫자(Number)
    - 기본값: 524288
    - 특징: type 속성 값이 text, email, password, tel, url일 경우만
  - multiple
    - 의미: 둘 이상의 값을 입력 할 수 있는지 여부
    - 값: 불린(Boolean)
    - 특징: email, file일 경우만(email일 경우 ,로 구분)
  - **name**
    - 의미: 양식의 이름
  - placeholder
    - 의미: 사용자가 입력할 값의 힌트
    - 특징: type 속성 값이 text, search, tel, url, email 일 경우만
  - readonly
    - 의미: 수정 불가한 읽기 전용
    - 값: 불린(Boolean)
  - step
    - 의미: 유효한 증감 숫자의 간격
    - 값: 숫자(Number)
    - 기본값: 1
    - 특징: type 속성 값이 number, range일 경우만
  - src
    - 의미: 이미지의 URL
    - 값: URL
    - 특징: type 속성 값이 image일 경우만
  - alt
    - 의미: 이미지의 대체 택스트
    - 특징: type 속성 값이 image일 경우만
  - **type**
    - 의미: 입력 받을 데이터의 종류
    - 값: 별도로 정리!
    - 기본값: text
  - value
    - 의미: 양식의 초기값

### \<input>의 속성 Type(데이터 종류)의 값

- type 속성에 입력할 수 있는 값의 목록
- 값
  - button
    - 데이터 종류: 일반 버튼
    - 특징: \<button>처럼 사용
  - checkbox
    - 데이터 종류: 체크박스
  - color
    - 데이터 종류: 색상
    - 특징: IE 지원 불가
  - email
    - 데이터 종류: 이메일
  - file
    - 데이터 종류: 파일
  - hidden
    - 데이터 종류: 보이지 않지만 전송할 양식
    - 특징: value 속성으로 값을 지정
  - image
    - 데이터 종류: 이미지 제출 버튼
    - 특징: \<img>처럼 사용
  - number
    - 데이터 종류: 숫자
  - password
    - 데이터 종류: 비밀
    - 특징: 가려지는 양식
  - radio
    - 데이터 종류: 라디오 버튼
    - 특징: 같은 name 속성 그룹 내 하나만 선택 가능
  - range
    - 데이터 종류: 범위 컨트롤
    - 특징: min, max, step, value 속성 사용
  - reset
    - 데이터 종류: 초기화
    - 특징: 해당 \<form> 범위 내 모든 양식
  - search
    - 데이터 종류: 검색
  - submit
    - 데이터 종류: 제출 버튼
    - 특징: 해당 \<form> 범위 내 고유한 양식
  - tel
    - 데이터 종류: 전화번호
  - text
    - 데이터 종류: 일반 텍스트
  - url
    - 데이터 종류: 절대 URL

## \<label>

- 라벨 가능 요소(labelable)의 제목(Caption)
- 버튼을 클릭하지 않고 라벨(텍스트)을 클릭해도 클릭이 됨
- for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함
- 라벨 가능 요소: \<button>, \<input>, \<progress>, \<select>, \<textarea>
- 속성
  - for
    - 의미: 참조할 라벨 가능 요소의 id 속성 값
- 예)

  ```html
  <!-- 라벨 가능 요소를 참조 -->
  <input type="checkbox" id="user-agreement" />
  <label for="user-agreement">동의하십니까?</label>

  <!-- 라벨 가능 요소를 포함 -->
  <label><input type="checkbox" />동의하십니까?</label>
  ```

- inline 요소

## \<button>

- 선택 가능한 버튼을 지정
- 속성
  - autofocus
    - 의미: 페이지가 로드될 때 자동으로 포커스
    - 값: 불린(Boolean)
    - 특징: 문서 내 고유해야 함
  - disabled
    - 의미: 버튼을 비활성화
    - 값: 불린(Boolean)
  - form
    - 의미: \<form>의 id 속성 값
    - 특징: 해당 \<form>의 후손이 아닐 경우만
  - name
    - 의미: 폼 데이터와 함께 전송되는 버튼의 이름
  - type
    - 의미: 버튼의 타입
    - 값: button, reset, submit

## \<textarea>

- 여러 줄의 일반 텍스트 양식
- 속성
  - autocomplete
    - 의미: 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
    - 값: on, off
    - 기본값: on
  - autofocus
    - 의미: 페이지가 로드될 때 자동으로 포커스
    - 값: 불린(Boolean)
    - 특징: 문서 내 고유해야 함
  - disabled
    - 의미: 양식을 비활성화
    - 값: 불린(Boolean)
  - form
    - 의미: \<form>의 id 속성 값
    - 특징: 해당 \<form>의 후손이 아닐 경우만
  - maxlength
    - 의미: 입력 가능한 최대 문자 수
    - 값: 숫자(Number)
    - 기본값: 무한
  - name
    - 의미: 양식의 이름
  - placeholder
    - 의미: 사용자가 입력할 값의 힌트
  - readonly
    - 의미: 수정 불가한 읽기 전용
    - 값: 불린(Boolean)
  - rows
    - 의미: 양식의 줄 수
    - 값: 숫자(Number)
    - 기본값: 2

## \<fieldset>, \<legend>

- \<fieldset>은 같은 목적의 양식을 그룹화함
- \<legend>는 \<fieldset>의 제목을 지정
- \<fieldset>의 속성
  - disabled
    - 의미: 그룹 내 모든 양식 요소를 비활성화
    - 값: 불린(Boolean)
  - form
    - 의미: 그룹이 속할 하나 이상의 \<form>의 id 속성 값
  - name
    - 의미: 그룹의 이름
- 예)
  ```html
  <form>
    <fieldset>
      <legend>Coffee Size</legend>
      <label>
        <input type="radio" name="size" value="tall" />
        Tall
      </label>
      <label>
        <input type="radio" name="size" value="grande" />
        Grande
      </label>
      <label>
        <input type="radio" name="size" value="venti" />
        Venti
      </label>
    </fieldset>
  </form>
  ```
- 둘 다 block 요소

## \<select>, \<datalist>, \<option>, \<optgroup>

- \<select>
  - 옵션을 선택하는 메뉴
  - 속성
    - autocomplete
      - 의미: 사용자가 이전에 입력한 값으로 자동완성 기능을 사용할 것인지 여부
      - 값: on, off
      - 기본값: on
    - disabled
      - 의미: 선택 메뉴를 비활성화
      - 값: 불린(Boolean)
    - form
      - 의미: 선택 메뉴가 속할 하나 이상의 \<form>의 id 속성 값
    - multiple
      - 의미: 다중 선택 여부
      - 값: 불린(Boolean)
    - name
      - 의미: 선택 메뉴의 이름
    - size
      - 의미: 한 번에 볼 수 있는 행의 개수
      - 값: 숫자(Number)
      - 기본값: 0(1과 같음)
  - 예)
    ```html
    <select>
      <optgroup label="Coffee">
        <option>Americano</option>
        <option>Caffe Mocha</option>
        <option label="Cappuccino" value="Cappuccino"></option>
      </optgroup>
      <optgroup label="Latte" disabled>
        <option>Caffe Latte</option>
        <option>Vanilla Latte</option>
      </optgroup>
      <optgroup label="Smoothie">
        <option>Plain</option>
        <option>Strawberry</option>
        <option>Banana</option>
        <option>Mango</option>
      </optgroup>
    </select>
    ```
- \<datalist>

  - \<input>에 미리 정의된 옵션을 지정하여 자동완성(Autocomplete) 기능을 제공하는 데 사용
  - \<input>의 list 속성 바인딩
  - \<option>을 포함하여 정의된 옵션을 지정
  - 예)

    ```html
    <input type="text" list="fruits" />

    <datalist id="fruits">
      <option>Apple</option>
      <option>Orange</option>
      <option>Banana</option>
      <option>Mango</option>
      <option>Fineapple</option>
    </datalist>
    ```

- \<option>
  - 선택 메뉴(\<select>)나 자동완성(\<datalist>)에서 사용될 옵션
  - 선택적 빈(Empty) 태그로 사용 가능
  - 속성
    - disabled
      - 의미: 옵션을 비활성화
      - 값: 불린(Boolean)
    - label
      - 의미: 표시될 옵션의 제목
      - 특성: 생략되면 포함된 텍스트를 표시(빈 태그가 아닌 경우)
    - selected
      - 의미: 옵션이 선택되었음을 표시
      - 값: 불린(Boolean)
    - value
      - 의미: 양식으로 제출될 값
      - 특성: 생략되면 포함된 텍스트를 값으로 사용(빈 태그가 아닌 경우)
- \<optgroup>
  - \<option>을 그룹화
  - 속성
    - label
      - 의미: (필수)옵션 그룹의 이름
    - disabled
      - 의미: 옵션 그룹을 비활성화
      - 값: 불린(Boolean)

## \<progress>

- 작업의 완료 진행률을 표시
- 로딩바를 생각하면 쉬움
- 속성
  - max
    - 의미: 작업의 총량
    - 값: 숫자(Number)
  - value
    - 의미: 작업의 진행량
    - 값: 숫자(Number)
    - 특징: max 속성을 생략할 경우 0~1 사이의 숫자여야 함
- 예)
  ```html
  <progress value="70" max="100">70 %</progress>
  ```
