import { PersonaRoutingModule, routedComponents } from './persona-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    PersonaRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    PersonaService,
  ],
})
export class PersonaModule { }
