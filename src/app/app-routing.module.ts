import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfoilioComponent } from './profoilio/profoilio.component';
import { TermofusComponent } from './termofus/termofus.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'termofus', component: TermofusComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'profoilio', component: ProfoilioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
