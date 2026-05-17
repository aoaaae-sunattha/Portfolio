# dev-exchanges [![tp-exchanges](https://img.shields.io/badge/version-0.48.0-blue.svg)](https://github.com/dev/test-libs.git)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![yeoman](https://img.shields.io/badge/yeoman-🎩-66CC00.svg)](https://github.com/yeoman) [![lint-staged](https://img.shields.io/badge/lint--staged-🚫💩-F08080.svg)](https://github.com/okonet/lint-staged) [![husky](https://img.shields.io/badge/husky-🐶-FFFAFA.svg)](https://github.com/okonet/lint-staged) [![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji) [![commitlint](https://img.shields.io/badge/commitlint-📓-orange.svg)](https://github.com/marionebl/commitlint) [![eslint](https://img.shields.io/badge/eslint-🔍-orange.svg)](https://github.com/eslint/eslint) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

*****

## Gateway to the exchanges services.

# Public API

## ✅ getServiceName

Get the service name.

### Params

❌ No

### Returns

#### Type `String` :handshake

| Name | Type | Description |
|--|--|--|
| - |String        | Lowercase of server name

E.g.

```js
binance
```

---------------

## ✅ getExchangeTrades

Get latest exchange's trades.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency|String | Yes      | Quote currency e.g. "ETH"

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|base_currency |String        | Base currency uppercase
|quote_currency|String        | Quote currency uppercase
|base_volume   |Number        | Base amount
|quote_volume  |Number        | Quote amount
|side          |String        | **buy** or **sell**
|date          |DateISOString | Execution date |

E.g.

```js
{
  "base_currency": "ETH",
  "quote_currency": "BTC",
  "base_volume": 1.2,
  "quote_volume": 0.3456,
  "side": "sell",
  "date": "2019-02-18T11:02:00.000Z"
}
```

---------------

## ✅ getExchangeVolume

Return the last **24 hours** volume.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency|String | Yes      | Quote currency e.g. "ETH"

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|base_currency |String        | Base currency uppercase
|quote_currency|String        | Quote currency uppercase
|base_volume   |Number        | Base 24h volume
|quote_volume  |Number        | Quote 24h volume

E.g.

```js
{
  "base_currency": "ETH",
  "quote_currency": "BTC",
  "base_volume": 158061707.10964984,
  "quote_volume": 15901.15476832
}
```

---------------

## ✅ getLastRate

Return the last `rate` of the base currency in quote currency.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency|String | Yes      | Quote currency e.g. "ETH"

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
| - |Number        | Last rate

E.g.

```js
300.66
```

---------------

## ✅ getOrderBook

Get the public order book data.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency|String | Yes      | Quote currency e.g. "ETH"

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|bids      |Array of Object \<bid\> | List of bids side
| \<bid\>  ||
| price    |Number                  | Order price
| quantity |Number                  | Order amount
| \</bid\> ||
|asks      |Array of Object \<ask\> | List of asks side
| \<ask\>  ||
| price    |Number                  | Order price
| quantity |Number                  | Order amount
| \</ask\> ||

E.g.

```js
{
  "bids": [
    {
      "price": 0.07013,
      "quantity": 20
    },
    {
      "price": 0.07012,
      "quantity": 5
    },
    {
      "price": 0.07011,
      "quantity": 900
    },
    {
      "price": 0.0701,
      "quantity": 70.707
    },
    {
      "price": 0.07009,
      "quantity": 70.707
    },
    {
      "price": 0.07008,
      "quantity": 70.707
    }
  ],
  "asks": [
    {
      "price": 0.17999,
      "quantity": 20
    },
    {
      "price": 0.18,
      "quantity": 0.95
    },
    {
      "price": 0.18001,
      "quantity": 20
    },
    {
      "price": 0.18002,
      "quantity": 9
    },
    {
      "price": 0.18003,
      "quantity": 14
    },
    {
      "price": 0.18004,
      "quantity": 8
    }
  ]
}
```

ℹ️ **Asks ordered price ASC** ℹ️
ℹ️ **Bids ordered price DESC** ℹ️

