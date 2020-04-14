import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { HrComponentComponent } from './hr-component/hr-component.component';
import { InternComponent } from './intern/intern.component';

const routes: Routes = [
{ path: 'Mentor', component : MentorComponent },
{ path: 'Hr', component:HrComponentComponent},
{path : 'Intern', component:InternComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const routingComponents =[MentorComponent,HrComponentComponent,InternComponent]