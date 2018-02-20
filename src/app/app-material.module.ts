import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [MatCheckboxModule, MatToolbarModule, MatMenuModule,
        MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule,
        MatStepperModule, MatDividerModule],
    exports: [MatCheckboxModule, MatToolbarModule, MatMenuModule,
        MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule,
        MatStepperModule, MatDividerModule]
})
export class MaterialModule {

}