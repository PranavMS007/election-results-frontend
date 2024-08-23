import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ElectionResultStateService } from '../core/election-result-state.service';
import { LoaderserviceService } from '../core/loaderservice.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConstituencyDialogComponent } from '../constituency-dialog/constituency-dialog.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-constituency-wise-result',
  standalone: true,
  imports: [MatCardModule, CommonModule,MatButtonModule, ConstituencyDialogComponent,MatPaginatorModule],
  templateUrl: './constituency-wise-result.component.html',
  styleUrl: './constituency-wise-result.component.scss'
})
export class ConstituencyWiseResultComponent implements OnInit {
  
  readonly dialog = inject(MatDialog);

  paginatedResult: any[] = []; 
  pageSize = 10; 
  pageIndex = 0; 
 
  constructor(public electionResultStateService: ElectionResultStateService, public loaderserviceService: LoaderserviceService) {}

  ngOnInit(): void {
    this.electionResultStateService.getConstituencyWiseResult();
    this.setPageData();
  }

  setPageData() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedResult = this.electionResultStateService.constituencyWiseResult.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.setPageData();
  }
  
  getVotePercentrage(partyResult: any[], winnigPartyName: String) {
    let percentage = 0;
    partyResult.forEach(element => {
      if (element.party == winnigPartyName) {
        percentage = element.percentage;
      }
    });

    return percentage
  }

  showIndividualConstituency(partyResult: any[], winnigPartyName: String,constituency_name: String) {
    const dialogRef = this.dialog.open(ConstituencyDialogComponent,{
      data : {
        "partyresult": partyResult, 
        "winning_party" : winnigPartyName,
        "constituency_name" : constituency_name,
        "vote_percentage" : this.getVotePercentrage(partyResult ,winnigPartyName)
      }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loaderserviceService.hideLoader();
    });
  }
}
