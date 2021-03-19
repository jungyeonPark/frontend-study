import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);   

    const onIncrease = () => {
        // 함수형으로 업데이트 가능(나중에 자세히 알아볼것임)
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);

    }
    return (
        <div>
            <h1>{number}</h1>
            {/* onIncrease()이런식으로 함수를 호출하면 안됨!! 함수를 등록하는 것임!! */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;