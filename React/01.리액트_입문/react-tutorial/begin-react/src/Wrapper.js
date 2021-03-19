import React from 'react';

// children은 태그 사이의 내용을 의미
function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };
    return <div style={style}>{children}</div>
}

export default Wrapper;