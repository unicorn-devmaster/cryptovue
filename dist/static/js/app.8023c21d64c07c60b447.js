webpackJsonp([1],{0:function(t,e,i){function a(t){i(16)}var s=i(1)(i(9),i(812),a,null,null);t.exports=s.exports},10:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(808),s=i.n(a),n=i(807),r=i.n(n);e.default={name:"app",components:{HeaderHero:s.a,FooterHero:r.a}}},11:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footerHero",props:{},data:function(){return{}}}},12:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"headerHero",data:function(){return{modalActive:!1,showBTCWallet:!1,showETHWallet:!1}},methods:{toggleModal:function(){this.modalActive=!this.modalActive},displayBTC:function(){this.showBTCWallet=!0},displayETH:function(){this.showETHWallet=!0}}}},13:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),s=i(820);e.default={props:{},name:"bodyHero",data:function(){return{cryptoCurrencies:[],firstFiveCryptoCurrencies:[],secondFiveCryptoCurrencies:[],selectedCryptoCurrency:{}}},created:function(){var t=this;this.$http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(function(e){t.cryptoCurrencies=e.body,t.cryptoCurrencies.forEach(function(e){return t.addImageAndDescription(e)}),t.firstFiveCryptoCurrencies=t.cryptoCurrencies.slice(0,5),t.secondFiveCryptoCurrencies=t.cryptoCurrencies.slice(5)})},methods:{addImageAndDescription:function(t){t.id=t.id in s?t.id:void 0,t.image=t.id+"_image",t.description=s[t.id].description,t.website=s[t.id].website,t.paper=s[t.id].paper,t.github=s[t.id].github,t.positivePercentChange=!(t.percent_change_24h.indexOf("-")>-1),t.percentChange24h=t.percent_change_24h.replace(/^-/,"")},getPriceUSD:function(t){var e=t.price_usd;return Number(e).toFixed(2)},getPercentChange:function(t){return t.percentChange24h},selectCryptoCurrency:function(t){this.selectCryptoCurrency=t,this.$nextTick(function(){a.a.$emit("cryptoCurrencySelected",t)})}}}},14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),s=["AUD","BRL","CAD","CHF","CNY","EUR","GBP","HKD","IDR","INR","JPY","USD","KRW","MXN","RUB"];e.default={name:"selectedHero",data:function(){return{selectedCryptoCurrency:{},fiatCurrencies:s,selectedFiatCurrency:s[11],positivePercentChange:!0,negativePercentChange:!1,dropDownOpen:!1}},created:function(){var t=this;a.a.$on("cryptoCurrencySelected",function(e){e.selectedPrice=Number(e.price_usd).toFixed(2),e.selectedSupply=Number(e.available_supply).toLocaleString(),e.selectedMarketCap=Number(e.market_cap_usd).toLocaleString(),t.selectedCryptoCurrency=e})},beforeDestroy:function(){a.a.$off("cryptoCurrencySelected")},methods:{toggleDropDown:function(){this.dropDownOpen=!this.dropDownOpen},selectFiatCurrency:function(t){var e=this;this.selectedFiatCurrency=t,this.$http.get("https://api.coinmarketcap.com/v1/ticker/"+this.selectedCryptoCurrency.id+"/?convert="+this.selectedFiatCurrency).then(function(t){e.toggleDropDown(),e.selectedCryptoCurrency.selectedPrice=Number(t.body[0]["price_"+e.selectedFiatCurrency.toLowerCase()]).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),e.selectedCryptoCurrency.selectedMarketCap=Number(t.body[0]["market_cap_"+e.selectedFiatCurrency.toLowerCase()]).toLocaleString()})}}}},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},20:function(t,e){},3:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(2),s=new a.a},4:function(t,e,i){"use strict";var a=i(2),s=i(817),n=i(809),r=i.n(n),o=i(810),c=i.n(o);a.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"",component:r.a},{path:"/selected",component:c.a}],scrollBehavior:function(t,e,i){return{x:0,y:0}}})},6:function(t,e,i){function a(t){i(17)}var s=i(1)(i(10),i(813),a,"data-v-5ea8e3dd",null);t.exports=s.exports},8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i(7),n=(i(5),i(0)),r=i.n(n),o=i(6),c=i.n(o),p=i(4);a.a.use(s.a),a.a.component("icon",r.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:p.a,render:function(t){return t(c.a)}})},807:function(t,e,i){function a(t){i(18)}var s=i(1)(i(11),i(814),a,"data-v-730aef4a",null);t.exports=s.exports},808:function(t,e,i){function a(t){i(15)}var s=i(1)(i(12),i(811),a,"data-v-2ba60a3c",null);t.exports=s.exports},809:function(t,e,i){function a(t){i(20)}var s=i(1)(i(13),i(816),a,"data-v-e147a678",null);t.exports=s.exports},810:function(t,e,i){function a(t){i(19)}var s=i(1)(i(14),i(815),a,"data-v-b6deb686",null);t.exports=s.exports},811:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-head"},[i("header",{staticClass:"nav"},[i("div",{staticClass:"container"},[i("div",{staticClass:"nav-left"},[i("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[i("img",{staticClass:"app-logo",attrs:{src:"/static/app-logo.png"}}),t._v(" "),i("p",{staticClass:"app-logo-name"},[t._v("Crypto"),i("span",[t._v("Vue")])])])],1),t._v(" "),i("div",{staticClass:"nav-right nav-menu"},[i("span",{staticClass:"nav-item"},[i("a",{staticClass:"button is-success is-inverted is-outlined",on:{click:t.toggleModal}},[i("span",[t._v("What's this?")])])])])])]),t._v(" "),i("div",{staticClass:"modal",class:{"is-active":t.modalActive}},[i("div",{staticClass:"modal-background",on:{click:t.toggleModal}}),t._v(" "),i("div",{staticClass:"modal-card"},[i("header",{staticClass:"modal-card-head"}),t._v(" "),t._m(0),t._v(" "),i("footer",{staticClass:"modal-card-foot"},[i("div",{staticClass:"content has-text-centered"},[i("div",{staticClass:"footer-title"},[t._v("Hassan Djirdeh | "),i("icon",{attrs:{name:"calendar",height:"12"}}),t._v(" 2017")],1),t._v(" "),i("div",{staticClass:"footer-social-media"},[i("a",{staticClass:"icon",attrs:{href:"http://hassandjirdeh.com",target:"_blank"}},[i("icon",{attrs:{name:"h-square",scale:"2"}})],1),t._v(" "),i("a",{staticClass:"icon",attrs:{href:"https://github.com/djirdehh",target:"_blank"}},[i("icon",{attrs:{name:"github-square",scale:"2"}})],1),t._v(" "),i("a",{staticClass:"icon",attrs:{href:"https://ca.linkedin.com/in/hassandjirdeh",target:"_blank"}},[i("icon",{attrs:{name:"linkedin-square",scale:"2"}})],1),t._v(" "),i("a",{staticClass:"icon",attrs:{href:"mailto:hassan.djirdeh@mail.utoronto.ca",target:"_blank"}},[i("icon",{attrs:{name:"envelope-square",scale:"2"}})],1)]),t._v(" "),i("div",{staticClass:"wallet-content"},[i("p",{staticClass:"wallet-tag",on:{click:t.displayBTC}},[t._v("BTC? "),t.showBTCWallet?i("span",{staticClass:"wallet-id"},[t._v("12M1xfsLLg3oaPmaa8Np2THVmgKjG7uGDb")]):t._e()]),t._v(" "),i("p",{staticClass:"wallet-tag",on:{click:t.displayETH}},[t._v("ETH? "),t.showETHWallet?i("span",{staticClass:"wallet-id"},[t._v("0xc8D204007B241EA59e9Eac263e983CBDfb9367B4")]):t._e()])])])]),t._v(" "),i("button",{staticClass:"modal-close is-medium",on:{click:t.toggleModal}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"modal-card-body"},[i("div",{staticClass:"content"},[i("h3",[t._v(" CryptoVue ")]),t._v(" "),i("img",{staticClass:"modal-body-logo",attrs:{src:"/static/app-logo.png",id:"app-logo"}}),t._v(" "),i("p",[t._v("Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - "),i("a",{attrs:{href:"https://bitcoin.org/en/",target:"_blank"}},[t._v("Bitcoin")]),t._v(". As of today - more than 700 digital currencies exist with a total market capitalization greater than 100 billion USD. ")]),t._v(" "),i("p",[i("a",{attrs:{target:"_blank"}},[t._v("CryptoVue")]),t._v(" is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market captilization and overall circulating supply - obtained from the leading cryptocurrency resource "),i("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("CoinMarketCap")]),t._v(".")]),t._v(" "),i("h3",[t._v("Vue")]),t._v(" "),i("img",{staticClass:"modal-body-logo",attrs:{src:"/static/vue_logo.png",id:"vue-logo"}}),t._v(" "),i("p",[t._v("Built as a weekend project, this was a great introduction in  understanding the common concepts of "),i("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue")]),t._v(" (reusable single-file components, vue-router, templating, etc.). ")]),t._v(" "),i("p",{staticStyle:{"padding-bottom":"10px"}},[t._v("Styling of the application was done with "),i("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")]),t._v(" (Flexbox based CSS framework) and SASS. Head over to the my "),i("a",{attrs:{href:"https://github.com/djirdehh/crypto_vue",target:"_blank"}},[t._v("github page")]),t._v(" to see the entire scaffold and feel free to reach out with any comments/questions!")])])])}]}},812:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return i("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return i("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},813:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("section",{staticClass:"hero is-success is-fullheight"},[i("headerHero"),t._v(" "),i("router-view"),t._v(" "),i("footerHero")],1)])},staticRenderFns:[]}},814:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-foot"},[i("footer",{staticClass:"footer"},[i("div",{staticClass:"mobile-footer"},[t._v("\n      Made by "),i("a",{attrs:{href:"https://github.com/djirdehh",target:"_blank"}},[t._v("Hassan Djirdeh")]),t._v(" | "),i("icon",{attrs:{name:"calendar",height:"12"}}),t._v(" 2017\n    ")],1)])])},staticRenderFns:[]}},815:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns selected-section"},[i("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[i("div",{staticClass:"return-action"},[i("icon",{staticClass:"arrow-left",attrs:{name:"chevron-left",height:"27",width:"27"}})],1)]),t._v(" "),i("div",{staticClass:"column is-7 image-section"},[i("img",{staticClass:"cryptoCurrency-image",attrs:{src:"/static/"+t.selectedCryptoCurrency.id+"_large_logo.png"}}),t._v(" "),i("h1",{staticClass:"cryptoCurrency-title"},[t._v(t._s(t.selectedCryptoCurrency.name))]),t._v(" "),i("span",{staticClass:"tag is-primary"},[t._v("Rank "+t._s(t.selectedCryptoCurrency.rank))]),t._v(" "),i("p",{staticClass:"cryptoCurrency-description"},[t._v(t._s(t.selectedCryptoCurrency.description))]),t._v(" "),i("div",{staticClass:"icons-section"},[t.selectedCryptoCurrency.website?i("span",{staticClass:"icon"},[i("a",{attrs:{href:t.selectedCryptoCurrency.website,target:"_blank"}},[i("icon",{attrs:{name:"link",scale:"2"}})],1)]):t._e(),t._v(" "),t.selectedCryptoCurrency.paper?i("span",{staticClass:"icon"},[i("a",{attrs:{href:t.selectedCryptoCurrency.paper,target:"_blank"}},[i("icon",{attrs:{name:"file-text",scale:"2"}})],1)]):t._e(),t._v(" "),t.selectedCryptoCurrency.github?i("span",{staticClass:"icon"},[i("a",{attrs:{href:t.selectedCryptoCurrency.github,target:"_blank"}},[i("icon",{attrs:{name:"github",scale:"2"}})],1)]):t._e()])]),t._v(" "),i("div",{staticClass:"column information-section"},[i("div",{staticClass:"dropdown-section"},[i("div",{staticClass:"control"},[i("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.toggleDropDown}},[t._v("\n          "+t._s(t.selectedFiatCurrency)+"\n          "),i("span",{staticClass:"arrow-icon"},[t.dropDownOpen?t._e():i("icon",{attrs:{name:"caret-down"}}),t._v(" "),t.dropDownOpen?i("icon",{attrs:{name:"caret-up"}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"box dropdown",class:{"is-open":t.dropDownOpen}},[i("ul",t._l(t.fiatCurrencies,function(e){return i("li",[i("a",{staticClass:"nav-item",on:{click:function(i){t.selectFiatCurrency(e)}}},[t._v(t._s(e))])])}))])])]),t._v(" "),i("div",{staticClass:"price-section"},[i("p",{staticClass:"price-tag"},[t._v("Current Price")]),t._v(" "),i("p",{staticClass:"price-amount"},[t._v(t._s(t.selectedFiatCurrency)+" "+t._s(t.selectedCryptoCurrency.selectedPrice)+" \n        "),i("span",{class:{"positive-percent-change":t.selectedCryptoCurrency.positivePercentChange,"negative-percent-change":!t.selectedCryptoCurrency.positivePercentChange}},[t._v("\n          ("+t._s(t.selectedCryptoCurrency.percentChange24h)+"%)\n        ")])])]),t._v(" "),i("div",{staticClass:"price-section"},[i("p",{staticClass:"price-tag"},[t._v("Circulating Supply")]),t._v(" "),i("p",{staticClass:"price-amount"},[t._v(t._s(t.selectedCryptoCurrency.selectedSupply)+" "+t._s(t.selectedCryptoCurrency.symbol))])]),t._v(" "),i("div",{staticClass:"price-section"},[i("p",{staticClass:"price-tag"},[t._v("Market Cap")]),t._v(" "),i("p",{staticClass:"price-amount"},[t._v(t._s(t.selectedFiatCurrency)+" "+t._s(t.selectedCryptoCurrency.selectedMarketCap)+" ")])])])],1)},staticRenderFns:[]}},816:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"columns",staticStyle:{margin:"0px 10px"}},t._l(t.firstFiveCryptoCurrencies,function(e){return i("div",{staticClass:"column"},[i("router-link",{attrs:{to:"/selected"},nativeOn:{click:function(i){t.selectCryptoCurrency(e)}}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:"/static/"+e.id+"_logo.png"}})])]),t._v(" "),i("div",{staticClass:"card-content"},[i("p",{staticClass:"title is-5"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"title price-title is-5"},[t._v("$"+t._s(t.getPriceUSD(e))+" \n              "),i("span",{class:{"positive-percent-change":e.positivePercentChange,"negative-percent-change":!e.positivePercentChange}},[t._v(" "+t._s(t.getPercentChange(e))+"% \n                "),i("icon",{staticClass:"arrow-up",attrs:{name:"arrow-up",height:"9",width:"9"}}),t._v(" "),i("icon",{staticClass:"arrow-down",attrs:{name:"arrow-down",height:"9",width:"9"}})],1)])])])])],1)})),t._v(" "),i("div",{staticClass:"columns",staticStyle:{margin:"0px 10px"}},t._l(t.secondFiveCryptoCurrencies,function(e){return i("div",{staticClass:"column"},[i("router-link",{attrs:{to:"/selected"},nativeOn:{click:function(i){t.selectCryptoCurrency(e)}}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:"/static/"+e.id+"_logo.png"}})])]),t._v(" "),i("div",{staticClass:"card-content"},[i("p",{staticClass:"title is-5"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"title price-title is-5"},[t._v("$"+t._s(t.getPriceUSD(e))+"  \n              "),i("span",{class:{"positive-percent-change":e.positivePercentChange,"negative-percent-change":!e.positivePercentChange}},[t._v(" "+t._s(t.getPercentChange(e))+"% \n                "),i("icon",{staticClass:"arrow-up",attrs:{name:"arrow-up",height:"9",width:"9"}}),t._v(" "),i("icon",{staticClass:"arrow-down",attrs:{name:"arrow-down",height:"9",width:"9"}})],1)])])])])],1)}))])},staticRenderFns:[]}},820:function(t,e){t.exports={bitcoin:{description:"The first decentraziled peer-to-peer payment network in which encryption techniques are used to regulate the generation of units of currency and verify the transfer of funds, all operating independently of a central bank.",website:"https://bitcoin.org/en/",paper:"https://bitcoin.org/bitcoin.pdf",github:"https://github.com/bitcoin"},ethereum:{description:"An open-source, public, blockchain-based computing platform that enables developers to build and deploy decentraziled applications. Ether (ETH), the crypto token that fuels the Ethereum network acts as a tradeable cryptocurrency and is used to pay for transaction fees and services on the network.",website:"https://www.ethereum.org/",paper:"https://github.com/ethereum/wiki/wiki/White-Paper",github:"https://github.com/ethereum"},ripple:{description:"Both a digital currency (XRP) and a distributed real-time payment protocol within which that currency is transferred. Ripple's distributed technology aims to enable banks to send real-time international payments across networks; to meet growing demands for faster, low-cost, on-demand global payment services.",website:"https://ripple.com/",paper:"https://ripple.com/files/ripple_consensus_whitepaper.pdf",github:"https://github.com/ripple"},litecoin:{description:"An open-source peer-to-peer cryptocurrency that uses the scrypt proof of work algorithm as opposed to Bitcoin's hashing algorithm. Litecoin was originally created to improve upon Bitcoin by speeding up transaction confirmations.",website:"https://litecoin.org/",paper:"",github:"https://github.com/litecoin-project"},"ethereum-classic":{description:"An open-source, blockchain-based computing platform that came into existence as a result of the DAO hard-fork. Identical to Ethereum up to a certain block (block 1920000), Ethereum Classic consolidated members of the Ethereum community who rejected the fork.",website:"https://ethereumclassic.github.io/",paper:"https://coss.io/documents/white-papers/ethereum-classic.pdf",github:"https://github.com/ethereumclassic"},dash:{description:"An open-source peer-to-peer cryptocurrency that offers all the features of Bitcoin as well as other capabilities which include private transactions, instant transactions and decentralized governance.",website:"https://www.dash.org/",paper:"https://www.dash.org/wp-content/uploads/2015/04/Dash-WhitepaperV1.pdf",github:"https://github.com/dashpay"},nem:{description:"A peer-to-peer cryptocurrency (XEM) and blockchain platform that has introduced new features in blockchain technology through its proof-of-importance (POI) algorithm, encrypted messaging system, multisignature accounts and Eigentrust++ reputation system.",website:"https://www.nem.io/",paper:"https://www.nem.io/NEM_techRef.pdf",github:"https://github.com/NemProject"},iota:{description:"A new transactional settlement and data integrity layer for the Internet of Things. IOTA is based on a new distributed ledger architecture which aims to overcome inefficiencies of current Blockchain designs to introduce a new way of reaching peer-to-peer consensus.",website:"https://iota.org/",paper:"https://iota.org/IOTA_Whitepaper.pdf",github:"https://github.com/iotaledger"},monero:{description:"An open-source cryptocurrency that is heavily focused on privacy, decentralisation and scalability. Monero is based on the CryptoNote protocol and has significant algorithmic differences to Bitcoin.",website:"https://getmonero.org/",paper:"",github:"https://github.com/iotaledger"},eos:{description:"Software that introduces a new blockhain architecture designed to enable vertical and horizontal scaling of decentralized applications with the aim of quick and easy deployment, scalability to millions of transactions per second and elimination of user fees.",website:"https://eos.io/",paper:"https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md",github:"https://github.com/EOSIO"},stratis:{description:"A Blockchain-as-a-service (BaaS) Platform that allows corporations in the financial sector to create their custom blockchain applications with the features they require. Stratis currency (STRAT), the native currency within the platform, will be needed to create and fuel these blockchains.",website:"https://stratisplatform.com/",paper:"https://stratisplatform.com/files/Stratis_Whitepaper.pdf",github:"https://github.com/stratisproject"},bitshares:{description:"BitShares offers a stack of financial services which include enabling an open, scalable decentralized exchange as well as banking on a blockchain. Built to be fast, efficient and scalable to handle tens of thousands of transactions per second that happen on a decentralized exchange.",website:"https://bitshares.org/",paper:"http://docs.bitshares.org/bitshares/papers/index.html",github:"https://github.com/bitshares"},bitconnect:{description:"A community driven open-source cryptocurrency that allows BitConnect holders to receive interest due to helping maintain the security of the network.",website:"https://bitconnectcoin.co/",paper:"",github:"https://github.com/bitconnectcoin"},tether:{description:"The Tether platform is built on top of open blockchain technologies to allow users to convert fiat cash to digital currency. This is done by tethering the value of the cryptocurrency to the price of national currencies - US Dollar, the Euro and the Yen.",website:"https://tether.to/",paper:"https://bravenewcoin.com/assets/Whitepapers/Tether-White-Paper.pdf",github:""},zcash:{description:"The first permissionless cryptocurrency that aims to fully protect the privacy of transactions by hiding the sender, recipient and value on the blockchain.",website:"https://z.cash/",paper:"http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf",github:"https://github.com/zcash"},antshares:{description:"China's first original and open-source public blockchain, Antshares technology aims to support multiple types of digital assets as well as allow users to establish smart contracts to enhance and enrich the functions of said digital assets.",website:"https://www.antshares.org/",paper:"https://github.com/neo-project/neo/wiki/Whitepaper-1.1",github:"https://github.com/neo-project"},"bytecoin-bcn":{description:"Launched in 2012, Bytecoin is an untraceable cryptocurrency that launched in 2012 that offers fee-free instant international payments, secure funds and privacy.",website:"https://bytecoin.org/",paper:"https://cryptonote.org/whitepaper.pdf",github:"https://github.com/amjuarez/bytecoin"},veritaseum:{description:"A smart contracts-based, peer-to-peer wallet interface (in beta) that currently interacts with Bitcoin blockchain and is to be ported to Ethereum. Veritaseum aims to allow non-technical individuals & entities to quickly create, enter and manage smart contracts directly with others without an authoritative 3rd party.",website:"http://veritas.veritaseum.com/",paper:"",github:"https://github.com/veritaseum"},steem:{description:"An incentivized, blockchain-based social media platform where users can earn the digital currency (STEEM) by upvoting, posting and sharing content.",website:"https://steem.io/",paper:"https://steem.io/SteemWhitePaper.pdf",github:"https://github.com/steemit"},waves:{description:"A decentralized blockchain platform focusing on custom blockchain tokens operations where token exchange facilitates fundraising, crowdfunding, and trading of financial instruments on the blockchain.",website:"https://wavesplatform.com/",paper:"https://blog.wavesplatform.com/waves-whitepaper-164dd6ca6a23",github:"https://github.com/wavesplatform/"},qtum:{description:"The first digital currency that aims to allow Decentralized Applications and Smart Contracts to execute as part of an Unspent Transaction Output (UTXO), using a Proof-of-Stake model.",website:"http://www.qtum.org/",paper:"https://qtum.org/en/white-papers",github:"https://github.com/qtumproject"},iconomi:{description:"Using Ethereum smart contracts, ICONOMI is a digital assets management platform that aims to provide a simple way for beginners and blockchain experts, to invest and manage their digital assets.",website:"https://www.iconomi.net/",paper:"https://coss.io/documents/white-papers/iconomi.pdf",github:""},"gnosis-gno":{description:"Based on Ethereum, Gnosis is a decentralized prediction market platform that aims to disrupt some of the largest existing industries (insurance, financial services) in the near future.",website:"https://gnosis.pm/",paper:"https://gnosis.pm/resources/default/pdf/gnosis_whitepaper.pdf",github:"https://github.com/gnosis"},status:{description:"A modular utility token that fuels the Status network - an open source messaging platform and mobile interface to interact with decentralized applications that run on the Ethereum Network.",website:"https://status.im/",paper:"https://status.im/whitepaper.pdf",github:"https://github.com/status-im"},siacoin:{description:"Sia is a decentralized cloud storage platform that intends to compete with existing storage solutions, at both the P2P and enterprise level. Peers on Sia rent storage from each other while Sia itself stores only the storage contracts formed between parties.",website:"http://sia.tech/",paper:"https://www.sia.tech/whitepaper.pdf",github:"https://github.com/NebulousLabs/Sia"},"golem-network-tokens":{description:"Golem project aims to create a global, open sourced, decentralized supercomputer in which producers may sell spare CPU time of their personal computers and consumers may acquire resources for computation-intensive tasks.",website:"https://golem.network/",paper:"http://golemproject.net/doc/DraftGolemProjectWhitepaper.pdf",github:"https://github.com/golemfactory"},stellar:{description:"A platform that aims to facilitate moving currency quickly, reliably and almost no cost by connecting banks, payments systems and people through the Stellar network.",website:"https://www.stellar.org/",paper:"https://www.stellar.org/papers/stellar-consensus-protocol.pdf",github:"https://github.com/stellar"},undefined:{description:"Hmmm. Though the price, circulating supply and market cap values are accurate - there doesn't appear to be any detailed data captured on this cryptocurrency. Should be updated in due time!",website:"",paper:"",github:""}}},821:function(t,e){},9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in s||(a.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(a.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,i=0;this.$children.forEach(function(t){e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),s[e]=i}},icons:s}}},[8]);
//# sourceMappingURL=app.8023c21d64c07c60b447.js.map