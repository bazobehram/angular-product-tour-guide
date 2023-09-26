import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion/promotion.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'promotion',
    component: PromotionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
