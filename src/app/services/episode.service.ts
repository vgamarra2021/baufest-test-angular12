import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export abstract class baseClientService {
  constructor(private http: HttpClient) {}

  abstract baseUrl: string;
  // getItemsByPage(page: number = 1) {
  //   return this.http
  //     .get<CharacterResponseDto>(this.baseUrl, { params: { page } })
  //     .pipe(
  //       tap((response) => {
  //         console.log(`Fetch All Characters!`);
  //         console.log(response);
  //         this.charactersSubject.next(response.results);
  //       })
  //     );
  // }
}
