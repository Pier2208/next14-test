'use client';

import { Region, SeatsioSeatingChart } from '@seatsio/seatsio-react';

interface SeatMapProps {
  workspaceKey: string;
  event: string;
  region: Region;
}

export default function SeatMap({ workspaceKey, event, region }: SeatMapProps) {
  return (
    <SeatsioSeatingChart
      showZoomOutButtonOnMobile
      selectionValidators={[{ type: 'noOrphanSeats' }]}
      workspaceKey={workspaceKey}
      event={event}
      region={region}
      onObjectClicked={(obj) => console.log('obj', obj)}
    />
  );
}
