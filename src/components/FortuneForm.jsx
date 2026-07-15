import React, {useState} from 'react'
import { fortuneData } from './fortuneData'
import styles from './FortuneForm.module.scss'

const moods = [
    { id: 'best', emoji: '😆', label: '최고야!' },
    { id: 'good', emoji: '😊', label: '좋아!' },
    { id: 'normal', emoji: '😐', label: '보통' },
    { id: 'sad', emoji: '😢', label: '흠...' },
    { id: 'bad', emoji: '😭', label: '안 좋아' }
]

const FortuneForm = ({onResult}) => {
    const [nickname, setNickname] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [birthMonth, setBirthMonth] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [mood, setMood] = useState('')

    const submitFortune = (e) => {
        e.preventDefault()

        if(
            nickname.trim() === '' ||
            birthYear === '' ||
            birthMonth === '' ||
            birthDay === '' ||
            mood === ''
        ) {
            alert("모든 항목을 입력해 주세요!")
            return
        }

        const randomIndex = Math.floor(Math.random() * fortuneData.length)
        const selectedFortune = fortuneData[randomIndex]

        onResult({
            ...selectedFortune,
            nickname,
            birthYear,
            birthMonth,
            birthDay,
            mood
        })
    }


  return (
    <div>
      <form className={styles.formCard} onSubmit={submitFortune}>
        <h3>⭐ 운세를 시작해요!</h3>

        {/* 닉네임 입력창 */}
        <div className={styles.formGroup}>
            <label htmlFor="nickname">닉네임을 입력해 주세요</label>

            <input
            id="nickname"
            type="text"
            placeholder="예) 짱구팬, 초코비러버 등"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={10}
            />
        </div>

        {/* 생년월일 입력창 */}
         <div className={styles.formGroup}>
            <span className={styles.label}>생년월일을 선택해 주세요</span>

            <div className={styles.birthSelects}>
                <select
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    aria-label="출생 연도"
                >
                    <option value="">연도 선택</option>
                    {Array.from({ length: 80 }, (_, index) => {
                    const year = new Date().getFullYear() - index

                    return (
                        <option key={year} value={year}>
                        {year}년
                        </option>
                    )
                    })}
                </select>

                <select
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    aria-label="출생 월"
                >
                    <option value="">월 선택</option>
                    {Array.from({ length: 12 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}월
                    </option>
                    ))}
                </select>

                <select
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    aria-label="출생 일"
                >
                    <option value="">일 선택</option>
                    {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}일
                    </option>
                    ))}
                </select>
            </div>
        </div>

        {/* 오늘의기분 선택창 */}
        <div className={styles.formGroup}>
            <span className={styles.label}>오늘의 기분은 어떤가요?</span>

            <div className={styles.moodList}>
            {moods.map((item) => (
                <button
                key={item.id}
                type="button"
                className={
                    mood === item.id
                    ? `${styles.moodButton} ${styles.active}`
                    : styles.moodButton
                }
                onClick={() => setMood(item.id)}
                >
                <span>{item.emoji}</span>
                <small>{item.label}</small>
                </button>
            ))}
            </div>
        </div>

        {/* 버튼 */}
        <button type="submit" className={styles.submitButton}>
            ⭐ 오늘의 운세 보기
        </button>
      </form>
    </div>
  )
}

export default FortuneForm
