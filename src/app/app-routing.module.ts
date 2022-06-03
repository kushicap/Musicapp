import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';

import { ContactusComponent } from './contactus/contactus.component';

import { LoginComponent } from './login/login.component';


import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component:LoginComponent},
  {path:'Album',component:ArtistComponent},
  
  {path: 'contactus', component:ContactusComponent},
  {path: 'about', component:AboutComponent},
  
  {path: 'album', component:AlbumComponent},
  {path: 'artist', component:ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
