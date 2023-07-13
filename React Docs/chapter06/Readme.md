## State

- React Component의 상태
- React Component의 변경 가능한 데이터
- 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함
- JS 객체

```js
class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }
}
```

- 직접 수정하면 안됨

```js
// state 직접 수정 -> 잘못된 방법
this.state = {
  name: "GilDong",
};

// setState 함수를 통한 수정 -> 정상적인 사용법
this.setState({
  name: "GilDong",
});
```

---

## LifeCycle

- React Component의 생명 주기
  - 컴포넌트가 생성되는 시점과 소멸되는 시점
- Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라짐

1. Mount (생성)

- 생성 후, 렌더링
- componentDidMount() 호출

2. Update (변경)

- props, setState() 등을 통한 변경
- componentDidUpdate() 호출

3. UnMount (소멸)

- 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
- componentWillUnmount() 호출
