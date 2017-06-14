export class Task {

    constructor(public name:string, public done:string) {
    }
    toggleDone(): void{
      console.log("last toggle method");
        this.done = this.done === "false" ? "true" : "false";
        console.log(this.done);
    }

}
