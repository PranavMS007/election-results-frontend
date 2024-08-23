import { Injectable } from '@angular/core';
import { ElectionResultCommunicationService } from './election-result-communication.service';
import { BehaviorSubject } from 'rxjs';
import { ElectionResults } from '../models/constituencyResultModel';
import { LoaderserviceService } from './loaderservice.service';


@Injectable({
  providedIn: 'root'
})
export class ElectionResultStateService {


  constructor(private communService : ElectionResultCommunicationService, private loaderserviceService :LoaderserviceService) {}

  private readonly electionResultSubject = new BehaviorSubject<ElectionResults | any>(null);
  readonly electionResult$=this.electionResultSubject.asObservable();
  
  get electionResult(){
    return this.electionResultSubject.getValue();
  }

  private set electionResult(response){
    this.electionResultSubject.next(response);
  }


  private readonly constituencydetailSubject = new BehaviorSubject<any>(null);
  readonly constituencyDetails$=this.constituencydetailSubject.asObservable();

  get constituencyDetails(){
    return this.constituencydetailSubject.getValue();
  }

  set constituencyDetails(response){
    this.constituencydetailSubject.next(response);
  }

  private readonly constituencyWiseResultSubject = new BehaviorSubject<any[]>([]);
  readonly constituencyWiseResult$=this.constituencyWiseResultSubject.asObservable();

  get constituencyWiseResult(){
    return this.constituencyWiseResultSubject.getValue();
  }

  set constituencyWiseResult(response){
    this.constituencyWiseResultSubject.next(response);
  }
  
  getAllResults(){
    this.loaderserviceService.showLoader();
    this.electionResult = null;
    this.communService.getAllResults().subscribe({
      next: (data) => {
        this.electionResult = data;
        this.loaderserviceService.hideLoader();
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loaderserviceService.hideLoader();
      }
    });
  }

  getConstituencyDetails(constituency_name:any) {
    this.loaderserviceService.showLoader();
    this.communService.getConstituencyDetails(constituency_name).subscribe({
      next: (data) => {
        this.constituencyDetails = data;
        this.loaderserviceService.hideLoader();
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loaderserviceService.hideLoader();
      }
    });
  }

  getConstituencyWiseResult() {
    this.loaderserviceService.showLoader();
    this.communService.getConstituencyWiseResult().subscribe({
      next: (data) => {
        this.constituencyWiseResult = data;
        this.loaderserviceService.hideLoader();
        //console.log(data);
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loaderserviceService.hideLoader();
      }
    });
  }

  uploadCsvFile(file: File) {
    this.loaderserviceService.showLoader();
    this.communService.uploadCsvFile(file).subscribe({
      next: (data) => {
        this.loaderserviceService.hideLoader();
      },
      error: (error) => {
        this.loaderserviceService.hideLoader();
        console.error('Error uploading file', error);
      }
    });
  }

}
