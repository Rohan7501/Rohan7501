import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() dataSource!:any;
  @Input() headers!:any;
  @Input() totalRows!: any;
  @Input() data!: any;
  @Output() nextPage: EventEmitter<any> = new  EventEmitter();

}
