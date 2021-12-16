package com.ambrosia;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;

public class MainActivity extends ReactActivity {

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Ambrosia";
  }
}
