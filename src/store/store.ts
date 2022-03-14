import {Observable, Subject} from "rxjs";
import produce from "immer";

export default class Store<T> {

  private dataStore: T[] = []
  private dataSubject: Subject<T[]> = new Subject<T[]>()

  update(dataStore: T[]): void {
    this.dataStore = produce(this.dataStore, (draft: T[]) => {
      draft.push(...dataStore)
    })
    this.dataSubject.next(this.dataStore)
  }

  get data(): Observable<T[]> {
    return this.dataSubject
  }
}
