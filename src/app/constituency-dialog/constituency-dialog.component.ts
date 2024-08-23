import { Component, inject, model, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { LoaderserviceService } from '../core/loaderservice.service';
import { ElectionResultStateService } from '../core/election-result-state.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-constituency-dialog',
  standalone: true,
  imports: [MatTableModule,CommonModule,MatToolbarModule],
  templateUrl: './constituency-dialog.component.html',
  styleUrl: './constituency-dialog.component.scss'
})
export class ConstituencyDialogComponent  implements OnInit{
  
  displayedColumns: string[] = ['No','party', 'votes', 'percentage'];
  
  readonly data = inject<any>(MAT_DIALOG_DATA);
  dataSource$ = [];
  
  readonly constituency_name = this.data.constituency_name;
  
  constructor(public electionResultStateService : ElectionResultStateService, public loaderserviceService :LoaderserviceService ){

  }

  ngOnInit(){
    //.log(this.data);
    this.dataSource$=this.data.partyresult;
  }


  
}
