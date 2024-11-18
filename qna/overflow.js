var bannerWidth = 113 + 10; // 이미지 간격을 포함한 너비

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.prevBtn').addEventListener('click', function (e) {
        e.preventDefault();
        moveBanner('prev');
    });

    document.querySelector('.nextBtn').addEventListener('click', function (e) {
        e.preventDefault();
        moveBanner('next');
    });
});

function moveBanner(direction) {
    var bannerList = document.querySelector('.banner-list');
    if (!bannerList.classList.contains('animated')) {
        bannerList.classList.add('animated');

        if (direction === 'next') {
            bannerList.style.transition = 'left 0.5s';
            bannerList.style.left = '-' + bannerWidth + 'px';

            bannerList.addEventListener('transitionend', function transitionEnd() {
                bannerList.style.transition = '';
                bannerList.style.left = '0px';
                bannerList.appendChild(bannerList.firstElementChild);
                bannerList.classList.remove('animated');
                bannerList.removeEventListener('transitionend', transitionEnd);
            });
        } else if (direction === 'prev') {
            bannerList.style.transition = 'left 0.5s';
            bannerList.style.left = bannerWidth + 'px';

            bannerList.addEventListener('transitionend', function transitionEnd() {
                bannerList.style.transition = '';
                bannerList.style.left = '0px';
                bannerList.insertBefore(bannerList.lastElementChild, bannerList.firstElementChild);
                bannerList.classList.remove('animated');
                bannerList.removeEventListener('transitionend', transitionEnd);
            });
        }
    }
}
