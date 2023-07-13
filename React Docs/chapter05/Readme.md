## Components와 Props

### Components

**특징**

- 함수와 같이 동작
- 해당 컴포넌트를 사용하여 여러 Element를 만들 수 있음

<br/>

**컴포넌트 생성**

1. Function Component

   - state 사용 불가
   - Lifecycle에 따른 기능 구현 불가

   ```js
   function Welcome(props) {
     return <h1>Hi, {props.name}</h1>;
   }
   ```

2. Class Component

   - 생성자에서 state를 정의
   - setState() 함수를 통해 state 업데이트
   - Lifecycle methods 제공

   ```js
   function Welcome(props) extends React.Component {
       render() {
           return <h1>Hi, {props.name}</h1>;
       }
   }
   ```

<br/>

**컴포넌트 이름**

- 항상 대문자로 시작
  - 소문자로 시작하는 태그는 Non-Tag로 인식

    ```js
    const element = <div />; // Non-Tag
    const element = <Welcome name="GilDong" />; // Component
    ```

<br/>

**컴포넌트 렌더링**

```js
// Welcome 컴포넌트
function Welcome(props) {
  return <h1>hi, {props.name}</h1>;
}

const element = <Welcome name="GilDong" />;
ReactDOM.render(element, document.getElementById("root"));
```

<br/>

**컴포넌트 합성**

```js
function App(props) {
    return (
        <div>
            <!-- 컴포넌트 합성 -->
            <Welcome name="GilDong1" />
            <Welcome name="GilDong2" />
            <Welcome name="GilDong3" />
        </div>
    )
}
```

<br/>

**컴포넌트 추출**

- 컴포넌트 재사용성 증가
- 개발 속도 증가

---

### Props

- Component에 전달할 다양한 정보를 담고 있는 JS 객체
- Component의 속성
- Component에 어떤 인자를 넣느냐에 따라 Element 형태가 달라짐
  - 위에서 어떤 인자가 Props 라고 생각
  - ex) 붕어빵 틀(Component) -> 재료(Props)를 다르게 해 다른 맛의 붕어빵을 만듦 (Element)

**특징**

- Read-Only => 값 변경 불가
- 값을 변경하고 싶으면?
  - 새로운 값을 컴포넌트에 전달하여 새로 Element 생성
- Pure 함수 같은 역할을 해야 함
  - 모든 리액트 컴포넌트는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄 것

**사용법**

문자열 쌍따옴표, 나머지 중괄호 사용

```js
function App(props) {
  return (
    // 정수, 변수, 다른 컴포넌트 등이 들어갈 때는 중괄호 사용
    <Profile name="GilDong" introduction="Hi" viewCount={100} />
  );
}
```

<br/>

중괄호를 사용하여 컴포넌트 넣기

```js
function App(props) {
  return (
    // 정수, 변수, 다른 컴포넌트 등이 들어갈 때는 중괄호 사용
    <Layout width={100} height={200} header={<Header title="Blog" />} />
  );
}
```
