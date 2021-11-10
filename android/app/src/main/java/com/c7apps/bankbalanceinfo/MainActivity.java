package com.c7apps.CartApp;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import com.c7apps.CartApp.R;
import com.c7apps.CartApp.react.ReactNativeActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        Intent intent = new Intent(getApplicationContext(), ReactNativeActivity.class);
        startActivity(intent);
        finish();


    }
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        //probably some other stuff here
        //SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
    }
}