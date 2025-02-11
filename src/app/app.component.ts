import { Component } from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myObservable: Observable<number> | undefined

  myObserver = {
    next: (value: number) => console.log(`Observer got a next value: ${value}`),
    error: (error: Error) => console.error(`Observer got an error: ${error}`),
    complete: () => console.log('Observer got a complete notification')
  }

  createObservable() {
    // Create simple observable that emits three values
    this.myObservable = of(1, 2, 3)
  }

  subscribe(): void {
    // Execute with the observer object
    this.myObservable?.subscribe(this.myObserver)
  }
}
