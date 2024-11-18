let currentIndex = 0;
let autoSlideInterval = null;

// 이미지 파일 이름을 이곳에 넣어 배열을 만드세요.
const imageFiles = [
    'img1.jpg',
    'img2.png',
    'img3.jpg',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png'
];

function loadImages() { // 이미지 파일을 불러와 슬라이드로 만듭니다.
    const slideshow = document.getElementById('slideshow'); // 슬라이드 쇼를 감싸는 div 요소입니다.
    imageFiles.forEach(file => { // 이미지 파일을 하나씩 읽어 슬라이드로 만듭니다.
        const img = document.createElement('img'); // img 요소를 만듭니다.
        img.src = `${file}`; // 이미지 파일을 설정합니다.
        img.classList.add('slide'); // 슬라이드에 해당하는 클래스를 추가합니다.
        img.alt = file; // 이미지 파일 이름을 alt 속성에 추가합니다.
        slideshow.appendChild(img); // 슬라이드 쇼에 이미지를 추가합니다.
    });
}

function showSlide(index) { // 슬라이드를 보여줍니다.
    const slides = document.querySelectorAll('.slide'); // 모든 슬라이드를 가져옵니다.
    const totalSlides = slides.length; // 슬라이드의 총 개수입니다.

    if (index >= totalSlides) { // 마지막 슬라이드 이후에는 첫 번째 슬라이드로 이동합니다.
        currentIndex = 0; // 첫 번째 슬라이드의 인덱스입니다.
    } else if (index < 0) { // 첫 번째 슬라이드 이전에는 마지막 슬라이드로 이동합니다.
        currentIndex = totalSlides - 1; // 마지막 슬라이드의 인덱스입니다.
    } else { // 그 외의 경우에는 해당 슬라이드로 이동합니다.
        currentIndex = index; // 이동할 슬라이드의 인덱스입니다.
    }

    const offset = -currentIndex * 400; // 슬라이드의 이동 거리입니다.
    document.querySelector('.slideshow').style.transform = `translateX(${offset}px)`; // 슬라이드를 이동합니다.
}

function prevSlide() { // 이전 슬라이드로 이동합니다.
    showSlide(currentIndex - 1); // 이전 슬라이드로 이동합니다.
}

function nextSlide() { // 다음 슬라이드로 이동합니다.
    showSlide(currentIndex + 1); // 다음 슬라이드로 이동합니다.
}

function autoSlide() { // 자동 슬라이드 기능입니다.
    nextSlide(); // 다음 슬라이드로 이동합니다.
}

function toggleAutoSlide() { // 자동 슬라이드를 시작하거나 중지합니다.
    const autoButton = document.querySelector('.auto');
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
        autoButton.textContent = 'Auto';
    } else {
        nextSlide(); // 즉시 슬라이드 이동
        autoSlideInterval = setInterval(autoSlide, 3000);
        autoButton.textContent = 'Stop';
    }
}
// 1. 시작점 이벤트 리스너를 추가합니다.
document.addEventListener('DOMContentLoaded', () => {
    loadImages(); // 이미지 파일을 불러옵니다.
    showSlide(currentIndex); // 첫 번째 슬라이드를 보여줍니다.
});
