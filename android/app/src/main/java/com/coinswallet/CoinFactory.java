// CoinFactory.java
package com.coinswallet;

import wallet.core.jni.*;
import java.util.*;
import java.util.function.Function;
import java.util.function.Supplier;
import android.util.Log;

public class CoinFactory {

    // private static final Map<String, Supplier<Coin>> coinMap = new HashMap<>();
    private static final Map<String, Function<String, Coin>> coinMap = new HashMap<>();

    public static void registerCoin(String name, Function<String, Coin> constructor) {
        Log.d("coinswallet", "before register: map size: " + coinMap.size());
        coinMap.put(name, constructor);
        Log.d("coinswallet", "after register: map size: " + coinMap.size());
    }

    public static Coin createCoin(String coinName, String mnemonic) {
        Log.d("coinswallet", "Creating coin: " + coinName);
        Log.d("coinswallet", "map size: " + coinMap.size());
        Function<String, Coin> constructor = coinMap.get(coinName.toLowerCase());
        Log.d("coinswallet", "factory.createCoin: ");
        Log.d("coinswallet", "factory.createCoin: " + constructor);
        if (constructor == null) {
            throw new IllegalArgumentException("Unsupported coin: " + coinName);
        }
        return constructor.apply(mnemonic);
    }

    public static abstract class Coin {
        protected HDWallet wallet;

        protected Coin(String mnemonic) {
            this.wallet = new HDWallet(mnemonic, "");
        }

        public abstract String getNewAddress();

        public abstract String getPrivateKey();

        public abstract String signTransaction(String rawData);
    }
}
