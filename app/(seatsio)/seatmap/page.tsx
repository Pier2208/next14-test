import SeatMap from './_components/SeatMap';

export default async function Seatmap() {
  return (
    <section className="container h-screen flex flex-col">
      <h1 className="text-3xl">Seatmap</h1>
      <SeatMap workspaceKey="c0a475df-507f-4835-9a82-3397691b4fd1" event="061c3249-2255-427c-86a8-cc64327c097d" region="na" />
    </section>
  );
}
