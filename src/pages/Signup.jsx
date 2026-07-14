import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.scss'
import signupImage from '../assets/signup.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import guestbook from '../assets/guestbook.png'

// public 폴더에 이미지를 넣고 아래 경로만 바꾸면 됩니다.
const SIGNUP_IMAGES = {
  character: '/character-rabbit.png',
  nicknameIcon: '/character-penguin.png',
  idIcon: '/character-dog.png',
  passwordIcon: '/character-fox.png',
  loginIcon: '/character-cat.png'
}

const Signup = () => {
  const [nickname, setNickname] = useState('')
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
      // Firebase 계정을 만들고 닉네임을 사용자 정보에 저장합니다.
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(result.user, { displayName: nickname })
      navigate('/guestbook')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('이미 사용 중인 이메일입니다.')
      } else if (error.code === 'auth/weak-password') {
        setError('비밀번호는 6자 이상 입력해 주세요.')
      } else {
        setError('회원가입에 실패했습니다. 입력 내용을 확인해 주세요.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={styles.auth}>
      <form onSubmit={submitFunction} className={styles.card}>
        <h1 className={styles.title}>회원가입</h1>

        <div className={styles.intro}>
          <img className={styles.characterImage} src={signupImage} alt="캐릭터" />
          <div>
            <strong>짱구네 가족이 되어줘!</strong>
            <p>간단한 정보를 입력하면 가입할 수 있어.</p>
          </div>
        </div>

        <div className={styles.fields}>
          <label className={styles.field}>
            <img src={guestbook} alt="guestbook" />
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해 주세요"
              maxLength="20"
              required
            />
          </label>

          <label className={styles.field}>
            <img src={guestbook} alt="guestbook" />
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
          {submitting ? '가입 중...' : '가입하기'}
        </button>

        <div className={styles.guide}>
          <span>★</span>
          <p>이미 짱구네 가족이야?</p>
        </div>

        <Link to="/login" className={styles.moveBtn}>
          로그인
        </Link>
      </form>
    </section>
  )
}

export default Signup
