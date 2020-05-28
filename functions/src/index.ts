import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//const functions = require('firebase-functions');


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = functions.config().sendgrid.key


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('users/{userId}')
    .onCreate(event => {

        //const userId = event.params.userId
        //const db = admin.firestore()
        try {

                    const msg = {
                        to: 'miguel@miguelchavezweb.com',
                        from: 'miguel@miguelchavezweb.com',
                        subject:  'New Follower',
                        // text: `Hey ${toName}. You have a new follower!!! `,
                        // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

                        // custom templates
                        templateId: 'd-2570bd1ac4094f63b6ad539d6d114e3d',
                        /*substitutionWrappers: ['{{', '}}'],
                        substitutions: {
                          name: 'Miguel'
                          // and other custom properties here
                        }*/
                    };
                    console.log(msg);
                    return sgMail.send(msg);
        }
        catch(err){
          console.error(err);
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }

});
