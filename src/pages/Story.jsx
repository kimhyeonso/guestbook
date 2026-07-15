import React, {useState} from 'react'
import FortuneForm from '../components/FortuneForm'
import FortuneResult from '../components/FortuneResult'
import styles from './Story.module.scss'
import useAuthStore from '../store/authStore'

import choco from '../assets/choco.png'

const Story = () => {
  const [fortuneResult, setFortuneResult] = useState(null)
  const user = useAuthStore((state) => state.user)

  return (
    <main className={styles.storyPage}>
      <div className={styles.storyInner}>
        <section className={styles.storyHero}>
          <img src={choco} alt="운세를 보는 짱구" />

          <div>
            <h2>
              <span>오늘의</span> 운세
            </h2>
          </div>

          <img src={choco} alt="운세를 보는 짱구" />
        </section>

        <section className={styles.storyContent}>
          <FortuneForm
            onResult={setFortuneResult}
            initialNickname={user?.displayName || ''}
          />

          <FortuneResult result={fortuneResult} />
        </section>
      </div>
    </main>
  )
}

export default Story
