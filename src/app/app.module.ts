import { UserInfo } from './user-info.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LogoutComponent } from './logout/logout.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanInfo } from './loan-info.model';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewLoanComponent,
    MenuComponent,
    ErrorComponent,
    FooterComponent,
    LogoutComponent,
    AddLoanComponent,
    EditLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [LoanInfo, UserInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
