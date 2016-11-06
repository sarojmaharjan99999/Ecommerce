import { Component , AfterViewInit} from '@angular/core';
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
    ngAfterViewInit() {
        jquery(document).ready(function () {
            jquery('select').material_select();
        });
    }
    model = new Category();
    constructor(private categoryService: CategoryService) { }

    onSubmit(model) {
        this.categoryService.createCategory(model);
    }
}