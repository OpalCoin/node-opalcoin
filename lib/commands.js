var commands = module.exports.commands = [
    'addMultiSigAddress'
    , 'backupWallet'
    , 'createRawTransaction'
    , 'decodeRawTransaction'
    , 'dumpPrivKey'
    , 'encryptWallet'
    , 'getAccount'
    , 'getAccountAddress'
    , 'getAddressesByAccount'
    , 'getBalance'
    , 'getBlock'
    , 'getBlockCount'
    , 'getBlockHash'
    , 'getBlockCount'
    , 'getConnectionCount'
    , 'getDifficulty'
    , 'getGenerate'
    , 'getHashesPerSec'
    , 'getHashesPerSec'
    , 'getInfo'
    , 'getMemoryPool'
    , 'getMemoryPool'
    , 'getMiningInfo'
    , 'getNewAddress'
    , 'getRawTransaction'
    , 'getReceivedByAccount'
    , 'getReceivedByAddress'
    , 'getStakingInfo'
    , 'getTransaction'
    , 'getWork'
    , 'help'
    , 'importPrivKey'
    , 'keyPoolRefill'
    , 'listAccounts'
    , 'listReceivedByAccount'
    , 'listReceivedByAddress'
    , 'listSinceBlock'
    , 'listTransactions'
    , 'listUnspent'
    , 'move'
    , 'sendFrom'
    , 'sendMany'
    , 'sendRawTransaction'
    , 'sendToAddress'
    , 'setAccount'
    , 'setGenerate'
    , 'setTxFee'
    , 'signMessage'
    , 'signRawTransaction'
    , 'stop'
    , 'validateAddress'
    , 'verifyMessage'
    , 'walletLock'
    , 'walletPassphrase'
    , 'walletPassphraseChange'
];

module.exports.isCommand = function (command) {
    command = command.toLowerCase();
    for (var i = 0, len = commands.length; i < len; i++) {
        if (commands[i].toLowerCase() === command) {
            return true
        }
    }

    return false;
};
