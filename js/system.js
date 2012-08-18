var LittleDan = {};

$(document).ready(function(){

    LittleDan.game;

    LittleDan.root;

    window.requestAnimFrame = (function()
    {
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    function init()
    {
        LittleDan.root = new Root($('#stage')[0], 800, 600);

        LittleDan.game = new GameLoop(LittleDan.root);

        LittleDan.game.gameInit();
    }

    function animate()
    {
        requestAnimFrame( animate );
        LittleDan.game.tick();
        LittleDan.game.draw();
    }

    // system initialisation and game flow
    init();
    animate()
});