export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY3Jvbm9zcmFnZWpnIiwiYSI6ImNrdGFpczVmMTAybnkyb282aTNuNzR2cDcifQ.lbfSylNeoF47gur64y-9_w';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/cronosragejg/cktajcvbk0d4z17oh2cryb89r',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      left: 100,
      right: 100,
      bottom: 150,
    },
  });
};
