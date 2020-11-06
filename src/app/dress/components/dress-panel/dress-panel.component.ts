import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DressService} from "../../service/dress.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dress-panel',
  templateUrl: './dress-panel.component.html',
  styleUrls: ['./dress-panel.component.scss']
})
export class DressPanelComponent implements OnInit {

  dressForm: FormGroup;
  @Input() teamId: string;

  constructor(private fb: FormBuilder,
              private dressService: DressService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.dressForm = this.fb.group({
      color: ['', [Validators.required]]
    })

  }

  submit() {
    this.dressService.saveDress(this.teamId, this.dressForm.getRawValue()).subscribe((value) => {
        this.activeModal.close(value);
      }, error => {
        console.log(error);

      }
    )
  }
}
