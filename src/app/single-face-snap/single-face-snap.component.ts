import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {}


  ngOnInit() {
    this.buttonText = 'Like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onAddSnap(){
    if(this.buttonText === 'Like'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "Like");
      this.buttonText = 'Dislike';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "Dislike");
      this.buttonText = 'Like';
    }
  }

}
