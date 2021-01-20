import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../models/blogpost';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  blogPosts$: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.loadBlogPosts()
  }

  loadBlogPosts(){
    this.blogPosts$ = this.blogPostService.getBlogPosts();
  }

  delete(postId){
    const ans = confirm('Você deseja deletar este post ?' + postId)
    if(ans){
      this.blogPostService.deleteBlogPost(postId).subscribe(date => {
        this.loadBlogPosts();
      })
    }
  }

}
