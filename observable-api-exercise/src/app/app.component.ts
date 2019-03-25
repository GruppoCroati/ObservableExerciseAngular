import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OBSERVABLE API EXERCISE';

  constructor(private api: ApiService) {
  }

  printPostTitles() {
    this.api.getPostTitles().subscribe((post: any) => console.log("Title n. " + post.id + ": " + post.title))
  }

  printPostTitlesAndBodyOfEvenPostId() {
    this.api.getPostTitlesAndBodyOfEvenIdPost().subscribe((post: any) => {

      console.log("Title n. " + post.id + ": " + post.title)
      console.log("Body n. " + post.id + ": " + post.body)
    })
  }

  printLastCommentOfEvenPostId() {
    this.api.getLastComment().subscribe((comment: any) => { console.log("Body last comment post n. " + comment.postId + ": " +comment.body) })
  }
}
