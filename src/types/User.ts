import {Post} from "./Post";

export type User = {
	id: 1
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo:{
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export type UsersPromise = {
	jsonData: User[]
	json: () => void
}
