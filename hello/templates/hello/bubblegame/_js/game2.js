var BubbleShoot = window.BubbleShoot || {};
let Game = function(){
    class Game {
        constructor(){
            this.init();
            var startGame = function(){
                $(".but_start_game").unbind("click");
                BubbleShoot.ui.hideDialog();
                curBubble = getNextBubble();
                $("#game").bind("click", clickGameScreen);
            }
            var getNextBubble = function(){
                var bubble = BubbleShoot.Bubble.create();
                bubble.getSprite().addClass("cur_bubble");
                $("#board").append(bubble.getSprite());
                return bubble;
            }
            var clickGameScreen = function(e){
                var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
                var duration = 750;
                var distance = 1000;
                var distX = Math.sin(angle) * distance;
                var distY = Math.cos(angle) * distance;
                var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
                var coords = {
                    x: bubbleCoords.left + distX,
                    y: bubbleCoords.top - distY,
                };
                BubbleShoot.ui.fireBubble(curBubble, coords, duration);
            };
        };
    }
    let newGame = new Game();
    return newGame;
}()




(function($){
    var Game = function(){
        var curBubble;
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
        };
        var startGame = function(){
            $(".but_start_game").unbind("click");
            BubbleShoot.ui.hideDialog();
            curBubble = getNextBubble();
            $("#game").bind("click", clickGameScreen);
        };
        var getNextBubble = function(){
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        };
        var clickGameScreen = function(e){
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
            var duration = 750;
            var distance = 1000;
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x: bubbleCoords.left + distX,
                y: bubbleCoords.top - distY
            };
            BubbleShoot.ui.fireBubble(curBubble, coords, duration);
        };
    };
    return Game;
})(jQuery);


// var BubbleShoot = {};

// let tease = {
//             init:  function(){
//                 $(".but_start_game").bind("click", startGame)
//             },
//             startGame: function(){
//                 $(".but_start_game").unbind("click");
//                 BubbleShoot.ui.hideDialog();
//                 curBubble = getNextBubble();
//                 $("#game").bind("click", clickGameScreen);
//             },
//             getNextBubble: function(){
//                 var bubble = BubbleShoot.Bubble.create();
//                 bubble.getSprite().addClass("cur_bubble");
//                 $("#board").append(bubble.getSprite());
//                 return bubble;
//             },
//             clickGameScreen: function(e){
//                 var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
//                 var duration = 750;
//                 var distance = 1000;
//                 var distX = Math.sin(angle) * distance;
//                 var distY = Math.cos(angle) * distance;
//                 var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
//                 var coords = {
//                     x: bubbleCoords.left + distX,
//                     y: bubbleCoords.top - distY,
//                 };
//                 BubbleShoot.ui.fireBubble(curBubble, coords, duration);
//         }
//     }

Bubbleshoot.Game = (function($){
    var Game = function(){
        var curBubble;
        // this.init = function(){};
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
        };
        var startGame = function(){
                        $(".but_start_game").unbind("click");
                        BubbleShoot.ui.hideDialog();
                        curBubble = getNextBubble();
                        $("#game").bind("click", clickGameScreen);
                    };
                    var getNextBubble = function(){
                        var bubble = BubbleShoot.Bubble.create();
                        bubble.getSprite().addClass("cur_bubble");
                        $("#board").append(bubble.getSprite());
                        return bubble;
                    };
                    var clickGameScreen = function(e){
                        var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
                        var duration = 750;
                        var distance = 1000;
                        var distX = Math.sin(angle) * distance;
                        var distY = Math.cos(angle) * distance;
                        var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
                        var coords = {
                            x: bubbleCoords.left + distX,
                            y: bubbleCoords.top - distY
                        };
                        BubbleShoot.ui.fireBubble(curBubble, coords, duration);
                    };
                    return Game;

                };
    })(jQuery);

// Bubbleshoot.Game1 = class {
//     constructor(){}
// };

// BubbleShoot.Game2 = (function(){
//    var fart = function(){};

//     return fart;

//     // var Game = function(){
//     //             var curBubble;
//     //             this.init = function(){
//     //                 $(".but_start_game").bind("click", startGame);
//     //             };
//     //             var startGame = function(){
//     //                 var none;
//     //                 return none;
//     //             };
//     //         }
//     // return Game;
// })();




var BubbleShoot = window.BubbleShoot || {};


BubbleShoot.Game = (function($){
    var Game1 = function(){
        var curBubble;
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
        };
        var startGame = function(){
            $(".but_start_game").unbind("click");
            BubbleShoot.ui.hideDialog();
            curBubble = getNextBubble();
            $("#game").bind("click", clickGameScreen);
        };
        var getNextBubble = function(){
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        };
        var clickGameScreen = function(e){
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
            var duration = 750;
            var distance = 1000;
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x: bubbleCoords.left + distX,
                y: bubbleCoords.top - distY
            };
            BubbleShoot.ui.fireBubble(curBubble, coords, duration);
        };
    };
    return Game1;
})(jQuery);

-------
// var BubbleShoot = window.BubbleShoot || {};


// BubbleShoot.Game = (function($){
//     var Game1 = function(){
//         var curBubble;
//         this.init = function(){
//             $(".but_start_game").bind("click", startGame);
//         };
//     };
//     return Game1;
// })(jQuery);

// Edufuckingcation: BubbleShoot.Game this is the class 'Game' in the namespace 'BubbleShoot'...

BubbleShoot.Game = class {
    curBubble;
    
    constructor(){
        var startGame = function(){
            $(".but_start_game").unbind("click");
            BubbleShoot.ui.hideDialog();
            // curBubble = this.#getNextBubble();
            $("#game").bind("click", clickGameScreen);
        }
        var getNextBubble = function(){
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        }
        var clickGameScreen = function(e){
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
            var duration = 750;
            var distance = 1000;
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x: bubbleCoords.left + distX,
                y: bubbleCoords.top - distY,
            };
            BubbleShoot.ui.fireBubble(curBubble, coords, duration);
        };
    }
    init = function(){
        $(".but_start_game").bind("click", this.#startGame);
    }
    #startGame = function(){
        BubbleShoot.ui.hideDialog();
    };
};

BubbleShoot.Game1 = class {
    init = function(){
        $(".headline").text("cchanged text");
        $(".but_start_game").bind('click', this.#start);
    }
    #start = function(){
        $(".headline").text("button clicked");
        var test = BubbleShoot.ui;
        test.hideDialog();
    }

}

//this is really so dumb. so you cannot create a class, make an instance of the class, and return it to a call to create a class item. BUT!...
BubbleShoot.Game2 = (function(){
    class myClass{
        prop1;
        method1 = function(){
            console.log("Details in method");
        }
    }
    class1 = new myClass();
    return class1;

})()
//here we create just a class, NO IIFE, but the problem is the object BubbleShoot.ui no longer exists in this strategy.
BubbleShoot.Game2a = class {
    init = function(){
        console.log("in init function");
        $(".but_start_game").bind("click", this.method2);
    }
    method2 = function(){
        BubbleShoot.ui.hideDialog();
        console.log("in method2");
    }
}


//you can create a class that is an instantly invoked function expression that implicitlyl creates a class and returns an instance of that class,
// but you cannot create a class that is an IIFE that explicitly creates a class and returns an instance of that class. is this stupid or what?!!!

BubbleShoot.Game3 = (function(){
    var dumbGame = function(){
        this.init = function(){

            console.log("in method1");
            $(".but_start_game").bind("click", method2);

        } 
        method2 = function(){
            BubbleShoot.ui.hideDialog();


            console.log("in method2");
        }
    }
    return dumbGame;
})();