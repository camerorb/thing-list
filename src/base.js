
import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
apiKey: "AIzaSyDpRn4Lo1OMG-3WmkHCvOB_9wsmWCm7CKo",
    authDomain: "thing-list-16b8e.firebaseapp.com",
    databaseURL: "https://thing-list-16b8e.firebaseio.com",
    projectId: "thing-list-16b8e",
    storageBucket: "thing-list-16b8e.appspot.com",
    messagingSenderId: "1093530717697"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)