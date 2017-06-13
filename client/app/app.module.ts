import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
/*import {TaskListComponent} from "./todo/components/task-list.component";
import {TaskComponent} from "./todo/components/task.component";*/
import {AboutComponent} from "./about/components/about.component";

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent
    ],
    providers:[
      appRoutingProviders
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
