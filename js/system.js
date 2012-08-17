$(document).ready(function(){

    var game;

    var root;

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
        root = new Root($('#stage')[0], 800, 600);

        game = new GameLoop(root);

        game.gameInit();
    }

    function animate()
    {
        requestAnimFrame( animate );
        game.tick();
        game.draw();
    }

    // system initialisation and game flow
    init();
    animate()
});