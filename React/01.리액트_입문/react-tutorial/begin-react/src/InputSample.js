import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs; // inputs를 사용하기 쉽게 하기 위해 비구조화 할당 사용
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            // 객체 상태를 업데이트할 때는 기존의 값을 복사해줘야함
            ...inputs,   // spread문법
            [name]: value,  // []를 써서 name이 name이냐 nickname이냐에 따라 다른 키 값이 들어감
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
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