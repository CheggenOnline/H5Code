// developed by
// Christian Holberg Heggen (christian.heggen@columbusglobal.com)
var My_Message = /** @class */ (function () {
    function My_Message(args) {
    }
    My_Message.Init = function (args) {
        new My_Message(args).run();
    };
    My_Message.prototype.run = function () {
        alert("Hell Yeah!");
    };
    return My_Message;
}());
