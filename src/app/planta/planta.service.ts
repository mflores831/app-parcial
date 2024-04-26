import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo2.json';

constructor(private http: HttpClient) { }

getPlantas(): Observable<Planta[]> {
  return this.http.get<Planta[]>(this.apiUrl);
}

}

