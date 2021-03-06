import {app, FieldValue} from '../lib/firebase';


export async function doesUserExist(username){

    const result = await app
                    .firestore()
                    .collection('users')
                    .where('username', '==', username)
                    .get();
    
    // console.log(result);
    //console.log(result.docs.length);


    return result.docs.map( (user) => user.data().length > 0 );
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
    const result = await app.firestore().collection('users').where('userId', '==', userId).get();
    //console.log("Response From Firestore", result);
    const user = result.docs.map((item) => ( {
        
      ...item.data(),
      docId: item.id
    }));
  
    return user;
  }