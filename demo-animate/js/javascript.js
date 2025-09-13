



// querySelect()
function createElement() {
    const list1 = document.querySelector("#list-10");
    const items = ['항목 1', '항목 2', '항목 3'];

    items.forEach(x => {
        const li = document.createElement('li');

        li.textContent = x;

        list1.appendChild(li);
    })

}

createElement();

// querySelectAll()
function getElements() {
    const liElements = document.querySelectorAll("#list-10 li");

    Array.from(liElements).forEach(x => {
        console.log(x.textContent);
    });
}

getElements();


// async / await 방식

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${ms} 밀리초 경과!!!`);
            resolve();
        }, ms);
    })
}
async function main() {
    await delay(1000);
    await delay(2000);

    const result = await Promise.resolve('끝');

    console.log(result);
}

main();

//--> Promise

/*

    - resolve : 작업이 성공했을 때 알려주는 객체
    - reject : 작업이 실패했을 때 알려주는 객체

    ! 비동기 처리
    * 특정 코드가 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 방식

    ! Promise.all() !

    ! Promise.any() !
    * 가장 먼저 fulfilled(이행) 상태가 된 프로미스만을 반환

    ! Promise.race() !
    * fulfilled, rejected 여부에 상관없이 무조건 처리가 끝난 프로미스 결과 값을 반환


*/

const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("Hi, Everyone!!!"), 1000));

p1.then(x => {
    console.log(x);
})

console.log('\n');

function getRandomNumber(min, max) {

    if (isNaN(min) || isNaN(max) || min > max) {
        alert('Please enter valid min and max number');
        return;
    }
    // const number = Math.floor(Math.random() * 10);

    // Generate the random integer (inclusive of both min and max)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

// Promise.resolve()
function getPromiseNumber() {
    const number = getRandomNumber(50, 100);
    return Promise.resolve(number);
}

getPromiseNumber()
    .then(x => {
        console.log(`랜덤번호: ${x}`);
    })
    .catch(x => {
        console.error(x);
    });




console.log('\n');


// 체이닝
function doSomething() {
    return new Promise((resolve, reject) => {
        resolve(123);
    });
}

doSomething()
    .then(x => {
        return x + 50;
    })
    .then(x => {
        return x + 50;
    })
    .then(x => {
        console.log('Promise result', x + 1000);
    })
    .catch(err => {
        console.log('오류:', err);
    });


// //--> DOM (Document Object Model, 문서 객체 모델)

// /*
//     - HTML DOM 은 노드의 집합체
//     - 요소는 요소 노드 만을 의미함

//     * DOM Collection *

//     * DOM 생성
//     ! createElement() : HTML 요소를 생성
//     ! createTextNode() : Text 노드를 생성
//     ! createDocumentFragment() : DocumentFramgent 객체를 생성

//     * DOM 복제
//     ! cloneNode()

//     * DOM 내용 조작
//     ! textContent :
//     ! innerText :
//     ! innerHTML : Text + HTML 내용을 처리

//     * 찾기
//     ! getElementById() : id 속성의 값으로 요소 찾기
//     ! getElementsByTagName() : 태그 이름과 일치하는 모든 요소 찾기
//     ! getElementByClassName() :
//     ! querySelector() : CSS 선택자와 일치하는 첫번째 요소 찾기
//     ! querySelectorAll() : CSS 선택자와 일치하는 모든 요소 찾기

//     * 조상 요소 찾기
//     ! closest() : CSS 선택자와 일치하는 현재 요소를 포함하여 가장 가까운 조상 요소를 찾기

//     * 부모 요소 찾기
//     ! parentElement : 현재 요소의 부모 요소 찾기

//     * 자식 요소 찾기
//     ! children : 자식 요소 목록 찾기
//     ! firstElementChild : 첫 번째 자식 요소 찾기
//     ! lastElementChild : 마지막 자식 요소 찾기

//     * 형제 요소 찾기
//     ! previousElementSibling : 이전 형제 요소 찾기
//     ! nextElementSibling : 다음 형제 요소 찾기

//     * 요소 추가
//     ! appendChild()
//     ! insertBefore()

//     * 요소 교체
//     ! replaceChild()

//     * 요소 제거
//     ! removeChild() : 지정한 자식 요소를 제거
//     ! remove() : 자신을 호출한 요소를 DOM 에서 제거




// */

// console.log('[ querySelector ]\n');
// console.log('- CSS 선택자와 일치한는 첫 번째 요소를 반환');

// const ele = document.querySelector('li');
// console.log(ele.textContent);

// const btn2 = document.querySelector('#btn2');

// btn2.addEventListener('click', () => {
//     alert('버튼이 클릭되었습니다.');
// });


// console.log('- ( 음식 ) -\n');
// const foods = document.getElementsByClassName("food");
// Array.from(foods).forEach(li => {
//     console.log(li.textContent);
// });

// console.log('\n');

// const liElements = document.getElementsByTagName("li");

// for (let i = 0; i < liElements.length; i++) {
//     console.log(liElements[i].textContent);
// }

// console.log('for loop ... of\n');

// for (const e of liElements) {
//     console.log(e.textContent);
// }

// console.log('[...HTMLCollection]\n');

// // --> HTMLCollection 은 배열이 아니므로 forEach() 함수를 바로 사용할 수 없음
// const arr1 = [...liElements];
// arr1.forEach(x => {
//     console.log(x.textContent);
// });

// console.log('Array.from\n');
// const arr2 = Array.from(liElements);
// arr2.forEach(x => {
//     console.log(x.textContent);
// })

// const changeColor = newColor => {
//     const ele = document.getElementById("hello");
//     ele.style.color = newColor;


// };
