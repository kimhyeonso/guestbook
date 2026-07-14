import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../assets/logo.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import useAuthStore from '../store/authStore'
import home from '../assets/home.png'
import guestbook from '../assets/guestbook.png'
import house from '../assets/house.png'

// public 폴더에 이미지를 넣고 아래 경로만 바꾸면 됩니다.
const HEADER_IMAGES = {
  home: '/character/character-03.png',
  guestbook: '/character/character-01.png',
  login: '/character/character-05.png',
  signup: '/character/character-07.png'
}

const Header = () => {
  const user = useAuthStore((state) => state.user)

  // Firebase에서 로그아웃하면 Zustand 상태도 인증 구독으로 자동 변경됩니다.
  const logoutFunction = async () => {
    try {
      await signOut(auth)
    } catch {
      window.alert('로그아웃에 실패했습니다.')
    }
  }

  const getNavClass = ({ isActive }) =>
    isActive
      ? `${styles.menuLink} ${styles.active}`
      : styles.menuLink

  return (
    <header className={styles.header}>

      <div className={styles.headerContainer}>
        {/* 로고 */}
        <Link to="/home" className={styles.logo}>
          <img src={logo} alt="짱구 방명록 로고" />
        </Link>

        {/* 가운데 메뉴판 */}
        <div className={styles.menuBoard}>
          <nav className={styles.nav}>
            <NavLink to="/home" className={getNavClass}>
              <img className={styles.menuIcon} src={home} alt="HOME" />
              <span>홈</span>
            </NavLink>

            <NavLink to="/guestbook" className={getNavClass}>
              <img className={styles.menuIcon} src={guestbook} alt="GUESTBOOK" />
              <span>방명록</span>
            </NavLink>
          </nav>

          <div className={styles.auth}>
            {user ? (
              <>
                <span className={styles.userName}>{user.displayName || '회원'}님</span>
                <button type="button" className={styles.menuLink} onClick={logoutFunction}>
                  <img className={styles.menuIcon} src={HEADER_IMAGES.login} alt="" />
                  <span>로그아웃</span>
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={getNavClass}>
                  <img className={styles.menuIcon} src={house} alt="login" />
                  <span>로그인</span>
                </NavLink>

                <NavLink to="/signup" className={getNavClass}>
                  <img className={styles.menuIcon} src={HEADER_IMAGES.signup} alt="signup" />
                  <span>회원가입</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
