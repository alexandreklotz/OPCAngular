import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Exige',
      description: 'Exige v6 cup 430',
      imageUrl:  'https://paultan.org/image/2017/11/Lotus-Exige-Cup-430-2.jpg',
      createdDate: new Date(),
      snaps: 300,
      location: "Concession Lotus"
    },
    {
      id: 2,
      title: 'Elise',
      description: 'elise s1',
      imageUrl: 'https://ag-spots-2017.o.auroraobjects.eu/2017/11/04/lotus-elise-s1-c337704112017205833_5.jpg?1610679078',
      createdDate: new Date(),
      snaps: 5
    },
    {
      id: 3,
      title: 'mx5',
      description: 'mx5 ND',
      imageUrl: 'https://www.carscoops.com/wp-content/uploads/2019/12/2019-Mazda-MX-5-30th-Anniversary-Euro-spec-0-1024x554.jpg',
      createdDate: new Date(),
      snaps: 10
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'Like' | 'Dislike'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'Like' ? faceSnap.snaps++: faceSnap.snaps--;
  }

}
