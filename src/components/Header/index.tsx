import React from 'react'
import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../../assets/avatar.PNG'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Post } from '../../types/Post'
import { setSortedPosts } from '../../store/reducers/postsReducer'
import Search from '../Search'

const Header = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.postsReducer.posts)

  const sortPostsAlphabetic = () => {
    const unsortedPost = structuredClone(posts)
    const sortedPosts = unsortedPost.sort((a: Post, b: Post) => a.title.localeCompare(b.title))
    dispatch(setSortedPosts(sortedPosts))
  }
  const cancelSorting = () => {
    dispatch(setSortedPosts(posts))
  }

  return (
    <Navbar collapseOnSelect expand="false" bg="dark" variant="dark" className="px-xxl-3">
      <Navbar.Toggle aria-controls={'offcanvasNavbar'} />
      <Navbar.Offcanvas
        id={'offcanvasNavbar'}
        aria-labelledby={'offcanvasNavbarLabel'}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={'offcanvasNavbarLabel'}>
            <p className="fs-2">Ядренкин Илья</p>
            <a href="mailto:ilush9562@gmail.com" className={styles.email}>
              ilush9562@gmail.com
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={avatar} alt="owner's photo" className="w-50" />
          <Nav className="mt-2 fs-3">
            <Nav.Link href="/">Список постов</Nav.Link>
            <Nav.Link href="/my-profile">Обо мне</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      <Search />
      <NavDropdown title="Сортировка" style={{ color: '#bbb' }}>
        <NavDropdown.Item onClick={sortPostsAlphabetic}>По алфавиту</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={cancelSorting}>Сброс</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}

export default Header
