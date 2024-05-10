import { getCharts } from '@/actions/seatsioActions';
import Image from 'next/image';

export default async function Seatmaps() {
  const charts = await getCharts();

  return (
    <section className="container h-screen flex flex-col">
      <h1 className="text-3xl">All Charts</h1>
      {charts?.items.map((chart) => (
        <Image key={chart.id} width={300} height={300} src={chart.draftVersionThumbnailUrl} alt={chart.name} />
      ))}
    </section>
  );
}
