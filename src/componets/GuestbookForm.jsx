import React, { useState } from 'react'
import CharacterAvatar from './CharacterAvatar'
import CHARACTERS from './characterData'
import styles from './GuestbookForm.module.scss'

const EMOJIS = ['😀', '😊', '🥰', '😂', '😮', '😢', '😭', '😴', '🤔', '😎', '🥳']

const GuestbookForm = ({ onAddPost, user }) => {
  const [nickname, setNickname] = useState(user.displayName || '')
  const [message, setMessage] = useState('')
  const [character, setCharacter] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const addEmoji = (emoji) => {
    setMessage((currentMessage) => currentMessage + emoji)
  }

  const submitFunction = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!character) {
      window.alert('최애 캐릭터를 선택해 주세요.')
      return
    }

    setSubmitting(true)

    try {
      // 부모 컴포넌트에서 Firestore에 글을 저장합니다.
      await onAddPost({ nickname, message, character })
      setMessage('')
      setCharacter('')
    } catch (error) {
      console.error('방명록 등록 오류:', error.code, error.message)

      // Firebase 오류 원인을 사용자가 확인할 수 있게 표시합니다.
      if (error.code === 'permission-denied') {
        setErrorMessage('등록 권한이 없습니다. Firestore 보안 규칙을 게시했는지 확인해 주세요.')
      } else if (error.code === 'unauthenticated') {
        setErrorMessage('로그인이 만료되었습니다. 다시 로그인해 주세요.')
      } else if (error.code === 'unavailable') {
        setErrorMessage('Firebase에 연결할 수 없습니다. 인터넷 연결을 확인해 주세요.')
      } else {
        setErrorMessage(error.message || '방명록을 저장하지 못했습니다.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* 왼쪽 방명록 작성 영역 */}
      <form className={`${styles.panel} ${styles.writePanel}`} onSubmit={submitFunction}>
        <h2 className={`${styles.panelTitle} ${styles.pinkTitle}`}>
          여기는 짱구의 방명록입니다.
        </h2>

        <div className={styles.formContent}>
          <div className={styles.formGroup}>
            <strong>오늘의 기분은?</strong>
            <div className={styles.emojiList}>
              {EMOJIS.map((emoji) => (
                <button key={emoji} type="button" onClick={() => addEmoji(emoji)}>
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <label className={styles.field}>
            <strong>닉네임</strong>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="사용할 이름을 입력해 주세요"
              maxLength="20"
              required
            />
          </label>

          <label className={styles.field}>
            <strong>메시지 입력</strong>
            <div className={styles.textareaBox}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="당신의 의견을 자유롭게 입력해 주세요"
                maxLength="500"
                required
              />
              <span>{message.length} / 500자</span>
            </div>
          </label>

          <button className={styles.submitButton} type="submit" disabled={submitting}>
            ✏️ {submitting ? '저장 중...' : '등록하기'}
          </button>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
      </form>

      {/* 가운데 캐릭터 선택 영역 */}
      <section className={`${styles.panel} ${styles.characterPanel}`}>
        <h2 className={`${styles.panelTitle} ${styles.blueTitle}`}>
          당신의 최애 캐릭터는?
        </h2>

        <div className={styles.characterContent}>
          <p>⭐ 최애 캐릭터를 선택해 주세요!</p>
          <div className={styles.characterGrid}>
            {CHARACTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={character === item.id ? styles.selected : ''}
                onClick={() => setCharacter(item.id)}
              >
                <CharacterAvatar character={item.id} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GuestbookForm
