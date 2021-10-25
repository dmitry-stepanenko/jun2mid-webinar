import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DebugExampleComponent } from './debug-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DebugExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
     RouterModule.forChild([{ path: '', component: DebugExampleComponent }]),
     MatInputModule,
     MatCardModule
    ],
  exports: [],
})
export class DebugExampleModule {}
