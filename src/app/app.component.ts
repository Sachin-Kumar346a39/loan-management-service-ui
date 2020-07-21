import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Management System';
  
  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "Loan Management System")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "Loan Management System")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "Loan Management System")
  }

}
