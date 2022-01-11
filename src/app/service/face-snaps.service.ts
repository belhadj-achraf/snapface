import {Injectable} from "@angular/core";
import {FaceSnap} from "../model/face-snap.model";

@Injectable({
  providedIn : 'root'
})
export class FaceSnapsService{
  facesnaps : FaceSnap[] = [{
    id: 1,
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit !',
    createDate: new Date,
    snaps: 6,
    imageUrl: '../assets/images/imag.jpg',
    location: 'maroc'
  },
    {
      id: 2,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createDate: new Date,
      snaps: 50,
      imageUrl: '../assets/images/imag.jpg',
      location: 'bengurir'
    },
    {
      id: 3,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createDate: new Date,
      snaps: 100,
      imageUrl: '../assets/images/imag.jpg'
    }];

  getAllFaceSnaps(): FaceSnap[]{
    return this.facesnaps;
  }

  getFaceSnapsById(faceSnapId: number): FaceSnap {
    const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if ( !faceSnap ){
      throw new Error("snap not found!");
    }else{
      return faceSnap;
    }
}
  FaceSnapsById(faceSnapId: number,typeSnap : 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapsById(faceSnapId);
    typeSnap === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}
