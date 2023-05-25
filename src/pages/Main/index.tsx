import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { fetchPosts, setSortedPosts } from '../../store/reducers/postsReducer'

const Main = () => {
  const posts = useSelector((state: RootState) => state.postsReducer.posts)
  const sortedPosts = useSelector((state: RootState) => state.postsReducer.sortedPosts)
  const isLoading = useSelector((state: RootState) => state.postsReducer.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useEffect(() => {
    dispatch(setSortedPosts(posts))
  }, [posts])

  return (
    <div>
      <Header />
      <Posts posts={sortedPosts} isLoading={isLoading} />
    </div>
  )
}

export default Main
