import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const fireBaseConfig = {
	apiKey: "AIzaSyD-HsqaxJEUoNx3PsystN5296q3YsFImAI",
	authDomain: "react-firebase-bb75c.firebaseapp.com",
	projectId: "react-firebase-bb75c",
	storageBucket: "react-firebase-bb75c.appspot.com",
	messagingSenderId: "738516875090",
	appId: "1:738516875090:web:e06a871d8172e8922aac8b",
	measurementId: "G-617C6SBV5W"
  };

  const app = initializeApp(fireBaseConfig);
  export const auth = getAuth(app);
  export default app;