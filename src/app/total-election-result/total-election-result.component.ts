import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatChipsModule} from '@angular/material/chips';
import { ElectionResultStateService } from '../core/election-result-state.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderserviceService } from '../core/loaderservice.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ConstituencyDialogComponent } from '../constituency-dialog/constituency-dialog.component';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-total-election-result',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatChipsModule, CommonModule, HttpClientModule, MatProgressBarModule, MatDividerModule],
  templateUrl: './total-election-result.component.html',
  styleUrl: './total-election-result.component.scss'
})
export class TotalElectionResultComponent  implements OnInit{

  readonly dialog = inject(MatDialog);

  PARTY_CODE_MAP: { [key: string]: string } = {
    "C": "Conservative Party",
    "L": "Labour Party",
    "UKIP": "UKIP",
    "LD": "Liberal Democrats",
    "G": "Green Party",
    "Ind": "Independent",
    "SNP": "SNP"
  };
  
  constructor(public electionResultStateService : ElectionResultStateService, public loaderserviceService :LoaderserviceService){}

  ngOnInit(){
    this.electionResultStateService.getAllResults();
  }

  showIndividualConstituency(constituency_name : any) {
    const dialogRef = this.dialog.open(ConstituencyDialogComponent,{
      data : {constituency_name: constituency_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loaderserviceService.hideLoader();
    });
  }

  getTotalMps(item : any) {
    return item.total_mps;
  }

  getTotalVotes(item : any) {
    return item.total_votes;
  }

  gePartyShortCode(party_name: any) : string | undefined {
    return Object.keys(this.PARTY_CODE_MAP).find(
      key => this.PARTY_CODE_MAP[key] === party_name
  );
  }
}
