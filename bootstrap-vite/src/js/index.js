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
