# 멀티미디어

## \<img>

- 이미지를 삽입
- 빈 태그
- 속성
  - src
    - 의미: (필수)이미지 URL
    - 값: URL
  - alt
    - 의미: (필수)이미지의 대체텍스트
  - width
    - 의미: 이미지의 가로 너비
    - 값: px단위로 안써도 됨(CSS로 변경할 경우에는 써야함)
  - height
    - 의미: 이미지의 세로 너비
    - 값: px단위로 안써도 됨(CSS로 변경할 경우에는 써야함)
  - srcset
    - 의미: 브라우저에게 제시할 이미지 URL과 원본 크기의 목록을 정의
    - 값: w, x
  - sizes
    - 의미: 미디어 조건과 해당 조건일 때 이미지 최적화 크기의 목록을 정의
- srcset과 sizes속성
  - 일반적으로 반응형 웹에서 이미지를 지원하기 위해 '미디어쿼리'라고 부르는 CSS Media Rule(`@media`)에서 background-image속성을 많이 사용함
  - 하지만 반응형 이미지를 처리하기 위해 뷰포트(Viewport)의 크기부터 사용자 화면의 해상도 등 많은 환경을 고려해야 함
  - HTML의 srcset과 sizes를 통해 쉽게 이미지의 크기를 설정하는 것만으로 대부분의 고려 사항을 사용자 브라우저에 떠넘길 수 있다!
  - IE에서는 지원하지 않음
- 예)
  ```html
  <img
    srcset="./small.jpg 320w, ./medium.jpg 1024w, ./large.jpg 640w"
    sizes="(max-width: 480px) 300px,
           (max-width: 800px) 600px,
           900px"
    src="./small.jpg"
    alt="The image"
  />
  <img
    srcset="./image.jpg, ./image-1.5x.jpg 1.5x, ./image-2x.jpg 2x"
    src="./image.jpg"
    alt="The image"
  />
  ```
- srcset 주의사항
  - srcset이 있는 경우 src는 화면에 나타나지 않음
  - 이미지들 중 사용자 화면에 가장 최적화된 크기의 이미지가 나타남
    - 이미지의 사이즈를 늘리면 뭉게지기 때문에 브라우저 크기보다 큰 이미지들 중 가장 가까운 이미지가 선택됨
  - 이미지가 사이즈별로 2장 이상일 경우 사용
  - 이미지의 크기로 px가 아닌 w단위 또는 x단위를 입력해야 함
  - 작은 이미지부터 순서대로 작성해야 함!
- sizes 주의사항
  - srcset(출력될 이미지 목록)들의 최적화된 조건을 명시한 것
  - sizes에 정한 크기에 가장 최적화된 이미지가 sizes에 명시한 크기로 출력됨
    - width는 브라우저 크기에 따라 다른 최적화된 이미지가 나오고 출력 크기만 지정
  - 괄호 안에 미디어조건이 들어감
  - min-width의 의미는 ~이상
  - max-width의 의미는 ~이하
  - sizes와 width를 같이 사용했을 때 width가 우선
- inline 요소

## \<audio>

- 소리 콘텐츠(MP3)를 삽입
- 속성
  - autoplay
    - 의미: 준비되면 바로 재생
    - 값: 불린(Boolean)
  - controls
    - 의미: 제어 메뉴를 표시
    - 값: 불린(Boolean)
  - loop
    - 의미: 재생이 끝나면 다시 처음부터 재생
    - 값: 불린(Boolean)
  - preload
    - 의미: 페이지가 로드될 때 파일을 로드할 지의 지정(힌트 제공)
    - 값: none(로드하지 않음), metadata(메타데이터만 로드), auto(전체 파일 로드)
    - 기본값: metadata
  - src
    - 의미: 콘텐츠 URL
    - 값: URL
  - muted
    - 의미: 음소거 여부
    - 값: 불린(Boolean)
- autoplay가 지정된 경우 preload는 무시됨
- 어떤 음량으로 시작할 것인지, 어느 구간에서부터 시작할 것인지 등을 정하고 싶으면 JS를 통해 제어해야 함
- inline 요소

## \<video>

