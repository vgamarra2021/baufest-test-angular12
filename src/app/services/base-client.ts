import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ResponseDto } from '../model/common/response.dto';

export abstract class BaseClient {
  constructor(protected http: HttpClient) {}

  abstract baseUrl: string;
  getItemsByPage(page: number = 1) {
    return this.http.get<ResponseDto>(this.baseUrl, { params: { page } }).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }
}