Meaning of ordered is first object of array will execute first.

---------------

## ✅ getTradingPairs

Return the available pairs of the exchange and filter them if needed.

### Params

❌ No

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
| - |Array of Object \<pair\> | List of pair base and quote
| \<pair\>  ||
| base_currency  |String                | Base currency
| quote_currency |String                | Quote currency
| base_issuer    |String                | Issuer For Ripple RCL
| quote_issuer   |String                | Issuer For Ripple RCL
| \</pair\> ||

E.g.

```js
[
  {
    "base_currency": "ETH",
    "quote_currency": "BTC"
  },
  {
    "base_currency": "LTC",
    "quote_currency": "BTC"
  }
]
```

Ripple RCL will return with issuer.

```json
[
  {
    "base_currency": "XRP"
    "base_issuer": undefined
    "quote_currency": "CNY"
    "quote_issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK"
  },
  { 
    "base_currency": "USD",
    "base_issuer": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y",
    "quote_currency": "XAG",
    "quote_issuer": "rpG9E7B3ocgaKqG7vmrsu3jmGwex8W4xAG"
  }
]
```

# Private API

## ✅ getAccountBalances

Return the balances of all currencies.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |wallet_type |String | No      | Type of balance **all** **main** **spot** **margin** **future**. Default is **spot** (trading account)

### Returns

#### Type `Promise` :handshake

| Name         | Type                | Description      |
|--------------|---------------------|------------------|
| -            |Array of \<balance\> | Balances         |
| \<balance\>  |                     |                  |
| balance      |Number               | Total balance    |
| available    |Number               | Available balance|
| currency     |String               | Currency         |
| \</balance\> |                     |                  |

E.g.

```js
[
  {
    "balance": 0,
    "available": 0,
    "currency": "ZEC"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "REP"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "XMR"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "XRP"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "LTC"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "ETC"
  },
  {
    "balance": 0,
    "available": 0,
    "currency": "ETH"
  },
  {
    "balance": 0.01037331,
    "available": 0,
    "currency": "BTC"
  }
]
```

ℹ️ `balance` is the overall balance of the account. (available + open orders) ℹ️
ℹ️ `available` is the available balance that we can use to buy or withdraw. ℹ️

---------------

## ✅ createOrder

Create an order.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency|String | Yes      | Quote currency e.g. "USDT"
|3 |side|String | Yes      | Side of the order **buy** or **sell**
|4 |quantity|Number | Yes      | Order amount
|5 |price|Number | Yes      | Order price
|6 |options|Object | No      | Options of order
| \<options\>  |                     |                  |
| | timeInForce      |String         |   No             | See supported values below. Default: **GTC**
| \</options\> |                     |                  |

#### Supported `timeInForce` values

| Value | MXC type | Description |
|--|--|--|
| `GTC` | `LIMIT` | **(default)** Good Till Cancelled — stays open until filled or manually cancelled |
| `IOC` | `IMMEDIATE_OR_CANCEL` | Immediate Or Cancel — fill what you can right now, cancel the rest immediately |
| `FOK` | `FILL_OR_KILL` | Fill Or Kill — must fill the entire order immediately or cancel all of it |
| `postOnly` | `LIMIT_MAKER` | Post Only — order only goes through if it would sit on the order book (never takes liquidity) |

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
| id |String        | Order id

E.g.

```js
{
  "id": "234efa1123"
}
```

---------------

## ✅ cancelOrder

Cancel an order.

### Params

|Parameter order| Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |order_id       |String | Yes      | Order id provide by exchange e.g. "123ex456"
|2 |base_currency  |String | Yes      | Base currency e.g. "ETH"
|2 |quote_currency |String | Yes      | Quote currency e.g. "ETH"

### Returns

#### Type `Promise` :handshake

❌ No return data, but should throw an error if it failed.

---------------

## ✅ getDepositAddress

