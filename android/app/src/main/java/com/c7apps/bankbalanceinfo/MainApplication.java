package com.c7apps.CartApp;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.burnweb.rnsendintent.RNSendIntentPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.swmansion.rnscreens.RNScreensPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.List;
import java.util.Arrays;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
// import io.invertase.firebase.database.ReactNativeFirebaseDatabasePackage;
import in.sriraman.sharedpreferences.RNSharedPreferencesReactPackage;
// import io.invertase.firebase.crashlytics.ReactNativeFirebaseCrashlyticsPackage;
// import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage;
// import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import com.microsoft.codepush.react.CodePush;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
// import com.tkporter.sendsms.SendSMSPackage;
// import com.reactlibrary.OpenEmailPackage;
// import io.invertase.firebase.firestore.ReactNativeFirebaseFirestorePackage;
// import io.invertase.firebase.admob.ReactNativeFirebaseAdmobPackage;


public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                    // @SuppressWarnings("UnnecessaryLocalVariable")
                    // List<ReactPackage> packages = new PackageList(this).getPackages();
                    // Packages that cannot be autolinked yet can be added manually here, for example:
                    // packages.add(new MyReactNativePackage());
                    return Arrays.<ReactPackage>asList(  
                            new MainReactPackage(),
                             new RNSendIntentPackage(),
                            // new ReactNativeFirebaseAdmobPackage(),
                            new SplashScreenReactPackage(),
                            new RNGestureHandlerPackage(),
                            new SafeAreaContextPackage(),
                            new RNScreensPackage(),
                            new VectorIconsPackage()  ,
                            // new OpenEmailPackage(),
                            // new ReactNativeFirebaseFirestorePackage(),
                            // new ReactNativeFirebaseAnalyticsPackage(),
                            // new ReactNativeFirebaseCrashlyticsPackage(),
                            new RNSharedPreferencesReactPackage(),
                            // new ReactNativeFirebaseAppPackage(),
                            // new ReactNativeFirebaseDatabasePackage(), 
                            new ReactNativePushNotificationPackage(),
                            // new ReactNativeFirebaseMessagingPackage(),
                            new CodePush(getResources().getString(R.string.CodePushDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
                    );  
                }

                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }

                @Override
                protected String getJSBundleFile() {
                    return CodePush.getJSBundleFile();
                }
            };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, false);
    }

}