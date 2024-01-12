
import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {getDoc, getFirestore, setDoc, doc, collection, writeBatch, query, getDocs} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyACQH82aZYKt6T-3B24FyrfWgYlmiIF0FA",
  authDomain: "vicky-db.firebaseapp.com",
  projectId: "vicky-db",
  storageBucket: "vicky-db.appspot.com",
  messagingSenderId: "662507023350",
  appId: "1:662507023350:web:f9036df0e33df2b75bb5d7"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const GooglesignInPopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done')

    
    
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} =  docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}

export const createUserDocument = async(userAuth, additionalFields) => {
const userDocRef = doc(db, 'users', userAuth.uid)

const userSnapShot = await getDoc(userDocRef);

if (!userSnapShot.exists()){
const {displayName, email} = userAuth;
const createdAt = new Date();

try{
    await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalFields
    });
}
catch (error) {
    console.log('error creating user')
}
return userDocRef;

}
};

export const createUserWithEmailPassword = async (email, password) => {
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInEmailPassword = async (email, password) => {
    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListner = (callback) => {
    onAuthStateChanged(auth, callback)
}