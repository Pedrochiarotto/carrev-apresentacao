import { presentationData } from './presentation-data';
import { Component, ElementRef, HostListener, ViewChild, signal } from '@angular/core';

@Component({ selector: 'app-root', standalone: true, templateUrl: './app.html' })
export class App {
  readonly slides = [{"title": "CarRev", "category": "Contexto"}, {"title": "Transformação Digital", "category": "Estratégia"}, {"title": "Propósito Transformador Massivo", "category": "Estratégia"}, {"title": "Princípios de Inovação", "category": "Inovação"}, {"title": "Equipe CarRev", "category": "Execução"}, {"title": "Persona", "category": "Cliente"}, {"title": "Diretrizes Estratégicas", "category": "Estratégia"}, {"title": "Síntese Estratégica", "category": "Análise"}, {"title": "Business Model Canvas", "category": "Negócio"}, {"title": "8 Ps do Marketing Digital", "category": "Crescimento"}];
  readonly content = presentationData;
  readonly current = signal(this.readHash());
  readonly notice = signal('');
  @ViewChild('map') map!: ElementRef<HTMLDialogElement>;
  number(index: number): string { return String(index + 1).padStart(2, '0'); }
  private readHash(): number {
    const match = /^#slide-(\d+)$/.exec(location.hash);
    return match ? Math.min(this.slides.length - 1, Math.max(0, Number(match[1]) - 1)) : 0;
  }
  goTo(index: number): void {
    if (index < 0 || index >= this.slides.length) return;
    this.current.set(index);
    history.replaceState(null, '', '#slide-' + (index + 1));
    document.querySelectorAll('.slide').forEach(slide => slide.scrollTop = 0);
  }
  @HostListener('window:hashchange') onHashChange(): void { this.current.set(this.readHash()); }
  @HostListener('document:keydown', ['$event']) onKey(event: KeyboardEvent): void {
    if (event.altKey || event.ctrlKey || event.metaKey || this.map.nativeElement.open) return;
    if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')) return;
    const key = event.key.toLowerCase();
    if (['arrowright', 'pagedown', 'arrowleft', 'pageup', 'home', 'end', 'm', 'f'].includes(key)) event.preventDefault();
    if (key === 'arrowright' || key === 'pagedown') this.goTo(this.current() + 1);
    if (key === 'arrowleft' || key === 'pageup') this.goTo(this.current() - 1);
    if (key === 'home') this.goTo(0);
    if (key === 'end') this.goTo(this.slides.length - 1);
    if (key === 'm') this.map.nativeElement.showModal();
    if (key === 'f') void this.toggleFullscreen();
  }
  async toggleFullscreen(): Promise<void> {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { this.notice.set('Tela cheia indisponível neste navegador. Você pode usar F11.'); setTimeout(() => this.notice.set(''), 6000); }
  }
  closeBackdrop(event: MouseEvent): void { if (event.target === this.map.nativeElement) this.map.nativeElement.close(); }
  print(): void { window.print(); }
}
