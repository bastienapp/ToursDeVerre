import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';
import { CollectionPoint } from '../models/collection-point.model';

type ApiResponse = {
  records: {
    recordid: string,
    fields: {
      full_name: string,
      geo_coordinates: number[],
      opening_hours: string,
      postal_address: string,
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly MAX_ROW = 800;

  readonly API_URL = `https://data.tours-metropole.fr/api/records/1.0/search/?dataset=equipements-points-apport-volontaire-verre-tours-metropole-val-de-loire&rows=${this.MAX_ROW}`;

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient
      .get<ApiResponse>(this.API_URL)
      .pipe(
        map((response: ApiResponse) =>
          response.records.map((record) =>
            new CollectionPoint(
              record.recordid,
              record.fields.full_name,
              record.fields.geo_coordinates,
              record.fields.opening_hours,
              record.fields.postal_address,
            )
          )
        )
      )
  }

  findById(recordId: string) {
    return this.httpClient
      .get<ApiResponse>(`${this.API_URL}&recordid=${recordId}`)
      .pipe(
        map((response: ApiResponse) =>
          response.records.map((record) =>
            new CollectionPoint(
              record.recordid,
              record.fields.full_name,
              record.fields.geo_coordinates,
              record.fields.opening_hours,
              record.fields.postal_address,
            )
          )[0]
        ),
      )
  }
}

/*

{
  nhits: number,
  parameters: object,
  records: [
    {
      datasetid: string,
      recordid: string,
      fields: {
        geo_coordinates: number[],
        ...
      }
    }
  ]
}

*/
