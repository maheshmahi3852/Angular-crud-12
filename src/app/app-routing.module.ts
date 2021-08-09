import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdddataComponent } from './pages/adddata/adddata.component';
import { UpdateComponent } from './pages/update/update.component';
import { ViewdataComponent } from './pages/viewdata/viewdata.component';

const routes: Routes = [
  {
    path: "",redirectTo:"/home",pathMatch:"full"
  },
  {
    path: "home",component:HomeComponent
  },
  {
    path: "adddata",component:AdddataComponent
  },
  {
    path: "edit/:id",component:UpdateComponent
  },
  {
    path: "view/:id",component:ViewdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
