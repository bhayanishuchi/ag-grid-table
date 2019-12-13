import { Component, OnInit } from '@angular/core';
import {RegulatoryService} from '../../services/regulatory.service';

@Component({
  selector: 'app-e-files',
  templateUrl: './e-files.component.html',
  styleUrls: ['./e-files.component.scss']
})
export class EFilesComponent implements OnInit {

  constructor(private regulatoryService: RegulatoryService) { }

  ngOnInit() {
  }
}
