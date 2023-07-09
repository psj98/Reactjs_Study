## Hooks

<br>

### useState()

**useState란?**
- state를 사용하기 위한 Hook

**사용법**
```js
const [변수명, set함수명] = useState(초기값);
```

- ex)
    ```js
    function Counter(props) {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>클릭</button>
            </div>
        );
    }
    ```

----

### useEffect()

**useEffect란?**
- Side effect를 수행하기 위한 Hook
- 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없는 것을 함수 컴포넌트에서 Side effect를 실행할 수 있게 해주는 Hook
    ```js
    useEffect(이펙트_함수, 의존성_배열);
    ```

<br/>

**특징**
- 실행되는 경우
  - 처음 컴포넌트가 렌더링된 이후에 실행
  - 업데이트로 인한 재렌더링 이후에 실행
- mount, unmount 시에 단 한 번씩만 실행되게 할 경우
    ```js
    useEffect(이펙트_함수, []);
    ```
- 의존성 배열 생략 -> 컴포넌트가 업데이트될 때마다 호출됨
    ```js
    useEffect(이펙트_함수);
    ```

- ex)
    ```js
    function Counter(props) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            // 브라우저 API를 사용하여 title 업데이트
            document.title = `You Clicked ${count} times`;
        });

        return (
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>클릭</button>
            </div>
        );
    }
    ```

- ex) componentWillUnmount 구현
    ```js
    function UserStatus(props) {
        const [isOnline, setIsOnline] = useState(null);

        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        useEffect(() => {
            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);

            // unmount될 때 호출
            return () => {
                ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
            };
        });

        if(isOnline === null) {
            return '대기중';
        }

        return isOnline ? 'Online' : 'Offline';
    }
    ```

- ex) useEffect()를 하나의 컴포넌트에 여러 개 사용 가능
    ```js
    function UserStatusWithCounter(props) {
        const [count, setCount] = useState(0);
        useEffect(() => {
            // 브라우저 API를 사용하여 title 업데이트
            document.title = `You Clicked ${count} times`;
        });

        const [isOnline, setIsOnline] = useState(null);
        useEffect(() => {
            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);

            // unmount될 때 호출
            return () => {
                ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
            };
        });

        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
    }
    ```

<br/>

**정리**

```js
useEffect(() => {
    // 컴포넌트가 마운트 된 이후, 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 mount와 unmount 시에 단 한 번씩만 실행됨
    // 의존성 배열 생략 시, 컴포넌트 업데이트 시마다 실행됨
    
    return () => {
        // Component가 mount 해제되기 전에 실행됨
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```

----

### useMemo()

**useMemo란?**

- Memoized value를 리턴하는 Hook

```js
const memoizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과 반환
        return computeExpensiveValue(의존성_변수1, 의존성_변수2);
    },
    [의존성_변수1, 의존성_변수2]
)
```

- 의존성 배열에 들어있는 변수가 변할 때만 create 함수를 호출하여 결과값 반환
- 변하지 않을 때는 기존 값 반환
- 빠른 렌더링 속도
- useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행됨
  - 렌더링할 때 실행되지 않는 함수는 넣으면 안됨


- 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨
    ```js
    const memoizedValue = useMemo(
        () => computeExpensiveValue(a, b)
    );
    ```

- 의존성 배열이 빈 배열일 경우, 컴포넌트 mount 시에만 호출
    ```js
    const memoizedValue = useMemo(
        () => {
          return computeExpensiveValue(a, b);  
        },
        []
    );
    ```

----

### useCallback()

**useCallback이란?**

- useMemo() Hook과 유사하지만, 값이 아닌 함수 반환

**사용법**

```js
const memoizedCallback = useCallback(
    () => {
        doSomething(의존성_변수1, 의존성_변수2);
    },
    [의존성_변수1, 의존성_변수2]
);
```

- 의존성 배열에 있는 변수 중 하나라도 변경되면, memoization된 Callback() 함수 반환

----

### useRef()

**useRef란?**

- Reference를 사용하기 위한 Hook
  - Reference : 특정 컴포넌트에 접근할 수 있는 객체
    - refObject.current : 현재 참조하고 있는 Element
- 내부의 데이터가 변경되었을 때 별도로 알리지 X


**사용법**

```js
const refContainer = useRef(초기값);
```

----

### Hooks 규칙

- 무조건 최상위 레벨에서만 호출해야 함
- 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 함
- ex) 잘못된 Hook 사용법
    ```js
    function MyComponent(props) {
        const [name, setName] = useState('Inje');

        // name에 따라 호출되는 순서가 달라짐
        if(name !== ''){
            useEffect(() => {
                ...
            });
        }
    }
    ```

- 리액트 함수 컴포넌트에서만 Hook을 호출해야 함

- eslint-plugin-react-hooks : Hook의 규칙을 따르도록 강제해주는 Plug-in

----

### Custom Hook 만들기

- 이름이 **use로 시작**하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수
- 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음
- 각 Custom Hook 호출에 대해 분리된 state를 얻게 됨
- 각 Custom Hook의 호출은 완전히 독립적 

```js
function useUserStatus(userId) {
    cosnt [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChagne);
        };
    });

    return isOnline;
}
```

```js
function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id);

    if(isOnline === null) {
        return 'waiting';
    }

    return isOnline ? 'Online' : 'Offline';
}

function UserListItem(props) {
    const isOnline = useUserStatus(props.user.id);

    return (
        <li style = {{ color: isOnlnie ? 'green' : 'black' }}>
            {props.user.name}
        </li>
    );
}
```