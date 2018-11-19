import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileGetComponent } from './profile-get/profile-get.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  { path: 'profile/create', component: ProfileAddComponent },
  { path: 'profile/edit/:id', component: ProfileEditComponent},
  { path: 'profile', component: ProfileGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
