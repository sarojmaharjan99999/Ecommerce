import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Category } from './category';

import  'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private categoryUrl = 'http://localhost:5000/categories';

    constructor (private http:Http){}
    getCategories(): Promise<Category[]> {
        return this.http.get(this.categoryUrl)
            .toPromise()
            .then(res => res.json().categories as Category[])
            .catch(err =>  new Error(err));
    }

    createCategory(category) {
        return this.http.post(this.categoryUrl,  JSON.stringify(category), {headers: this.headers})
            .toPromise()
            .then(res => res.json().categories as Category[])
            .catch(err =>  new Error(err));
    }
}