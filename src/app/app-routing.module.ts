import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { SkillsComponent } from './skills/skills.component';
import { SelflearningComponent } from './selflearning/selflearning.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:DefaultComponent},
  {path:'home',component:HomeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'selflearning',component:SelflearningComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
