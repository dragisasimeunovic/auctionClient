import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirmRegistrationComponent } from './firm-registration/firm-registration.component';
import { SupplyRequestComponent } from './supply-request/supply-request.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'firmRegistration/:taskID/:userID', component: FirmRegistrationComponent, pathMatch: 'full'},
  {path: 'supplyRequest', component: SupplyRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

export const routingComponents = [LoginComponent, RegistrationComponent, FirmRegistrationComponent, SupplyRequestComponent];