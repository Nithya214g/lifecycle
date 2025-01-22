import { Component,NgModule } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ LifecycleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle';
  parentValue: string = 'Initial Value';
}
