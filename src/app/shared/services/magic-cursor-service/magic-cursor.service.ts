import { Injectable } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Injectable({
  providedIn: 'root'
})
export class MagicCursorService {

    constructor() { }

  private readonly letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  interval : any = null;

  private ball!: HTMLElement;
  private mouse = { x: 0, y: 0 };
  private pos = { x: 0, y: 0 };
  private ratio = 0.15;
  private active = false;

  init(ball: HTMLElement) {
    this.ball = ball;

    gsap.set(this.ball, {
      xPercent: -50,
      yPercent: -50,
      width: 24,
      height: 24,
      borderRadius: '50%',
      borderWidth: 1,
      opacity: 0.5,
    });

    document.addEventListener('mousemove', this.trackMouse);
    gsap.ticker.add(this.followCursor);

  }

  private trackMouse = (e: MouseEvent) => {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  private followCursor = () => {
    if (!this.active) {
      this.pos.x += (this.mouse.x - this.pos.x) * this.ratio;
      this.pos.y += (this.mouse.y - this.pos.y) * this.ratio;
      gsap.set(this.ball, { x: this.pos.x, y: this.pos.y });
    }
  }

  setHover(active: boolean) {
    this.active = active;
    gsap.to(this.ball, { scale: active ? 2 : 1, duration: 0.3 })
  }

  showText(text: string) {

    this.ball.innerHTML = `<div class="ball-view">${text}</div>`;
    gsap.to(this.ball, {
      width: 95,
      height: 95,
      opacity: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'San Serif',
      borderWidth: 0,
      backgroundColor: '#fff',
      duration: 0.3,
    });
  }


  reset() {
    this.ball.innerHTML = '';
    gsap.to(this.ball, {
      width: 34,
      height: 34,
      opacity: 0.5,
      borderWidth: 2,
      backgroundColor: 'transparent',
      duration: 0.3
    });
  }

  moveTo(x: number, y: number) {
    gsap.to(this.ball, { duration: 0.3, x, y });
  }

  scaleBall(scale: number): void {
    gsap.to(this.ball, { scale: scale, borderWidth: 1, opacity: 0.5, duration: 0.3 });
  }

  resetBall(): void {
    gsap.to(this.ball, {
      scale: 1,
      borderWidth: 2,
      opacity: 0.5,
      backgroundColor: 'transparent',
      width: 34,
      height: 34,
      duration: 0.3
    });
  }

  animateText(element: HTMLElement, targetText: string) {
    let iterations: number = 0;
    const currentText = element.innerText;

    if (this.interval !== null) clearInterval(this.interval);

     this.interval = setInterval(() => {
      const maxLength = Math.max(currentText.length, targetText.length);

      let animateText = "";

      for (let i = 0; i < maxLength; i++) {
        if (i < iterations) {
          animateText += targetText[i] ?? "";
        } else {
          animateText += this.letters[Math.floor(Math.random() * 26)]
        }
      }

      element.innerText = animateText;

      if (iterations >= maxLength) {
        clearInterval(this.interval);
        element.innerText = targetText;
      }

      iterations += 1 / 3;

    }, 25);
  }
}
