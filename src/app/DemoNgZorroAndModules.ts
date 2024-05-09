import { NgModule } from '@angular/core';

import {NzAffixModule} from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';	

@NgModule({
    exports: [
        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,       
    ]
})

export class DemoNgZorroAndModules { }