import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../post";

@Component({
  selector: 'post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
