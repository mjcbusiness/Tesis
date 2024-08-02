import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { AllDataShops, ApiResponse } from '../models/user-info-model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userShops = [
    { nickNameShop: 'dehuka' },
    { nickNameShop: 'techiq' },
    { nickNameShop: 'TECNOENLINEA.COM.AR' }
  ];
  private apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?nickname=';
  private token = 'APP_USR-714919120455516-073020-eaa4cee4e9221762399b3f1ac7ae270d-162555727';

  constructor(private http: HttpClient) { }

  getAllUserDataShops(): Observable<AllDataShops> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const requests = this.userShops.map(shop => {
      const url = `${this.apiUrl}${shop.nickNameShop}`;
      return this.http.get<ApiResponse>(url, { headers });
    });

    return forkJoin(requests).pipe(
      map(responses => ({ dataShops: responses }))
    );
  }

  getUserData(nickname:string): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<ApiResponse>(`${this.apiUrl}${nickname}`, { headers });
  }
}
