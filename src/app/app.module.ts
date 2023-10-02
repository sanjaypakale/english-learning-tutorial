import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentTenseComponent } from './present-tense/present-tense.component';
import { SimplePresentTenseComponent } from './present-tense/simple-present-tense/simple-present-tense.component';
import { PresentContinuousTenseComponent } from './present-tense/present-continuous-tense/present-continuous-tense.component';
import { PresentPerfectTenseComponent } from './present-tense/present-perfect-tense/present-perfect-tense.component';
import { PresentPerfectContinuousTenseComponent } from './present-tense/present-perfect-continuous-tense/present-perfect-continuous-tense.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PastTenseComponent } from './tenses/past-tense/past-tense.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentTenseComponent,
    SimplePresentTenseComponent,
    PresentContinuousTenseComponent,
    PresentPerfectTenseComponent,
    PresentPerfectContinuousTenseComponent,
    DashboardComponent,
    PastTenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
