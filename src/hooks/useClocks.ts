import { useEffect, useState } from 'react';

const SRI_LANKA_TZ = 'Asia/Colombo';

function format(date: Date, timeZone?: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone
  }).format(date);
}

function localZoneLabel(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz.split('/').pop()?.replace(/_/g, ' ') ?? 'Local';
  } catch {
    return 'Local';
  }
}

export interface Clocks {
  sriLanka: string;
  local: string;
  localZone: string;
  isBusinessHours: boolean;
}

export function useClocks(): Clocks {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000 * 30);
    return () => window.clearInterval(id);
  }, []);

  const sriLanka = format(now, SRI_LANKA_TZ);
  const local = format(now);
  const [h, m] = sriLanka.split(':').map(Number);
  const minutes = h * 60 + m;
  const weekday = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    timeZone: SRI_LANKA_TZ
  }).format(now);
  const isWeekend = weekday === 'Sun';
  const isSaturday = weekday === 'Sat';
  const close = isSaturday ? 14 * 60 : 18 * 60;
  const isBusinessHours = !isWeekend && minutes >= 9 * 60 && minutes < close;

  return { sriLanka, local, localZone: localZoneLabel(), isBusinessHours };
}