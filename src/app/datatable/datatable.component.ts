import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Output() rowSelected: EventEmitter<number> = new EventEmitter();
  
  public data =
  [{
    "name": "Anna",
    "lastName": "Konda"
  },
  {
    "name": "Wayne",
    "lastName": "Interessierts"
  }];

  public tableWidget: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initDatatable()
  }
  private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
     this.tableWidget.on('select',
      (e, dt, type, indexes) => this.onRowSelect(indexes))
  }

  private reInitDatatable(): void {
    if (this.tableWidget) {
      this.tableWidget.destroy()
      this.tableWidget = null
    }
    setTimeout(() => this.initDatatable(), 0)
  }

  public deleteRow(): void {
    this.data.pop();
    this.reInitDatatable()
  }
  private onRowSelect(indexes: number[]): void {
    this.rowSelected.emit(indexes[0])
  }
}
