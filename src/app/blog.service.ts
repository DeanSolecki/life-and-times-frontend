import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Blog } from './models/blog';
import { MetaData } from './models/meta-data';
import { BlogList } from './models/blog-list';
import { BLOGS } from './mock-blogs';

@Injectable()
export class BlogService {
  blogLength: number;
  blogList: BlogList;

  constructor() {
    this.blogLength = BLOGS.length;
    this.blogList = {
      blogs: [],
      metaData: {
        page: 0,
        per: 0,
        pages: 0,
        isLastPage: true
      }
    };
  }

  getBlogs(page: number, per: number): Observable<BlogList> {
    this.buildBlogResponse(page, per);
    return of(this.blogList);
  }

  buildBlogResponse(page: number, per: number): void {
    var pages = Math.ceil(this.blogLength/per);
    if(page > pages) {
      return;
    }
    if((page - 1) * per + per > this.blogLength) {
      return;
    }
    this.blogList.blogs = BLOGS.slice((page - 1)*(per - 1), (page - 1)*(per - 1)+per);
    this.blogList.metaData.pages = pages;
    this.blogList.metaData.page = page;
    this.blogList.metaData.per = per;
    if(page === pages) {
      this.blogList.metaData.isLastPage = true;
    } else {
      this.blogList.metaData.isLastPage = false;
    }
    return;
  }
}
