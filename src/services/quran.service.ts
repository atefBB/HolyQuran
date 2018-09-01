import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { QuranRoot } from "../Models/Quran";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
@Injectable()
export class QuranService {
  private url = "assets/files/Quran.json";

  constructor(private httpClient: Http) {}

  public getQuranData(): Promise<any> {
    const apiUrl = "assets/files/Quran.json";
    return this.httpClient
      .get(apiUrl)
      .toPromise()
      .then(response => response.json() as Array<QuranRoot>)
      .catch(error => console.log("error form get : " + error));
  }
}
