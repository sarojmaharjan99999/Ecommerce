import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector: 'categories-component',
    templateUrl:'app/categories-component.html',

})

export class CategoryComponent implements OnInit {
    categories: Category[];
    constructor(private categoryService: CategoryService) { }
    ngOnInit(): void {
        this.categoryService.getCategories().then(categories => this.categories = categories);
    }
}