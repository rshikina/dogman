var BubbleShoot = window.BubbleShoot || {};
var bigDog;
BubbleShoot.Game = class {


    curBubble;
    
    init(){
        this.curBubble = "funny";
        bigDog = this;
        console.log(this);
        console.log("break");
        console.log(this.curBubble);
        console.log("Break2");
        $(".but_start_game").bind('click', this.startGame);
    };
    startGame(){
        console.log("in stasrt");
        console.log(bigDog);
        console.log("2 in start");
        $(".but_start_game").unbind("click");
        BubbleShoot.ui.hideDialog();
        // var tryGame = new BubbleShoot.Game();
        bigDog.curBubble = bigDog.getNextBubble();
        $("#game").bind("click", bigDog.clickGameScreen);
    };
    getNextBubble(){
        console.log("insdie next buble");
        var bubble = BubbleShoot.Bubble.create();
        bubble.getSprite().addClass("cur_bubble");
        $("#board").append(bubble.getSprite());
        return bubble;
    };
    clickGameScreen = function(e){
        var angle = BubbleShoot.ui.getBubbleAngle(bigDog.curBubble.getSprite(),e);
        var duration = 750;
        var distance = 1000;
        var distX = Math.sin(angle) * distance;
        var distY = Math.cos(angle) * distance;
        var bubbleCoords = BubbleShoot.ui.getBubbleCoords(bigDog.curBubble.getSprite());
        var coords = {
            x: bubbleCoords.left + distX,
            y: bubbleCoords.top - distY
        };
        BubbleShoot.ui.fireBubble(bigDog.curBubble, coords, duration);
    };
}