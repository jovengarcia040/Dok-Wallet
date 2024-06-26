// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.HDWallet;
import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;
import java.util.Base64;
import java.nio.charset.StandardCharsets;
import android.util.Log;

public class EthereumCoin extends CoinFactory.Coin {
    private final String address;

    // static {
    // Log.d("coinswallet", "Registering EthereumCoin");
    // CoinFactory.registerCoin("ethereum", EthereumCoin::new);
    // }

    public EthereumCoin(String mnemonic) {
        super(mnemonic);
        this.address = CoinType.ETHEREUM.deriveAddress(wallet.getKeyForCoin(CoinType.ETHEREUM));
    }

    @Override
    public String getNewAddress() {
        return this.address;
    }

    @Override
    public String getPrivateKey() {
        byte[] privateKeyBytes = wallet.getKeyForCoin(CoinType.ETHEREUM).data();
        return new String(privateKeyBytes, StandardCharsets.UTF_8);
    }

    @Override
    public String signTransaction(String rawData) {
        return null;
    }
}
