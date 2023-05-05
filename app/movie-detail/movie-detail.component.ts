import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { det, movie } from '../models/moviedet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  selected!:string
  movname!:string
  dir:any

  constructor(private demo:DataService,private route:ActivatedRoute){
    this.selected=this.demo.seldata
    this.movname=this.demo.mname
  }
  movieArray:Array<movie>=[]

  movieinput!:Array<movie>
  movieinput1!:Array<movie>
  movieinput2!:Array<movie>
  movieinput3!:any
  color!: movie
  actorarr!:any
    ngOnInit(): void {


    this.demo.moviedetail().subscribe(p=>{
      console.log(p);
      this.movieArray=p
      // console.log(this.movieArray);

        this.actorarr=this.movieArray.find(x=>x.Details.ActorsNames) as movie
        console.log(this.actorarr);


      this.movieinput1=this.movieArray.filter(x=>x.Details.DirectorName==this.selected)
      this.movieinput2=this.movieArray.filter(x=>x.MovieName==this.selected)
      this.movieinput3=this.movieArray.filter(x=>x.Details.ActorsNames.includes(this.selected))

      // console.log(this.movieinput3);


      if(Array.isArray(this.movieinput1) && this.movieinput1.length ){
        this.movieinput=this.movieinput1
        this.dir=this.movieArray.find(x=>x.Details.DirectorName==this.selected)
        this.color=this.movieArray.find(x=>x.Details.ActorsNames.includes(x.Details.DirectorName)) as movie
      }
      else if(Array.isArray(this.movieinput2) && this.movieinput2.length){

        this.color=this.movieArray.find(x=>x.Details.ActorsNames.includes(x.Details.DirectorName)) as movie
        this.movieinput=this.movieinput2
      }
      else{
        this.dir=this.movieArray.find(x=>x.Details.ActorsNames.includes(this.selected))
        this.movieinput=this.movieinput3
        this.color=this.movieArray.find(x=>x.Details.ActorsNames.includes(x.Details.DirectorName)) as movie
        // this.dir=this.movieArray.find(x=>x.MovieName==this.selected)
      }

      console.log(this.movieinput3);
      // console.log(this.color.MovieName);


// this.color=this.movieArray.find(x=>x.Details.DirectorName==x.Details.ActorsNames)

    })
  }
  act!:Array<string>

  vid!:string
  // dir!:string
  but(index:number,movieid:any){
    console.log(movieid);
    console.log(this.movieinput);

        console.log(this.movieArray.find(x=>x.MovieID==index+1));
        this.demo.moviedata=this.movieArray


          console.log(this.movieinput);



    }
}
