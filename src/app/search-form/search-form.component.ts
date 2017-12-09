import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validNumber} from '../validators/validator';
import {ServiceUtilService} from '../shared/service-util.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent{

  private formModel: FormGroup;
  private productCategorys: string[];

  constructor(private fb: FormBuilder, private sus: ServiceUtilService) {
    this.productCategorys = sus.getAllProductCategorys();
    this.formModel = fb.group({
      productName: ['', [Validators.required, Validators.minLength(2)]],
      productPrice: ['', validNumber],
      productCategory: []
    });
  }

  onSubmit() {
    let valid: boolean = this.formModel.valid;
    if (valid) {
      this.sus.searchEvent.emit(this.formModel.value);
    }
  }

}
