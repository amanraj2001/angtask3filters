import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { movie } from '../models/moviedet';

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.css']
})
export class MovieidComponent implements OnInit{
  moviearr:Array<movie>=[]
movieinput={} as movie
newdata:any
newarr:any
// director!:string
// actors!:Array<string>
// vid!:string;

constructor(private demo:DataService,private route:ActivatedRoute){


}
ngOnInit(): void {
  this.moviearr=this.demo.moviedata
  console.log(this.moviearr);


  this.route.params.subscribe(p=>{
    console.log(p['id']);
    this.newdata=this.moviearr.find((x:any)=>x.MovieID==p['id'])
    console.log(this.newdata);

this.newarr=this.newdata.Details.ActorsNames

  })

  }
}
