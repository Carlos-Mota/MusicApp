// ./src/app/music/music.module.ts

// Third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

//PrimeNG autocomplete for search
import { AutoCompleteModule } from 'primeng/primeng';

// Custom imports
import { MusicDetailsComponent, 
         MusicFooterComponent, 
         MusicSearchComponent } from './index';


@NgModule ({
    imports: [
        //Define imports
        FormsModule,
        HttpModule,
        CommonModule,
        AutoCompleteModule,
    ],
    exports: [
        // Expose components
        MusicDetailsComponent,
        MusicFooterComponent,
        MusicSearchComponent
    ],
    declarations: [
        // Services

    ],
    providers: [

    ]
})
export class MusicModule { }