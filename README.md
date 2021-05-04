 
####  프로젝트 생성
[react + typescript CRA]
	
	$ npx create-react-app ts-tutorial --template typescript

[기존 CRA로 프로젝트를 생성한 상태에서 TypeScript 추가]
1)

	$ # CRA로 리액트 앱을 먼저 생성 
	$ yarn create react-app my-app 

	$ # 필요한 패키지를 설치 
	$ yarn add typescript @types/node @types/react @types/react-dom @types/jest

2 )
TypeScript 관련 패키지를 설치한 후 .js파일들을 모두 .tsx로 확장자를 변경해준다
   그리고 개발 서버를 다시 시작하면 자동으로 tsconfig.json 파일이 생성된다

---

#### 기본설정file
[ tsconfig.json ] : 타입스트립트에 특화된 옵션들을 정의
[ tslint.json ] : TSLint 를 위한 세팅 정보들 포함
[ package.json ] : 
프로젝트에서 사용하는 패키지들의 의존성 관리, 
							프로젝트 작업 중 사용되는 명령어들에 대한 정보 제공,
테스팅, 프리뷰 및 배포를 위한 명령어들도 포함

[ public 폴더 ] : 
배포할 HTML 등의 파일과 이미지 파일들을 포함
index.html 파일과는 별개로 어떤 파일이든 삭제해도 무관

[ src 폴더 ] : 
자바스트립트, 타입스트립트 및 CSS 코드를 포함 
index.tsx가 최초 엔트리 파일 이름을 바꾸지 않길 권장.

---
### 초기 설정 및 사용
#### Ⅰ   . tsconfig.json 설정
현 프로젝트의 경우, 초기 상태에서 
"baseUrl" : "./src", 	 추가
=>  ./src를 절대 경로로 갖겠다는 의미 
		(추후 프로젝트가 커지면 경로발생문제를 막기위해)   
		    

#### Ⅱ. 불필요 파일 삭제
- App.css
- App.test.tsx 
- index.css
- logo.svg
- serviceWorker.ts 또는 reportWebVitals.ts



#### Ⅲ.  App.tsx / index.tsx  파일변경
##### [App.tsx]
	import React from 'react';

	function App() {
	  return (
	    <div>Hello World</div>
	  );
	}

	export default App;


##### [index.tsx]
	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App';

	ReactDOM.render(
	  <App />,
	  document.getElementById('root')
	);





#### Ⅳ. 프로젝트 실행
	$ npm run start


---
### 프로젝트 사용
#### [ 프로젝트 테스트 ]
	$ npm run test
위 명령어는Jest를 실행 시킴. 
Jest는 매우 효율적인 테슽 관리 툴이고 .test.ts 나 .spec.ts로 정의도니 파일등에 대해새ㅓ 모두 테스트를 진행한다.
npm run start와 동일하게 한번 실행하면 위의 파일등이 변경 될 때마다 새롭게 테스트 한다.


#### [ 프로젝트 빌드 ] 
최적화된 JS와 CSS파일을 만들어 내며 ./build/static/js 와 ./build/static/css 에 각각 저장된다
중간 중간 프로젝트의 최종 크기등을 확인 하고 싶을때도 사용할 수 있다.


#### [ 컴포넌트에서 함수 타입의 props 받아오기 ]
만약 이 컴포넌트에서 특정 함수를 props 로 받아와야 한다면 다음과 같이 타입을 지정 할 수 있답니다

	type GreetingsProps = {
		  name: string;
		  mark: string;
		  optional?: string;
		  onClick: (name: string) => void;
		  // void는 아무것도 리턴하지 않는다는 함수를 의미.
	};




---
### [참고]
#### [추가 플러그인 설치]
	$npm i -D eslint-config-airbnb-base # 리액트 관련 규칙 X 
	$npm i -D eslint-config-airbnb # 리액트 관련 규칙 O
airbnb에서 제작한 플러그인인데 리액트 관련 규칙을 설정해주는 플러그인

	$npm i -D eslint-plugin-react eslint-plugin-react-hooks
	$npm i -D eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-prettier eslint-config-prettier
eslint-plugin-import : ES6의 import, export 구문을 지원, 필수 플러그인
eslint-plugin-react : React 규칙이 들어있는 플러그인
eslint-plugin-react-hooks : React Hooks 규칙이 들어있는 플러그인
eslint-plugin-jsx-a11y : JSX요소의 접근성 규칙에 대한 정적 검사 플러그인

#### [확장 프로그램]
- tslint 
typescript에 맞지 ㅇ낳느 ㅁ누법들에 대해 경고 혹은 에러 밑줄을 확인 할 수 있다.


---
### 기본개념
1 [ 클래스와 함수]
 리액트 컴포넌트를 만들 수 있는 방법은 1)클래스(class)와 2)함수(function) 중 만들어야 할 애플리케이션에 맞게 선택해서 사용할 수 있다.
이 예제에서는 state, lifestyle, ref를 사용하지 않을 것이기 때문에 fucntion component 방식으로 만들 예정이다.

-> 기본적인 구조

	import React from 'react';
	const <함수명>: React.FC = () => { 
		return <HTML>
	}



-----------

#### [참고문헌 ]
-- react + typescript 생성
https://kr-blog.gihwan.com/56
-- react + typescript 초기 설정
https://velog.io/@junghyeonsu/React-create-react-app-Typescript-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC
-- 간단한 react + typescript todolist
https://withseungryu.tistory.com/42?category=878052
