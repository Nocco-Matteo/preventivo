import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[scrolljacking]'
})
export class ScrolljackingDirective {

  blockScrolling: boolean = false;
  targetScroll: number = 0;
  currentScroll: number = 0;
  totalBlocks: number = 4;

  constructor() { }

  @HostListener('window:wheel', ['$event'])
  onWheelEvent(event: WheelEvent): void {
    event.preventDefault();

    const windowHeight = window.innerHeight;
    const currentHeight = document.documentElement.scrollTop;
    const tolerance = 100;  // Distanza di tolleranza

    const isWithinTolerance = (height: number, target: number) => {
      return Math.abs(height - target) < tolerance;
    };

    // Trova il blocco corrente e il blocco successivo o precedente
    let currentBlock = Math.round(currentHeight / windowHeight);
    let nextBlock = event.deltaY < 0 ? currentBlock - 1 : currentBlock + 1;
    nextBlock = Math.max(0, Math.min(nextBlock, this.totalBlocks - 1));  // Assicura che nextBlock sia tra 0 e 3

    // Verifica se la posizione corrente è entro la tolleranza dal blocco corrente o dal blocco successivo/precedente
    if (isWithinTolerance(currentHeight, currentBlock * windowHeight) ||
      isWithinTolerance(currentHeight, nextBlock * windowHeight)) {
      return;  // Non attivare lo scrolljacking se entro la tolleranza
    }

    if (!this.blockScrolling) {
      this.blockScrolling = true;
      this.currentScroll = currentHeight;
      this.targetScroll = this.calculateDelta(event);
      this.animateScroll();
    }
  }

  private animateScroll(): void {
    const startTime = performance.now();
    const duration = 600;  // Durata dell'animazione in millisecondi

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Calcola la posizione di scorrimento basata sul progresso dell'animazione
      const newScrollTop = this.currentScroll + ((this.targetScroll - this.currentScroll) * progress);

      document.documentElement.scrollTop = newScrollTop;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.blockScrolling = false;
      }
    };

    requestAnimationFrame(animate);
  }

  private calculateDelta(event: WheelEvent): number {
    const windowHeight = window.innerHeight;
    const currentHeight = document.documentElement.scrollTop;
    let currentBlock = Math.round(currentHeight / windowHeight);

    if (event.deltaY < 0) {
      // Scrolling verso l'alto
      if (currentBlock > 0) {  // Verifica se non sei già nel primo blocco
        currentBlock -= 1;  // Vai al blocco precedente
      }
    } else {
      // Scrolling verso il basso
      if (currentBlock < this.totalBlocks - 1) {  // Verifica se non sei già nell'ultimo blocco
        currentBlock += 1;  // Vai al blocco successivo
      }
    }

    const targetHeight = currentBlock * windowHeight;
    return targetHeight;
  }
}
