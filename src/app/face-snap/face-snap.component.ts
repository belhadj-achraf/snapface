import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() facesnap!: FaceSnap;

  buttontext! : String;

  constructor(private faceSnapService : FaceSnapsService,private router: Router) {}

  ngOnInit(): void {
      this.buttontext = 'oh snap';
  }
  onAddSnaps(){
    if ( this.buttontext === 'oh snap' ) {
      this.faceSnapService.FaceSnapsById(this.facesnap.id,'snap');
      this.buttontext = 'oops snap';
    }else{
      this.faceSnapService.FaceSnapsById(this.facesnap.id, 'unsnap');
      this.buttontext = 'oh snap';
    }
  }

  onView() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
