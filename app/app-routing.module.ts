import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterdataComponent } from './filterdata/filterdata.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieidComponent } from './movieid/movieid.component';

const routes: Routes = [
  {path:'',component:FilterdataComponent},
  {path:'movie',component:MovieDetailComponent,
  children:[
    {path:'movieid/:id',component:MovieidComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
