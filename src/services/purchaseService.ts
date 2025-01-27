export interface Purchase {
  id: number
  location: string
  purchaseDate: string
  category: string
  description: string
  price: number
  name: string
}

const API_URL = "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json"

export async function fetchPurchases(): Promise<Purchase[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    return data;
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return [];
  }
}
