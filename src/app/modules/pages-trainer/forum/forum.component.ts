import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/service/forum.service';
import { Forum } from 'src/app/model/forum';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Pertemuan } from 'src/app/model/pertemuan';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  idSubcourse: any;
  forum: Forum[];
  postForum: Forum = new Forum();
  pertemuan: Pertemuan = new Pertemuan();
  emailSender: any;
  idPertemuan: any;
  updateSubscription: Subscription;

  constructor(private route: ActivatedRoute, private forumService: ForumService,
    private pertemuanService: PertemuanService, private sessionStorage: TokenStorageService) {
  }

  ngOnInit() {
    document.getElementById("sideKelas").className="active";
    const user=this.sessionStorage.getUser();
    this.emailSender = user.email;

    this.route.queryParams.subscribe(params =>
      this.idPertemuan = params.idPertemuan
    );

    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe( res => {
      this.pertemuan = res
    })

    this.updateSubscription = interval(5000).subscribe(val => {
      this.getForum();
    })

  }

  getForum(){
    this.forumService.getForumByPertemuan(this.idPertemuan).subscribe(
      result => this.forum = result,
      err => console.log()      
    )
  }

  onSend(){
    this.postForum.emailSender = this.emailSender;
    this.postForum.idPertemuan.idPertemuan = this.idPertemuan;
    this.forumService.postForum(this.postForum).subscribe( res => {
      console.log("mantapp");      
    }, err => {
      console.log(err) 
    }     
    );
  }

  set postForumValue(value){
    this.postForum.deskripsi = JSON.parse(value);
  }

}
