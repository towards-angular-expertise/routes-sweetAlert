import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  id:number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(result=>{
      this.id = result.id;
      Swal.fire('BİLGİ',"Seçilen Değer " + this.id);
    });
  }

}
