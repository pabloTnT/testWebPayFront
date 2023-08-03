import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpayService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getTransaction(transactionData: any): Observable<any> {
    console.log(transactionData);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(transactionData));
    
    return this.http.post<any>(`${this.apiUrl}/webpay_plus/create`, JSON.stringify(transactionData), {headers: headers});
  }

}
