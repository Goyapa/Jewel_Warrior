/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 01.05.12
 * Time: 20:15
 * To change this template use File | Settings | File Templates.
 */
jewel.game = (function() {
    var dom = jewel.dom,
        $ = dom.$;
    // hide the active screen ( if any) and show the screen
    // with the specified id
    function showScreen(screenId) {
        var activeScreen = $("#game.screen.active")[0],
            screen = $("#" + screenId) [0];
        if (activeScreen) {
            dom.removeClass(screen, "active");
        }
        dom.addClass(screen, "active");
    }
    // expose public methods
    return {
        showScreen : showScreen
    };
}) ();
