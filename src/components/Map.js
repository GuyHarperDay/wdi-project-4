import React from 'react';
import mapGeojsonExport from '../assets/wgs84-projection-fewer-dps';
// import mapGeojsonExport from '../assets/wgs84-projection';
import { geoMercator, geoPath } from 'd3-geo';

class Map extends React.Component {
  render() {
    const constituencyData = this.props.constituencyData;
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);
    const constituencyPaths = mapGeojsonExport.features
      .map((d, index) => {
        return (
          <path
            key={index}
            data-id={d.id}
            d={pathGenerator(d)}
            className='constituency-path'
          />
        );
      });
    return (
      <svg width="500" height="700" viewBox="480 230 25 20">
        {constituencyPaths}
      </svg>
    );
  }
}

export default Map;