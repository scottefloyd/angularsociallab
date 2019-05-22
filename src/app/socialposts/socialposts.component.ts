import { Component, OnInit } from '@angular/core';
import { Post } from "../post";

@Component({
  selector: 'socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent implements OnInit {

  show: boolean = false;

  posts: Post[] = [{
    subject: "hello",
    body: "testing 1 2 3"
  },
  {
    subject: "hello",
    body: "testing 1 2 3"
  },
  {
    subject: "hello",
    body: "testing 1 2 3"
  }
];

  constructor() { }

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.show = false;
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
