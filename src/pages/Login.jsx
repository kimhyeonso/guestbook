import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.scss'
import loginImage from '../assets/login.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import guestbook from '../assets/guestbook.png'
import id from '../assets/id.png'



// public 폴더에 이미지를 넣고 아래 경로만 바꾸면 됩니다.
const LOGIN_IMAGES = {
  character: '/character-cat.png',
  idIcon: '/character-dog.png',
  passwordIcon: '/character-fox.png',
  signupIcon: '/character-rabbit.png'
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const submitFunction = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      // Firebase 이메일/비밀번호 로그인을 실행합니다.
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/guestbook')
    } catch {
      setError('이메일 또는 비밀번호를 확인해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={styles.auth}>
      <form onSubmit={submitFunction} className={styles.card}>
        <h1 className={styles.title}>로그인</h1>

        <div className={styles.intro}>
          <img className={styles.characterImage} src={loginImage} alt="짱구" />
          <div>
            <strong>어서와! 기다렸어</strong>
            <p>로그인하고 방명록을 남겨보자!</p>
          </div>
        </div>

        <div className={styles.fields}>
          <label className={styles.field}>
            <img src={id} alt="id" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해 주세요"
              required
            />
          </label>

          <label className={styles.field}>
            <img src={guestbook} alt="guestbook" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주세요"
              required
            />
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? '로그인 중...' : '로그인'}
        </button>

        <div className={styles.guide}>
          <span>★</span>
          <p>아직 짱구네 가족이 아니야?</p>
        </div>

        <Link to="/signup" className={styles.moveBtn}>
          회원가입
        </Link>
      </form>
    </section>
  )
}

export default Login
