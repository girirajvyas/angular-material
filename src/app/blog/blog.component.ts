import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from '../models/Blog.model';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs : Blog[];

  constructor(private blogService : BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      blogsFromService => {
            this.blogs = blogsFromService;
            console.log(blogsFromService);
      });
  }

}
