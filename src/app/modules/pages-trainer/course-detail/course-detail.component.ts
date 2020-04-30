import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: Course = new Course();
  subcourse: Subcourse[] = [new Subcourse()];
  subcourseInput: Subcourse = new Subcourse();
  selectSubcourse: Subcourse = new Subcourse();
  courses: Course[];
  idCourse: any;
  namaCourse: any;
  idSubcourse: any;
  display : boolean = false;
  fileMateri: File = null;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private messageService: MessageService,
    private subcourseService: SubcourseService, private materiService: MateriService) { }

  editClick : boolean = false;
  dataNotNull : boolean = true;
  buttonEdit : string = 'Edit Deskripsi';


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idCourse = params.idCourse;
      this.namaCourse = params.namaCourse
    });

    this.courseService.getCourseById(this.idCourse).subscribe(
      result => {
        this.course = result;
    });

    this.subcourseService.getSubcourseByCourse(this.namaCourse).subscribe(
      result => {
        this.subcourse = result;
    });
  }

  editDeskripsi(){
    if (this.editClick) {
      this.editClick = false
      this.buttonEdit = 'Edit Deskripsi'
    }else{
      this.editClick = true
      this.buttonEdit = 'Kembali'
    }
  }

  onDownloadMateri(id){
    this.subcourseService.getSubcourseById(id).subscribe(res => {
      this.subcourseInput = res;
    })
    console.log(this.subcourseInput);
    
    // this.materiService.downloadFile(id).subscribe(
    //   result => {saveAs(result)},
    //   error => console.log(error)
    // )
  }

  onUploadMateri(){
      this.subcourseInput.idCourse.idCourse = this.idCourse;
      this.materiService.uploadFile(this.fileMateri).subscribe( result => {
        this.subcourseInput.idMateri.idMateri = result.idMateri;
      },     
        error => console.log(error),
        () => console.log("done!")
      );
      this.subcourseService.updateSubcourse(this.subcourseInput).subscribe( res => {
          this.onSuccess();
          console.log(this.subcourseInput);
          
        }, err => {
          this.onFailed();
          console.log(err);
        }
      )
  }

  showUpload(id) {
    this.subcourseService.getSubcourseById(id).subscribe( res => {
      this.subcourseInput = res;
    })
    this.display = true;
  }

  handleInputMateri(files: FileList) {
    this.fileMateri = files.item(0);
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Upload Materi Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Upload Materi Gagal!'})
  }

  cloneSelection(s : Subcourse){
    let subcourse = {};
    for(let prop in s){
      subcourse[prop] = s[prop];
    }
    return s;
  }

}
