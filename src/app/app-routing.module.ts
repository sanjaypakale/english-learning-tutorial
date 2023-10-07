import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TensesMainComponent } from './tenses/tenses-main/tenses-main.component';
import { SimplePresentTenseComponent } from './tenses/present-tense/simple-present-tense/simple-present-tense.component';
import { PresentContinuousTenseComponent } from './tenses/present-tense/present-continuous-tense/present-continuous-tense.component';
import { PresentPerfectTenseComponent } from './tenses/present-tense/present-perfect-tense/present-perfect-tense.component';
import { PresentPerfectContinuousTenseComponent } from './tenses/present-tense/present-perfect-continuous-tense/present-perfect-continuous-tense.component';
import { PresentTenseComponent } from './tenses/present-tense/present-tense.component';
import { PastTenseComponent } from './tenses/past-tense/past-tense.component';
import { VideosComponent } from './videos/videos.component';
import { VerbsComponent } from './verbs/verbs.component';
import { SightWordsComponent } from './sight-words/sight-words.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'tense', component: TensesMainComponent, children: [
      {
        path: 'present', component: PresentTenseComponent, children: [
          { path: '', component: SimplePresentTenseComponent },
          { path: 'simplepresent', component: SimplePresentTenseComponent },
          { path: 'simplecontinous', component: PresentContinuousTenseComponent },
          { path: 'presentperfect', component: PresentPerfectTenseComponent },
          { path: 'presentperfectcontinuous', component: PresentPerfectContinuousTenseComponent }
        ]
      },
      {
        path: 'past', component: PastTenseComponent, children: [

        ]
      },     
    ]   
  },
  { path: 'videos', component: VideosComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'sightWords', component: SightWordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
