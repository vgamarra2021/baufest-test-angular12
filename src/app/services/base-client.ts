import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResponseDto } from '../model/common/response.dto';

export abstract class BaseClient {
  constructor(protected http: HttpClient) {}

  subject = new Subject<string | undefined>();

  abstract baseUrl: string;
  getItemsByPage(page: number = 1) {
    return this.http.get<ResponseDto>(this.baseUrl, { params: { page } }).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }  
  
  getItemsByName(name: string = '') {
    return this.http.get<ResponseDto>(this.baseUrl, { params: { name } }).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }

  onChangeSearchValue(searchValue: string) {
    this.subject.next(searchValue);
  }
}
