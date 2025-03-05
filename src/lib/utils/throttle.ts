/*
  限制函式在特定時間內最多執行一次 (throttle)
  接收一個函式 func 和一個時間間隔 limit (毫秒)
  使用變數 inThrottle 來追蹤當前是否處於限流狀態
  當 inThrottle 為 false 時，執行函式並設置 inThrottle 為 true
  使用 setTimeout() 在 limit 時間後重置 inThrottle 為 false，允許下一次執行
  若在限流期間內多次觸發，則忽略後續請求，直到時間過後才可再次執行
  適用於監聽 scroll、resize 事件 或是防止短時間內多次點擊按鈕等場景
*/

export function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): T {
  let inThrottle = false;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  }) as T;
}
