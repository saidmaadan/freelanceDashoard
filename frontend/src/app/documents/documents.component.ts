import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService} from './document.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashbord";
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe(documents => {
      this.documents = documents,
      error => this.errorMessage = <any>error
    });
  }

}

 // [
 //    {
 //      title: "My first Doc",
 //      description: "This is the first doc",
 //      file_url: "http://maadan.me",
 //      updated_at: '12/12/2017',
 //      image_url: "https://cdn.pixabay.com/photo/2015/01/26/10/23/office-612532_960_720.jpg"},
 //    {
 //      title: "My second Doc",
 //      description: "This is the first doc",
 //      file_url: "http://maadan.me",
 //      updated_at: '12/12/2017',
 //      image_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Work-Business-Laptop-Office-Freelancer-Computer-1610479.jpg"
 //    },
 //    {
 //      title: "My third Doc",
 //      description: "This is the first doc",
 //      file_url: "http://maadan.me",
 //      updated_at: '12/12/2017',
 //      image_url: "https://cdn.pixabay.com/photo/2015/01/26/10/23/office-612532_960_720.jpg"
 //    },
 //    {
 //      title: "My fourth Doc",
 //      description: "This is the first doc",
 //      file_url: "http://maadan.me",
 //      updated_at: '12/12/2017',
 //      image_url: "https://cdn.pixabay.com/photo/2015/01/26/10/23/office-612532_960_720.jpg"
 //    }

 //  ];