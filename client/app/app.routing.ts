import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./todo/components/task-list.component";
import {HomeComponent} from "./home/components/home.component";
import {AboutComponent} from "./about/components/about.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'tasks', component: TaskListComponent, data: {title: 'TaskList'}},
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'about', component: AboutComponent, data: {title: 'About'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
