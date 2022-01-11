import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../model/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  facesnaps! : FaceSnap[];

  constructor(private facesnapsservice: FaceSnapsService) { }

  ngOnInit(): void {
    this.facesnaps = this.facesnapsservice.getAllFaceSnaps();
  }

}
