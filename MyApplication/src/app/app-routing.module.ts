import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehookComponent } from './lifecycleHooks/lifecyclehook.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path: "", component :HomeComponent},
  {path: "login", component : LoginComponent},
  {path : "SignUp", component : SignUpComponent },
  {path : "DataBinding", component :DatabindingComponent},
  {path : "Directives", component :DirectivesComponent},
  {path : "lifecycleHooks", component :LifecyclehookComponent },
  {path : "parent" , component : ParentComponent},
  {path : "child" , component : ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
