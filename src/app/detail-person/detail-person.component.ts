import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../services/PersonService';
import {Person} from '../models/Person';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {

  id: any;
  model: Person;
  displayedColumns: string[] = ['id', 'fullName', 'birthDate'];
  dataSource: any;

  constructor(private activatedRoute: ActivatedRoute, private service: PersonService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getDetailsPersons(this.id).subscribe(
      value => {
        this.model = value;
        this.dataSource = this.model.childs ? this.model.childs : [];
        console.log(this.model);
      }
    );
  }

}
