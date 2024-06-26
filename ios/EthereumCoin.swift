//
//  EthereumCoin.swift
//  coinswallet
//
//  Created by Tal Grynbaum on 30/06/2023.
//

import Foundation
import WalletCore

class EthereumCoin: CoinFactory.Coin {
    private var address: String = ""
    
    override init(mnemonic: String) {
        super.init(mnemonic: mnemonic)
        self.address = CoinType.ethereum.deriveAddress(privateKey: wallet.getKeyForCoin(coin: .ethereum))
    }
    
    override func getNewAddress() -> String {
        return self.address
    }
    
    override func getPrivateKey() -> String {
        let privateKeyBytes = wallet.getKeyForCoin(coin: .ethereum).data
        return String(data: privateKeyBytes, encoding: .utf8) ?? ""
    }
    
    override func signTransaction(rawData: String) -> String {
        // Implement the logic to sign an Ethereum transaction using the provided raw data
        return ""
    }
}
