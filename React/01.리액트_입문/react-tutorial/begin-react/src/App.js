import React, {useRef} from 'react';
import Counter from './Counter';
import Hello from './Hello'; // 뒤에 .js는 생략 가능
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';

function App() {
  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current);
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
