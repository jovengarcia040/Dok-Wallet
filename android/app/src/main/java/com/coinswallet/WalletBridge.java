package com.coinswallet;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import wallet.core.jni.HDWallet;
import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class WalletBridge extends ReactContextBaseJavaModule {
    public WalletBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WalletBridge";
    }

    @ReactMethod
    public void generateWallet222(String mnemonic, Promise promise) {
        try {
            HDWallet wallet = new HDWallet(mnemonic, "");
            PrivateKey privateKey = wallet.getKeyForCoin(CoinType.ETHEREUM);
            String address = CoinType.ETHEREUM.deriveAddress(privateKey);
            promise.resolve(address);
        } catch (Exception e) {
            promise.reject("E_INVALID_MNEMONIC", e);
        }
    }
}
