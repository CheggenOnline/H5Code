class My_Message {


    public static Init(args: IScriptArgs): void {
        new My_Message(args).run();
    }
    constructor(args: IScriptArgs) {
        alert("Constructor");
    }
    public run(): void {

        alert("Hell Yeah!");
    }

}
