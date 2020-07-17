# daytime_market_data(行情表)

| 字段名                 |     类型     | 默认值 |                  备注 |
| ---------------------- | :----------: | -----: | --------------------: |
| id                     |   integer    |        |                  主键 |
| wind_code              | varchar(100) |        |             wind 代码 |
| price_date             |  timestamp   |        |              行情时间 |
| open_price             |    float8    |        |                开盘价 |
| close_price            |    float8    |        |                收盘价 |
| highest_price          |    float8    |        |                最高价 |
| minimum_price          |    float8    |        |                最低价 |
| settlement_price       |    float8    |        |                结算价 |
| weighted_average_price |    float8    |        |            加权平均价 |
| tky_1500_bbg_bfix      |    float8    |        |   东京下午 3 点。。。 |
| tyk_1630_tkfe2_mid     |    float8    |        | 东京下午 4 点半。。。 |
| tky_1500_tkfe2_mid     |    float8    |        |   东京下午 3 点。。。 |
| goldlnam               |    float8    |        |            伦敦金上午 |
| goldlnpm               |    float8    |        |            伦敦金下午 |
| income_rate            |    float8    |        |    中债估值估价收益率 |

# instrument_info(标的表)

| 字段名                     |     类型     | 默认值 |                 备注 |
| -------------------------- | :----------: | -----: | -------------------: |
| id                         |   integer    |        |                 主键 |
| contract_code              | varchar(100) |        |             合约代码 |
| contract_name              | varchar(100) |        |             合约名称 |
| trade_type                 | varchar(100) |        |             交易类型 |
| instrument_type            | varchar(100) |        |     挂钩类型（弃用） |
| trade_place_code           | varchar(100) |        |         交易场所代码 |
| trade_place_name           | varchar(100) |        |         交易场所名称 |
| trade_calendar             | varchar(100) |        |             交易日历 |
| underlying_instrument_id   | varchar(100) |        |   标的代码（无后缀） |
| underlying_instrument_name | varchar(100) |        |         挂钩标的名称 |
| particular_contract_code   | varchar(100) |        |     合约代码（境内） |
| wind_code                  | varchar(100) |        |  wind 代码（带后缀） |
| price_types                |    text[]    |        |             价格类型 |
| price_types2               |    text[]    |        | 价格类型（临时变量） |
