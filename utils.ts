import { ethers } from "ethers"
import dotenv from "dotenv"

dotenv.config()

export const getProvider = (_chainId: number) => {

    if (_chainId !== 56 && _chainId !== 8453 && _chainId !== 137)
        throw new Error("Wrong chain ID.");


    var provider

    if (_chainId === 56)
        provider = new ethers.providers.JsonRpcProvider(process.env.BSC_URL)
    else if (_chainId === 8453)
        provider = new ethers.providers.JsonRpcProvider(process.env.BASE_URL)
    else
        provider = new ethers.providers.JsonRpcProvider(process.env.MATIC_URL)

    return provider
}