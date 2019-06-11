import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  urls = ['https://sif-staging.s3.amazonaws.com/private/2019/06/ec07d5d3-1db2-4365-9755-919d928e368a/5f7611_label.pdf?AWSAccessKeyId=AKIAIZYZA3BDEY7Z4BGQ&Signature=Lao6Y3DSjVokjkU5pq1zRceKbAk%3D&Expires=1560257088'];
  safeUrls = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrls = [];
    this.urls.forEach((ele) => {
      this.safeUrls.push(this.getPdfUrl(ele));
    });
  }

  getPdfUrl(url) {
    if (url) {
      url = `https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }

}
