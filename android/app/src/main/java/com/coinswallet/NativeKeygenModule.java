package com.coinswallet;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import java.nio.charset.StandardCharsets;
import java.util.Formatter;

import java.security.SecureRandom;
import wallet.core.jni.HDWallet;
import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;
import wallet.core.jni.Mnemonic;
// import WritableMap
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.coinswallet.coins.*;
import java.util.*;


// import com.satoshilabs.trezor.lib.protobuf.TrezorType;
// import com.satoshilabs.trezor.lib.protobuf.TrezorMessage;

public class NativeKeygenModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;
  private Map<String, CoinFactory.Coin> coins = new HashMap<>();
  

  static {
    System.loadLibrary("TrustWalletCore");
    Class<?> ethereumCoinClass = EthereumCoin.class;

  }

  public void loadCoins() {
    Log.d("coinswallet", "Registering coins (loadCoins)");
    Class<?> ethereumCoinClass = EthereumCoin.class;
    CoinFactory.registerCoin("ethereum", EthereumCoin::new);
    CoinFactory.registerCoin("tron", TronCoin::new);
    CoinFactory.registerCoin("bitcoin", BitcoinCoin::new);
    // Add similar lines for other coin classes
}

  NativeKeygenModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    loadCoins();
  }

  @Override
  public String getName() {
    return "NativeKeygen";
  }

  private String byteArrayToHex(byte[] bytes) {
    Formatter formatter = new Formatter();
    for (byte b : bytes) {
      formatter.format("%02x", b);
    }
    String hex = formatter.toString();
    formatter.close();
    return hex;
  }

  // ...
  @ReactMethod
  public static void generateMnemonic(Promise promise) {
    // Generate a new mnemonic
    try {
    HDWallet wallet = new HDWallet(128, "");
    Log.d("coinswallet", "in generateMnemonic");
    String mnemonic = wallet.mnemonic();
    Log.d("coinswallet", "in generateMnemonic 2 "+mnemonic);
    promise.resolve(mnemonic);
    } catch(Exception e) {
      Log.e("coinswallet", "in generateMnemonic, exception"+e.toString());
      promise.reject("E_INVALID_MNEMONIC", e);
    }
}
  @ReactMethod
  public void getWallet(String coinName, String mnemonic, Promise promise) {
      try {
        Log.d("coinswallet", "in generateWallet 1 "+coinName+" "+mnemonic);
          CoinFactory.Coin coin;
          coin = coins.get(mnemonic+":"+coinName);  // Check if we already have an instance of this coin
          if (coin == null) {
            coin = CoinFactory.createCoin(coinName, mnemonic);
            Log.d("coinswallet", "in generateWallet 2");
            coins.put(mnemonic+":"+coinName, coin);  // Store the coin instance
          }
          Log.d("coinswallet", "in generateWallet 3");
          WritableMap result = Arguments.createMap();
          Log.d("coinswallet", "in generateWallet 4");
          result.putString("address", coin.getNewAddress());
          Log.d("coinswallet", "in generateWallet 5");
          result.putString("privateKey", coin.getPrivateKey());
          Log.d("coinswallet", "in generateWallet 6");
          promise.resolve(result);
          Log.d("coinswallet", "in generateWallet 7");
         } catch (Exception e) {
        Log.e("coinswallet", "in generateWallet, exception"+e.toString());
          promise.reject("E_INVALID_MNEMONIC", e);
      }
  }

  @ReactMethod
  public void generatePrivateKey(Promise promise) {
    try {
      Log.w("coinswallet", "in generatePrivateKey ");
      byte[] privateKeyBytes = new byte[32];
      SecureRandom random = new SecureRandom();
      random.nextBytes(privateKeyBytes);
      String privateKeyHex = byteArrayToHex(privateKeyBytes);
      Log.w("coinswallet", "in generatePrivateKey key is:" + privateKeyHex);
      promise.resolve(privateKeyHex);
    } catch (Exception e) {
      promise.reject("ERR_UNEXPECTED_EXCEPTION", e);
    }
  }

  @ReactMethod
  public void generateWallet2(String mnemonic, Promise promise) {
    try {
      Log.w("coinswallet", "in generateWallet " + mnemonic);
      HDWallet wallet = new HDWallet(mnemonic, "");
      Log.w("coinswallet", "got HDWallet" + wallet);
      PrivateKey privateKey = wallet.getKeyForCoin(CoinType.ETHEREUM);
      Log.w("coinswallet", "got privateKey" + privateKey);
      
      String address = CoinType.ETHEREUM.deriveAddress(privateKey);
      Log.w("coinswallet", "got address" + address);
      promise.resolve(address);
    } catch (Exception e) {
      promise.reject("E_INVALID_MNEMONIC", e);
    }
  }

  // @ReactMethod
  // public void generateWalletFromPhrase(String phrase, Promise promise) {
  // try {
  // // Generate a seed from the mnemonic phrase
  // byte[] seed = TrezorType.HDNodeType.newBuilder()
  // .setDepth(0)
  // .setFingerprint(0)
  // .setChildNum(0)
  // .setChainCode(ByteString.copyFrom(new byte[32]))
  // .setPrivateKey(ByteString.copyFrom(new byte[32]))
  // .build()
  // .toByteArray();

  // // Derive the private key for the Ethereum wallet
  // // (m/44'/60'/0'/0/0 according to BIP44)
  // TrezorMessage.HDNodePathType path = TrezorMessage.HDNodePathType.newBuilder()
  // .addAllAddressN(Arrays.asList(44 | 0x80000000, 60 | 0x80000000, 0 |
  // 0x80000000, 0, 0))
  // .setNode(TrezorType.HDNodeType.parseFrom(seed))
  // .build();
  // TrezorType.HDNodeType walletNode = TrezorType.HDNodeType
  // .parseFrom(TrezorCrypto.hmacSha512(path.toByteArray(), phrase.getBytes()));

  // // Convert the private key to hexadecimal
  // byte[] privateKeyBytes = walletNode.getPrivateKey().toByteArray();
  // String privateKeyHex = byteArrayToHex(privateKeyBytes);

  // promise.resolve(privateKeyHex);
  // } catch (Exception e) {
  // promise.reject("ERR_UNEXPECTED_EXCEPTION", e);
  // }
  // }
}
