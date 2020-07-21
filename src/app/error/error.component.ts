import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorpage='An error occured.. Please contact ****-***-*** .'
  constructor() { }

  ngOnInit(): void {
  }

}
