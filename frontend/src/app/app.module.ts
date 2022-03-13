import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './components/singnup/singup.component'; 
import { SigninComponent } from './components/signin/signin.component';
import { TaskComponent } from './components/tasks/task.component'; 
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { EliminateComponent } from './components/eliminate/eliminate.component';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SigninComponent,
    TaskComponent,
    PrivateTasksComponent,
    EliminateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
