// TronCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.HDWallet;
import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;
import java.util.Base64;
import java.nio.charset.StandardCharsets;
import android.util.Log;

public class TronCoin extends CoinFactory.Coin {
    private final String address;

    public TronCoin(String mnemonic) {
        super(mnemonic);
        this.address = CoinType.TRON.deriveAddress(wallet.getKeyForCoin(CoinType.TRON));
    }

    @Override
    public String getNewAddress() {
        return this.address;
    }

    @Override
    public String getPrivateKey() {
        byte[] privateKeyBytes = wallet.getKeyForCoin(CoinType.TRON).data();
        return new String(privateKeyBytes, StandardCharsets.UTF_8);
    }

    @Override
    public String signTransaction(String rawData) {
        // You need to implement this method according to the specific requirements of
        // Tron transactions.
        return null;
    }
}
