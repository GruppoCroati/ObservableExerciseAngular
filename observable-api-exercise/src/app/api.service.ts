import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, filter, concatMap, groupBy, mergeMap, toArray, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPostTitles(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').
      pipe(switchMap((post: any) => from(post)))
  }

  getPostTitlesAndBodyOfEvenIdPost(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(switchMap((post: any) => from(post)),
        filter((post: any) => (post.id % 2 == 0)
        ))
  }

  getLastComment(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(switchMap((post: any) => from(post)),
        filter((post: any) => (post.id % 2 == 0)),
        concatMap((post: any) => this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)),
        switchMap((comment: any) => comment),
        groupBy((comment: any) => comment.postId),
        mergeMap(group => group.pipe(toArray())),
        map(array => array[array.length - 1]),
      )
  }
}
