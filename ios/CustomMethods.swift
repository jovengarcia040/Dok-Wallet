//
//  CustomMethods.swift
//  coinswallet
//
//  Created by Tal Grynbaum on 30/06/2023.
//

import Foundation
import WalletCore

@objc(CustomMethods) class CustomMethods: NSObject {
  var coins: [String: CoinFactory.Coin] = [:]
  
  
  override init() {
    super.init()
    // Initialize any properties or perform additional setup here
    CoinFactory.registerCoin(name: "bitcoin") { mnemonic in
      return BitcoinCoin(mnemonic: mnemonic)
    }
    CoinFactory.registerCoin(name: "ethereum") { mnemonic in
      return EthereumCoin(mnemonic: mnemonic)
    }
    CoinFactory.registerCoin(name: "tron") { mnemonic in
      return TronCoin(mnemonic: mnemonic)
    }

  }
  
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func simpleMethod() { /* do something */ }
  @objc public func simpleMethodReturns(
    _ callback: RCTResponseSenderBlock
  ) {
    callback(["CustomMethods.simpleMethodReturns()"])
  }
  @objc public func simpleMethodWithParams(
    _ param: String,
    callback: RCTResponseSenderBlock
  ) {
    callback(["CustomMethods.simpleMethodWithParams('\(param)')"])
  }
  @objc public func throwError() throws {
    
  }

  @objc public func generateMnemonic(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    if let wallet = HDWallet(strength: 128, passphrase: "") {
      let mnemonic = wallet.mnemonic
      resolve(mnemonic)
    } else {
      reject("E_INVALID_WALLET", "Failed to create HDWallet", nil)
    }
  }
  
//  @objc
//  public func  getWallet(_ coinName: String, mnemonic: String,  _ resolve: RCTPromiseResolveBlock,
//                 rejecter reject: RCTPromiseRejectBlock) {

  @objc public func getWallet(
    _ coinName: String,
    mnemonic: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {

  
    var coin = coins[mnemonic + ":" + coinName]
    if coin == nil {
      coin = CoinFactory.createCoin(coinName: coinName, mnemonic: mnemonic)
      coins[mnemonic + ":" + coinName] = coin
    }
    
    if let unwrappedCoin = coin {
      let result: [String: Any] = [
        "address": unwrappedCoin.getNewAddress(),
        "privateKey": unwrappedCoin.getPrivateKey()
      ]
      
      resolve(result)
    } else {
      reject("0","E_INVALID_COIN", NSError(domain: "", code: 0, userInfo: nil))
    }
  }
  @objc public func resolvePromise2(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    let mnemonic = "sleep fox shift walnut target clay badge bean season verb segment small"
    let passphrase = ""
    let hdWallet = try HDWallet(mnemonic: mnemonic, passphrase: passphrase)
    
    // Unwrap the optional HDWallet before accessing its methods
    if let unwrappedHDWallet = hdWallet {
      // Generate a private key for a specific coin type
      let coinType = CoinType.bitcoin
      let privateKey = try unwrappedHDWallet.getKeyForCoin(coin: coinType)
      
      // Use the private key as needed
      print("Private Key: \(privateKey)")
      let privateKeyString = privateKey.data.hexString
      resolve(privateKeyString)
      
    } else {
      print("Error: HDWallet is nil")
      resolve("CustomMethods.resolvePromise() nil")
      
    }
    
  }
  @objc public func rejectPromise(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    reject("0", "CustomMethods.rejectPromise()", nil)
  }
}
