// math.js
function openDialog() {
    const dialog = document.querySelector('dialog');
    dialog.show();
}

function closeDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
}

function drawRect() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(0, 0, 50, 50);
    }

}

drawRect();


function showProduct() {

    const details = document.getElementById("product-details");


    details.addEventListener("click", function () {
        const id = this.dataset.productId;
        console.log(id)
        const product = document.getElementById(id);
        const name = product.dataset.name;
        const price = product.dataset.price;
        const stock = product.dataset.stock;
        const color = product.dataset.color;

        const msg =
            `제품 이름: ${name}\n` +
            `가격: ${price}\n` +
            `재고: ${stock}\n` +
            `색상: ${color}`;

        console.log(msg);

    });
}

showProduct();

function demo1() {
    const obj = {};
    obj.prop = 3.14;
    console.log(obj.prop);
}

demo1();
