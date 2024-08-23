import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const routes: Routes = [
    {path:"", component: DashboardComponent},
    {path:"upload", component: FileUploadComponent,}

];
