import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Blog } from './models/blog';
import { BLOGS } from './mock-blogs';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogs(): Observable<Blog[]> {
    return of(BLOGS);
  }
}
