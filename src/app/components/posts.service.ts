import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private readonly httpClient: HttpClient = inject(HttpClient);

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
