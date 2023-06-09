import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionPoint } from 'src/app/models/collection-point.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collect-item',
  templateUrl: './collect-item.component.html',
  styleUrls: ['./collect-item.component.scss']
})
export class CollectItemComponent implements OnInit {

  collectionItem: CollectionPoint | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.route.paramMap
      .subscribe((params) => {
        const recordId: string | null = params.get('id');
        if (recordId) {
          this.getOne(recordId);
        }
      });
  }

  getOne(id: string) {
    this.apiService.findById(id)
      .subscribe((data) => this.collectionItem = data);
  }
}
