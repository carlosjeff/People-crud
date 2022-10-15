import { Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:  InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() labelName!: string;
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() isReadOnly = false;
  @Input() type: string = 'text';
  @Input() control: any;
  @Input() max: string = '';

  @Output() change = new EventEmitter<boolean>();

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
      this.change.emit(true);
    }
  }

  onChangeCb: (_: any) => void = () => {};

  onTouchedCb: (_: any) => void = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
