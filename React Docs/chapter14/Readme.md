## Context

### Context란?

**방식 비교**
- 기존 방식
  - 컴포넌트의 props를 통한 데이터 전달
- Context 사용
  - props를 사용하지 않고 바로 데이터 전달 가능

**언제 Context를 사용해야 할까?**

- 여러 개의 컴포넌트들이 접근해야 하는 데이터
  - ex) 로그인 여부, 로그인 정보, UI 테마 등
- props를 통해 많은 데이터를 전달해야 하는 경우에 사용

**사용 방법**
- `React.createContext(기본값)` 사용
- 만약, 상위 레벨에 매칭되는 Provider가 없다면 기본값이 사용도미
- 기본값으로 undefined를 넣으면 사용되지 않음
  

- `<OOContext.Provider value={ }>`를 통해 전달 가능
- value 값이 consumer 컴포넌트
- Provider 컴포넌트가 재렌더링될 때마다 모든 하위 consumer 컴포넌트가 재렌더링 됨
  - state를 사용하여 불필요한 재렌더링을 막음

- Class.contextType
  - Provider 하위에 있는 Class Component에서 Context 데이터에 접근하기 위해 사용

- Context.Consumer
  - Context Data를 구독하는 컴포넌트
  - ex) `{value => /* 컨텍스트의 값에 따라 컴포넌트들 렌더링 */}`

- Function as a Child
  - 컴포넌트의 자식으로 함수를 사용하는 방법
  - ex) `children={name => <p>이름 : {name}</p>}`

- Context.displayName
  - 문자열 속성
  - ex) Provider나 Consumer를 표시할 때 사용

- 여러 개의 Context 사용하기
  - 중첩해서 사용

**고려해야 할 점**
- 다른 레벨에 많은 데이터를 필요로 할 때만 사용
- 너무 많이 사용할 경우, 재사용성이 떨어짐 => 효율성 저하

**useContext() Hook**

- 파라미터로 Context 객체 전달

```js
function MyComponent(props) {
    const value = useContext(MyContext);

    return (
        // ...
    )
}
```