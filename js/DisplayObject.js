function DisplayObject(image)
{
    this.depth;
    this.x = 0;
    this.y = 0;
    this.xScale = 1;
    this.yScale = 1;
    this.rotation = 0;


    this.img = image;


    this.getWidth = function()
    {
        return this.img.width;
    }

    this.getHeight = function()
    {
        return this.img.height;
    }

    this.draw = function(context)
    {
        // draw the this.img
        context.drawImage(this.img, this.x, this.y);
    }
};