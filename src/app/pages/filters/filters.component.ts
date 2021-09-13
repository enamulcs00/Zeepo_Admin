import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addspeech(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editspeech(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
