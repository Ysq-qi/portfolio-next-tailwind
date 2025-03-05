/*
  防抖函式 (Debounce Function)
  設立一個計時器用於短時間觸發多次函式時
  延遲執行最後一次的行為
  EX: 鍵盤敲擊時 執行搜尋功能 只觸發時間內的最後一次
*/
export function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number): T {
  let timer: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  }) as T;
}