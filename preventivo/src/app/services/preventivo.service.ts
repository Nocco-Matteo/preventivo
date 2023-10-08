import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Domanda } from '../models/preventivo.model';

@Injectable({
  providedIn: 'root'
})
export class PreventivoService {

  constructor(private readonly httpClient: HttpClient) { }

  getDomande(): Observable<Domanda[]> {
    const url = `${environment.apiUrl}/getSezioniPreventivo`

    return this.httpClient.get<Domanda[]>(url);
  }
}
