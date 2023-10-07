import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PastTenseComponent } from './tenses/past-tense/past-tense.component';
import { TensesMainComponent } from './tenses/tenses-main/tenses-main.component';
import { PresentTenseComponent } from './tenses/present-tense/present-tense.component';
import { SimplePresentTenseComponent } from './tenses/present-tense/simple-present-tense/simple-present-tense.component';
import { PresentContinuousTenseComponent } from './tenses/present-tense/present-continuous-tense/present-continuous-tense.component';
import { PresentPerfectContinuousTenseComponent } from './tenses/present-tense/present-perfect-continuous-tense/present-perfect-continuous-tense.component';
import { PresentPerfectTenseComponent } from './tenses/present-tense/present-perfect-tense/present-perfect-tense.component';
import { VideosComponent } from './videos/videos.component';
import { VerbsComponent } from './verbs/verbs.component';
import { SightWordsComponent } from './sight-words/sight-words.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentTenseComponent,
    SimplePresentTenseComponent,
    PresentContinuousTenseComponent,
    PresentPerfectTenseComponent,
    PresentPerfectContinuousTenseComponent,
    DashboardComponent,
    PastTenseComponent,
    TensesMainComponent,
    VideosComponent,
    VerbsComponent,
    SightWordsComponent
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
