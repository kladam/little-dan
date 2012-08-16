function GameLoop(r)
{
    var root = r;
    var context = root['context'];
    var gWidth = root['gameWidth'];
    var gHeight = root['gameHeight'];

    this.gameInit = function()
    {
        // not sure how to access this function
        // loadImage('hello');
    };

    this.tick = function()
    {

    };

    this.draw = function()
    {
        var time = new Date().getTime() * 0.002;
        var x = Math.sin( time ) * (gWidth/4) + (gWidth/2);
        var y = Math.cos( time * 0.9 ) * (gHeight/4) + (gHeight/2);

        context.fillStyle = 'rgb(245,245,245)';
        context.fillRect( 0, 0, gWidth, gHeight );

        context.fillStyle = 'rgb(255,0,0)';
        context.beginPath();
        context.arc( x, y, 10, 0, Math.PI * 2, true );
        context.closePath();
        context.fill();

    };
};