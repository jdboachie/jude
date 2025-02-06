'use client';

import * as React from 'react';

import Map, { Marker } from 'react-map-gl';
import { StyleSpecification } from 'mapbox-gl';
import { ImmutableLike } from 'react-map-gl/dist/esm/types';

export default function Myplace() {

  const [mapStyle] = React.useState<ImmutableLike<StyleSpecification> | null>(null);

  return (
      <div className='z-0 relative overflow-hidden h-full max-lg:h-[250px] rounded-3xl border'>
        <div className='absolute inset-0 shadow-inner'>
          <Map
            styleDiffing
            style={{ borderRadius: '24px' }}
            mapStyle={mapStyle! && mapStyle.toJS()}
            initialViewState={{ latitude: 6.7, longitude: -1.63, zoom: 10 }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          >
            <Marker latitude={6.7435} longitude={-1.63435}>
              <div className="size-4 rounded-full bg-blue-500">hi</div>
            </Marker>
          </Map>
        </div>
      </div>
  );
}