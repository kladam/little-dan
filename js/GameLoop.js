function GameLoop(Root)
{
    var context = Root.getContext();
    var gWidth = Root.getWidth();
    var gHeight = Root.getHeight();
    var root = Root;

    this.time = 0;
    this.x = 0;
    this.y = 0;

    this.background;
    this.dan;
    this.ballArray = [];
    this.ui;

    this.gameInit = function()
    {
        // load all the graphics that are needed as display objects
        root.loadImage('bg', 'http://localhost:8888/little-dan/assets/bg.jpg');
        root.loadImage('dan', 'http://localhost:8888/little-dan/assets/dan.png');

        // create display objects
        this.background = new DisplayObject(root.getImage('bg'));
        root.addToDisplayList(this.background);

        // NEED TO MAKE DAN HIS OWN OBJECT AND MOVE HIS CODE THERE

        this.dan = new DisplayObject(root.getImage('dan'));
        root.addToDisplayList(this.dan);

        this.dan['speed'] = 0;

        this.dan.moveLeft = function()
        {
           this.speed = -5;
        };

        this.dan.moveRight = function()
        {
            this.speed = 5;
        };

        this.dan.tick = function()
        {
            this.x += this.speed;


            if(this.x >= 800 - this.getWidth())
            {
                this.x = 800 - this.getWidth();
                this.speed = 0;
            }

            if(this.x < 0)
            {
                this.x = 0;
                this.speed = 0;
            }
        };

        // setup keyboard listener controls
        window.addEventListener('keydown', function(event)
        {
            switch (event.keyCode)
            {
                case 37: // Left
                    LittleDan.game.dan.moveLeft();
                    break;

                case 39: // Right
                    LittleDan.game.dan.moveRight();
                    break;
            }
        }, false);

        // TAKE THE ABOVE SECTION OUT OF HERE
    };

    this.tick = function()
    {
        this.dan.tick();
    };

    this.draw = function()
    {
        // draw display list
        root.draw();
    };
};