# HTML

## Basic
### Example Syntax ( **`<a href="https://github.com/ViVaKR">`** )  

+ Element ( `<a>` ) : 다른 웹사이트에 연결 (Link to another website)  
+ Attribute ( `href="url"` ) : 요소의 동작 방식을 수정 (Modifies how an element behaves)  
    + Attribute Name : Left Side  ( `href` )
    + Attribute Value : Right Side ( `https://github.com/ViVaKR` )
    + Mutiple Attributes : 속성은 복수 설정이 가능함.
+ 하나 이상의 추가 공백 또는 편집시 라인변경, 새 줄은 기본적으로 무시 됩니다. (Extra spaces are ignored in HTML)
    + 편집시 가독성을 위하여 들여쓰기를 할 수 있다는 장점이 있음
    + 들여쓰기를 위한 탭키는 기본적으로 4칸으로 되어 있으나 편집기 설정으로 2칸으로 조절 할 수 있다. ( `vscode -> settings -> tabsize` )

# CSS (Cascading Style Sheets, 계단식 스타일 시트)

## Basic
- Change the appearance of HTML elements

### CSS Syntax Meaning
```css
    /* Example Syntax */
    <style>
    button {
        background-color: red;
    }
    </style>
```
+ CSS Selector ( `button` ) : 목표 대상으로 삼을 요소 (which elements we're targeting.)
+ CSS Property ( `background-color` ) : 변경할 속성 
+ CSS Value ( `red` ) : 변경할 속성의 값
+ CSS Terminator ( `;` ) : 스타일을 끝냄. 문장의 마침표와 같은 기능
