import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentTenseComponent } from './present-tense/present-tense.component';
import { SimplePresentTenseComponent } from './present-tense/simple-present-tense/simple-present-tense.component';
import { PresentContinuousTenseComponent } from './present-tense/present-continuous-tense/present-continuous-tense.component';
import { PresentPerfectTenseComponent } from './present-tense/present-perfect-tense/present-perfect-tense.component';
import { PresentPerfectContinuousTenseComponent } from './present-tense/present-perfect-continuous-tense/present-perfect-continuous-tense.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'presenttense', component: PresentTenseComponent, children: [
      { path: '', component: SimplePresentTenseComponent },
      { path: 'simplepresent', component: SimplePresentTenseComponent },
      { path: 'simplecontinous', component: PresentContinuousTenseComponent },
      { path: 'presentperfect', component: PresentPerfectTenseComponent },
      { path: 'presentperfectcontinuous', component: PresentPerfectContinuousTenseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
