import React from 'react';

// 컴포넌트 이름은 대문자로 시작
function Hello({color, name, isSpecial}) { // 비구조화할당
    // 세미콜론은 있어도 되고 없어도 됨
    // 객체 값 안에 자바스크립트 값이기 때문에 중괄호가 한번 더 들어감
    return ( 
        <div style={{
            color
        }}>
            {/* 
                단순히 값을 보여주고 숨기고 하는거면 &&연산자를 사용하는게 편하고,
                false일 때도 값을 보여줘야 하면 삼항연산자 사용하는게 편함 
                {isSpecial ? <b>*</b> {null}}; 
            */}
            {isSpecial && <b>*</b>}    
            안녕하세요 {name}
        </div>  // html같지만 jsx라고 부름
    );
}

Hello.defaultProps = {
    name: '이름없음'
};
export default Hello;  // Hello라는 컴포넌트를 만들어 내보내주겠다는 의미