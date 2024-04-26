import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
  contarInteriores(): number {
    let contador = 0;
    for (const planta of this.plantas) {
      if (planta.tipo =="Interior") {
        contador++;
      }
    }
    return contador;
  }
  contarExteriores(): number {
    let contador = 0;
    for (const planta of this.plantas) {
      if (planta.tipo =="Exterior") {
        contador++;
      }
    }
    return contador;
  }
 
  ngOnInit() {
    this.getPlantas();
  }

}
