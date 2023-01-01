import messaging, {
} from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, Dispatch, ThunkDispatch} from '@reduxjs/toolkit';

/**
 * Service to init firebase messaging (PUSH NOTIFICATION)
 * and to handle click actions
 *
 * please edit doNotificationClickAction and doNotificationClickActionForeground functions only
 *
 */
class NotificationsServiceImpl {
  initializeFirebaseMessaging = async (
   
    dispatch?: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
  ) => {
    // 0.
    // prepare handler service

    // 1.
    // init firebase messaging
    await messaging()
      .requestPermission()
      .then(() => {
        try {
          messaging()
            .hasPermission()
            .then(async enabled => {
              console.log('perm enabled ' + enabled);
              if (enabled) {
                await messaging()
                  .getToken()
                  .then(fcm_token => {
                    console.log('fcmToken', fcm_token);
                    AsyncStorage.setItem('fcmToken', fcm_token);
                  });
              } else {
                console.log('NOTIFICATIONS NOT ENABLED!');
              }
            })
            .catch(err => {
              if (err.message.includes('TOO_MANY_REGISTRATIONS')) {
                console.debug('Too many registrations, clearing token');
                messaging().deleteToken();
                console.log(err);
                return;
              }
            });
        } catch (e) {
          console.log(e);
        }
      });

    // 2.
    // when the app is in the foreground

    // (optional) 3.
    let handleMessageOnBackground = true; // do not use now
    if (handleMessageOnBackground) {
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log(
          ' in the background!',
          remoteMessage,
        );
      });
    }

    // 4.
    // when app is in the background and notification is clicked
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    // 5.
    // when app is closed and notification is clicked
    messaging()
      .getInitialNotification()
      .then(initialMessage => {
        console.log('Initial Message: ', initialMessage);
       
      });

    return true;
  };
}

export const notificationsService = new NotificationsServiceImpl();
