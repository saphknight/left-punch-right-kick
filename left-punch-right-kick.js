var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

var background = new Image();
background.src = "C:/Users/George/Desktop/left-punch-right-kick/left-punch-right-kick assets/Background.png";

background.onload = () => {
    ctx.drawImage(background,0,0)
    plyrSprt.render();
}


var player = new Image(); 
player.src = "C:/Users/George/Desktop/left-punch-right-kick/left-punch-right-kick assets/player-sprite-4/adventurer-hand-combat-Sheet.png"

function sprite(options) {
    const that = {};

    that.context = options.context.getContext("2d");
    that.height = options.height;
    that.width = options.width; 
    that.image = options.image;

    that.render = () => {
        that.context.drawImage(
            that.image, 0, 0, that.width, that.height, 450, 520, that.width, that.height
        )
    }

    return that 
}

var plyrSprt = sprite({
    context: canvas,
    height: 50,
    width: 37,
    image: player 
})