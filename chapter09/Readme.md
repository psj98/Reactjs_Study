## Conditional Rendering (조건부 렌더링)

### 조건부 렌더링이란?

- 어떠한 조건에 따라 렌더링이 달라지는 것
- ex)
  ```js
  function UserGreeting(props) {
    return <h1>다시 오셨군요</h1>
  }

  function GuestGreeting(props) {
    return <h1>처음 오셨군요</h1>
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
  }
  ```

<br/>

### Element Variables

- ex)
  ```js
  function LoginButton(props) {
    return(
        <button onClick={props.onClick}>Login</button>
    );
  }

  function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>Logout</button>
    );
  }

  function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
  }
  ```

<br/>

### Inline Conditions

- 조건문을 코드 안에 넣는 것
- null을 리턴하면 렌더링되지 않음
  
1. Inline If
  - && 사용
  - ex)
    ```js
    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;

        return (
            <div>
                {unreadMessages.length > 0 &&
                    <h2>
                        {unreadMessages.length}의 읽지 않은 메시지
                    </h2>}
            </div>
        )
    }
    ```

2. Inline If-Else
    - 삼항 연산자 사용
    - ex)
        ```js
        {isLoggedIn ? 'Login' : 'Logout'}
        {isLoggedIn ? <Button onClick={Logout} /> : <Button onClick={Login}}
        ```
