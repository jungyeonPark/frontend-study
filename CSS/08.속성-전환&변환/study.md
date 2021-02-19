# transition

CSS 속성의 시작과 끝을 지정(전환 효과)하여 중간 값을 애니메이션(단축 속성)

- 개별 속성
  - transition-property
    - 의미: 전환 효과를 사용할 속성 이름
    - 기본값: all
  - transition-duration
    - 의미: 전환 효과의 지속시간 설정
    - 기본값: 0s
  - transition-timing-function
    - 의미: 타이밍 함수 지정
    - 기본값: ease
  - transition-delay
    - 의미: 전환 효과의 대기시간 설정
    - 기본값: 0s

## transition-property

전환 효과를 사용할 속성 이름을 설정(개별 속성)

- 속성 값
  - all(기본값)
    - 의미: 모든 속성에 적용
  - 속성 이름
    - 의미: 전환 효과를 사용할 속성 이름

## transition-duration

전환 효과의 지속시간을 설정(개별 속성)

- 속성 값
  - 시간
    - 의미: 전환 효과가 지속되는 시간
    - 기본값: 0s

## transition-timing-function

타이밍 함수(애니메이션 전환 효과를 계산하는 방법) 지정(개별 속성)

- 속성 값
  - ease(기본값)
    - 의미: 빠르게-느리게
    - Cubic Bezier값: cubic-bezier(.25, .1, .25, 1)
  - linear
    - 의미: 일정하게
    - Cubic Bezier값: cubic-bezier(0, 0, 1, 1)
  - ease-in
    - 의미: 느리게-빠르게
    - Cubic Bezier값: cubic-bezier(.42, 0, 1, 1)
  - ease-out
    - 의미: 빠르게-느리게
    - Cubic Bezier값: cubic-bezier(0, 0, .58, 1)
  - ease-in-out
    - 의미: 느리게-빠르게-느리게
    - Cubic Bezier값: cubic-bezier(.42, 0, .58, 1)
  - cubic-bezier(n, n, n, n)
    - 의미: 자신만의 값을 정의(0~1)
  - steps(n)
    - n번 분할된 애니메이션

## transition-delay

전환 효과가 몇 초 뒤에 시작할지 대기시간을 설정(개별 속성)

- 속성 값
  - 시간
    - 의미: 전환 효과의 대기시간을 설정
    - 기본값: 0s

# transform

요소의 변환 효과(변형)를 지정

- 사용법
  ```css
  transform: 변환함수1 변환함수2 변환함수3...;
  ```

## transform 2D 변환 함수

translate(x, y)

- 의미: 이동(X축, Y축)
- position을 relative로 바꿔서 사용하는 것과 같다고 생각할 수 있지만 position을 바꾸는 것은 배치를 완료할 때 쓰는 것임!
- position은 애니메이션 효과에 최적화 되어있지 않다
- 예를 들어 hover에서 position을 바꾸고 transition을 적용하면 잘 적용이 안되고 부하도 많음

translateX(x)

- 의미: 이동(X축)

translateY(y)

- 의미: 이동(Y축)

scale(x, y)

- 의미: 크기(X축, Y축)
- 단위: 없음(배수)

scaleX(x)

- 의미: 크기(X축)
- 단위: 없음(배수)

scaleY(y)

- 의미: 크기(Y축)
- 단위: 없음(배수)

rotate(degree)

- 의미: 회전(각도)
- 단위: deg
- 마이너스 각도 가능

skew(x-deg, y-deg)

- 의미: 기울임(X축, Y축)
- 단위: deg

skewX(x-deg)

- 의미: 기울임(X축)
- 단위: deg

skewY(y-deg)

- 의미: 기울임(Y축)
- 단위: deg

matrix(n, n, n, n, n, n)

- 의미: 2차원 변환 효과

## transform 3D 변환 함수

translate3d(x, y, z)

- 의미: 이동(X축, Y축, Z축)

translateZ(z)

- 의미: 이동(Z축)

scale3d(x, y, z)

- 의미: 크기(X축, Y축, Z축)
- 단위: 없음(배수)

scaleZ(z)

- 의미: 크기(Z축)
- 단위: 없음(배수)

rotate3d(x, y, z, a)

- 의미: 회전(X벡터, Y벡터, Z벡터, 각도)
- 단위: deg

rotateX(x)

- 의미: 회전(X축)
- 단위: deg

rotateY(y)

- 의미: 회전(Y축)
- 단위: deg

rotateZ(z)

- 의미: 회전(Z축)
- 단위: deg

perspective(n)

- 의미: 원근법(거리)
- n이 작을수록 가까이에서 보고 클수록 멀리서 봄
- 주의할 점: transform의 **가장 앞쪽**에 선언해야 함!!

matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n)

- 의미: 3차원 변환 효과
- 단위: 없음

## transform 변환 속성

transform-origin

- 의미: 요소 변환의 기준점을 설정
- 값
  - X축
    - 의미: left, right, center, %, 단위
    - 기본값: 50%
  - Y축
    - 의미: left, right, center, %, 단위
    - 기본값: 50%
  - Z축
    - 의미: 단위
    - 기본값: 0

transform-style

- 의미: 3D변환 요소의 자식 요소도 3D변환을 사용할지 설정
- 값
  - flat
    - 의미: 자식 요소의 3D변환을 사용하지 않음
    - 기본값: flat
  - preserve-3d
    - 의미: 자식 요소의 3D변환을 사용함

perspective

- 의미: 하위 요소를 관찰하는 원근 거리를 설정
- 값
  - 단위
    - 의미: px, em, cm 등 단위로 지정
- 관찰하려는 요소의 부모 요소에 설정
  - 관찰하려는 대상이 여러개일 때 사용하면 좋음
- perspective속성과 함수의 차이점
  - perspective속성
    - 적용대상: 관찰 대상의 부모 요소
    - 기준점 설정: perspective-origin
  - transform: perspective()
    - 적용대상: 관찰 대상
    - 기준점 설정: transform-origin

perspective-origin

- 의미: 원근 거리의 기준점을 설정
- 정한 기준점에서 바라보는 것처럼 보임
- 값
  - X축
    - 의미: left, right, center, %, 단위
    - 기본값: 50%
  - Y축
    - 의미: top, bottom, center, %, 단위
    - 기본값: 50%

backface-visibility

- 의미: 3D변환으로 회전된 요소의 뒷면 숨김을 설정
- 값
  - visible(기본값)
    - 의미: 뒷면 숨기지 않음
  - hidden
    - 의미: 뒷면 숨김

## matrix(a, b, c, d, e, f)

요소의 2차원 변환(Transforms) 효과를 지정

- scale(), skew(), translate() 그리고 rotate()를 지정
- 요소에 일반 변환(Transforms) 함수(2D, 3D)를 사용하더라도 브라우저에 의해 matrix함수로 계산되어 적용됨
- 2D변환 함수는 matrix, 3D변환 함수는 matrix3d로 변환
- 따라서 일반적인 경우는 matrix함수가 아닌 일반 변환 함수를 사용
