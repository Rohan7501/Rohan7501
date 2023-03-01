import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  no_of_Graphs = 0;
  source1_name="";
  source2_name="";
  upload_source2=false;
  panelOpenState = false;
  selectedFile:any;

  constructor(private http:HttpClient){

  }
  addNewGraph(){
    this.no_of_Graphs+=1;
  }

  source1(event: any){
    this.selectedFile = event.target.files[0]
    const formData = new FormData();
    formData.append('file',this.selectedFile);
    // this.source1_name="test1";
    // this.upload_source2=true;
    this.http.post<any>(`https://localhost:7045/api/Uploader/UploadFile`, formData).subscribe(res => {
      console.log(res);
    })

  }
  source2(){
    this.source2_name="test2";
  }


  ngOnInit(): void {
      
  }
}
