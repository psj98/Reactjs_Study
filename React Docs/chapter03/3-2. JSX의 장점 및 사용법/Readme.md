### 장점

1. 간결함

2. 가독성

- 버그 발견 쉬움

3. Injection Attacks 방어

```js
const title = response.potentiallyMaliciousInput;
```

---

### 사용법

- js 를 사용하고 싶은 경우 {}로 묶어서 사용

```js
class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />
    document.getElementById('root')
)
```
