import {Component, OnInit} from '@angular/core';
import {Person} from '../models/Person';
import {PersonService} from '../services/PersonService';
import {PersonRequest} from '../models/PersonRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  persons: Person[];
  model = new Person();
  submitted = false;
  date: Date;
  fatherId: number;
  motherId: number;

  constructor(private service: PersonService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getListPersons().subscribe(
      value => {
        this.persons = value;
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    const personRequest = new PersonRequest();

    personRequest.fullName = this.model.fullName;
    personRequest.birthDate = this.getFormatDate(this.date);
    personRequest.fatherId = this.fatherId;
    personRequest.motherId = this.motherId;

    this.service.createPerson(personRequest).subscribe(
      value => {
        this.router.navigate(['lista']);
      }
    );

  }

  newHero() {
    this.model = new Person();
    this.motherId = undefined;
    this.fatherId = undefined;
  }

  getFormatDate(date: Date): string {
    return date.toLocaleDateString([], {year: 'numeric'}) + '-'
      + date.toLocaleDateString([], {month: '2-digit'}) + '-'
      + date.toLocaleDateString([], {day: '2-digit'});
  }

}
