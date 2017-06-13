import {Component, OnInit} from "@angular/core";
import {AboutComponent} from "./about/components/about.component";
@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
