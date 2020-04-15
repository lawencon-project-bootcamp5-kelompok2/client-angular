import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  // TODO: kondisi buttonOn ngeGet dari backend
  buttonOn = true;

  constructor() {
  }

  ngOnInit() {
    setInterval(this.fungsi, 1000);
  }

  fungsi() {

    let countDeadline = new Date("Apr 15, 2020 15:00:00").getTime();

    let now = new Date().getTime();
  
    let distance = countDeadline - now;
  
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if (distance < 0) {
      document.getElementById("infoTest").innerHTML = "<font color='red'><b>Maaf anda tidak bisa upload karena waktu sudah habis<b></font>";
      document.getElementById("timer").innerHTML ="00:00:00";
    } else {
      document.getElementById("infoTest").innerHTML = "<b>Upload jawaban dibawah ini sebelum waktu habis<b>";
      document.getElementById("timer").innerHTML = hours.toString().padStart(2, "0") + ":" + 
        minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    }
  }
}
