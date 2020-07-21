import { UserInfo } from './../user-info.model';

import { ValidateUserService } from './../services/validate-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';

import { Observable, of } from 'rxjs';

let userInfo = new UserInfo();
const validateUserServiceStub = {

  validate(userInfo: UserInfo) {
    return of([
      {
        "username": "user@sw.com",
        "password": "",
        "admin": false
      }
    ])
  }
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]),
      ToastrModule.forRoot(),
        HttpClientTestingModule
      ],
      declarations: [LoginComponent],
      providers: [UserInfo, ValidateUserService,
        { provide: ValidateUserService, useValue: validateUserServiceStub }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate if username is not empty', () => {
    expect(component.username).not.toEqual(null);

  });

  it('should validate if password is not empty', () => {

    expect(component.password).not.toEqual(null);

  });

  it('should login', () => {

    component.handleLogin();
    expect(sessionStorage.getItem('validUser'));

  });

});
