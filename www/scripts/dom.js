/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 01.05.12
 * Time: 20:14
 * To change this template use File | Settings | File Templates.
 */
jewel.dom = (function () {
    var $ = Sizzle;

    function hasClass(el, clsName) {
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        return regex.test(el.className);
    }

    function addClass(el, clsName) {
        if (!hasClass(el, clsName)) {
            el.className += " " + clsName;
        }
    }

    function removeClass(el, clsName) {
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        el.className = el.className.replace(regex, " ");
    }

    function bind(element, event, handler) {
        if (typeof element == "string") {
            element = $(element) [0];
        }
        element.addEventListener(event, handler, false)
    }

    return {
        $:$,
        hasClass:hasClass,
        addClass:addClass,
        removeClass:removeClass,
        bind:bind
    };
})();
