import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore'
import GuestbookForm from '../components/GuestbookForm'
import CharacterAvatar from '../components/CharacterAvatar'
import CHARACTERS from '../components/characterData'
import useAuthStore from '../store/authStore'
import { auth, db } from '../firebase'
import styles from './Guestbook.module.scss'

const Guestbook = () => {
  const user = useAuthStore((state) => state.user)
  const authLoading = useAuthStore((state) => state.loading)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState('')
  const [editingMessage, setEditingMessage] = useState('')
  const [editingNickname, setEditingNickname] = useState('')
  const [editingCharacter, setEditingCharacter] = useState('')
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    // Firestore 방명록을 최신 작성순으로 실시간 조회합니다.
    const postsQuery = query(
      collection(db, 'guestbookPosts'),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const postList = snapshot.docs.map((postDoc) => ({
        id: postDoc.id,
        ...postDoc.data()
      }))
      setPosts(postList)
      setLoading(false)
    }, (error) => {
      console.error('방명록 조회 오류:', error.code, error.message)
      setLoadError(error.code === 'permission-denied'
        ? 'Firestore 읽기 권한이 없습니다. 보안 규칙을 확인해 주세요.'
        : '방명록을 불러오지 못했습니다.')
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const addPostFunction = async (formData) => {
    // Zustand가 아닌 Firebase의 실제 로그인 상태도 한 번 더 확인합니다.
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('로그인 정보가 없습니다. 다시 로그인해 주세요.')
    }

    const nickname = formData.nickname.trim()
    const message = formData.message.trim()

    if (!nickname || !message || !formData.character) {
      throw new Error('닉네임, 메시지, 캐릭터를 모두 입력해 주세요.')
    }

    // 최신 인증 토큰을 확인한 뒤 Firestore에 저장합니다.
    await currentUser.getIdToken()

    // 로그인한 사용자의 uid를 글에 함께 저장합니다.
    await addDoc(collection(db, 'guestbookPosts'), {
      userId: currentUser.uid,
      nickname,
      message,
      character: formData.character,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
  }

  const startEditFunction = (post) => {
    setEditingId(post.id)
    setEditingMessage(post.message)
    setEditingNickname(post.nickname)
    setEditingCharacter(post.character)
  }

  const updatePostFunction = async (postId) => {
    if (!editingNickname.trim() || !editingMessage.trim() || !editingCharacter) {
      window.alert('닉네임, 메시지, 캐릭터를 모두 입력해 주세요.')
      return
    }

    try {
      // 보안 규칙에서 작성자 본인의 글만 수정할 수 있습니다.
      await updateDoc(doc(db, 'guestbookPosts', postId), {
        nickname: editingNickname.trim(),
        message: editingMessage.trim(),
        character: editingCharacter,
        updatedAt: serverTimestamp()
      })
      setEditingId('')
      setEditingMessage('')
      setEditingNickname('')
      setEditingCharacter('')
    } catch {
      window.alert('글을 수정하지 못했습니다.')
    }
  }

  const cancelEditFunction = () => {
    setEditingId('')
    setEditingMessage('')
    setEditingNickname('')
    setEditingCharacter('')
  }

  const deletePostFunction = async (postId) => {
    if (!window.confirm('정말 삭제하나요?')) return

    try {
      // 보안 규칙에서 작성자 본인의 글만 삭제할 수 있습니다.
      await deleteDoc(doc(db, 'guestbookPosts', postId))
    } catch {
      window.alert('글을 삭제하지 못했습니다.')
    }
  }

  const getPostDate = (createdAt) => {
    if (!createdAt) return '방금 전'
    return createdAt.toDate().toLocaleDateString('ko-KR')
  }

  return (
    <section className={styles.guestbook}>

      <div className={styles.contentGrid}>
        {!authLoading && user ? (
          <GuestbookForm onAddPost={addPostFunction} user={user} />
        ) : !authLoading ? (
          <div className={styles.loginNotice}>
            <h2>여기는 짱구의 방명록입니다.</h2>
            <p>방명록은 누구나 읽을 수 있어요.</p>
            <p>글을 남기려면 로그인해 주세요.</p>
            <Link to="/login">로그인</Link>
          </div>
        ) : null}

        {/* 오른쪽 방명록 목록 영역 */}
        <section className={styles.recordsPanel}>
          <h2 className={styles.recordsTitle}>여러분들의 기록</h2>
          <p className={styles.storyCount}>{posts.length}개의 이야기</p>

          {loading ? (
            <p className={styles.empty}>기록을 불러오는 중입니다.</p>
          ) : loadError ? (
            <p className={styles.loadError}>{loadError}</p>
          ) : posts.length > 0 ? (
            <div className={styles.postList}>
            {posts.map((post) => {
              const isOwner = user?.uid === post.userId
              const isEditing = editingId === post.id

              return (
                <article className={styles.post} key={post.id}>
                  <div className={styles.postHeader}>
                    {isEditing ? (
                      <input
                        className={styles.editNickname}
                        type="text"
                        value={editingNickname}
                        onChange={(e) => setEditingNickname(e.target.value)}
                        maxLength="20"
                      />
                    ) : (
                      <strong>{post.nickname}</strong>
                    )}
                    <span>{getPostDate(post.createdAt)}</span>
                  </div>

                  {isEditing ? (
                    <div className={styles.editFields}>
                      <textarea
                        className={styles.editInput}
                        value={editingMessage}
                        onChange={(e) => setEditingMessage(e.target.value)}
                        maxLength="500"
                      />
                      <div className={styles.editCharacterGrid}>
                        {CHARACTERS.map((character) => (
                          <button
                            key={character.id}
                            type="button"
                            title={character.label}
                            className={editingCharacter === character.id ? styles.selectedCharacter : ''}
                            onClick={() => setEditingCharacter(character.id)}
                          >
                            <CharacterAvatar character={character.id} />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className={styles.message}>{post.message}</p>
                  )}

                  {(isEditing ? editingCharacter : post.character) && (
                    <div className={styles.postAvatar}>
                      <CharacterAvatar character={isEditing ? editingCharacter : post.character} />
                    </div>
                  )}

                  {isOwner && (
                    <div className={styles.postButtons}>
                      {isEditing ? (
                        <>
                          <button type="button" onClick={() => updatePostFunction(post.id)}>저장</button>
                          <button type="button" onClick={cancelEditFunction}>취소</button>
                        </>
                      ) : (
                        <>
                          <button type="button" onClick={() => startEditFunction(post)}>수정</button>
                          <button type="button" onClick={() => deletePostFunction(post.id)}>삭제</button>
                        </>
                      )}
                    </div>
                  )}
                </article>
              )
            })}
            </div>
          ) : (
            <p className={styles.empty}>기록이 없습니다.</p>
          )}
        </section>
      </div>
    </section>
  )
}

export default Guestbook
