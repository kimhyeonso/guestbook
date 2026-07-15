import React from 'react'
import styles from './VillageMap.module.scss'
import villageMapImage from '../assets/map/villageMap.png'

const VillageMap = ({
  places,
  selectedPlace,
  onSelectPlace
}) => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapTitle}>
        <h2>
          <span>떡잎마을</span> 지도
        </h2>
        <p>장소를 클릭하면 자세한 정보를 볼 수 있어요!</p>
      </div>

      <div className={styles.mapBoard}>
        <img
          src={villageMapImage}
          alt="떡잎마을 지도"
          className={styles.mapImage}
        />

        {places.map((place) => (
          <button
            key={place.id}
            type="button"
            className={
              selectedPlace.id === place.id
                ? `${styles.placeButton} ${styles.active}`
                : styles.placeButton
            }
            style={{
              top: place.position.top,
              left: place.position.left
            }}
            onClick={() => onSelectPlace(place)}
          >
            <span>📍</span>
            {place.name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default VillageMap
