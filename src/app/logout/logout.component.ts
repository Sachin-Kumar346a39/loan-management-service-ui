import { Component, OnInit } from '@angular/core';
import { ValidateUserService } from '../services/validate-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private validateUserService : ValidateUserService, private router:Router) { }

  ngOnInit(){
    this.validateUserService.logout();
  }
  loginAgain():void{
    this.router.navigate(['login'])
      }

}
