export const convertZoomToMeters = zoom => {
  return parseInt((40000 * 1000) / 2 ** zoom)
}
