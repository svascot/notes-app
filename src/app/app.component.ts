import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notesApp';

  notes: Object;
  testNote = {
    id: '',
    title: '',
    text: '',
    color: ''
  }

  constructor(private httpService: HttpService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.httpService.getAll().subscribe(data => {
      this.notes = Object.values(data).reverse();;
    });
  }

  create(note): void {
    this.httpService.create(note.value).subscribe(data => {
      //TODO Fix this!
      //this.notes = Object.values(this.notes).unshift(note.value);
      this.ngOnInit();
      note.reset();
    });
  }

  //Change!
  update(note): void {
    console.log(note);
    this.httpService.update(note).subscribe(data => {
      //TODO Fix this!
      //this.notes = Object.values(this.notes).unshift(note.value);
      this.closeModal();
      this.ngOnInit();
    });
  }

  delete(note) {
    this.httpService.delete(note.id).subscribe(data => {
      this.ngOnInit();
      this.closeModal();
    });
  }

  openModalUpdate(note) {
    this.testNote = note;
    this.modalService.open('modalUpdate');
  }

  closeModal() {
    this.modalService.close('modalUpdate');
  }
}
