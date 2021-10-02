import { Component, OnInit } from '@angular/core';
import {ArrendadoresService} from "../../services/arrendadores.service";
import {CarsService} from "../../services/cars.service";
import{Arrendador} from "../../model/arrendador";
import {Car} from "../../model/cars";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-arrendadores',
  templateUrl: './arrendadores.component.html',
  styleUrls: ['./arrendadores.component.css']
})
export class ArrendadoresComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}
ngOnInit(): void {
}

  
}
