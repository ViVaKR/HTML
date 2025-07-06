document.addEventListener('DOMContentLoaded', function () {
    // 모든 이미지 요소를 선택합니다.
    const images = document.querySelectorAll('img[data-ratio]');

    // 각 이미지 요소를 반복 하면서 사용자 정의 속성 값을 기반으로
    // aspect-ratio 속성을 설정하는 코드를 작성합니다.
    //-->  문의에 대한 답변 파트 <--
    images.forEach(function (img) {
        // 사용자 정의 속성data-ratio 속성 값
        const ratio = img.getAttribute('data-ratio');

        // aspect-ratio 속성
        img.style.aspectRatio = ratio;
        img.style.width = '250px';
        // 기타  속성
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        img.style.borderRadius = '1rem';
        img.style.padding = '0.5rem';
    });
});
