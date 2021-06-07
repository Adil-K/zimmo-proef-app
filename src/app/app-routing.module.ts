import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FeedbackPageComponent } from './feedback/feedback-page/feedback-page.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'feedback',
    pathMatch: 'full',
  },
  {
    path: 'feedback',
    component: FeedbackPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
