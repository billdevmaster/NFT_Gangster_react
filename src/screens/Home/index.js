import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWalletModal } from '@pancakeswap-libs/uikit'

import useWeb3 from '../../hooks/useWeb3'
import { mintNFT, getIsWhitelist } from '../../utils/common'
import { useMint } from '../../hooks/useContract'
import Logo_White from "../../assets/images/Logo_White.png";
import Logo_WhiteP500 from "../../assets/images/Logo_White-p-500.png";
import Logo_WhiteP800 from "../../assets/images/Logo_White-p-800.png";
import Logo_WhiteP1080 from "../../assets/images/Logo_White-p-1080.png";
import Logo_WhiteP1600 from "../../assets/images/Logo_White-p-1600.png";
import Logo_WhiteP2000 from "../../assets/images/Logo_White-p-2000.png";
import VideoImage from "../../assets/videos/Untitled-poster-00001.jpg";
import Video1 from "../../assets/videos/Untitled-transcode.mp4";
import Video2 from "../../assets/videos/Untitled-transcode.webm";

const {ethereum} = window;
let web3 = new Web3(ethereum);

const Home = () => {
  const mintContract = useMint()
  // const { onPresentConnectModal } = useWalletModal(connect, reset, account);
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState("");
  
  const purchase = async () => {
    const currentAccount = await web3.eth.getAccounts();
    if (currentAccount[0] === undefined) {
      ethereum.request({method: 'eth_requestAccounts'})
      .then(async result => {
        const currentAccount = await web3.eth.getAccounts();
        setAccount(currentAccount[0]);
      })
      .catch((err) => {
        return;
      });
    } else {
      console.log("good");
    }
    // if (!account){
    //   if (window.localStorage.getItem('accountStatus')) {
    //     connect('injected')
    //   }else{
    //     onPresentConnectModal();
    //   }
    // }else{
    // }
  }

  return (
    <div>
      <div className="section-5 wf-section">
        <div data-animation="over-right" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-no-scroll="1" role="banner" className="navbar-2 is--nav w-nav">
          <div className="container-4 is--nav w-container">
            <a href="#" className="w-nav-brand"><img src={Logo_White} loading="lazy" sizes="(max-width: 767px) 228px, 300px" srcSet={`${Logo_WhiteP500} 500w, ${Logo_WhiteP800} 800w, ${Logo_WhiteP1080} 1080w, ${Logo_WhiteP1600} 1600w, ${Logo_WhiteP2000} 2000w`} alt="" className="nav__logo-img" /></a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#NFT" className="nav__link w-nav-link">NFT</a>
              <a href="#Kilo" className="nav__link w-nav-link">Kilocoin</a>
              <a href="documents/KG-WP.pdf" target="_blank" className="nav__link w-nav-link">Whitepaper</a>
              <a href="https://discord.com/invite/kryptogangsters" className="nav__link w-nav-link">Discord</a>
              <a href="https://t.me/KryptoGangsters" className="nav__link w-nav-link">telegram</a>
              <a href="https://twitter.com/kryptogangsters" className="nav__link w-nav-link">twitter</a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div data-poster-url={VideoImage} data-video-urls={Video1, Video2} data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
          <video src="/videos/Untitled-transcode.mp4" autoPlay loop muted>
            <source src="/videos/Untitled-transcode.mp4" type="video/mp4" />
          </video>
          <section className="section is--hero home-page">
            <div className="container is--hero">
              <div className="hero_wrap">
                <h1 className="heading">Welcome to<br />KryptoGangsters</h1>
                <p className="paragraph-3">10,000 unique NFT gangsters want you to join the family<br /></p>
              </div>
            </div>
          </section>
        </div>
        <div className="container-5 w-container"></div>
      </div>
      <section className="section is--hero infowrapper">
        <div className="container is--hero">
          <div className="wf-section">
            <div className="w-layout-grid grid-2"><img src="images/Red_Logo.png" loading="lazy" width="511" sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, 511px" srcSet="images/Red_Logo-p-500.png 500w, images/Red_Logo-p-800.png 800w, images/Red_Logo-p-1080.png 1080w, images/Red_Logo.png 3000w" alt="KRYPTO GANGSTERS." className="image-6" />
              <div className="w-layout-grid grid-5">
                <p id="w-node-ff100b3c-8eef-9666-cb4a-a3b44faad7b9-c556bb9f" className="paragraph-4"><span className="text-span-15">100% UNIQUE<br /></span>All 10,000 Krypto Gangsters are Unique. There is no one like another. Each Gangster is randomly generated with it&#x27;s own characteristics, expression and extra&#x27;s.<br /></p>
                <p id="w-node-_491a351c-fa65-dccd-9322-94c63f0eac84-c556bb9f" className="paragraph-5"><span className="text-span-16 text-span-17">KRYPTOGANGSTERS SECRET<br /></span>One set are &quot;cryptonised&quot; versions of real world and fictional characters that in one way or another are known to be &quot;gangsters&quot;. Every NFT will be unique and only one per NFT will available. The characters are designed by our team and all have unique attributes attached to them.</p>
              </div>
              <p id="w-node-cd2470eb-5362-1906-2535-da6cdb585ce1-c556bb9f" className="paragraph-2"><span className="text-span-6"><strong className="bold-text">Krypto Gangsters body is populated by<br /></strong></span><span className="text-span-9"><strong className="bold-text-2">10,000</strong></span><span className="text-span-7"><strong><br /></strong></span><span className="text-span-10"><strong className="bold-text-3">unique gangsters</strong></span><span className="text-span-7"><strong> </strong></span><strong><br /></strong><span className="text-span-8"><strong>living and grinding on the blockchain</strong></span></p>
              <div className="w-layout-grid grid-3">
                <p><span className="grid-title">TWITTER<br /></span>Follow us for the sneak peaks<span className="grid-title"><br /></span></p><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" /><img src="images/pngkey.com-clemson-paw-png-703430.png" loading="lazy" height="" width="34" id="w-node-c32d9c1d-1334-d08c-00e0-dec861771658-c556bb9f" alt="" className="image-5" />
                <p id="w-node-_16e05c6c-bfd9-58d9-e9ca-6fd2c7b2a86b-c556bb9f"><span className="grid-title">Instagram<br /></span>follow our instagram for latest drops</p>
              </div>
              <div id="w-node-bfca5bd5-b51f-6464-e3a2-6819bb0fe2dc-c556bb9f" className="w-layout-grid grid-4">
                <a id="w-node-_0f3903bb-d314-6b2a-d272-d2b3784cb9f5-c556bb9f" href="https://www.instagram.com/kryptogangsters/" target="_blank" className="sm-icon-link w-inline-block"><img src="images/Instagram.svg" loading="lazy" alt="" className="sm-icon" />
                  <div className="sm-text sm-text-light"><span className="text-span-11">Instagram</span><br /></div>
                </a>
                <a id="w-node-_795adaec-215a-8769-a97f-08a112035436-c556bb9f" href="https://twitter.com/kryptogangsters" className="sm-icon-link w-inline-block"><img src="images/Twitter.svg" loading="lazy" alt="" className="sm-icon" />
                  <div className="sm-text sm-text-light"><span className="text-span-12">Twitter<br /></span></div>
                </a>
                <a id="w-node-fdf4866a-ba3a-3409-875d-7df0705f28ad-c556bb9f" href="https://discord.com/invite/kryptogangsters" className="sm-icon-link w-inline-block"><img src="images/Discord.svg" loading="lazy" alt="" className="sm-icon" />
                  <div className="sm-text sm-text-light"><span className="text-span-13">Discord</span><br /></div>
                </a>
                <a id="w-node-_2dfec8eb-2fc7-b63c-11d0-dfc022729f97-c556bb9f" href="https://t.me/KryptoGangsters" className="sm-icon-link w-inline-block"><img src="images/Telegram.svg" loading="lazy" alt="" className="sm-icon" />
                  <div className="sm-text sm-text-light"><span className="text-span-14">Telegram</span><br /></div>
                </a>
              </div>
            </div>
          </div>
          <div className="section-8 wf-section">
            <div className="mintingbox w-container">
              <div className="columns-3 w-row">
                <div className="w-col w-col-6">
                  <h1 className="heading-7">Join the<br /><span className="text-span-20">K</span>rypto <span className="text-span-21">G</span>ang</h1>
                </div>
                <div className="column-4 w-col w-col-6">
                  <div className="w-layout-grid grid-6">
                    <div className="w-layout-grid grid-7">
                      <h3 id="w-node-fb2c792f-293f-1974-1618-e93289cb11a9-c556bb9f" className="heading-8">Mint Your Gangster</h3><img src="images/KG.svg" loading="lazy" width="100" height="100" id="w-node-cb65cbf5-197b-5e01-ae6f-02e22581b54e-c556bb9f" alt="" className="image-10" />
                    </div>
                    <div id="w-node-_89a86db5-2a33-ac05-81c4-b71090fc243a-c556bb9f" className="w-layout-grid grid-8"><img src="images/Mint_Ava.png" loading="lazy" width="100" height="100" srcSet="images/Mint_Ava-p-500.png 500w, images/Mint_Ava-p-800.png 800w, images/Mint_Ava-p-1080.png 1080w, images/Mint_Ava.png 3000w" sizes="100px" id="w-node-df032579-35bf-3661-3c39-b6da193e454f-c556bb9f" alt="" />
                      <div className="text-block-4">Price Per Gangster<br /><span className="text-span-19">0.08 ETH EACH</span><br />10200 remaining</div>
                      <div id="w-node-_2a81d6c6-e7e5-6c99-c818-07846bd6fbb0-c556bb9f" className="text-block-5">
                        <p>Quantity</p>
                      </div>
                      <div className="quantityWrapper">
                        <input type="number" className="quantity" placeholder="Input 1 - 20" min={0} max={20} value={amount} onChange={(e) => setAmount(e.target.value)} />
                      </div>
                    </div>
                    <a id="w-node-f17a72c9-10e2-ce69-b31e-90dc47d1e910-c556bb9f" className="button-3 w-button" onClick={purchase}>
                      {!account ? 'Connect Wallet' : 'Proceed Purchase'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="NFT" className="section-6 wf-section">
            <h1 className="heading-3-5">NFT</h1>
            <div className="columns-2 w-row">
              <div className="w-col w-col-8">
                <div className="text-block-3">We will launch 2 sets of collectible NFTs. One set are “cryptonised” versions of real world and fictional characters that in one way or another are known to be “gangsters”. Every NFT will be unique and only one per NFT will be available. The characters are designed by our team and all have unique attributes attached to them.<br /> <br />The second set of collectibles will be minted in one 10,000 NFT strong set of collectibles. These NFTs will be minted using an artificial intelligence process that will use and combine a set of attributes designed by our team.</div>
              </div>
              <div className="column-3 w-col w-col-4"><img src="images/Mask-003.png" loading="lazy" width="315" sizes="(max-width: 767px) 100vw, 26vw" srcSet="images/Mask-003-p-500.png 500w, images/Mask-003.png 850w" alt="" className="image-7" /></div>
            </div>
          </div>
          <div className="section-4 wf-section">
            <div className="slider-container">
              <h1 className="heading-3-5 fetured">Featured gangsters</h1>
              <div className="slider-wrapper">
                <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false">
                  <div className="mask w-slider-mask">
                    <div className="slide w-slide">
                      <div className="slide-content-wrapper"><img src="images/gangster2.jpg" loading="lazy" sizes="(max-width: 479px) 83vw, 400px" srcSet="images/gangster2-p-500.jpeg 500w, images/gangster2-p-800.jpeg 800w, images/gangster2.jpg 850w" alt="" /></div>
                    </div>
                    <div className="slide w-slide">
                      <div className="slide-content-wrapper"><img src="images/gangster3.jpg" loading="lazy" sizes="(max-width: 479px) 83vw, 400px" srcSet="images/gangster3-p-500.jpeg 500w, images/gangster3-p-800.jpeg 800w, images/gangster3.jpg 850w" alt="" /></div>
                    </div>
                    <div className="slide w-slide">
                      <div className="slide-content-wrapper"><img src="images/gangster1.jpg" loading="lazy" sizes="(max-width: 479px) 83vw, 400px" srcSet="images/gangster1-p-500.jpeg 500w, images/gangster1-p-800.jpeg 800w, images/gangster1.jpg 850w" alt="" /></div>
                    </div>
                  </div>
                  <div className="slider-left-arrow w-slider-arrow-left"><img src="images/Arrow_Left.png" loading="lazy" alt="" className="image-8" /></div>
                  <div className="slider-right-arrow w-slider-arrow-right"><img src="images/Arrow_Right.png" loading="lazy" width="66" alt="" className="image-8" /></div>
                  <div className="w-slider-nav w-round"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="Kilo" className="section-7 wf-section">
            <h1 className="heading-3-5 kilocoin">KILO COIN</h1>
            <div className="columns w-row">
              <div className="column-2 w-col w-col-5"><img src="images/KG-Coing-Charts.png" loading="lazy" width="444" sizes="(max-width: 767px) 444px, 33vw" srcSet="images/KG-Coing-Charts-p-500.png 500w, images/KG-Coing-Charts-p-800.png 800w, images/KG-Coing-Charts-p-1080.png 1080w, images/KG-Coing-Charts-p-1600.png 1600w, images/KG-Coing-Charts.png 1971w" alt="" className="image-2" /></div>
              <div className="column w-col w-col-7">
                <div className="text-block-3">As we see Kryptogangsters as the start of something much bigger than a regular NFT drop it speaks for itself that we combine it with a crypto currency. In this case we have chosen to launch the KryptoGangsters ecosystem with our Binance smartchain built Kilo token.<br /><br /><span className="text-span">Name:</span> Kilo<br /><span className="text-span-2">Symbol</span><span className="text-span-3">:</span> KG<br /><span className="text-span-4">Decimals: </span>3<br /><span className="text-span-18">Address</span> : <span className="test">0xA4FA1185C12ef7AF0221D91494d36abBaeFb3262</span><br /><br />Smart chain BEP20 Token<br />Total Supply <span className="text-span-5">250,000,000 pre-minted</span></div>
                <a href="https://t.me/KryptoGangsters" target="_blank" className="button-2 w-button">Join the private sale !</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-timeline-heading">
        <div className="container-2">
          <div id="roadmap" className="padding-vertical-xlarge">
            <div className="timeline-main_heading-wrapper">
              <div className="margin-bottom-medium">
                <h2 className="heading-5">Roadmap</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-timeline">
        <div className="container-2">
          <div className="timeline_wrapper">
            <div className="timeline_progress">
              <div className="timeline_progress-bar"></div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf1c7" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1c8-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 1</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1cb-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1cd-c556bb9f" className="timeline_right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline_text">Waste management business<br />-Design first batch of Kryptogangster NFTs<br />-Start of our social media channels<br /> (IG, TG, FB, Twitter, Discord)</div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf1d3" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1d4-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 2</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1d7-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text">Shakedown<br />- Start Kilo Private Pre-Sale<br />- Start Kryptogangsters NFT Sale<br />- Bribe Law enforcement<br /></div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf1e6" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1e7-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 3</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf1ea-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text">Initiation<br />- Finalise website<br />- Finish White Paper<br />- Finalise 10k Limited Edition Kryptogangsters<br /></div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf200" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf201-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 4</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf204-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text">Cosa Nostra<br />- Mint 10k Limited Edition<br />- Announce further plans<br /></div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf21c" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf21d-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 5</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf220-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text"> Build Empire<br />- Launch Kilo on CEX<br />- Start developing Stablecoin<br /></div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf239" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf23a-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 6</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf23d-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text">Take Over<br />- Roll out next set of Limited NFT Batch<br />- Set up Crypto Ecosystem<br /></div>
                </div>
              </div>
            </div>
            <div data-w-id="e0e128b0-a544-5a1c-c678-c74c0d0cf257" className="timeline_item">
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf258-c556bb9f" className="timeline_left">
                <div className="timeline_date-text">Phase 7</div>
              </div>
              <div id="w-node-e0e128b0-a544-5a1c-c678-c74c0d0cf25b-c556bb9f" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-medium">
                  <div className="timeline_text">Plead Innocent<br />- Finalise NFT Gamification Development<br /></div>
                </div>
              </div>
            </div>
            <div className="overlay-fade-bottom"></div>
            <div className="overlay-fade-top"></div>
          </div>
        </div>
      </div>
      <footer id="footer" className="footer wf-section">
        <div className="container-3 w-container">
          <div className="footer-flex-container">
            <a href="#" className="footer-logo-link">
              <img src="images/Logo_White.png" width="1000" sizes="(max-width: 767px) 100vw, 249.296875px" srcSet="images/Logo_White-p-500.png 500w, images/Logo_White-p-800.png 800w, images/Logo_White-p-1080.png 1080w, images/Logo_White-p-1600.png 1600w, images/Logo_White-p-2000.png 2000w, images/Logo_White.png 3000w" alt="" className="footer-image-2" />
              </a>
            <div>
              <h2 className="footer-heading">Quick links</h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a href="https://discord.com/invite/kryptogangsters" className="footer-link">Discord</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kryptogangsters/" target="_blank" className="footer-link">Instagram</a>
                </li>
                <li>
                  <a href="https://t.me/KryptoGangsters" className="footer-link">Telegram</a>
                </li>
                <li>
                  <a href="https://twitter.com/kryptogangsters" className="footer-link">Twitter</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Opensea</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Jump to</h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a href="#NFT" className="footer-link">NFT</a>
                </li>
                <li>
                  <a href="#Kilo" className="footer-link">Kilo Coin</a>
                </li>
                <li>
                  <a href="#roadmap" className="footer-link">Roadmap</a>
                </li>
              </ul>
            </div>
          </div>
          <div>Copyright © 2021 Krypto Gangsters. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
