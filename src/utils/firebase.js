import * as firebase from 'firebase/app';
import config from '../../firebase.json';
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = firebase.initializeApp(config);
const analytics = getAnalytics(app);