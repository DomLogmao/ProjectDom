import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentRouteModule } from './component.routing.module';
import { ContentComponent } from './dashboard/content/content.component';
import { ProductsComponent } from './products/products.component';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/dashboard/header/header.component';
// import { FooterComponent } from './components/dashboard/footer/footer.component';

@NgModule({
  declarations: [
    ContentComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    ComponentRouteModule,
    
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
