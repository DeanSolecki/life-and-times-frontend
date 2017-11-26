import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { CodeComponent } from './code/code.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSidebarComponent,
    BlogComponent,
    CodeComponent,
    AboutComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
