import React, { useState } from 'react'
import VillageMap from '../components/VillageMap'
import PlaceDetail from '../components/PlaceDetail'
import { mapData } from '../components/mapData'
import styles from './Map.module.scss'

const Map = () => {
    const [selectedPlace, setSelectedPlace] = useState(mapData[0])
  return (
    <main className={styles.mapPage}>
      <div className={styles.mapInner}>
        <VillageMap
          places={mapData}
          selectedPlace={selectedPlace}
          onSelectPlace={setSelectedPlace}
        />

        <PlaceDetail place={selectedPlace} />
      </div>
    </main>
  )
}

export default Map
