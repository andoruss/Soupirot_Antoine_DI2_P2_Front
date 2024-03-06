import { Component } from '@angular/core';
import { Events } from '../../shared/model/event';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/event/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
events: Array<Events> = [
  { "id": "1", "title": "Event 1", "date": new Date(1990, 4, 7), "location": "Location 1", "description": "Description 1"}
]

constructor(private eventService: EventService) {

}

ngOnInit() {
  this.loadEvents();
}

loadEvents(){
  this.eventService.getEvents().subscribe(data => {
    if (data != null && data.length <= 0){
      return;
    }else{
      this.events = {...data};
    }
  });
}

delete(id: string){
  const eventsIndex = this.events.findIndex((obj) => obj.id === id);
  if (eventsIndex > -1) {
    this.events.splice(eventsIndex, 1);
  }
  this.eventService.deleteEvent(id);
}



}