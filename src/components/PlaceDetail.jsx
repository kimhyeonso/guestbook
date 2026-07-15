import React from 'react'
import EpisodeList from './EpisodeList'
import styles from './PlaceDetail.module.scss'

const PlaceDetail = ({place}) => {
  if(!place) {
    return null
  }
  return (
    <section className={styles.detailSection}>
      <header className={styles.detailHeader}>
        <div>
          <h2>
            <span>{place.icon}</span>
            {place.name}
          </h2>

          <p>{place.summary}</p>
        </div>
      </header>

      <div className={styles.topContent}>
        <div className={styles.placeImage}>
          <img src={place.image} alt={place.name} />
        </div>

        <div className={styles.residents}>
          <h3>함께 사는 가족</h3>

          <div className={styles.residentList}>
            {place.characters.map((character) => (
              <div key={character.name} className={styles.resident}>
                <img
                  src={character.image}
                  alt={character.name}
                />
                <span>{character.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.middleContent}>
        <article className={styles.infoCard}>
          <h3>집 소개</h3>
          <p>{place.description}</p>
        </article>

        <article className={styles.infoCard}>
          <h3>이곳의 특징</h3>

          <ul>
            {place.features.map((feature) => (
              <li key={feature.text}>
                <span>{feature.icon}</span>
                {feature.text}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <EpisodeList episodes={place.episodes} />
    </section>
  )
}

export default PlaceDetail
