// input text form control
const input = document.getElementById('item-input');

// 키다운 이벤트
input.addEventListener('keydown', (e) => {
    // 글자수 제한
    if (e.target.value.length > 20) {
        // 끝에 문자 지우면서 깜놀하게 만들어 경각심을 불어 넣어줌.
        e.target.value = e.target.value.replace(/.$/, '');
        e.preventDefault();
        e.stopPropagation();
        return;
    }

    // 공백 및 모든 특수문자 방지 (문의 사항에 없었으나 참고로 넣은 기능)
    const regexSpecial = /[\s*,!@#\$\%\^\&*\)\(+=._-]/g;

    if (regexSpecial.test(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return;
    }

    // 영문과 숫자 표현식
    const regExp = /[A-Za-z0-9]/g;

    // 영문과 숫자가 아니면 일단 모심..
    if (!regExp.test(e.key)) {
        //

        // 첫글자에 갸 -> 가 있는 체크
        if (e.target.value.includes('가')) {
            const t = e.target.value.indexOf('가');
            if (t === 0) {
                // 그분이 맨 앞에 있으면 지우기
                e.target.value = e.target.value.replace('가', '');
            }
        }
    }
});
