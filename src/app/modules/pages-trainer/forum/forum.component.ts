import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/service/forum.service';
import { Forum } from 'src/app/model/forum';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  idSubcourse: any;
  forum: Forum[];
  postForum: Forum = new Forum();
  subcourse: Subcourse = new Subcourse();
  emailSender: any;

  constructor(private route: ActivatedRoute, private forumService: ForumService,
    private subcourseService: SubcourseService, private sessionStorage: TokenStorageService) {
  }

  ngOnInit() {
    document.getElementById("sideKelas").className="active";
    const user=this.sessionStorage.getUser();
    this.emailSender = user.email;

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
    this.postForum.emailSender = this.emailSender;
    this.postForum.idSubcourse = this.idSubcourse;
    this.forumService.postForum(this.postForum).subscribe( res => {

    }, err => {
      console.log(this.postForum) 
    }     
    );
  }

  set postForumValue(value){
    this.postForum.deskripsi = JSON.parse(value);
  }

}
