var My_Message = /** @class */ (function () {
    function My_Message() {
        console.log("Constructor");
    }
    
    My_Message.prototype.sayHI = function () {
        console.log("Say hi!");
        alert("Say hi!");
    };
    
    return My_Message;
}());

console.log("Script loaded");
