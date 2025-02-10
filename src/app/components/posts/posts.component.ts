import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  private readonly postService: PostService = inject(PostService);
  posts: any[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