Return the deposit address for a specific currency.
:warning: Some exchanges don't support this function. They will throw the error.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |currency |String | Yes | Currency
|2 |network  |String | No  | Blockchain network e.g. 'ETH', 'BSC', 'BNB', 'BTC', 'TRX', 'SOL', 'ALGO', 'OMNI', 'HECO' TODO: Need to update

### Returns

#### Type `Promise` :handshake

| Name   | Type   | Description |
|--------|--------|-------------|
| address|String  | Address     |
| tag    |String  | Tag or Memo |

```js
{
  "address": "r3gxPVQgQgFYho8fnnEWoyZncvtzbsLdB8",
  "tag": ""
}
```

---------------

## ✅ getDepositsAndWithdrawals

Return previous deposits and withdrawals.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |dateOption |Object \<option\> | No  | Options date range
|- |\<options\>      |
|- |fromDate         |DateISOString | No  | startTime
|- |toDate           |DateISOString| No   | endTime
|- |\</options\>     |

```js
{ 'fromDate': '2022-07-06T00:00:00.000Z', 'toDate': '2022-30-27T09:48:57.799Z' }
```

For Web API

```json
{ "fromDate": "2024-03-18T00:00:00.000Z", "toDate": "2024-06-01T00:00:00.799Z" }
```
### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|date          | DateISOString | Execution date |
|type          | String        | **deposit** or **withdrawal** |
|amount        | Number        | Execution amount  |
|currency      | String        | Currency |
|payment_id    | String        | Exchange payment id |
|transaction_id| String        | Network transaction id |
|exchange_name | String        | Exchange name |
|network       | String        | Network name |
|from_address  | String        | From address |
|from_tag      | String        | From tag |
|to_address    | String        | To address |
|to_tag        | String        | To tag |
|fee           | Number        | Fee amount |
|fee_currency  | String        | Fee currency |

E.g.

```js
[
  {
    "date": "2017-07-12T13:19:09.590Z",
    "type": "deposit",
    "amount": 3.4,
    "currency": "BTC",
    "payment_id": "19865553",
    "exchange_name": "bittrex",
    "network": "bitcoin"
    "from_address": "0x8fcac5234b8e73e5d567cb3f139ecd93fd0b60b7",
    "from_tag": "104943228",
    "to_address": "0xfcf222Bd165BE11a61e480D8E30192741f7045d1",
    "to_tag": "3948282",
    "transaction_id": "89DCE03BCE68EF2D9F4BBB47F546431FDE5F21F2B627060F27D0ECBE9A1C4D91",
    "fee": 0.0001,
    "fee_currency": "BTC"
  },
  {
    "date": "2022-03-04T06:56:37.820Z",
    "type": "withdrawal",
    "amount": 99,
    "currency": "XRP",
    "payment_id": "80F4EE74F297FF406319214A39CB6FFABAA830556CFA3ABB1D0937D87FCC0014",
    "network": "ripple"
    "exchange_name": "bithumb_global",
    "from_address": "rEtC4xAYJvtwDLJ9jZ4kHRHKbNoLLxSnfb",
    "to_address": "rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh",
    "to_tag": "101860834",
    "transaction_id": "89DCE03BCE68EF2D9F4BBB47F546431FDE5F21F2B627060F27D0ECBE9A1C4D91",
    "fee": 1,
    "fee_currency": "XRP"
  }
]
```

