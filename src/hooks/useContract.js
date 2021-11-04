import { useEffect, useState } from 'react'
import useWeb3 from './useWeb3'
import { getMintAddress } from '../utils/addressHelpers'
import mint from '../config/abis/mint.json'

const useContract = (abi, address) => {
    const web3 = useWeb3()
    const [contract, setContract] = useState(new web3.eth.Contract(abi, address))

    useEffect(() => {
        setContract(new web3.eth.Contract(abi, address))
    }, [abi, address, web3])

    return contract
}

export const useMint = () => {
    const abi = mint.abi;
    return useContract(abi, getMintAddress())
}