import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashbord";
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "This is the first doc",
      file_url: "http://maadan.me",
      updated_at: '12/12/2017',
      image_url: "http://naijaproperty.com"
    },
    {
      title: "My second Doc",
      description: "This is the first doc",
      file_url: "http://maadan.me",
      updated_at: '12/12/2017',
      image_url: "http://naijaproperty.com"
    },
    {
      title: "My third Doc",
      description: "This is the first doc",
      file_url: "http://maadan.me",
      updated_at: '12/12/2017',
      image_url: "http://naijaproperty.com"
    },
    {
      title: "My fourth Doc",
      description: "This is the first doc",
      file_url: "http://maadan.me",
      updated_at: '12/12/2017',
      image_url: "http://naijaproperty.com"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
