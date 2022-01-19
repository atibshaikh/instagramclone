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