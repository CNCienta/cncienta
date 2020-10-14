import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';


import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';


import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor, } from './_helpers';


import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { IotComponent } from './iot/iot.component';
import { FooterComponent } from './footer/footer.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CamListComponent } from './cam-list/cam-list.component';

import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';

import {GaugesModule} from 'ng-canvas-gauges';
import { MachineComponent } from './machine/machine.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    AboutComponent,
    CheckoutComponent,
    IotComponent,
    FooterComponent,
    MachineComponent,
    MachineListComponent,
    DeviceListComponent,
    CamListComponent,
    CameraComponent,
    DeviceComponent
  ],

  

  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    CookieLawModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebcamModule,
    GaugesModule,
    ReactiveFormsModule


  ],

  providers: [

    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],

  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  
})


export class AppModule {


};

