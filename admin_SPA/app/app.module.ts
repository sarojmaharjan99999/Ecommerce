import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {HeaderInfoComponent} from "./header-info.component";
import {SideMenuComponent} from "./side-menu.component";
import {MainComponent} from "./main-content.component";
import {AddNewComponent} from "./add-new.component";
import {CategoryComponent} from "./category.component";

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HeaderInfoComponent,
        SideMenuComponent,
        AddNewComponent,
        MainComponent,
        CategoryComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }