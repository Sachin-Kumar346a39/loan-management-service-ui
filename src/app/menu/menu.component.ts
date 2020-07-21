import { Component, OnInit } from '@angular/core';
import { ValidateUserService } from '../services/validate-user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggenIn:boolean=false
  constructor(public validateUserService:ValidateUserService) { }

  ngOnInit() {
    this.isUserLoggenIn=this.validateUserService.isUserLoggedIn();
  }

}
