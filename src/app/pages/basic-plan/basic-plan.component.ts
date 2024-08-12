import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent, RouterLink],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {}
