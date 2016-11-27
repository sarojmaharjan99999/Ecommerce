import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {TopHeaderComponent} from "./top-header.component";
import {NavBarComponent} from "./nav-bar.component";
import {MainComponent} from "./main.component";
import {SliderComponent} from "./slider.component";
import {ContentComponent} from "./content.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        TopHeaderComponent,
        NavBarComponent,
        MainComponent,
        SliderComponent,
        ContentComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }