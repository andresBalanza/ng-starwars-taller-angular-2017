import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import "rxjs";
import {Observable} from "rxjs";

const API_PEOPLE_URL = "http://swapi.co/api/people/";

@Injectable()
export class SwapiService {

  constructor(private http:Http) {}

  getPeoopleList():Observable<any> {
    return this.http.get(API_PEOPLE_URL)
      .map((res:Response) => res.json().results);
  }
}
