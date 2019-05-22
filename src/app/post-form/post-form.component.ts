import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onSubmitted = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit() {
  }

  submitPost(form) {
  
    this.onSubmitted.emit({subject: form.value.subject, body: form.value.body});
   
  }

}
