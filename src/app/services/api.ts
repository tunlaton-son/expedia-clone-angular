import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
   constructor(private http: HttpClient) { }

    private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer CAFBe1lIgPTtDc5t8uGVBkzZlWDA'
    });
  }

      searchAirport(keyword:string): Observable<any> {
        const headers = this.createHeaders();
        return this.http.get<any>('https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword='+keyword, { headers: headers });
      }

      // Example: POST request
      postData(data: any): Observable<any> {
        return this.http.post<any>('YOUR_API_ENDPOINT', data);
      }
}
