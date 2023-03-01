import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GLOBAL_URL } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class SendFileService {
  fileId!:number;
  constructor(private http:HttpClient) { }

  sendfile(formData:FormData){
    return this.http.post<any>(`${GLOBAL_URL}api/Uploader/UploadFile`,formData)
  }

  getFile(id:number,pagesize:number,pagenumber:number){
    return this.http.get<any>(`${GLOBAL_URL}api/Uploader/GetFile/${id}/${pagesize}/${pagenumber}`)
  }

}
