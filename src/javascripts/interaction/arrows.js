var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

var arrowLeft = new Image ();
arrowLeft.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/keyboard-white-left.png";

var arrowRight = new Image ();
arrowRight.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/keyboard-white-right.png";

var litArrowLeft = new Image ();
litArrowLeft.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/keyboard-white-lit-left.png";

var litArrowRight = new Image ();
litArrowRight.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/keyboard-white-lit-right.png";

function arrows(dx) {
    var image = "";
    if (dx < 290) {
        image = arrowLeft;
    }else if (dx > 280 && dx < 350) {
        image = litArrowLeft;
    }else if (dx < 420 && dx > 350) {
        image = litArrowRight;
    }else {
        image = arrowRight;
    }
    ctx.scale(1.2, 1.2);
    ctx.drawImage(
        image, 0, 0, 16, 16, dx + 10, 300, 32, 32
    );
    ctx.scale(1/1.2, 1/1.2);
}

export default arrows;