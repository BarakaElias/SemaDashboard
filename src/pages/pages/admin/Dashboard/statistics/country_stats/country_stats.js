import React from "react";
import { VectorMap } from "react-jvectormap";

import usePalette from "../../../../../../hooks/usePalette";
function CountryStats() {
  const palette = usePalette();

  const options = {
    map: "world_mill",
    regionStyle: {
      initial: {
        fill: palette["gray-200"],
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    zoomOnScroll: false,
  };

  return (
    <div className="map-container" style={{ height: 300 }}>
      <VectorMap {...options} />
    </div>
  );
}

export default CountryStats;
