import '@/scss/styles.scss';
import _ from 'lodash';

const dialog = document.getElementById("viv-dialog");
const showButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");


// 대화상자 열기
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// 대화상자 닫기
closeButton.addEventListener("click", () => {
    dialog.close();
});

function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hi, Everyone?";
    return element;
}

document.body.appendChild(component());

// HMR을 위한 코드 (development 환경에서만 실행)
// if (module.hot) {
//     module.hot.accept();
// }
