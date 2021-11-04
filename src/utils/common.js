const { BigNumber } = require('ethers')

export const mintNFT = async (mintContract, account, amount, value, gas) => {
    const response = await mintContract.methods.createItem(amount).send({ from: account, value: value, gas: gas });
    return response;
}

export const getIsWhitelist = async (mintContract, account) => {
    const response = await mintContract.methods.isWhiteListed(account).call();
    return response
}