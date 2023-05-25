import React from 'react'
import styles from './styles.module.css'
import avatar from '../../assets/avatar-for-my-profile.jpg'
import {aboutOwnerTelegram, aboutOwnerTitle, aboutOwnerTopics} from '../../constants/content'
import Header from "../../components/Header";

const MyProfile = () => {
	return (
		<>
			<Header/>
			<div className={styles.wrapper}>
				<img src={avatar} alt="owner's photo" className={styles.photo}/>
				<div className={styles.container}>
					<p className={styles.title}>{aboutOwnerTitle}</p>
					<p className={styles.body}>{aboutOwnerTopics}</p>
					<a className={styles.contacts} href={aboutOwnerTelegram}>
						{aboutOwnerTelegram}
					</a>
				</div>
			</div>
		</>
	)
}

export default MyProfile
