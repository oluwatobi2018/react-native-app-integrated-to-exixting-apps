//npx create-expo-app AwesomeProject
{
    "name"; "MyReactNativeApp",
    "version"; "0.0.1",
    "private"; true,
    "scripts"; {
      "start"; "yarn react-native start"
    }
  }
   {
    "com.android.support:appcompat-v7:27.1.1"
   
    "com.facebook.react:react-native:+" // From node_modules
     "org.webkit:android-jsc:+"
}
{
     {
        {
            // All of React Native (JS, Android binaries) is installed from npm
            "$rootDir/../node_modules/react-native/android"
        }
         {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }
    }

}
from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, World</Text>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

  'MyReactNativeApp',
  () => HelloWorld
;
OVERLAY_PERMISSION_REQ_CODE = 1;  // Choose any value

void onPause() 
    super.onPause();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostPause(this);
    }



void onResume() 
    super.onResume();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostResume(this, this);
    }



 void onDestroy() 
    super.onDestroy();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostDestroy(this);
    }
    if (mReactRootView != null) {
        mReactRootView.unmountReactApplication();
    }

    
    void onBackPressed() 
       if (mReactInstanceManager != null) {
           mReactInstanceManager.onBackPressed();
       } else {
           super.onBackPressed();
       }
       
    
           if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
               mReactInstanceManager.showDevOptionsDialog();
               return true;
           }
           return super.onKeyUp(keyCode, event);
       
