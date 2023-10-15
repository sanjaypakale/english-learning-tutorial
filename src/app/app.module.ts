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
import { InterviewDashboardComponent } from './java-interview/interview-dashboard/interview-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TrickyJavaInterviewComponent } from './interview-dashboard/tricky-java-interview/tricky-java-interview.component';
import { HtmlFileDialogComponent } from './html-file-dialog/html-file-dialog.component';
import { DialogService } from './dialog.service';
import {MatDialogModule} from '@angular/material/dialog';
import { CoreJavaComponent } from './java-interview/core-java/core-java.component';

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
    SightWordsComponent,
    InterviewDashboardComponent,
    TrickyJavaInterviewComponent,
    HtmlFileDialogComponent,
    CoreJavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
