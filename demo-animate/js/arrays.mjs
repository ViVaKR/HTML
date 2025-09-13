

export default function createArray() {
    /*
        Array()
        Array.of()
        Array.from()
        const arr1 = [];
        const arr2 = [1, 2, 3];
    */

    // 생성자 함수
    const arr1 = new Array(5); // 크기가 5인 빈 배열 선언
    console.log(arr1);

    const arr2 = new Array(1, 2, 3, 4, 5);
    console.log('new Array:', arr2);

    const arr3 = Array.of(11, 22, 33, 44, 55);
    console.log('Array.of:', arr3);

    const arr4 = Array.from("Hello, World!");

    console.log('Array.from:', arr4);

    const arr5 = [];


    // 한글테스글
    // 한글 한글
    arr5[0] = '사과';
    arr5[1] = '배';
    arr5[2] = '귤';
    console.log(arr5);

    // 배열메서드
    const arr6 = [];
    arr6.push("ABC");
    arr6.push("DEF");
    console.log(arr6);

    console.log('Array.isArray:', Array.isArray(arr1));

    const obj = (a, b) => {
        console.log(`a + b = ${a + b}`);
        return arguments;
    }

    console.log("arguments:", Array.isArray(obj(3, 5)));


    /*
        ! 유사배열 !
        - 문자열
        - 함수의 arguments
        - NodeList
        - HTMLCollection
    */

    const numbers = [1, 2, 3, 4, 5, 6];
    console.log('numbers:', numbers);

    const doubled = Array.from(numbers, x => x * 3);

    console.log(doubled);

    /*
        * filter() : 필터링, 새 배열 반환, 조건에 맞는 요소 선택, .NET (LINQ) --> Where()
        * map() : 조건에 맞는 요소 선택, 새 배열 반환, 조건에 맞는 요소 선택, .NET (LINQ) --> Select()
        * forEach() : 반복 및 사이드 이펙트, 새 배열 반환 하지 않음
        *

        ! 등장 시기 !
        * .NET LINQ (Language Intergrated Query) 의 등장 : 2007년, C# 3.0 .NET Framework 3.5 부터 도입
        * JavaScript 의 Array.prototype 메서드 표준화 : 2009년, ECMAScript 5 (ES5) 에서
        * Array.prototype.forEach, Array.prototype.map, Array.prototype.filter, Array.prototype.reduce 공식화
        - 공통의 진화 -
    */

    /*
        ! includes !
    */

    /*
        ! map() 함수 !
        * 콜백 함수로 매핑하여 새로운 배열을 반환
        * 닷넷의  Select() 와 유사..
        * 숫자 배열을 제곱한 새 배열 만들기
        * 문자열 배열을 모두 소문자로 바꾸기
        * 객체 배열에서 특정 속성만 추출 하기
        * 기존 배열을 가공하여 UI 컴포넌트로 변환하기 (예: React 의 JSX 렌더링)

        // 화살표 함수
        - map((element) => { ... })
        - map((element, index) => { ... })
        - map((element, index, array) => { ... })

        // 콜백 함수
        - map(callbackFn)
        - map(callbackFn, thisArg)

        // 인라인 콜백 함수
        - map(function (element) { ... })
        - map(function (element, index) { ... })
        - map(function (element, index, array) { ... })
        - map(function (element, index, array) { ... }, thisArg)

    */

    const numberMap = numbers.map((number) => {
        return number * number;
    });
    console.log('\n');
    console.log('map');
    console.log(numberMap);


    const fruits = ["Apple", "Banana", "Cherry"];
    const lower = fruits.map(function (fruit) {
        return fruit.toLowerCase();
    });

    console.log(lower);

    // 객체
    const users = [
        { id: 1, name: "Kim" },
        { id: 2, name: "Bum" },
        { id: 3, name: "Jun" }
    ];

    const names = users.map((user) => {
        return user.name;
    });

    console.log(names);

    const modified = numbers.map(function (number) {
        if (number % 2 === 0)
            return "Even";
        else
            return "Odd";
    });

    console.log(modified);

    /*
        ! filter !

        - true, false 를 반환
        - .net where 와 같음

    */

    // 필터링할 배열
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function isEven(value) {
        return value % 2 === 0; // 짝수인 경우 true 반환
    }

    const evenNumbers = nums.filter(x => x % 2 === 0);
    console.log('\n');
    console.log('filer');
    console.log(evenNumbers);

    console.log('\n');

    const uniqueNumbers = nums.filter((num, index, array) => {
        return array.indexOf(num) === index;
    });

    console.log('index');
    console.log(uniqueNumbers);

    const filtered = nums.filter(x => {
        return x % 2 === 0 && x < 5;
    });

    console.log(filtered);

    const words = ["apple", "banana", "cherry", "date", "fig"];
    const longWords = words.filter(word => word.length >= 5);
    console.log(longWords);

    /*
        ! reduce() !
        * 배열을 순회하면서 콜백 함수를 사용하여 배열을 하나의 값으로 반복적으로 줄여(reduce) 단일 값으로 반환
        * 원본 배열은 그대로 유지되며, 최종적으로 반복적으로 줄인 단일 값이 반환됩니다.
        * 배열의 모든 요소를 더해 누적되 ㄴ하나의 값을 생성하는 예제

        // 콜백 함수
        * reduce(callbackFn)
        * reduce(callbackFn, initialValue)
    */

    function sum(total, number) {
        // 이전의 결과 값과 현재 요소를 더합니다.
        return total + number;
    }

    // 배령의 모든 요소레 콜백 함수를 적용하여 집계한 하나의 결과 값을 반환
    const result = nums.reduce(sum);
    console.log('reduce: (1 ~ 10)', result);

    console.log('\n');

    // 요소 곱하기
    const nums2 = [1, 2, 3, 4, 5];
    const multiply = nums2.reduce((total, num) => total * num, 1);
    console.log(multiply);

    // 배열 최솟값 찾기
    const num3 = [5, 3, 9, 2, 7];
    console.log('원본배열:', num3);
    const min = (min, item) => {
        return (min < item) ? min : item;
    }
    const rs1 = num3.reduce(min, num3[0]);
    console.log('최소값:', rs1);

    // 배열 최댓값 찾기
    const max = (max, item) => {
        return (max > item) ? max : item;
    }

    const rs2 = num3.reduce(max, num3[0]);
    console.log('최댓값:', rs2);

    // 배열 반환
    const num4 = [1, 2, 3, 4, 5];
    const square = (array, item) => {
        // 현재 요소의 제곱 값을 계산하고 배열에 추가
        array.push(item);
        return array;
    }

    const squaredArray = num4.reduce((array, item) => {
        array.push(item * item);
        return array;
    }, []);

    console.log("Squared Array:", squaredArray);

    /*
        ! find !
    */

    const colors = ['red', 'green', 'blue'];
    const green = colors.find(color => {
        return color === 'green';
    });

    console.log(green);

    const people = [
        { name: 'Alice', age: 35 },
        { name: 'Bobby', age: 25 },
        { name: 'Charlie', age: 35 }
    ];

    const targetName = 'Bobby';
    const person = people.find(x => x.name === targetName);
    console.log(person);

    console.log('\n');
    const products = [
        { name: 'Laptop', price: 1000 },
        { name: 'Phone', price: 500 },
        { name: 'Tablet', price: 300 }
    ];

    const rs3 = products.find(x => x.price < 600);
    console.log(rs3);

    console.log('\n');

    const txt3 = "Hello, World";
    const term = "World";

    const rs5 = txt3.includes(term);
    console.log(rs5);

    const content = '이 문장에는 원치 않는 단어가 포함되어 있습니다.';

    const filterWord = ['원치 않는', '나쁜', '부적절한'];

    filterWord.forEach(word => {
        if (content.includes(word)) {
            let filtered = content.replace(word, '***');
            console.log(filtered);
        }
    });

    /*
        ! URL 인코딩 함수 !
        * encodeURI() : 경로 구분자 등 특수한 의미를 갖는 문자들은 인코딩 하지 않음.
        * encodeURIComponent()
    */

    const uri = "https://www.example.com/x=샘플 값?no=23";

    const encoded = encodeURI(uri);
    console.log(encoded);

    const uri2 = "https://example.com/search?query=Hello, World&page=1";
    const encoded2 = encodeURI(uri2);
    console.log(encoded2);
}


/*

    * imp : import fs from 'fs';
    * imn : import 'animate.css';
    * imd : import { rename } from 'fs';
    * ime : import & as localAlias from 'fs';
    * ima : import { rename as localRename } from 'fs';
    * rqr : require('');
    * req : conset packageName = require('packageName');
    * mde : module.exports = { };

*/
