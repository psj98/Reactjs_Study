## Handling Events

### Event 예시

1. DOM의 Event

- ex)
    ```html
    <button onclick="count()">count</button>
    ```

2. React의 Event

- Camel Case 사용
- ex)
    ```html
    <button onClick={count}>count</button>
    ```

<br/>

### Event Handler

- 정의
  - 어떤 사건이 발생하면, 사건을 처리하는 역할
  - Event Listener라고 부르기도 함

- 예시
    ```js
    class Toggle extends React.Component {
        contructor(props) {
            super(props);

            this.state = { isToggleOn: true };

            // callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해야 함 => 괄호 없이 사용 가능
            // js에서 기본적으로 클래스 함수들이 바운드되지 않음
            // 바인드를 하지 않으면 this.handleClick은 Global Scope에서 출력됨 => undefined
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? '켜짐' : '꺼짐'}
                </button>
            )
        }
    }
    ```
- Bind 사용 X
    ```js
    class MyButton extends React.Component {
        // Class Fields Syntax 사용
        handleClick = () => {
            console.log("click : ", this);
        }

        render() {
            // ...
        }
    }
    ```
- Bind, Class Fields 사용 X
    ```js
    class MyButton extends React.Component {
        handleClick() {
            console.log("click : ", this);
        }

        render() {
            // Arrow Function 사용 => 성능 안좋음
            return (
                <button onClick={() => this.handleClick()}>Click</button>
            )
        }
    }
    ```

- 함수 컴포넌트에서의 Event 처리
    ```js
    function Toggle(props) {
        const [isToggleOn, setIsToggleOn] = useState(true);

        // 방법 1. 함수 안에 함수로 정의
        function handleClick() {
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        // 방법 2. Arrow Function
        handleClick = () => {
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        return (
            <button onClick={handleClick}>
                {isToggleOn ? 'on' : 'off'}
            </button>
        )
    }
    ```

<br/>

### Arguments 전달

- 함수에 전달할 데이터 => Event Handler에 전달할 데이터
- 매개변수
- ex) 거의 사용 X
    ```js
    <button onClick={(event) => this.deleteItem(id, event)}>
        Delete
    </button>
    <button onClick={this.deleteItem.bind(this, event)}>
        Delete
    </button>
    ``` 
- ex) 많이 사용
    ```js
    function MyButton(props) {
        const handleDelete = (id, event) => {
            console.log(id, event.target)
        };

        return (
            <button onClick={(event) => handleDelete(1, event)}>
                Delete
            </button>
        );
    }
    ```