ℹ️ note network format follow [tp-helper](https://github.com/dev/test-libs/tree/master/packages/tp-helpers) ℹ️

---------------

## ✅ getOpenOrders

Return the user's currently open orders. All open orders that are not fulfilled.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency  |String | Yes | Base currency
|2 |quote_currency |String | Yes | Quote currency

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|id              | String        | Order Id
|price           | Number        | Order price
|amount          | Number        | Order amount
|executed        | Number        | Order executed
|type            | String        | **buy** or **sell**
|base_currency   | String        | Base currency
|quote_currency  | String        | Quote currency
|order_create_at | DateISOString | Created date
|order_update_at | DateISOString | Order updated date

E.g.

```js
[
  {
    "price": 145,
    "amount": 13,
    "executed": 0,
    "type": "sell",
    "id": "ew342232",
    "base_currency": "ETH",
    "quote_currency": "BTC"
    "order_create_at": 2022-11-02T07:03:58.762Z,
    "order_update_at": 2022-11-02T07:03:58.762Z
  }
]
```

`amount` is the initial amount of the order.
`executed` is the amount of the order that has already been fulfilled.

---------------

## ✅ : getTrades

Return only **fulfilled** or **partially fulfilled** trades.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency   |String | Yes | Base currency
|2 |quote_currency  |String | Yes | Quote currency
|3 |last_trade      |Object \<last_trade\> | No | Last trade
|- |\<last_trade\> |
|- |date                   | DateISOString | No | start date time (optional)
|- |end                    | DateISOString | No | end date time (optional)
|- |\</last_trade\>|

```js
{ 'date': '2022-07-06T00:00:00.000Z', 'end': '2022-30-27T09:48:57.799Z' }
```

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|date                    | DateISOString | Execution date
|exchange_name           | String        | Exchange name
|base_currency           | String        | Base currency
|quote_currency          | String        | Quote currency
|base_amount             | Number        | Base amount
|quote_amount            | Number        | Quote amount
|side                    | String        | **buy** or **sell**
|fee                     | Number        | Fee
|currency_fee_taken_from | String        | Fee currency
|exchange_trade_id       | String        | Exchange trade id

E.g.

```js
[
  {
    "date": "2017-07-12T13:19:09.590Z",
    "exchange_name": "poloniex",
    "base_currency": "XRP",
    "quote_currency": "BTC",
    "base_amount": 306.25653727,
    "quote_amount": 0.022644608365743803,
    "side": "sell",
    "fee": 0.000027173530038892563,
    "currency_fee_taken_from": "BTC",
    "exchange_trade_id": "11186260"
  }
]
```

Note: Returns in descending order by date.

---------------

## ✅ withdraw

Create a withdraw on the exchange.
:warning: Some exchanges don't support this function. They will throw the error.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |currency         |String | Yes | Currency
|2 |quantity         |String | Yes | Withdraw quantity
|3 |address          |String | Yes | Address
|4 |tag              |String | No  | Tag or Memo
|5 |withdraw_options |Object \<option\> | No  | Options withdraw
|- |\<options\>      |
|- |chain            |String | No  | Network to withdraw
|- |IsInner          |Boolean| No  | It is a inner withdraw
|- |remark           |String | No  | Remark
|- |\</options\>     |

E.g.

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|id                    | String | transaction or exchange payment id

## ✅ getMainSubTransferHistory

Return Transfer History Between Main and Sub account

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 | startTime | DateISOString | no | Start Date time. Default is 1 day|
|2 | endTime | DateISOString | no | End Date time  |

```js
{ 'starTime': '2022-07-06T00:00:00.000Z', 'endTime': '2022-30-27T09:48:57.799Z' }
```

### Return

### Type `Promise` :handshake

| Parameter order | Name | Type |  Description |
|--|--|--|--|
|1 |id                |string       | Transaction ID    |
|2 |date              |DateISOString| Create time       |
|3 |from_id           |string       | from Email or ID or UID  |
|4 |to_id             |string       | to Email or ID or UID   |
|5 |currency          |string       | Currency          |
|6 |amount            |number       | amount                                  |
|7 |from_account_type |string       | From Account type: Spot, Margin, Future |
|8 |to_account_type   |string       | To Account Type: Spot, Margin, Future   |

For Huobi, Return internal account id

| Parameter order | Name | Type |  Description |
|--|--|--|--|
|9 |from_account_id |string        | from internal account id |
|10 |to_account_id   |string       | to internal account id |

```js
{
    id: '1231231235',
    date: 2022-12-15T10:24:00.000Z,
    from_id: 'dev@test.com',
    to_id: 'dev@test.com',
    currency: 'TEST',
    amount: '777',
    from_account_type: 'SPOT',
    to_account_type: 'SPOT'
  },
```

## ✅ transferSubAccount

transfer Between Main and Sub Account

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |currency         |String | Yes | Currency
|2 |quantity         |String | Yes | Withdraw quantity
|3 |mainAccountId          |String | Yes | mainAccountId for some exchange if have not ''
|4 |subAccountId              |String | yes  | UID
|5 |transferTo  |String| yes | 'main' or 'sub' main if transfer from sub to main ''

```js
{ 'USDT', '1', '', '420847340', 'sub' }
```

### Return

### Type `Promise` :handshake


---------------

## ✅ : getKlines

Return the klines data.

### Params

| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency   |String | Yes | Base currency
|2 |quote_currency  |String | Yes | Quote currency
|3 |interval      |String | Yes | Interval of timeframe ('1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w')
|4 |limit      |Number | No | Limit of return data (default 100)

```js
service.getKlines(baseCurrency, quoteCurrency, '1m', 1)
```

### Returns

#### Type `Promise` :handshake

| Name | Type | Description |
|--|--|--|
|openPrice         | String        | openPrice
|closePrice        | String        | closePrice
|highPrice         | String        | highPrice
|lowPrice          | String        | lowPrice
|volume            | String        | volume
|klineOpenTime     | UnixTimestamp Second        | klineOpenTime

E.g.

```js
[
  {
    openPrice: '64526.00000000',
    closePrice: '64502.02000000',
    highPrice: '64750.01000000',
    lowPrice: '64500.00000000',
    volume: '880.38136000',
    klineOpenTime: 1727676000
  }
]
```

Note: Returns in descending order by klineOpenTime.

---------------


# Websocket Public API

## subscribeExchangeTrades

Get latest exchange's trades.

```js
await service.websocket.subscribeExchangeTrades('BTC', 'USD', async response => {
  console.log(response)
})
```

### Params

#### baseCurrency

```js
'BTC'
```

#### quoteCurrency

```js
'USD'
```

#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
{
  "base_currency": "BTC",
  "quote_currency": "USD",
  "base_volume": 0.00185313,
  "quote_volume": 14.2099490904,
  "price": 7668.08,
  "side": "buy", // "buy" | "sell"
  "date": "2019-05-23T04:15:43.906Z",
  "id": "88790405"
}
```

## subscribeExchangeOrders

Get latest exchange's orders.

```js
await service.websocket.subscribeExchangeOrders('BTC', 'USD', async response => {
  console.log(response)
})
```

### Params

#### baseCurrency

```js
'BTC'
```

#### quoteCurrency

```js
'USD'
```

#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
{
  "base_currency": "BTC",
  "quote_currency": "USD",
  "base_volume": 0.84,
  "quote_volume": 6415.92,
  "price": 7638,
  "side": "sell", // "buy" | "sell"
  "type": "deleted", // "created" | "updated" | "deleted"
  "date": "2019-05-23T08:45:54.003Z",
  "id": "3352890951"
}
```

## subscribeOrderBook

Get latest exchange's order book.

```js
await service.websocket.subscribeOrderBook('BTC', 'USD', async response => {
  console.log(response)
})
```

### Params

#### baseCurrency

```js
'BTC'
```

#### quoteCurrency

```js
'USD'
```

#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
{
  "bids": [
    {
      "price": 7578.96,
      "quantity": 1.1
    }
  ],
  "asks": [
    {
      "price": 7580.12,
      "quantity": 0.24
    }
  ]
}
```

# Websocket Private API

## subscribeAccountBalances

Subscribe to account balance changes.

```js
await service.websocket.subscribeAccountBalances(async response => {
  console.log(response)
})
```

### Params

#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
{
  currency: 'USDT',
  balance: '17.412064462386187357',
  available: '13.050339250038187357'
}
```

## subscribeAccountOpenOrders

Subscribe to account open order changes.

```js
await service.websocket.subscribeAccountOpenOrders(async response => {console.log(response)})
```

```js
await service.websocket.subscribeAccountOpenOrders('XRP', 'USDT')
```



### Params
| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |base_currency  |String | no | Base currency
|2 |quote_currency |String | no | Quote currency


#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
[
  {
    amount: 75.2857,
    executed: 0,
    id: '644b6f6809b21c0001fd8c0e',
    price: 0.05782,
    type: 'open',
    base_currency: 'NAVI',
    quote_currency: 'USDT',
    order_created_at: 2023-04-28T07:02:00.854Z,
    order_updated_at: 2023-04-28T07:02:00.869Z,
    status: 'open'
  }
]
```

## subscribeOrderExecution

subscription to order execution events 

```js
await service.websocket.subscribeOrderExecution(async response => {console.log(response)})
```

```js
await service.websocket.subscribeAccountOpenOrders('dev_test_user')
```

### Params
| Parameter order | Name | Type | Mandatory | Description |
|--|--|--|--|--|
|1 |accountId  |String | no | ref to accounts.account_id

#### callback

```js
async response => {/* do things here */}
```

### Response Type

```js
[
    {
      account_id: undefined,
      execution_type: 'open',
      client_oid: null,
      order_time: 2023-07-19T09:49:38.361Z,
      order_type: 'limit',
      quantity: 2,
      price: 0.5,
      status: 'put',
      filled_quantity: 0,
      date: 2023-07-19T09:49:38.361Z,
      exchange_name: 'gate_v4',
      base_currency: 'XRP',
      quote_currency: 'USDT',
      base_amount: 2,
      quote_amount: 1,
      side: 'buy',
      fee: 0,
      currency_fee_taken_from: 'XRP',
      exchange_trade_id: null,
      order_id: '369360378323'
    }
  ]
```


> A return status value must be standardize to 'open' or 'closed'. Other status value will not processed by the fetcher.

# Beta functions

## :construction: rippleWithdrawal (Beta)

Withdraw with ripple IOU
:warning: Only Bitstamp support this function
<https://www.bitstamp.net/api/#ripple-deposit-address>

### Params

#### currency

```js
'USD'
```

#### quantity

```js
123.04
```

#### address

```js
'ripple address'
```

### Returns

#### Type `Promise` :handshake

```js
{
  "id": "254135874"
}
```

## :construction: bankWithdrawal (Optional)

Withdraw to bank account
:warning: Only Bitstamp support this function
<https://www.bitstamp.net/api/#bank-withdrawal-open>

### Params

```js
{ 
  amount: 111111,
  account_currency: 'USD',
  name: 'Bank account name',
  iban: '11111111111',
  bic: '11111111',
  address: 'address',
  postal_code: '00000',
  city: 'city',
  country: 'US',
  type: 'international',
  bank_name: 'Bank name',
  bank_address: 'Bank addresss',
  bank_postal_code: '00000',
  bank_city: 'bank_city',
  bank_country: 'US',
  currency: 'USD',
  comment: ''
}
```

### Returns

#### Type `Promise` :handshake

```js
{
  "id": "254135874"
}
```

## :construction: bankWithdrawalStatus (Optional)

get bank withdraw status
:warning: Only Bitstamp support this function
<https://www.bitstamp.net/api/#bank-withdrawal-status>

### Params

#### id

```js
254135874
```

### Returns

#### Type `Promise` :handshake

```js
{
  "status": "processing"
}
```

## :construction: cancelBankWithdraw (Optional)

cancel bank withdraw status
:warning: Only Bitstamp support this function
<https://www.bitstamp.net/api/#bank-withdrawal-cancel>

### Params

#### id

```js
254135874
```

### Returns

#### Type `Promise` :handshake

```js
{
  "id": "processing",
  "amount": 111111,
  "currency": 'USD,
  "account_currency": 111111,
  "type": "",
}
```

## :construction: getWithdrawalRequests (Optional)

cancel bank withdraw status
:warning: Only Bitstamp support this function
<https://www.bitstamp.net/api/#withdrawal-requests>

### Params

N/A

### Returns

#### Type `Promise` :handshake

```js
{
  "id": "1212121",
  "datetime": ,
  "type": "",
  "currency": "USD",
  "amount": "",
  "status": "",
  "address": "",
  "transaction_id": "",
}
```

## :construction: transferBetweenWallet (Optional)

Transfer token from/to main/spot(trading)/margin/future wallet
:warning: Some exchanges don't support this function. They will throw the error.

### Params

#### currency

```js
'BTC'
```

#### quantity

```js
123.04
```

#### from

```js
'main' or 'spot' or 'margin' or 'future'
```

#### to

```js
'main' or 'spot' or 'margin' or 'future'
```

### Returns

#### Type `Promise` :handshake

Boolean true or false, and should throw an error if it failed.

## :construction: subAccountInfo (Optional)

Display sub account info to find sub account user ID, which can be used for transferSubAccount parameter

```js
service.subAccountInfo()
```

### Returns

```js
[
  {
    "userId": "622bbbbf00000b00012k0000",
    "uid": 131000000,
    "subName": "ybrsub007",
    "type": 0,
    "remarks": "MM Buffer"
  },
  ...
]
```

## :construction: transferSubAccount (Optional)

Transfer token from main account to sub account
:warning: Some exchanges don't support this function. They will throw the error.

```js
service.transferSubAccount('XRP',1,'', '31234567', 'sub')  // Send 1 XRP from main to sub
service.transferSubAccount('XRP',1,'', '31234567', 'main') // Send 1 XRP from sub to main
```

### Params

#### currency

```js
'BTC'
```

#### quantity

```js
123.04
```

#### mainAccountId

```js
Binance:
`email of the main account`
To find sub account email, run
service.subAccountInfo()

Kucoin:
Empty string('').

Bitstamp:
Empty string('')
```

#### subAccountId

```js
Binance:
`email of the sub account`

Kucoin:
userId of the sub account.
To find userId, run
service.subAccountInfo()
find userId field of the sub account. (eg: '622312e8661fd2100152f3f2')

Bitstamp:
Unique Identifier of the sub account.
To find this Unique Identifier you have to
go to bitstamp.net wallet page,
open brower inspection Network tab,
SubAccount Transfer,
find payload of the API request.
It looks like 8 digit number. (eg: '31234567')
```

#### transferTo

'sub' to transfer to sub account.
'main' to transfer to main account.
if this parameter is undefined, default value is 'sub'.

#### mainAccountType

Default
'MAIN', 'SPOT', 'FUTURE', 'MARGIN'

Binance:
'SPOT', 'USDT_FUTURE', 'COIN_FUTURE', 'MARGIN', 'ISOLATED_MARGIN'
Optional. Default value is 'SPOT'

Kucoin:
'MAIN', 'TRADE', 'MARGIN', 'CONTRACT'
Optional. Default value is 'MAIN'
Deposit goes to MAIN account

#### subAccountType

Default
'MAIN', 'SPOT', 'FUTURE', 'MARGIN'

Binance:
'SPOT', 'USDT_FUTURE', 'COIN_FUTURE', 'MARGIN', 'ISOLATED_MARGIN'
Optional. Default value is 'SPOT'
Deposit goes to SPOT account

Kucoin:
'MAIN', 'TRADE', 'MARGIN', 'CONTRACT'
Optional. Default value is 'MAIN'
Deposit goes to MAIN account

### Returns

N/A

## :construction: subAccountTransferHistory (Optional)

### Params

#### lastTransfer (optional)

```js
{'date': '2022-07-06T00:00:00.000Z'}
```

### Returns

#### Type `Promise` :handshake

```js
[
  {
    "id": "62c525efed04d600015134e0",
    "currency": "USDT",
    "amount": 3000,
    "balance": 0,
    "accountType": "MAIN",
    "direction": "out",
    "date": "2022-07-06T06:04:31.087Z"
  }
]
```

Note: Returns in descending order by date.

-----

*****

## Dev Note

### Errors

When an error occurred and the function should return a `Promise`, it should reject the `Promise` with an `new Error`.

```js
return Promise.reject(new Error("Binance API :: Cancel Order :: Order doesn't exist"))
```

If the function doesn't return a `Promise`, it should throw an error

```js
throw new Error('Reason')
```

*****

###### _Copyright dev Unlimited 2020 © All rights reserved_
