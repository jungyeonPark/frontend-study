import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };
    return (
        <div>
            {/* onReset같은 다른곳에서 text바꿨을 때도 바뀌어야해서 value={text}해야함 */}
            <input onChange={onChange} value={text}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;