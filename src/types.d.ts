
/*
    다른 파일(App.tsx, TodoListItem.tsx 등)에서 쓰인 제네릭 타입을 여기(types.ts의 파일)을 따로 만들어서 관리해 줌.
    단, 다른 파일에서 여기 있는 것을 사용하려면, import를 해주어야 하는데,
    import 없이 여기서 사용하는 방법이 있다.
    -> "types.d.ts" 로 파일명을 바꾸면 파일에 decoration을 해줌으로 따로 import를 하지 않아도 된다.
*/
  

type Todo = {
    text: string;
    complete: boolean;
};