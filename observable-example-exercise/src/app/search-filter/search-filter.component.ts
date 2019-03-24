import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, throwError, of } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators'

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, OnDestroy {

  constructor() { }

  @ViewChild('filterBar') filterBar: ElementRef

  @Output() stringToSearch = new EventEmitter();

  subscription: Subscription

  ngOnInit() {
    var input$ = fromEvent(this.filterBar.nativeElement, 'keyup')

    var error$ = throwError("This is an error!")

    var subscription = input$.
                      pipe(debounceTime(200),
                      map((inputEvent: any) => inputEvent.target.value),
                      distinctUntilChanged(),
                      catchError(err => {
                        console.log('With catchError: ', err)
                        return of([])
                      })). 
                      subscribe(inputString => this.stringToSearch.emit(inputString))
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }
}
