import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { AppUsersComponent } from './appUsers/appUsers.component';
import { UserLoginsComponent } from './userLogins/userLogins.component';
import { RouterModule,Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferAccountComponent } from './transfer-account/transfer-account.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { AppUserService } from './appUser.service';
import { UserLoginService } from './userLogin.service';
import { AccountService } from './account.service';
import { TransactionService } from './transaction.service';
import { CheckingSavingComponent } from './checking-saving/checking-saving.component';

const routes:Routes=[
  {path: '',component:HomepageComponent},
  {path:'userLogins',component:UserLoginsComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'funds-transfer',component:FundsTransferComponent},
  {path:'deposit',component:DepositComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'transfer-account',component:TransferAccountComponent},
  {path:'view-account',component:ViewAccountComponent},
  {path:'checking-saving', component:CheckingSavingComponent},
  {path:'homepage',component:HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AppUsersComponent,
    UserLoginsComponent,
    CreateAccountComponent,
    DepositComponent,
    TransferAccountComponent,
    WithdrawComponent,
    HomepageComponent,
    FundsTransferComponent,
    ViewAccountComponent,
    CheckingSavingComponent,
    ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppUsersComponent,UserLoginsComponent,AppUserService,UserLoginService,AccountService,TransactionService],        
  bootstrap: [AppComponent]
})
export class AppModule { }
