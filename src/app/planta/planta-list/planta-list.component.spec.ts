/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a 3-row table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toEqual(4); //3 filas más encabezado
  });

  it('should have 3 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4) //3 filas más encabezado
  });

});
