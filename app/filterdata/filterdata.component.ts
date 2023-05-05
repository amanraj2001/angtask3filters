import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-filterdata',
  templateUrl: './filterdata.component.html',
  styleUrls: ['./filterdata.component.css']
})
export class FilterdataComponent implements OnInit {

  constructor(private demo:DataService,private router:Router){}
filterdata:any
  ngOnInit(): void {
    this.demo.filterdata().subscribe(p=>{
      console.log(p);
      this.filterdata=p
      // console.log(this.filterdata.Directors);

    })
  }

  dir(element:any){
    console.log( (element.target.value));
    this.demo.fun(element.target.value)
    this.router.navigate(['movie'])

  }
  // img(e:any){
  //     this.demo.movie(e.target.value)
  //     this.router.navigate(['movieid'])
  //     console.log(e.target.value);


  // }
}
