import { Component } from '@angular/core';
import { EventService } from '../../core/services/event/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Events } from '../../shared/model/event';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-creation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-creation.component.html',
  styleUrl: './event-creation.component.scss'
})
export class EventCreationComponent {
  showpopup = false;
  model = {
    title: '',
    date: new Date(),
    location: '',
    description: ''
  }

  constructor(private eventService: EventService) { }

  createEvent(){
    const event: Events = {
      ...this.model,
      id: ''
    }
    this.eventService.addEvent(event);
    this.showpopup = false;
  }
}
