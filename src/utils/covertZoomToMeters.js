export const convertZoomToMeter = zoom => {
  return ((40000 * 1000) / 2 ** zoom) * 2
}
