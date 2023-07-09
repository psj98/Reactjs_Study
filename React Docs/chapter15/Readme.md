## CSS와 Selector

### CSS

- Cascading Style Sheet
- Selector와 같이 사용
- ex)
    ```css
    h1 {
        color: green;
        font-size: 16px;
    }
    ```

<br/>

### Selector

1. Element Selector
    - 엘리먼트 선택자 : 태그명 사용
        ```css
        h1 {
            color: green;
        }
        ```

2. ID Selector
    - ID 선택자 : # 사용
        ```css
        #section {
            background-color: green;
        }
        ```

3. Class Selector
    - 클래스 선택자 : . 사용
        ```css
        .medium {
            font-size: 20px;
        }
        ```

4. Universal Selector
    - 전체 선택자
        ```css
        * {
            font-size: 20px;
        }
        ``` 

5. Grouping Selector
    - 그룹으로 묶어서 사용
        ```css
        h1, h2 {
            color: black;
        }
        ```

<br/>

### 상태와 관련된 대표적인 Selector

1. :hover
    - 마우스 커서가 element 위에 올라왔을 때

2. :active
    - 주로 `<a>` 태그에 사용
    - element가 클릭됐을 때

3. :focus
    - input 태그에 사용
    - element가 초점을 갖고 있을 때

4. :checked
    - radio button이나 checkbox 같은 유형의 input 태그가 체크되어 있는 경우

5. :first-child, :last-child
    - 상위 element를 기준으로 각각 첫 번째 child, 마지막 child일 경우

<br/>

### Display 속성

1. none
    - element를 화면에서 숨기기 위해 사용

2. block
    - 블록 단위로 element 배치

3. inline
    - element를 라인 안에 넣는 것

4. flex
    - element를 블록 레벨의 flex container로 표시
    - container이기 떄문에 내부에 달느 element들을 포함

<br/>

### Visibility 속성

1. visible
    - element를 화면에 보이게 하는 것

2. hidden
    - 화면에서 안 보이게 감추는 것
    - element를 안 보이게만 하는 것
    - 화면에서의 영역은 차지

<br/>

### Position 속성

1. static
    - 기본값으로 element를 원래의 순서대로 위치 시킴

2. fixed
    - element를 브라우저 window에 상대적으로 위치시킴

3. relative
    - element를 보통의 위치에 상대적으로 위치시킴

4. absolute
    - element를 절대 위치에 위치시킴

<br/>

### 가로, 세로 길이와 관련된 속성

- width, height
- min-width, min-height
- max-width, max-height

<br/>

### FlexBox

- Flex-Container
  - Flex-Item을 감싸고 있는 컨테이너
- Flex-Item

- 속성
  - flex-direction : row, column, row-reverse, column-reverse
  - align-items : stretch, flex-start, center, flex-end, baseline
  - justify-content : flex-start, center, flex-end, space-between, space-round

<br/>

### Styled-Components

- 설치 방법
  - ```npm install --save styled-components```

