import { Component,Input,OnChanges,OnInit,DoCheck,AfterViewChecked,AfterViewInit,OnDestroy,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
// export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() parentValue: string = ''; // Input from parent component
  counter: number = 0;

  constructor() {
    console.log('Constructor: Component is created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input property value has changed');
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

ngOnInit() {
  console.log('ngOnInit: Component initialized');
}

ngDoCheck() {
  console.log('ngDoCheck: Change detection triggered');
}
ngAfterViewInit() {
  console.log('ngAfterViewInit: Component views initialized');
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked: Component views checked');
}

ngOnDestroy() {
  console.log('ngOnDestroy: Component is about to be destroyed');
}

updateCounter() {
  this.counter++;
}
}
