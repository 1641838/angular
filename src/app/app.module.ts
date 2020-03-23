import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {Routes , RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CreatecusComponent } from './createcus/createcus.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { ViewallcustomersComponent } from './viewallcustomers/viewallcustomers.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
const routes: Routes = [ {path:'createcustomer',component:CreatecusComponent},
{path:'updateaccount',component:UpdateaccountComponent},
{path:'updatecustomer',component:UpdatecustomerComponent},
{path:'createaccount',component:CreateaccountComponent},
{path:'viewallcustomers', component:ViewallcustomersComponent},
{path:'viewcustomersbyid', component:ViewcustomerbyidComponent}];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreatecusComponent,
    UpdatecustomerComponent,
    CreateaccountComponent,
    UpdateaccountComponent,
    ViewallcustomersComponent,
    ViewcustomerbyidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
