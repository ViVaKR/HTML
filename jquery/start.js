import person from './person.js';
import User from './user.js';
import { add, subtract, multiply, divide } from './utility.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

$(document).ready(function () {
    const user = new User(person.name);
    $('button.continue').click(function () {
        // let baseUrl = prompt('Enter the base URL');
        // $.ajax({
        //     url: `${baseUrl}`,
        //     type: 'GET',
        //     success: function (data) {
        //         console.log(data);

        //     },
        //     error: function (error) {
        //         console.log(error.message);
        //     }
        // });
        user.sayHello();

        console.log(add(1, 2));
        console.log(subtract(1, 2));
        console.log(multiply(1, 2));
        console.log(divide(1, 2));
    });
    $('button.continue').html(person.name);


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

});
