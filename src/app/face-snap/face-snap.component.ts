import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private router: Router) {}


  ngOnInit() {
    this.buttonText = 'Like';
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
