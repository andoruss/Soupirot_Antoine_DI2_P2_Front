import { Injectable } from "@angular/core";
import { environment } from "../../../../environnement/const";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Events } from "../../../shared/model/event";
import { ApiService } from "../../../shared/api.service";

@Injectable({ providedIn: 'root' })
export class EventService {

    constructor(private apiService: ApiService) {}

    getClients(): Observable<Events> {
        return this.apiService.get<Events>("GetEvents");
    }

    addEvent(event: Events): Observable<Events> {
        return this.apiService.post<Events>("AddEvent", event);
    }

    updateEvent(event: Events): Observable<Events> {
        return this.apiService.put<Events>("UpdateEvent", event);
    }

    deleteEvent(event: Events): Observable<Events> {
        return this.apiService.delete<Events>("DeleteEvent", event);
    }
}