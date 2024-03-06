import { Component, Input, input } from '@angular/core';
import { Events } from '../../shared/model/event';

@Component({
  selector: 'app-update-event',
  standalone: true,
  imports: [],
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.scss'
})
export class UpdateEventComponent {
 @Input() event!: Events

 
}
