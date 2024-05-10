import { Charts } from "@/types/Seatsio";

export const getCharts = async (): Promise<Charts | null> => {
  try {
    const res = await fetch('http://localhost:3000/api/seatsio/seatmaps', {
      next: { tags: ['charts'] }
    });
    const charts: Charts = await res.json()
    return charts;
  }
  catch (err) {
    console.log('[GET_CHARTS', err);
    return null;
  }
}