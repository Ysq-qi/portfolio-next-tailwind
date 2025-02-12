'use server';

import { revalidatePath } from 'next/cache';

// 先放著 對接pg資料庫使用 (取代傳統前後端 API Routes)
export async function deleteProduct(formData: FormData) {
  // await deleteProductById(id);
  // revalidatePath('/');
}