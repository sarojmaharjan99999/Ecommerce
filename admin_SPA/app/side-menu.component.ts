import { Component , AfterViewInit } from '@angular/core';
declare var jQuery : any;

@Component({
    selector: 'side-menu',
    templateUrl: 'app/side-menu.component.html',
    styleUrls: ['app/side-menu.component.css']
})

export class SideMenuComponent implements AfterViewInit{
    ngAfterViewInit () {
        jQuery(document).ready(function () {
            jQuery('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });
    }
}