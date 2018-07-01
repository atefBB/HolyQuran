import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuranService {
  private url = "assets/files/Quran.json";

  constructor(private httpClient: HttpClient) {}

  public getQuranData(): Observable<any> {
    const apiUrl = "assets/files/Quran.json";
    return this.httpClient.get(apiUrl);
  }
}
