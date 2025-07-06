const dog = {
    type: 'dog',
    name: 'Rex',
    age: 4,
    owner: {
        name: 'Bob',
        age: 45
    }
}

console.log('log'); // 개발 중에 사용
console.info('info'); // 정보
console.warn('warn'); // 경고
console.error('error'); // 에러 발생 시 사용


// assert

console.assert(2 === 3, 'not same!'); // Assertion failed: not same!,  출력됨.
console.assert(2 === 2, 'same!'); // Assertion failed: same!, 출력되지 않음.

// print object
console.table(dog);
console.dir(dog, { colors: false, depth: 1 });
// colors: false, depth: 0 옵션을 주면 색상이 없어지고 depth가 0이 되어서 객체의 첫번째 단계만 보여줌.


// measuring time
console.time('for loop'); // 시작 시간 측정
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop'); // 끝 시간 측정


// counting
function a() {
    console.count('a function');
}

a();
a();
a();
console.countReset('a function'); // count 초기화
a();


// trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.trace(); // 함수 호출 스택을 출력
    console.log('trace');
}

f1(); // f3 -> f2 -> f1 순으로 출력됨. f3에서 console.trace()를 호출했기 때문에 f3부터 거꾸로 출력됨.
