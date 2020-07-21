import { UserInfo } from './../user-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {
  lms_user_base_url = environment.lms_user_base_url;
  USER_URL: string = this.lms_user_base_url+'/api/v1/user/validateUser';

  constructor(private httpClient: HttpClient, private userInfo: UserInfo) { }

  validate(userInfo): Observable<any> {

    return this.httpClient.post(this.USER_URL, userInfo);
  }

  isUserLoggedIn() {
    var user: any = sessionStorage.getItem('validUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('validUser')
  }

}
