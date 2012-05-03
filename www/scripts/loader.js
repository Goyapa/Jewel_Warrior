var jewel = {
    screens :{}
};
// wait until main document is loaded
window.addEventListener("load", function()
{
         // start dynamic loading
    Modernizr.load([
        {
            // these files are always loaded
            load: [
            "scripts/sizzle.js",
            "scripts/dom.js",
            "scripts/game.js"
            ],
            // called when all files have finished loading
            //and executing
            complete : function() {
             //   alert("Success!");
             //   console.log("All files loaded!");
                jewel.game.showScreen("splash-screen");
            }
        }
    ]);
}, false);