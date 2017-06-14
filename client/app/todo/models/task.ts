export class Task {

    constructor(public name:string, public done:string) {
    }
    toggleDone() {
        this.done = this.done == "false" ? "true":"false";
    }

}
