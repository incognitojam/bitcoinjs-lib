export interface Network {
    messagePrefix: string;
    bech32: string;
    bip32: Bip32;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}
interface Bip32 {
    public: number;
    private: number;
}
export declare const bitcoin: {
    mainnet: Network;
    regtest: Network;
    testnet: Network;
};
export declare const dogecoin: {
    mainnet: Network;
    testnet: Network;
};
export {};
