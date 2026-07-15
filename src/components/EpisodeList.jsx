import React from 'react'
import styles from './EpisodeList.module.scss'

const EpisodeList = ({episodes}) => {
  const openYoutube = (url)=>{
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <section className={styles.episodeSection}>
      <div className={styles.episodeTitle}>
        <h3>대표 에피소드</h3>
        <p>이미지를 클릭하면 유튜브에서 감상할 수 있어요!</p>
      </div>

      <div className={styles.episodeList}>
        {episodes.map((episode) => (
          <button
            key={episode.id}
            type="button"
            className={styles.episodeCard}
            onClick={() => openYoutube(episode.youtubeUrl)}
          >
            <div className={styles.thumbnail}>
              <img
                src={episode.thumbnail}
                alt={episode.title}
              />
              <span className={styles.playButton}>▶</span>
            </div>

            <strong>{episode.title}</strong>
            <p>{episode.description}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default EpisodeList
