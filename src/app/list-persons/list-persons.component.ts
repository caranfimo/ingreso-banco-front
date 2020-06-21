import {Component, OnInit} from '@angular/core';
import {PersonService} from '../services/PersonService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'birthDate', 'father', 'mother', 'childs', 'delete'];
  dataSource: any;

  constructor(private service: PersonService, private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getListPersons().subscribe(value => {
      this.dataSource = value;
    });
  }

  delete(id: number) {
    this.service.deletePerson(id).subscribe(
      (value) => {
        if (value) {
          this.getList();
        }
      }
    );
  }

}
