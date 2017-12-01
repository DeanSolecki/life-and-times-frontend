import { Component, OnInit } from '@angular/core';

import { Blog } from '../models/blog';
import { BlogList } from '../models/blog-list';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: BlogList;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs(1, 6);
  }

  getBlogs(page: number, per: number): void {
    this.blogService.getBlogs(page, per)
      .subscribe(blogList => this.blogList = blogList);
  }
}
