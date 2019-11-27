import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAutorComponent } from './book-autor.component';

describe('BookAutorComponent', () => {
  let component: BookAutorComponent;
  let fixture: ComponentFixture<BookAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
