import { Component, OnInit } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { TotalElectionResultComponent } from "../total-election-result/total-election-result.component";
import { ConstituencyWiseResultComponent } from "../constituency-wise-result/constituency-wise-result.component";
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatToolbarModule, TotalElectionResultComponent, ConstituencyWiseResultComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  
  constructor(){}

  ngOnInit(){
  }

}
