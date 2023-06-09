import { Component, OnInit } from '@angular/core';
import { CollectionPoint } from 'src/app/models/collection-point.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collect-list',
  templateUrl: './collect-list.component.html',
  styleUrls: ['./collect-list.component.scss']
})
export class CollectListComponent implements OnInit {

  collectionList: CollectionPoint[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apiService.findAll()
      .subscribe((data) => this.collectionList = data);
  }
}
