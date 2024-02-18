import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehookComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

const routes: Routes = [
  {path: "", component :HomeComponent},
  {path: "login", component : LoginComponent},
  {path : "SignUp", component : SignUpComponent },
  {path : "DataBinding", component :DatabindingComponent},
  {path : "Directives", component :DirectivesComponent},
  {path : "lifecycleHooks", component :LifecyclehookComponent },
  {path : "parent" , component : ParentComponent},
  {path : "child" , component : ChildComponent},
  {path : "subject", component: SubComponent},
  {path : "subject1", component: Sub1Component},
  {path : "subject2", component: Sub2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
