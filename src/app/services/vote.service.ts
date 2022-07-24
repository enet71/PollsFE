import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewVote, Vote } from '../models/vote';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VoteService {
  constructor(private http: HttpClient) {}

  public create(vote: NewVote): Observable<void> {
    return this.http.post<void>(`${environment.url}/votes`, {
      ...vote,
      voteOptions: [{ title: 'Test1' }, { title: 'Test2' }],
    });
  }

  public getList(): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${environment.url}/votes`);
  }

  public getById(id: number): Observable<Vote> {
    return this.http.get<Vote>(`${environment.url}/votes`, {
      params: {
        id,
      },
    });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url}/votes/${id}`);
  }
}
