function GameLoop(Root)
{
    var context = Root.getContext();
    var gWidth = Root.getWidth();
    var gHeight = Root.getHeight();
    var root = Root;

    this.time = 0;
    this.x = 0;
    this.y = 0;

    this.canvasColor = '#ffffff';

    this.background;
    this.dan;
    this.ballArray = [];
    this.ui;

    this.gameInit = function()
    {
        // register game objects
        root.loadImage('hello', 'http://localhost:8888/little-dan/assets/img.jpg');
    };

    this.tick = function()
    {

        // tick game objects

        this.time = new Date().getTime() * 0.002;
        this.x = Math.sin( this.time ) * (gWidth/4) + (gWidth/2);
        this.y = Math.cos( this.time * 0.9 ) * (gHeight/4) + (gHeight/2);
    };

    this.draw = function()
    {
        // draw display list

        context.fillStyle = this.canvasColor;
        context.fillRect( 0, 0, gWidth, gHeight );

        context.fillStyle = 'rgb(255,0,0)';
        context.beginPath();
        context.arc( this.x, this.y, 10, 0, Math.PI * 2, true );
        context.closePath();
        context.fill();

    };
};