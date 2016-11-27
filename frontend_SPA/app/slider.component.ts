import { Component, AfterViewInit } from '@angular/core';
declare var jquery : any;

@Component({
    selector: 'slider',
    templateUrl: 'app/slider.component.html'
})

export class SliderComponent implements AfterViewInit  {
    ngAfterViewInit() {
        jquery(document).ready(function () {
            jquery('.carousel').carousel();
        });

        // Pause slider
                jquery('.slider').slider('pause');
        // Start slider
                jquery('.slider').slider('start');
        // Next slide
                jquery('.slider').slider('next');
        // Previous slide
        jquery('.slider').slider('prev');
    }
}