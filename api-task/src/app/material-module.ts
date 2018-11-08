import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatButtonModule,
    MatListModule
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatListModule
    ]
})
export class MaterialModule {}
