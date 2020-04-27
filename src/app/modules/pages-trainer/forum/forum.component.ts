import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/service/forum.service';
import { Forum } from 'src/app/model/forum';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  idSubcourse: any;
  forum: Forum[];
  postForum = new Forum();
  subcourse = new Subcourse();

  constructor(private route: ActivatedRoute, private forumService: ForumService,
    private subcourseService: SubcourseService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>
      this.idSubcourse = params.idSubcourse
    );

    this.forumService.getForumBySubcourse(this.idSubcourse).subscribe(
      result => this.forum = result,
      err => console.log(err)      
    );

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => this.subcourse = result,
      err => console.log(err)      
    );
  }

  onSend(){
    this.postForum.emailSender = "cobaEmail@haha.com";
    this.postForum.idSubcourse = this.idSubcourse;
    this.forumService.postForum(this.postForum).subscribe(
      err => console.log(err)      
    );
  }

  set postForumValue(value){
    this.postForum.deskripsi = JSON.parse(value);
  }

}
