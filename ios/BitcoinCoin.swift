//
//  BitcoinCoin.swift
//  coinswallet
//
//  Created by Tal Grynbaum on 30/06/2023.
//


import Foundation
import WalletCore

class BitcoinCoin: CoinFactory.Coin {
    private var addressIndex: Int = 0
    
    override init(mnemonic: String) {
        super.init(mnemonic: mnemonic)
    }
    
    override func getNewAddress() -> String {
        let privateKey = wallet.getKeyForCoin(coin: .bitcoin)
        let address = CoinType.bitcoin.deriveAddress(privateKey: privateKey)
        addressIndex += 1
        return address
    }
    
    override func getPrivateKey() -> String {
        let privateKeyBytes = wallet.getKeyForCoin(coin: .bitcoin).data
        return String(data: privateKeyBytes, encoding: .utf8) ?? ""
    }
    
    override func signTransaction(rawData: String) -> String {
        // Implement the logic to sign a Bitcoin transaction using the provided raw data
        return ""
    }
}
