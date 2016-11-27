import { Component , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category';
import { CategoryService } from './category.service';

declare var jquery :any;

@Component({
    selector: 'add-new',
    templateUrl: 'app/add-new-form.component.html',
    styleUrls:['app/add-new-form.component.css'],
    providers: [CategoryService]
})

export class AddNewComponent implements AfterViewInit{
    constructor(private categoryService: CategoryService, private router: Router) { }

    ngAfterViewInit() {
        // jquery(document).ready(function () {
        //     jquery('select').material_select();
        // });
    }
    model = new Category('');

    onSubmit() {
        this.categoryService.createCategory(this.model)
            .then(function () {
                this.router.navigate(['categories']);
            })
    }
}