var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
    var Game = function(){
        var curBubble;
        var board;
        var numBubbles;
        var MAX_BUBBLES = 70;
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
            console.log("inside init() ", startGame);
            console.log("curBubble: ", curBubble);
         };
        var startGame = function(){
            console.log("inside startGame(), curbubble: ", curBubble);
            console.log("clickGameScreen: ", getNextBubble);
            $(".but_start_game").unbind("click");
            numBubbles = MAX_BUBBLES;
            BubbleShoot.ui.hideDialog();
            curBubble = getNextBubble();
            board = new BubbleShoot.Board();
            BubbleShoot.ui.drawBoard(board);
            $("#game").bind("click", clickGameScreen);
            console.log("next curBubble: ", curBubble);
        };
        var getNextBubble = function(){
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            BubbleShoot.ui.drawBubblesRemaining(numBubbles);
            numBubbles--;
            return bubble;
        };
        var clickGameScreen = function(e){
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
            var duration = 750;
            var distance = 1000;
            var collision = BubbleShoot.CollisionDetector.findIntersection(curBubble,
                board, angle);
            if(collision){
                var coords = collision.coords;
                duration = Math.round(duration * collision.distToCollision / distance);
                board.addBubble(curBubble,coords);
                var group = board.getGroup(curBubble,{});
                if(group.list.length >= 3){
                    popBubbles(group.list, duration);
                }
            } else {
                var distX = Math.sin(angle) * distance;
                var distY = Math.cos(angle) * distance;
                var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
                var coords = {
                    x: bubbleCoords.left + distX,
                    y: bubbleCoords.top - distY
                };
            };
            BubbleShoot.ui.fireBubble(curBubble, coords, duration);
            curBubble = getNextBubble();
        };
        var popBubbles = function(bubbles, delay){
            $.each(bubbles, function(){
                var bubble = this;
                setTimeout(function(){
                    bubble.animatePop();
                }, delay);
                board.popBubbleAt(this.getRow(), this.getCol());
                setTimeout(function(){
                    bubble.getSprite().remove();
                }, delay + 200);
                delay += 60;
            });
        };
    };
    return Game;
})(jQuery);
