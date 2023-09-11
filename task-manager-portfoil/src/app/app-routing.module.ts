import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { IntroduceComponent } from './components/introduce/introduce.component';

const routes: Routes = [
  { path: 'About', component: IntroduceComponent },
  { path: 'Features', component: FeaturesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
