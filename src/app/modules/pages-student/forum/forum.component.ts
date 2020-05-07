import {Component, OnInit} from '@angular/core';
import { ForumService } from 'src/app/service/forum.service';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { ActivatedRoute } from '@angular/router';
import { Forum } from 'src/app/model/forum';
import { Pertemuan } from 'src/app/model/pertemuan';
import { Subscription, interval } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  // templateUrl: './test.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  idPertemuan: any;
  pertemuan: Pertemuan;
  forum: Forum[];
  postForum: Forum = new Forum();
  updateSubscription: Subscription;
  emailSender: any;

  constructor(private forumService: ForumService, private pertemuanService: PertemuanService,
    private route: ActivatedRoute, private sessionStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.getForum();

    const user = this.sessionStorage.getUser();
    this.emailSender = user.email;
    this.route.queryParams.subscribe(params => {
      this.idPertemuan = params.idPertemuan;
    });

    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe(res => {
      this.pertemuan = res;
    })

    this.updateSubscription = interval(2000).subscribe( val => {
      this.getForum();
    })
    

    document.getElementById("sideEnroll").className="active";
  }

  getForum(){
    this.forumService.getForumByPertemuan(this.idPertemuan).subscribe( res => {
      this.forum = res
    })
  }

  onSend(){
    this.postForum.emailSender = this.emailSender;
    this.postForum.idPertemuan.idPertemuan = this.idPertemuan;
    this.forumService.postForum(this.postForum).subscribe(res => {
      console.log("done!");      
    }, err => {
      console.log(err);
    })

    this.updateSubscription = interval(500).subscribe( val => {
      this.getForum();
    });
  }

}
