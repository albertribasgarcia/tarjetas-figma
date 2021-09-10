import {Component, Input, OnInit} from '@angular/core';
import {Trimestre} from "../../shared/modelos/trimestre.model";

@Component({
  selector: 'info-trimestre',
  templateUrl: './info-trimestre.component.html',
  styleUrls: ['./info-trimestre.component.css']
})
export class InfoTrimestreComponent implements OnInit {

  @Input() trimestre: Trimestre;
  constructor() { }

  ngOnInit(): void {
  }

}
