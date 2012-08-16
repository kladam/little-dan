$(document).ready(function(){

    // global variables
    var root =
    {
        "canvas" : {},
        "context" : {},
        "gameWidth" : 800,
        "gameHeight" : 600,
        "game" : {},
        "imageResourceLibrary" : {},
        "displayList" : {}
    };

    var game;

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
        root['canvas'] = $('#stage')[0];
        root['canvas'].width = root['gameWidth'];
        root['canvas'].height = root['gameHeight'];
        root['context'] = root['canvas'].getContext( '2d' );

        game = new GameLoop(root);

        game.gameInit();
    }

    function animate()
    {
        requestAnimFrame( animate );
        game.tick();
        game.draw();
    }

    function loadImage(name)
    {
        console.log('name: ' + name);
    }

    // system initialisation and game flow
    init();
    animate()
});