import React from 'react';
import { TodoListItem } from './TodoListItem';

/*
★★★ 여기서 todos의 타입인 Array<Todo>의 <Todo>의 부분은
       types.ts의 파일을 따로 만들어서 관리해 주었다.
       단, "types.ts"에서 지정후 여기서 사용 시, import를 해주어야 하는데,
       import 없이 여기서 사용하려면 "types.d.ts" 로 파일명을 바꾸면 파일에 decoration을 해줌으로 따로 import를 하지 않아도 된다.
*/
const todos: Array<Todo> = [{text: "밥 먹기", complete: true}, {text: "옷 입기", complete: false}];

const App: React.FC = () => {
  return (
    <ul>
       {/* <li>태그 형태를 만들어주기 위해 <React.Fragment>태그 사용. */}
      <React.Fragment>
        <TodoListItem todo ={todos[0]}/>
        <TodoListItem todo ={todos[1]}/>
      </React.Fragment>
    </ul>
  );
}


export default App;


/* 
※ <React.Fragment> 태그를 사용한 이유는? 
 컴포넌트를 넣어줄 때 보통 <div>태그로 감싸져 적용이 된다.
 이 때 TodoListITem은 <li>태그를 갖고 있는 컴포넌트인데, 만약 <React.Fragment>를 넣어주지 않는다면, 
 아래와 같이 만들어지기 때문에 리스트 형태로 만들어지지 않을 것이다.
  <ul>
      <div>
        (<li>)<TodoListItem todo={todos[0]}/>(</li>)
      </div>
      <div>
        (<li>)<TodoListItem todo={todos[1]}/>(</li>)
      </div>
  </ul>



*/
