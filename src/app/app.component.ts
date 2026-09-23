import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Mode = 'home' | 'learn' | 'quiz' | 'result';
@Component({selector:'app-root',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./app.component.html',styleUrl:'./app.component.scss'})
export class AppComponent {
  mode=signal<Mode>('home'); table=signal(2); factor=signal(1); answer=signal<number|null>(null); score=signal(0); streak=signal(0); question=signal(1); feedback=signal('');
  tables=[2,3,4,5,6,7,8,9,10];
  mascot=['🦊','🦄','🐼','🐙','🐰','🦋'];
  product=computed(()=>this.table()*this.factor());
  selectTable(n:number){this.table.set(n);this.factor.set(1);this.mode.set('learn');}
  startQuiz(n=this.table()){this.table.set(n);this.question.set(1);this.score.set(0);this.streak.set(0);this.feedback.set('');this.newFactor();this.mode.set('quiz');}
  newFactor(){this.factor.set(Math.floor(Math.random()*10)+1);this.answer.set(null);}
  check(){ if(this.answer()===null)return; const ok=this.answer()===this.product(); this.feedback.set(ok?'✨ ¡Genial! ¡Lo has clavado!':'💡 Casi. La respuesta era '+this.product()); if(ok){this.score.update(v=>v+10);this.streak.update(v=>v+1)}else this.streak.set(0); setTimeout(()=>{ if(this.question()>=10){this.mode.set('result')} else {this.question.update(v=>v+1);this.feedback.set('');this.newFactor();}},750); }
  reset(){this.mode.set('home');this.feedback.set('');}
}
