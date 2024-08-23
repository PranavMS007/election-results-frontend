import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { CommonModule } from '@angular/common';
import { ElectionResultStateService } from '../core/election-result-state.service';
import { LoaderserviceService } from '../core/loaderservice.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FormsModule,HttpClientModule, NgxFileDropModule,CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  readonly dialog = inject(MatDialog);

  constructor(public electionResultStateService : ElectionResultStateService, public loaderserviceService :LoaderserviceService){}

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Validate file type
          if (file.type === 'text/csv') {
            // Upload the file
            this.electionResultStateService.uploadCsvFile(file);
            this.openDialog("Data saved sucessfully.!");
          } else {
            this.openDialog("Invalid file type. Only CSV allowed.!");
            console.error('Invalid file type');
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  openDialog(message:String) {
    this.dialog.open(AlertDialogComponent,{
      data : {"message": message}
    });
  }
}


