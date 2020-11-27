import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Crop, CropFilter, DistrictFilter } from 'src/app/shared/crop.model';
import { CropService } from '../crop.service';



@Component({
  selector: 'app-all-trades-copy',
  templateUrl: './all-trades-copy.component.html',
  styleUrls: ['./all-trades-copy.component.css']
})
export class AllTradesCopyComponent implements OnInit {

  crops$: Observable<Crop[]>;
  cropFilterCheckbox$: Observable<CropFilter[]>
  districtFilterCheckbox$: Observable<DistrictFilter[]>

  constructor(private cropService: CropService) { }

  ngOnInit(): void {
    this.crops$ = this.cropService.getAllCrops()
    console.log(this.crops$);

    this.cropFilterCheckbox$ = this.cropService.getCropFilter()

    this.districtFilterCheckbox$ = this.cropService.getDistrictFilter()

  }

}
