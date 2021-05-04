import React from 'react';


// interface로 사용할 변수(타입지정)를 지정.
interface TodoListItemProps {

    todo: Todo;
    // ★★★ 아래 내용을 types.do.ts 파일에서 Todo로 지정해줌
    // todo: {
    //     text: string,
    //     complete: boolean;
    // }
}

// 위에서 만든 interface명을 제네릭으로 설정.
export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    return <li>
                <label className={todo.complete ? "complete" : undefined}>
                    <input type="checkbox" checked={todo.complete}/>
                        {todo.text}
                </label>
            </li>
}


/*
Err) 아래저럼 하면, props에 에러 메시지가 뜸. -> props의 타입이 지정되지 않았기 때문
해결) 그래서 interface로 타입을 명시할 수있게 만들어주고, React.FC에 제네릭 타입으로 이 interface를 넣어준다.

export const TodoListItem = props => {
    return 
}
*/