import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Category } from './category';

import  'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
    private categoryUrl = 'http://localhost:5000/categories';
    constructor (private http:Http){}
    getCategories(): Promise<Category[]> {
        return this.http.get(this.categoryUrl)
            .toPromise()
            .then(res => res.json().categories as Category[])
            .catch(err =>  new Error(err));
    }

    createCategory(category) {
        console.log(category, '9999999999999999999999999999999');
    }
}