import React from 'react'
import styles from './FortuneResult.module.scss'

import Fortune01 from '/fortune/fortune01.png'

const FortuneResult = ({result}) => {
  if(!result){
    return(
      <article className={styles.resultCard}>
        <h3>운세를 보면 여기에 결과가 나타나요!</h3>

        <div className={styles.emptyResult}>
          <div className={styles.speechBubble}>
            어떤 운세가 기다리고 있을까요~?
          </div>

          <div className={styles.characterArea}>
            <img src={Fortune01} alt="운세를 기다리는 짱구" />
          </div>
        </div>
      </article> 
    )
  }
  return (
    <article className={styles.resultCard}>
      <p className={styles.userName}>
        {result.nickname}님의 오늘 운세
      </p>

      <h3>{result.title}</h3>

      <div className={styles.resultImage}>
        <img src={result.image} alt={result.title} />
      </div>

      <p className={styles.message}>{result.message}</p>

      <div className={styles.resultInfo}>
        <div>
          <span>행운 아이템</span>
          <strong>{result.item}</strong>
        </div>

        <div>
          <span>행운의 색</span>
          <strong>{result.color}</strong>
        </div>

        <div>
          <span>행운 지수</span>
          <strong>{result.score}%</strong>
        </div>
      </div>
    </article>
  )
}

export default FortuneResult
