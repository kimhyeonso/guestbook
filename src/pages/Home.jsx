import React from 'react'
import styles from './Home.module.scss'
import { useState, useEffect } from 'react'
const videos = [
  {title : "첫번째 동영상", label : "opening 1", src : '/mp4/play01.mp4'},
  {title : "두번째 동영상", label : "opening 2", src : '/mp4/play02.mp4'},
]

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeVideo = videos[activeIndex]
  //4초마다 다음영상으로 전환
  useEffect(()=>{
    const timer = setInterval(()=>{
      setActiveIndex((idx) => {
        if(idx === videos.length -1){
          return 0
        }else {
          return idx + 1
        }
      })
    }, 50000)

    return ()=> {
      clearInterval(timer)
    }
  },[])

  return (
    <section className={styles.home}>
      <div className={styles.slide}>
        <video key={activeVideo.src} autoPlay muted loop playsInline>
          <source src={activeVideo.src} />
        </video>
      </div>

      {/* 동영상을 알려주는 점 */}
      <div className={styles.dots}>
        {videos.map((item, idx)=>{
          return(
            <button key={item.label} className={idx === activeIndex ? styles.activeDot : ""} onClick={()=>{
              setActiveIndex(idx)
          }}/>

          )
        })}
      </div>
    </section>
  )
}

export default Home
