import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ValidateUserService } from '../services/validate-user.service';
import { UserInfo } from '../user-info.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  isInvalidLogin = false
  constructor(private route: Router,
    private notifyService: NotificationService,
    private validateUserService: ValidateUserService,
    private userInfo: UserInfo) { }

  ngOnInit(): void {
  }
  handleLogin() {

    this.userInfo = new UserInfo();
    this.userInfo.username = this.username;
    this.userInfo.password = this.password;
    this.validateUserService.validate(this.userInfo).subscribe(
      (data) => {

        this.notifyService.showSuccess("Login Successful", "Loan Management System ");
        this.route.navigate(['viewloan']);
        sessionStorage.setItem('validUser', data.username)
        this.isInvalidLogin = false;
      },
      (error) => {
        this.isInvalidLogin = true
        this.notifyService.showError("Invalid Credentials", "Loan Management System")
        this.username = ""
        this.password = ""

      })
  }

}
