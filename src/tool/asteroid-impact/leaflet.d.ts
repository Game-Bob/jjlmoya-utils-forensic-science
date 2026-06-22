declare namespace L {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Map {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LayerGroup {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Marker {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DivIcon {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LeafletEvent {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LatLng {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function map(element: string | HTMLElement, options?: any): Map;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function tileLayer(url: string, options?: any): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function marker(latlng: LatLng, options?: any): Marker;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function circle(latlng: LatLng, options?: any): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function layerGroup(layers?: any): LayerGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function divIcon(options?: any): DivIcon;
}