- 동영상 콘텐츠(MP4)를 삽입
- 속성
  - autoplay
    - 의미: 준비되면 바로 재생
    - 값: 불린(Boolean)
  - controls
    - 의미: 제어 메뉴를 표시
    - 값: 불린(Boolean)
  - loop
    - 의미: 재생이 끝나면 다시 처음부터 재생
    - 값: 불린(Boolean)
  - muted
    - 의미: 음소거 여부
    - 값: 불린(Boolean)
  - poster
    - 의미: 동영상 썸네일 이미지 URL
    - 값: URL
  - preload
    - 의미: 페이지가 로드될 때 파일을 로드할 지의 지정(힌트 제공)
    - 값: none(로드하지 않음), metadata(메타데이터만 로드), auto(전체 파일 로드)
    - 기본값: metadata
  - src
    - 의미: 콘텐츠 URL
    - 값: URL
  - width
    - 의미: 동영상 가로 너비
  - height
    - 의미: 동영상 세로 너비
- inline 요소

## \<figure>, \<figcaption>

- \<figure>는 이미지나 삽화, 도표 등의 영역을 설정
- \<figcaption>은 \<figure>에 포함되어 이미지나 삽화 등의 설명을 표시(Figure Caption)
- 사용자가 보는 것 보다는 브라우저가 이해할 수 있도록 하는 태그
- 예)
  ```html
  <figure>
    <img src="milk.jpg" alt="A milk" />
    <figcaption>
      Milk is a nutrient-rich, white liquid food produced by the mammary glands
      of mammals.
    </figcaption>
  </figure>
  ```
- \<figure>은 block요소
- \<figcaption>은 inline요소

# 내장 콘텐츠

## \<iframe>

- 다른 HTML 페이지를 현재 페이지에 삽입
- 중첩된 브라우저 컨텍스트(프레임)를 표시
- 속성
  - name
    - 의미: 프레임의 이름
  - src
    - 의미: 포함할 문서의 URL
    - 값: URL
  - width
    - 의미: 프레임의 가로 너비
  - height
    - 의미: 프레임의 세로 너비
  - allowfullscreen
    - 의미: 전체 화면 모드 사용 여부
    - 값: 불린(Boolean)
  - frameborder
    - 의미: 프레임 테두리 사용 여부
    - 값: 0, 1(보통 0으로 씀)
  - sandbox
    - 의미: 보안을 위한 읽기 전용으로 삽입
    - 값: 불린(Boolean) 또는 allow-form(양식 제출 가능), allow-scripts(스크립트 실행 가능), allow-same-origin(같은 출처(도메인)의 리소스 사용 가능)
- 예)
  ```html
  <iframe
    width="1280"
    height="720"
    src="https://www.youtube.com/embed/Q9yn1DpZkHQ"
    frameborder="0"
    allowfullscreen
  ></iframe>
  ```
- 다른 페이지를 삽입하는 것이기 때문에 보안에 유의해야 함
  - sandbox속성은 삽입한 다른 페이지에 문제가 생길 수 있어서(보안에 문제되는 것은 안나옴) 별로 안쓰임
- inline 요소

## \<canvas>

- Canvas API나 WebGL API를 사용하여 그래픽이나 애니메이션을 렌더링
- JS로 canvas에 그림을 그릴 수 있음
  - HTML과 CSS로는 불가능
  - JS배울 때 더 자세히!
- 속성
  - width
    - 의미: 캔버스의 가로 너비
  - height
    - 의미: 캔버스의 세로 너비
- inline 요소

# 스크립트

## \<script>

- 스크립트 코드를 문서에 포함하거나 참조(외부 스크립트)
- 속성
  - async
    - 의미: 스크립트의 비동기적(Asynchronously) 실행 여부
    - 값: 불린(Boolean)
    - 특징: src속성 필수
  - defer
    - 의미: 문서 파싱(구문 분석) 후 작동 여부
    - 값: 불린(Boolean)
    - 특징: src속성 필수
  - src
    - 의미: 참조할 외부 스크립트 URL
    - 값: URL
    - 특징: 포함된 스크립트 코드는 무시됨
  - type
    - 의미: MIME 타입
    - 값: text/javascript(기본값)
- 눈에 보이지 않는 요소

## \<noscript>

- 스크립트를 지원하지 않는 경우에 삽입할 HTML을 정의
- 예)
  ```html
  <noscript>
    <p>Your browser does not support JavaScript!</p>
  </noscript>
  ```
- inline 요소
