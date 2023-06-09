import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collect-list',
  templateUrl: './collect-list.component.html',
  styleUrls: ['./collect-list.component.scss']
})
export class CollectListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.findAll()
      .subscribe((data) => console.log(data))
  }


}
