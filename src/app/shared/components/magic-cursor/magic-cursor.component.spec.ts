import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCursorComponent } from './magic-cursor.component';

describe('MagicCursorComponent', () => {
  let component: MagicCursorComponent;
  let fixture: ComponentFixture<MagicCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
