import React from 'react'
import { ThemeProvider } from "styled-components";
import { ModalProvider, dark } from '@pancakeswap-libs/uikit'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { Provider } from 'react-redux'
import getRpcUrl from './utils/getRpcUrl'
import { configureStore } from './redux/store';

const Providers = ({ children }) => {
  const rpcUrl = getRpcUrl()
  const chainId = 1;
  const theme = dark;
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <bsc.UseWalletProvider
          chainId={chainId}
          connectors={{
            walletconnect: { rpcUrl },
            bsc,
          }}
        >
          <ModalProvider>{children}</ModalProvider>
        </bsc.UseWalletProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default Providers
