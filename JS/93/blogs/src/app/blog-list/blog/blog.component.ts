import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/shared/blog.service';
import { Post } from 'src/app/shared/Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!: Observable<Post[]>;
  postsArr!: Post[];
  counter:number=0;
  // showArr:Post[]=[];
  

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.params.blogId;
     this.blogService.getBlog(blogId).subscribe(posts=>{
       this.postsArr = posts;
       
    });
  }
  onPreviousClick(){
    if (this.counter-3>=0){
      this.counter-=3;

    }
  }
  onNextClick() {
    if (this.counter + 3 <= this.postsArr.length) {
      this.counter += 3;

    }
  }
}
