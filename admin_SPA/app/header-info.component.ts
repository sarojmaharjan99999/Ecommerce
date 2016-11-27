import { Component , AfterViewInit} from '@angular/core';
declare  var jQuery : any;

@Component({
    selector: 'header-info',
    templateUrl: 'app/header-info.component.html',
    styleUrls: ['app/header-info.component.css']
})

export class HeaderInfoComponent implements AfterViewInit{
    ngAfterViewInit() {
        jQuery('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
    }
    // isClassVisible: Boolean = false;
}