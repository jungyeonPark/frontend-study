# 인라인 텍스트

- 모두 inline요소
  - 텍스트를 다루는 데 특화된 요소

## \<a>

- 다른 페이지, 같은 페이지 위치(#, 해시 태그), 파일, 이메일 주소, 전화번호 등 다른 URL로 연결 가능한 하이퍼링크를 설정
- Anchor, 외부로 내보내기
- 속성
  - download
    - 의미: 이 요소가 리소스를 다운로드하는 용도로 사용됨을 의미
    - 값: 불린(Boolean)
  - `href`
    - 의미: 링크 URL
    - 값: URL
  - rel
    - 의미: 현재 문서와 링크 URL의 관계
    - 값: license, prev, next, ...
  - `target`
    - 의미: 링크 URL의 표시(브라우저 탭) 위치(링크를 클릭했을 때 페이지를 현재 창에 띄울 것인지 새 창에 띄울 것인지)
    - 값: \_self(현재 창), \_blank(새 창)
    - 기본값: \_self
  - type
    - 링크 URL의 MIME타입
    - text/html, ...
- 버튼을 클릭하면 링크를 넘어가는 버튼 형식으로 자주 쓰여서 크기를 바꿀 수 있는 block레벨로 바꿔서 많이 사용
- 같은 페이지 내로 이동할 때는 id를 이용해서 #으로 접근
  - 클릭하면 URL주소 뒤에 #아이디 이름이 추가됨

## \<abbr>

- 약어를 지정(Abbreviation)
- 보통 title속성을 사용하여 전체 글자나 설명을 제공
- title속성은 abbr태그에서만 사용할 수 있는 속성이 아닌 모든 태그에서 사용 가능한 `전역(global) 속성`
- 예)
  ```html
  Using <abbr title="HyperText Markup Language">HTML</abbr> is fun and easy!
  ```

## \<b>

- 문체가 다른 글자의 `범위`를 설정(Bring Attention)
- 특별한 의미를 가지지 않고 구분을 위해 사용
- 읽기 흐름에 도움을 주는 용도로 사용
- 다른 태그가 적합하지 않은 경우 마지막 수단으로 사용
  - 별로 안쓰임
- 기본적으로 글자가 두껍게(Bold) 표시됨
- 단순히 글자를 두껍게 하기 위해 쓰지 말 것!
  - CSS로 해야 하는 부분
  - 범위를 나타낼 때 사용해야 함

## \<mark>

- 사용자의 관심을 끌기 위해 하이라이팅할 때 사용(Mark Text)
- 형광펜을 사용하여 관심있는 부분을 표시하는 것과 같은 의미
- 기본적으로 형광펜을 사용한 것처럼 글자 배경이 노란색으로 표시됨
- 의미보다 시각적인 느낌이 강함
  - 하지만 CSS로 충분히 커버 가능
  - 검색엔진에서 강조하기 위해 사용

## \<em>

- 의미 강조를 표시(Emphasis)
  - b, mark태그는 단순한 범위 지정, 표시로 사용됨. 의미를 강조하는 em, strong, i태그와는 다름!
- 중첩이 가능
- 중첩될수록 강조 의미가 강해짐
  - 시각적으로는 변화 없음
- 정보통신보조기기 등에서 구두 강조로 발음됨
- 기본적으로 이탤릭체(Italic type)로 표시됨

## \<strong>

- 의미의 중요성을 나타내기 위해 사용(String Importance)
  - em태그(강조)와 다름!
- 기본적으로 글자가 두껍게(Bold) 표시됨

## \<i>

- em, string, mark, cite, dfn 태그 등에서 표현할 수 있는 적합한 의미가 아닌 경우 사용
  - b태그와 다름!
- 평범한 글자와 구분(아이콘이나 특수기호 등)하기 위해 사용
- 기본적으로 이탤릭체로 표시됨

## \<dfn>

- 용어를 정의할 때 사용(Definition)

## \<cite>

- 창작물에 대한 참조를 설정
- 책, 논문, 영화, TV프로그램, 노래, 게임 등의 제목
- 기본적으로 이탤릭체로 표시됨
- 예)
  ```html
  <cite>The Scream</cite> by Edward Munch. Painted in 1893.
  ```

## \<q>

- 짧은 인용문을 설정(Inline Quotation)
- 긴 인용문을 설정할 경우 \<blockquote>를 사용
- 속성
  - cite
    - 의미: 인용된 정보의 URL
    - 값: URL

## \<u>

- 밑줄이 있는 글자를 설정(Underline)
- 순수하게 꾸미는 용도의 요소로 사용
- \<a>와 헷갈릴 수 있는 위치에서 사용하지 않도록 주의
  - 밑줄 때문에
- \<span style="text-decoration: underline;">(span태그에 CSS적용)을 활용할 수 있을 경우에는 사용을 권장하지 않음.

## \<code>

- 컴퓨터 코드 범위를 설정(Inline Code)
- 기본적으로 고정폭(Monospace) 글꼴 계열로 표시됨
- 예)
  ```html
  <code>document.getElementById('id-value')</code> is a piece of computer code.
  ```

## \<kbd>

- 키보드에서 사용자 입력을 나타내는 텍스트 범위를 설정(Keyboard Input)
- 예)
  ```html
  <p><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd></p>
  <kbd>ESC</kbd>
  ```

## \<sup>, \<sub>

- \<sup>는 위 첨자(Superscripted text)
- \<sub>는 아래 첨자를 설정(Subscript text)
- 예)
  ```html
  X<sup>4</sup> + Y<sup>2</sup>, H<sub>2</sub>O
  ```

## \<time>

- 날짜나 시간을 나타내기 위한 목적으로 사용
- IE 지원 불가
- 별로 안쓰임
- 예)
  ```html
  <p>
    The Cure will be celebrating their 40th anniversary on
    <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
  </p>
  ```

## \<span>

- 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정
- div태그와 매우 비슷 블록/인라인 요소만 다름
- (의미를 가지지 않는)텍스트 중간에 CSS나 JS를 적용할 때 사용하기 좋다!

## \<br>

- 줄바꿈을 설정
- 빈 태그
- 줄 사이에 간격을 벌리고 싶어서 여러번 사용하면 안됨!
  - CSS로 활용(p태그에 line-height적용 등)

# 수정

## \<del>

- 삭제된(변경된) 텍스트의 범위를 지정
- 텍스트 가운데 줄이 그어짐
- 속성
  - cite
    - 의미: 변경을 설명하는 리소스의 URI
    - 값: URI
  - datetime
    - 의미: 변경이 일어난 유효한 날짜 문자
    - 값: Date
- inline요소

## \<ins>

- 새로 추가된(변경된) 텍스트의 범위를 지정
- 텍스트에 밑줄이 쳐짐
- 속성
  - cite
    - 의미: 변경을 설명하는 리소스의 URI
    - 값: URI
  - datetime
    - 의미: 변경이 일어난 유효한 날짜 문자
    - 값: Date
- inline요소
