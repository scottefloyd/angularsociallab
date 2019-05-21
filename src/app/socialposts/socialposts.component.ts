import { Component, OnInit } from '@angular/core';
import { Post } from "../post";

@Component({
  selector: 'socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent implements OnInit {

  submitted: boolean = true;

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

  addPost(form): void {
    
    this.posts.push({
			subject: form.value.subjectToAdd,
			body: form.value.bodyToAdd
		});
    
  }

  onSubmit() {
    this.submitted = !this.submitted;
  }

  ngOnInit() {
  }

}
