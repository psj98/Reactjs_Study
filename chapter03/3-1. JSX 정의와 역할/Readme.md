### 예제 코드

```js
const elements = <h1>Hello World</h1>;
```

### JSX 사용 코드

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

### JSX 사용하지 않은 코드

```js
class Hello extends React.Component {
    render(){
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, {toWhat="World"}, null),
    document.getElementById('root')
)
```
