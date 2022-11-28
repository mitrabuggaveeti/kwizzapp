import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import firebase from './firebase/firebase'

// Stylesheet
import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// Components
import Home from './screens/AppHome'
import OneTimeDashBoard from './screens/ViewDashboard'
import CreateQuiz from './screens/NewQuiz'
import JoinQuiz from './screens/JoinQuiz'
import UserDashboard from './screens/Dashboard'
import CreatedSuccesfully from './screens/SuccessfullyCreated'
import NotFoundPage from './screens/PageNotFound'
import AttemptQuiz from './screens/AttemptQuiz'
import Appbar from './components/Navbar'
import Responses from './screens/AllResponses'
import Footer from './components/Footer'

const App = () => {
	const [user, setUser] = useState({})
	useEffect(() => {
		const createUserInDB = async () => {
			if (user.uid)
				if (
					firebase.auth().currentUser.metadata.lastSignInTime ===
					firebase.auth().currentUser.metadata.creationTime
				) {
					try {
						await fetch('/API/users/create', {
							method: 'POST',
							body: JSON.stringify({
								uid: user.uid,
								name: user.name,
								email: user.email,
							}),
							headers: {
								'Content-Type': 'application/json',
							},
						})
						console.log('posted')
					} catch (error) {
						console.log('User Creation Error: ', error)
					}
				}
		}
		createUserInDB()
	}, [user])

	return (
		<div className='App'>
			{!firebase.auth().currentUser ? (
				<Home setUser={setUser} />
			) : (
				<>
					<div>
						<Appbar user={user} setUser={setUser} />
					</div>
					<Switch>
						<Route exact path='/'>
							<OneTimeDashBoard user={user} />
						</Route>
						<Route path='/dashboard'>
							<UserDashboard user={user} />
						</Route>
						<Route path='/new-quiz'>
							<CreateQuiz user={user} />
						</Route>
						<Route
							path='/created-quiz/:quizCode'
							component={CreatedSuccesfully}
						/>
						<Route path='/join-quiz'>
							<JoinQuiz user={user} />
						</Route>
						<Route path='/attempt-quiz/:quizCode' component={AttemptQuiz} />
						<Route path='/responses/:quizCode' component={Responses} />
						<Route component={NotFoundPage} />
					</Switch>
					<Footer/>
				</>
			)}
		</div>
	)
}

export default App
