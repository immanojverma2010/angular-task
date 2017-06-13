import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./todo/components/task-list.component";
/*import {TaskComponent} from "./todo/components/task.component";*/
import {AboutComponent} from "./about/components/about.component";
import {HomeComponent} from "./home/components/home.component";

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TaskListComponent
    ],
    providers:[
      appRoutingProviders
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
