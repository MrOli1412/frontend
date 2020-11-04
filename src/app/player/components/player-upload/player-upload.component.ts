import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatStep, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {HttpEventType} from "@angular/common/http";
import {Player} from "../../../shared/models/player";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-player-upload',
  templateUrl: './player-upload.component.html',
  styleUrls: ['./player-upload.component.scss']
})
export class PlayerUploadComponent implements OnInit {
  fileUpload: FormGroup;
  error: any;
  @ViewChild("stepper", {static: true}) stepper: MatStepper;
  uploadedPlayers: Player[] = [];
  uploadResponse: any;
  @Input() teamId: string;


  constructor(
    private formBuilder: FormBuilder,
    private uploadService: PlayerService,
    private route: ActivatedRoute,
    private toaster: ToastrService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() {
    console.log(this.teamId)
    this.fileUpload = this.formBuilder.group({
      file: ['', [Validators.required]]
    });
  }

  get file() {
    return this.fileUpload.get('file');
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file: File = event.target.files[0];
      if (file.type === 'application/pdf') {
        this.fileUpload.get('file').setValue(file);
      } else {
        file = null;
        this.fileUpload.get('file').setValue(null);
        console.log(this.fileUpload.get('file').hasError('required'))
      }
    }
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('file', this.file.value);
    console.log(formData);
    this.uploadService.uploadFile(formData, this.teamId).subscribe(
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
        this.error = err;
        this.uploadResponse = err;
      }
    );
  }

  savePlayers() {
    this.uploadService.savePlayersFromFile(this.uploadedPlayers, this.teamId).subscribe(data => {
      this.activeModal.close(data)

    }, error => {
      this.toaster.error("Błąd podczas tworzenia drużyny", error);

    })
  }
}
