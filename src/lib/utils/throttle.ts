export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean = false;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args); // 立即執行 Toast
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false; // 允許新 Toast 觸發
      }, limit);
    }
  }) as T;
}
