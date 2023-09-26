import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { addUser } from './redux-slices/auth-slice';

export const authStateChange = (dispatch) => {
    const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
            
            dispatch(
                addUser({
                    uid: user.uid,
                    email: user.email,
                })
            );
        }
    });

    return unsub;
};
