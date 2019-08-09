export interface Timer {
  start: () => void;
  elapsed: () => number;
}

export class DefaultTimer implements Timer {
  private startTime: number;
  constructor() {
    this.startTime = 0;
  }
  start(): void {
    this.startTime = Date.now();
  }
  elapsed(): number {
    return Date.now() - this.startTime;
  }
}
