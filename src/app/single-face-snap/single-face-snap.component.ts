import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  facesnap!: FaceSnap;

  buttontext! : String;

  constructor(private faceSnapService : FaceSnapsService,
              private router: ActivatedRoute ) {}

  ngOnInit(): void {
    this.buttontext = 'oh snap';
    const facesnapId = +this.router.snapshot.params['id'];
    const faceSnap = this.faceSnapService.getFaceSnapsById(this.facesnap.id);
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

}
