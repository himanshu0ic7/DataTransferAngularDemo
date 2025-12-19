import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Output() getUser=new EventEmitter();
  user="himanshu";
  // @Input() user: string='';
  ngOnInit(){
    this.getUser.emit(this.user);
  }
}
