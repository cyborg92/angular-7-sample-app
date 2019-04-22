import {Component, Input,OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'../header/header.component.html',
    styleUrls:['../header/header.component.scss']
})

export class HeaderComponent{
    @Input() title:any;
    constructor()
    {

    }
    ngOnChanges(changes:SimpleChanges){
        if (changes.hasOwnProperty('title')){
            this.title=changes['title']['currentValue'];
        }
    }
}