import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatStep, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {HttpEventType} from "@angular/common/http";
import {Player} from "../../../shared/models/player";

@Component({
  selector: 'app-player-upload',
  templateUrl: './player-upload.component.html',
  styleUrls: ['./player-upload.component.scss']
})
export class PlayerUploadComponent implements OnInit {
  fileUpload: FormGroup;
  error: any;
  @ViewChild("stepper", {static: true}) stepper: MatStepper;
  uploadedPlayers: Player[];
  uploadResponse: any;

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: PlayerService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<PlayerUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    this.fileUpload = this.formBuilder.group({
      file: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileUpload.get('file').setValue(file);
    }
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('file', this.fileUpload.get('file').value);
    console.log(formData);
    this.uploadService.uploadFile(formData, this.data.teamId).subscribe(
      (res) => {
        console.log(res);
        // @ts-ignore
        if (res.status === 'progress') {
          this.uploadResponse = res;
        } else {
          // @ts-ignore
          if (res.status === 'completed') {
            // @ts-ignore
            this.uploadedPlayers = res.message;
            this.stepper.next();
          }
        }
      },
      (err) => {
        this.error = err
        this.uploadResponse = err;
      }
    );
  }

  savePlayers() {
    this.uploadService.savePlayersFromFile(this.uploadedPlayers, this.data.teamId).subscribe(data => {
      this.dialogRef.close(true);
    }, error => {
      console.log(error);
    })
  }
}
