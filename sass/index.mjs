import { createPopper } from './node_modules/@popperjs/core/dist/esm/popper.js';


const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


createPopper(button, tooltip, {
    placement: 'right',
    modifiers: [ // 툴팁이 살짝 떨어지도록 offset을 주는 옵션 (추천!)
        {
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        },
    ],
});
