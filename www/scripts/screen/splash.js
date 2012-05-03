/**
 * Created with JetBrains WebStorm.
 * User: michael
 * Date: 5/3/12
 * Time: 11:43 AM
 * To change this template use File | Settings | File Templates.
 */
jewel.screens["splash-screen"] =
    (function(){
        var game = jewel.game,
            dom = jewel.dom,
            firstRun = true;
        function setup() {
            dom.bind("#splash-screen", "click",
            function() {
                game.showScreen("main-menu");
            });
        }
        function run() {
            if (firstRun) {
                setup();
                firstRun = false;
            }
        }
        return {
            run: run
        };
    }) ();
