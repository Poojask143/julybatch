import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { LifecyclehookComponent } from './lifecyclehooks/lifecyclehooks.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { SearchDirective } from './search.directive';

@NgModule({
  declarations: [        //component/pipe/directive
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DatabindingComponent,
    LifecyclehookComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    SubComponent,
    Sub1Component,
    Sub2Component,
    SearchDirective
  ],
  imports: [       //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]     //root component banvnyasati use hoto
})
export class AppModule { }
