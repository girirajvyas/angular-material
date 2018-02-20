import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of';

import { BLOGS } from './mock-blogs';
import { Blog } from '../models/Blog.model';

@Injectable()
export class BlogService{

    getBlogs() : Observable<Blog[]>{
        return of(BLOGS);
    }
}