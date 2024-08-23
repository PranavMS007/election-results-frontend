import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElectionResults } from '../models/constituencyResultModel';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectionResultCommunicationService {

  results: any[] = [];
  constructor(private http: HttpClient) { }

  getAllResults(): Observable<ElectionResults>{
     return this.http.get<ElectionResults>(environment.apiUrl+ "results" );
  }

  getConstituencyDetails(constituency_name: any) {
    const constituencyUrl=environment.apiUrl + "constituency/"+ constituency_name;
    console.log(constituencyUrl);
    return this.http.get<any>(constituencyUrl);
  }

  getConstituencyWiseResult() {
    return this.http.get<any[]>(environment.apiUrl+ "constituencies" );
  }

  uploadCsvFile(file: File):Observable<any> {
    const csvUploadUrl = `${environment.apiUrl}upload`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(csvUploadUrl, formData);
  }
}
