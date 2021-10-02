import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {ArrendatariosService} from "../../services/arrendatarios.service";
import {Arrendatario} from "../../model/arrendatario";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-arrendatarios',
  templateUrl: './arrendatarios.component.html',
  styleUrls: ['./arrendatarios.component.css']
})
export class ArrendatariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

