export const getBounds = positions => {
  const latitudes = positions.map(position => position.latitude)
  const longitudes = positions.map(position => position.longitude)
  const maxLat = Math.max(...latitudes)
  const minLat = Math.min(...latitudes)
  const maxLng = Math.max(...longitudes)
  const minLng = Math.min(...longitudes)

  const bounds = {
    ne: {
      lat: maxLat,
      lng: maxLng,
    },
    sw: {
      lat: minLat,
      lng: minLng,
    },
  }
  return bounds
}
