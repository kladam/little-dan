function Root(c, w, h)
{
    var canvas = c;

    var width = w;
    var height = h;
    canvas.width = width;
    canvas.height = height;

    var context = canvas.getContext('2d');
    var imageResourceLibrary = {};
    var audioResourceLibrary = {};
    var displayList = [];

    // creates an image tag and adds it to the resource lib
    this.loadImage = function(name, url)
    {
        var img = new Image();
        img.onload = function(){
            // maybe set a call back
        };
        img.src = url;
        img.setAttribute('name', name);

        imageResourceLibrary[name] = img;
    };

    // retrieve an image from the lib
    this.getImage = function(name)
    {
        return imageResourceLibrary[name];
    };

    // add a display object to the resource lib
    this.addToDisplayList = function(dispObject)
    {
        displayList.push(dispObject);
    };

    this.draw = function()
    {
        context.clearRect(0,0, width, height);
        for(var i = 0; i < displayList.length; i++)
        {
            var dO = displayList[i];
            dO.draw(context);
        }
    };

    this.getContext = function()
    {
        return context;
    };

    this.getCanvas = function()
    {
        return canvas;
    };

    this.getRootObject = function()
    {
        return this;
    };

    this.getWidth = function()
    {
        return width;
    };

    this.getHeight = function()
    {
        return height;
    };

    this.getImageResourceLibrary = function()
    {
        return imageResourceLibrary;
    };

    this.getDisplayList = function()
    {
        return displayList;
    };
};