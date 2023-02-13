export interface Priority {
  title: string;
  timeframes: TimeFrame;
}

export interface TimeFrame {
  daily: Period;
  weekly: Period;
  monthly: Period;
}

export interface Period {
  current: number;
  previous: number;
}
