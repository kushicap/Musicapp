
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';

fdescribe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create',()=>{
    expect(AlbumComponent).toBeTruthy();
  });
  it('should have albums',()=>{
    var albumdata=["sia","sia","Lovely","sia"]
    /* toEqual when you want to check that two objects have the same value */
    expect(albumdata.length).toEqual(4);
   /*  ensures that they are the exact same objects. */
    expect(albumdata.length).toBe(4);
  })
});
