import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Guestbook from './pages/Guestbook'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './componets/Header'
import useAuthStore from './store/authStore'

const App = () => {
  const startAuthListener = useAuthStore((state) => state.startAuthListener)

  // 앱이 시작되면 Firebase 로그인 상태를 계속 확인합니다.
  useEffect(() => {
    const unsubscribe = startAuthListener()
    return unsubscribe
  }, [startAuthListener])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/guestbook' element={<Guestbook />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

/* 
  guestbook만들기
  프론트 - 서버연결(firebase)

  폴더구조
  src
  |- main.jsx(browserRouter 생성)
  |- App.jsx(Router, Route)
  |- componets
    |- Header.jsx(Link, NavLink)
    |- Header.module.scss
    |- CharacterAvatar.jsx (캐릭터 관리)
    |- CharacterAvatar.module.scss
    |- characterData.js (캐릭터 데이터)
    |- GuestbookForm.jsx (글 입력, 캐릭터 선택, 이모티콘 선택)
    |- GuestbookForm.module.scss 
  |- pages
    |- Home.jsx (동영상 3개 무한재생)
    |- Home.module.scss
    |- Guestbook.jsx (GuestbookForm.jsx import)
    |- Guestbook.module.scss
    |- Login.jsx
    |- Signup.jsx
    |- Auth.module.scss (Login + Signup)

*/
