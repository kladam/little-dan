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
    var displayList = {};

    this.loadImage = function(name, url)
    {
        var img = new Image();
        img.src = url;
        img.setAttribute('name', name);
        img.onload = function(){
            imageResourceLibrary[this.name] = this;
        }
    };

    this.getImage = function(name)
    {
        return imageResourceLibrary[name];
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