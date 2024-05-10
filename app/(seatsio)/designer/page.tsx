'use client';

import { SeatsioDesigner } from '@seatsio/seatsio-react';

export default function Designer() {
  return (
    <section className="container h-screen flex flex-col">
      <h1 className="text-3xl">Designer</h1>
      <SeatsioDesigner
        canvasColorScheme="dark"
        secretKey="8bfe4446-476f-4882-bd2d-fb47b02878c2"
        chartKey="5482600d-202d-39dc-a5e8-69f609042580"
        region="na"
      />
    </section>
  );
}
