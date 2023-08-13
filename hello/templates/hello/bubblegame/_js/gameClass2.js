var BubbleShoot = window.BubbleShoot || {};
var bigDog;
BubbleShoot.Game = (function($){
    class Game {
        init(){
            // console.log("in init function");
            console.log(this.thirdFunction);
            $(".but_start_game").bind('click', nextFunction);
        }
        nextFunction(){
            console.log("in next function");
            console.log(this.thirdFunction);
        }
        thirdFunction(){
            console.log("in third function;");
        }
    }
    return Game;
})(jQuery)

//////////////////////////////////////////////////////

//holy shit! this is a sample class that works!
// BubbleShoot.Game = (function(){
//     class Gamey2 {
//         init(){
//             console.log("in init function");
//         }
//     }
//     return Gamey2;
// }())


////////////////////////////////////////////////////////


class bad {
    game = function(){
        this.init = function(){
            console.log("apple");
        }
    }();   
}
    // curBubble;
    //     init(){
    //         // this.curBubble = "funny";
    //         bigDog = this;
    //         console.log(this);
    //         console.log("break");
    //         console.log(this.curBubble);
    //         console.log("Break2");
            // $(".but_start_game").bind('click', this.#startGame);
    //     };
    //     #startGame = function (){
    //         console.log("in stasrt");
    //         console.log(getNextBubble);
    //         console.log("2 in start");
    //         $(".but_start_game").unbind("click");
    //         BubbleShoot.ui.hideDialog();
    //         // var tryGame = new BubbleShoot.Game();
    //         bigDog.curBubble = bigDog.getNextBubble();
    //         console.log("new curbuble: ", bigDog)
    //         $("#game").bind("click", bigDog.clickGameScreen);
    //     };
    //     getNextBubble(){
    //         console.log("insdie next buble");
    //         var bubble = BubbleShoot.Bubble.create();
    //         bubble.getSprite().addClass("cur_bubble");
    //         $("#board").append(bubble.getSprite());
    //         return bubble;
    //     };
    //     clickGameScreen = function(e){
    //         var angle = BubbleShoot.ui.getBubbleAngle(bigDog.curBubble.getSprite(),e);
    //         var duration = 750;
    //         var distance = 1000;
    //         var distX = Math.sin(angle) * distance;
    //         var distY = Math.cos(angle) * distance;
    //         var bubbleCoords = BubbleShoot.ui.getBubbleCoords(bigDog.curBubble.getSprite());
    //         var coords = {
    //             x: bubbleCoords.left + distX,
    //             y: bubbleCoords.top - distY
    //         };
    //         BubbleShoot.ui.fireBubble(bigDog.curBubble, coords, duration);
    //     };
    