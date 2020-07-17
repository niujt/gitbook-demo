# branch(营业部表-大数据推送)

| 字段名                  |     类型     | 默认值 | 备注 |
| ----------------------- | :----------: | -----: | ---: |
| sub_company_code        | varchar(100) |        |
| sub_company_name        | varchar(250) |        |
| branch_id               | varchar(100) |        |
| branch_code             | varchar(100) |        |
| branch_name             | varchar(250) |        |
| sub_branch_code         | varchar(100) |        |
| sub_branch_name         | varchar(250) |        |
| dept_code               | varchar(100) |        |
| dept_name               | varchar(250) |        |
| city_id                 | varchar(100) |        |
| city_name               | varchar(250) |        |
| sub_branch_full_name    | varchar(250) |        |
| sub_compamy_leader      | varchar(100) |        |
| sub_branch_leader       | varchar(100) |        |
| manager_sub_branch_code | varchar(100) |        |
| manager_sub_branch_name | varchar(250) |        |

---

# # dept_product(机构-产品 关联表)

| 字段名        | 类型 | 默认值 | 备注 |
| ------------- | :--: | -----: | ---: |
| department_id |      |        |
| product_code  |      |        |
| issued_at     |      |        |

---

# # doc_no()

| 字段名       | 类型 | 默认值 |     备注 |
| ------------ | :--: | -----: | -------: |
| id           |      |        |     主键 |
| doc_id       |      |        |  文档 id |
| doc_no       |      |        | 协议编码 |
| sending_date |      |        | 发送日期 |
| issue_date   |      |        |   认购日 |

---

# # document_history(文档历史表)

| 字段名          | 类型 | 默认值 |     备注 |
| --------------- | :--: | -----: | -------: |
| id              |      |        |
| product_code    |      |        | 产品代码 |
| document_type   |      |        | 文档类型 |
| document_data   |      |        | 文档内容 |
| document_name   |      |        | 文档名称 |
| document_flag   |      |        | 是否更新 |
| create_date     |      |        | 创建日期 |
| creator         |      |        |   创建者 |
| document_remark |      |        | 上传备注 |

---

# # documentsold(<font color='red'>废弃</font>)

# # options(产品-期权要素表)

| 字段名                             |   类型    | 默认值 |                备注 |
| ---------------------------------- | :-------: | -----: | ------------------: |
| id                                 |   int4    |        |                主键 |
| product_code                       |  varchar  |        |            产品代码 |
| underlying_instrument_id           |  varchar  |        |            标的代码 |
| underlying_instrument              |  varchar  |        |            挂钩标的 |
| option_style                       |  varchar  |        |            期权结构 |
| participation_rate                 |  float8   |        |              参与率 |
| option_premium_rate                |  float8   |        |            期权费率 |
| buy_sell                           |  varchar  |        |            买卖方向 |
| counterparty                       |  varchar  |        |            交易对手 |
| put_call                           |  varchar  |        |          标的物方向 |
| initial_observation_date           | timestamp |        |          期初观察日 |
| initial_price_observation_rule     |  varchar  |        |        期初价格描述 |
| final_observation_date             | timestamp |        |          期末观察日 |
| end_price_observation_rule         |  varchar  |        |        期末价格描述 |
| observation_duration               |  varchar  |        |        价格观察区间 |
| participation_rate_1               |  float8   |        |            参与率 1 |
| strike_price_calculation_method_1  |  varchar  |        | 执行价格 1 匹配方式 |
| strike_price_calculation_factor_1  |  float8   |        |          执行价格 1 |
| barrier_price_calculation_method_1 |  varchar  |        | 障碍价格 1 匹配方式 |
| barrier_price_calculation_factor_1 |  float8   |        |          障碍价格 1 |
| knock_out_rebate_1                 |  float8   |        |          敲出补偿 1 |
| participation_rate_2               |  float8   |        |            参与率 2 |
| strike_price_calculation_method_2  |  varchar  |        | 执行价格 2 匹配方式 |
| strike_price_calculation_factor_2  |  float8   |        |          执行价格 2 |
| barrier_price_calculation_method_2 |  varchar  |        | 障碍价格 2 匹配方式 |
| barrier_price_calculation_factor_2 |  float8   |        |          障碍价格 2 |
| knock_out_rebate_2                 |  float8   |        |          敲出补偿 2 |
| rounding                           |   int4    |        |      标的价格精确度 |
| yield                              |  varchar  |        |      收益率（描述） |
| trading_calendar                   |  varchar  |        |            交易日历 |

---

# # pms_history(产金交互接口的历史记录表)

| 字段名       |   类型    | 默认值 |     备注 |
| ------------ | :-------: | -----: | -------: |
| id           |   int4    |        |     主键 |
| service_name |  varchar  |        |   服务名 |
| request_time | timestamp |        | 请求时间 |
| remark       |  varchar  |        |     备注 |
| procode      |  varchar  |        | 需求代码 |
| params       |   jsonb   |        | 请求参数 |
| response     |   jsonb   |        | 返回参数 |

---

# # pms_preproduct(预约表审批列表)

| 字段名                               |     类型     | 默认值 |                                     备注 |
| ------------------------------------ | :----------: | -----: | ---------------------------------------: |
| branch_name                          |   varchar    |        |                             分支机构名称 |
| pms_reqstatus                        |   varchar    |        |                                 预约状态 |
| pms_fundseries                       |   varchar    |        |                             系列（产金） |
| pms_fundseriesname                   |   varchar    |        |                         系列名称（产金） |
| branch_code                          |   varchar    |        |                             分支机构代码 |
| pms_investsubject                    |   varchar    |        |                     挂钩标的范围（产金） |
| subscription_date                    |  timestamp   |        |                                   认购日 |
| issue_at                             |   varchar    |        |                                 发行渠道 |
| customer_code                        |   varchar    |        |                                 客户代码 |
| customer_name                        |   varchar    |        |                                 客户名称 |
| issue_scale                          |    float8    |        |                       拟认购金额（万元） |
| nominal_interest_rate                |    float8    |        |                                 固定利率 |
| commission_rate                      |    float8    |        | 销售费率（等同于产金发送过来的预计中收） |
| maturity_date                        |  timestamp   |        |                                   到期日 |
| contact_name                         |   varchar    |        |                                   联系人 |
| contact_phone_number                 |   varchar    |        |                                 联系电话 |
| pms_reqdate                          |  timestamp   |        |                     需求提出时间（产金） |
| issuer_department                    |   varchar    |        |                                 发行部门 |
| product_code                         |   varchar    |        |                                 产品代码 |
| product_description                  |   varchar    |        |                                 产品全称 |
| product_short_description            |   varchar    |        |                                 产品简称 |
| pms_remark                           |   varchar    |        |                             备注（产金） |
| producer                             |   varchar    |        |                           创建人（产金） |
| pms_createdate                       |  timestamp   |        |                         创建日期（产金） |
| pms_reqnodecode                      |   varchar    |        |                     需求提出部门（产金） |
| pms_issuenodecode                    |   varchar    |        |                     产品发行部门（产金） |
| pms_reqcreator                       |   varchar    |        |                       需求提出人（产金） |
| pms_subscriratio                     |  timestamp   |        |                      预计中收(%)（产金） |
| first_dividend_date                  |  timestamp   |        |                       首次分红日（产金） |
| creator                              |   varchar    |        |                       需求提出人（产金） |
| pms_producer                         |   varchar    |        |                           创建人（产金） |
| sales_name                           |   varchar    |        |               分支机构联系人名称（产金） |
| pms_salesperson                      |   varchar    |        |               分支机构联系人代码（产金） |
| pms_reqmobile                        |   varchar    |        |               分支机构联系人电话（产金） |
| istripartite                         |   varchar    |        |                                 发行渠道 |
| value_date                           |  timestamp   |        |                                   起息日 |
| min_raise_amount                     |    float8    |        |                           募集下限（万） |
| individual_min_subscribe_amount      |    float8    |        |                       单客户认购下限(元) |
| individual_max_subscribe_amount      |    float8    |        |                       单客户认购上限(元) |
| min_subscription_unit_amount         |    float8    |        |                       认购递增金额（万） |
| holder_type                          |   varchar    |        |                                 发行方式 |
| initial_observation_date             |  timestamp   |        |                               期初观察日 |
| observation_duration                 |   varchar    |        |                             价格观察区间 |
| initial_price_observation_rule       |   varchar    |        |                             期初价格描述 |
| final_observation_date               |  timestamp   |        |                               期末观察日 |
| rounding                             |     int4     |        |                               标的精确度 |
| underlying_instrument_id             |   varchar    |        |                                 标的代码 |
| sales_associates                     |   varchar    |        |                               销售协同人 |
| option_style                         |   varchar    |        |                                 期权结构 |
| put_call                             |   varchar    |        |                       方向（看涨看跌等） |
| participation_rate                   |    float8    |        |                                   参与率 |
| option_premium_rate                  |    float8    |        |                                 期权费率 |
| buy_sell                             |   varchar    |        |                                 买卖方向 |
| counterparty                         | varchar(50)  |        |                                 交易对手 |
| end_price_observation_rule           | varchar(50)  |        |                             期末价格描述 |
| max_raise_amount                     |    float8    |        |                                 募集上限 |
| second_dividend_date                 | timestamp(6) |        |                               二次分红日 |
| min_subscription_amount_per_customer |    float8    |        |                           单客户认购下限 |
| max_subscription_amount_per_customer |    float8    |        |                           单客户认购上限 |
| strike_price_calculation_factor_1    |    float8    |        |                               执行价格 1 |
| strike_price_calculation_method_1    | varchar(255) |        |                      执行价格 1 匹配方式 |
| trading_calendar                     | varchar(255) |        |                                 交易日历 |
| underlying_instrument                | varchar(20)  |        |                                 挂钩标的 |
| excessallot                          | varchar(50)  |        |                   （产金）超额认申购判断 |
| activitycode                         | varchar(255) |        |                                 活动代码 |
| issharewithdrawal                    | varchar(50)  |        |              是否支持撤单 1 是是，0 是否 |
| issharetransfer                      | varchar(50)  |        |              是否支持转让 1 是是，0 是否 |
| accountname                          | varchar(200) |        |                                 账户名称 |
| bank                                 | varchar(200) |        |                                   开户行 |
| accountnum                           | varchar(200) |        |                                     账号 |
| bigpayaccountnum                     | varchar(200) |        |                         大额支付系统行号 |
| certificate_type                     | varchar(200) |        |                                 证件类型 |
| certificate_num                      | varchar(200) |        |                                 证件号码 |
| legal_person                         | varchar(200) |        |                               法定代表人 |
| address                              | varchar(300) |        |                                 通讯地址 |
| email                                | varchar(200) |        |                                 电子邮箱 |
| capital_accountname                  | varchar(200) |        |                         资金结算账户名称 |
| capital_accountnum                   | varchar(200) |        |                             资金结算账号 |
| client_name                          | varchar(100) |        |                               客户联系人 |
| client_phone_number                  | varchar(50)  |        |                             客户联系电话 |
| strike_price_calculation_factor_2    |    float8    |        |                               执行价格 2 |
| strike_price_calculation_method_2    | varchar(50)  |        |                      执行价格 2 匹配方式 |
| barrier_price_calculation_factor_1   |    float8    |        |                               障碍价格 1 |
| barrier_price_calculation_method_1   | varchar(50)  |        |                      障碍价格 1 匹配方式 |
| barrier_price_calculation_factor_2   |    float8    |        |                               障碍价格 2 |
| barrier_price_calculation_method_2   | varchar(50)  |        |                      障碍价格 2 匹配方式 |
| knock_out_rebate_1                   |    float8    |        |                               敲出补偿 1 |
| risk_level                           | varchar(100) |        |                                 风险等级 |
| product_source                       | varchar(100) |        |                               预约表来源 |
| product_series                       | varchar(255) |        |                                 产品系列 |
| subsidy_party                        | varchar(255) |        |                                   补贴方 |
| subsidy_rate                         |    float8    |        |                                 补贴费率 |
| liability_matching_party             | varchar(255) |        |                               负债匹配方 |
| principal_protection_rate            |    float8    |        |                             本金保障比例 |
| participation_rate_1                 |    float8    |        |                                 参与率 1 |
| participation_rate_2                 |    float8    |        |                                 参与率 2 |
| knock_out_observation_fre            | varchar(255) |        |                             敲出观察频率 |
| knock_out_observation_date_list      |     text     |        |                           敲出观察日区间 |
| knock_out_price_observation_rule     | varchar(250) |        |                             敲出价格描述 |
| participation_rate_3                 |    float8    |        |                                 参与率 3 |
| isdistinctive_quality                |  varchar(2)  |        |                   (非保本)是否含有转换期 |
| isdistinctive_quality_start_date     |     date     |        |                   (非保本)转换期开始日期 |
| isback_to_sell                       |  varchar(2)  |        |           (非保本)是否支持回售 0 否 1 是 |
| back_to_sell_observation_rule        | varchar(255) |        |                     (非保本)回售价格描述 |
| back_to_sell_min_keep_amount         |    float8    |        |                 (非保本)回售最低保有份额 |
| back_to_sell_min_subscribe_amount    |    float8    |        |                     (非保本)单日回售下限 |
| back_to_sell_max_subscribe_amount    |    float8    |        |                     (非保本)单日回售上限 |
| back_to_sell_transfer_amount         |    float8    |        |                     (非保本)回售递增数量 |
| back_to_sell_interval                |    jsonb     |     {} |                       (非保本)回售日区间 |
| isend_early                          |  varchar(2)  |      0 |       (非保本)支持主动提前终止 0 否 1 是 |
| lock_duration                        |     int4     |        |                         (非保本)锁定期限 |
| isend_early_interval                 |     json     |     {} |               (非保本)主动提前终止日区间 |
| isend_early_observation_rule         | varchar(255) |        |                 (非保本)提前终止价格描述 |
| isend_early_min_keep_amount          |    float8    |        |             (非保本)提前终止最低保有份额 |
| isend_early_min_subscribe_amount     |    float8    |        |                 (非保本)提前终止数量下限 |
| isend_early_max_subscribe_amount     |    float8    |        |                 (非保本)提前终止数量上限 |
| isend_early_transfer_amount          |    float8    |        |                 (非保本)提前终止递增份额 |
| min_float_payoff_rate                |    float8    |        |                       (非保本)最低收益率 |
| max_loss_protected_rate              |    float8    |        |                     (非保本)最高亏损保护 |
| knock_out_json                       |    jsonb     |     {} |                       (非保本)敲出日管理 |
| knock_out_price                      |    float8    |        |                         (非保本)敲出价格 |
| knock_out_calculation_method         | varchar(255) |        |                 (非保本)敲出价格匹配方式 |
| knock_in_json                        |    jsonb     |     {} |                       (非保本)敲入日管理 |
| knock_in_calculation_method          | varchar(255) |        |                 (非保本)敲入价格匹配方式 |
| knock_in_price                       |    float8    |        |                         (非保本)敲入价格 |
| options_remarks                      | varchar(255) |        |                     (非保本)期权扩展信息 |
| knock_out_observation_rule           | varchar(255) |        |                     (非保本)敲出价格描述 |
| knock_in_observation_rule            | varchar(255) |        |                     (非保本)敲入价格描述 |
| is_capital                           |  varchar(2)  |        |                         (非保本)是否保本 |
| remarks                              | varchar(255) |        |                             (非保本)备注 |

---

## product_progress(流程表)

| 字段名           |  类型   | 默认值 |                   备注 |
| ---------------- | :-----: | -----: | ---------------------: |
| product_code     | varchar |        |               产品代码 |
| status           |  int4   |        |
| path             |  text   |        |
| path_action      |  int4   |        |
| check_point      | varchar |        |
| created          |  bool   |        |
| dept_path        |  int4   |        |
| predefined_steps |  text   |        |
| step             | varchar |        |
| step_role        |  jsonb  |        |
| pending          |  bool   |        |
| reqcode          | varchar |        |               需求代码 |
| auditremark      | varchar |        |
| issue_status     |  bool   |        |
| remark           | varchar |        |                   备注 |
| extsystem        | varchar |        | 1.固收；2.权益（产金） |

---

## products(产品-合同基本要素表)

| 字段名                               |     类型     |   默认值 |                               备注 |
| ------------------------------------ | :----------: | -------: | ---------------------------------: |
| id                                   |     int4     | NOT NULL |                               主键 |
| product_code                         | varchar(100) | NOT NULL |                           产品代码 |
| product_short_description            | varchar(250) |          |                           产品简称 |
| product_description                  | varchar(250) |          |                           产品全称 |
| issue_scale                          |    float8    | NOT NULL |                         拟认购金额 |
| nominal_interest_rate                |    float8    | NOT NULL |                           固定利率 |
| commission_rate                      |    float8    |          |                           销售费率 |
| subscription_agreement_date          | timestamp(6) | NOT NULL |                           成立日期 |
| subscription_period_start_date       | timestamp(6) | NOT NULL |                       发行开始日期 |
| subscription_period_end_date         | timestamp(6) | NOT NULL |                       发行结束日期 |
| subscription_date                    | timestamp(6) | NOT NULL |                             认购日 |
| payment_date                         | timestamp(6) | NOT NULL |                             缴款日 |
| issue_date                           | timestamp(6) | NOT NULL |                           发行日期 |
| value_date                           | timestamp(6) | NOT NULL |                             起息日 |
| redemption_date                      | timestamp(6) | NOT NULL |                             兑付日 |
| first_dividend_date                  | timestamp(6) |          |                         首次分红日 |
| close_end_date                       | timestamp(6) | NOT NULL |                       封闭结束日期 |
| value_end_date                       | timestamp(6) | NOT NULL |                       计息截止日期 |
| maturity_date                        | timestamp(6) | NOT NULL |                             到期日 |
| product_duration                     |     int4     | NOT NULL |                           产品期限 |
| min_raise_amount                     |    float8    | NOT NULL |                       最低募集金额 |
| max_raise_amount                     |    float8    | NOT NULL |                       最高募集金额 |
| institutional_min_transfer_amount    |    float8    | NOT NULL |                   机构最少追加金额 |
| institutional_min_subscribe_amount   |    float8    | NOT NULL |               机构首次投资最低金额 |
| institutional_max_subscribe_amount   |    float8    | NOT NULL |                   机构最高认购限额 |
| individual_min_transfer_amount       |    float8    | NOT NULL |                   个人最少追加金额 |
| individual_min_subscribe_amount      |    float8    | NOT NULL |               个人首次投资最低金额 |
| individual_max_subscribe_amount      |    float8    | NOT NULL |                   个人最高认购限额 |
| holder_type2                         | varchar(150) |          |                        定制/非定制 |
| holder_type                          | varchar(150) | NOT NULL |                           发行方式 |
| risk_rating                          | varchar(10)  | NOT NULL |                   （产金）风险等级 |
| oversubscription_standard            | varchar(25)  | NOT NULL |         （产金）超额认申购判断标准 |
| oversubscription_confirmed           | varchar(10)  | NOT NULL |     （产金）超额认申购是否部分确认 |
| over_the_counter                     |     bool     | NOT NULL |              （产金）是否 OTC 产品 |
| max_raise_amount                     |    float8    |          |                     募集上限（万） |
| second_dividend_date                 |  timestamp   |          |                       第二次分红日 |
| min_subscription_amount_per_customer |    float8    |          |               单客户认购下限（万） |
| max_subscription_amount_per_customer |    float8    |          |               单客户认购上限（万） |
| excessallot                          |   varchar    |          |                     超额认申购判断 |
| activitycode                         |   varchar    |          |                           活动代码 |
| issharewithdrawal                    |   varchar    |          |                       是否支持撤单 |
| issharetransfer                      |   varchar    |          |                       是否支持转让 |
| accountname                          |   varchar    |          |                   资金结算账户名称 |
| bank                                 |   varchar    |          |                             开户行 |
| accountnum                           |   varchar    |          |                               账号 |
| bigpayaccountnum                     |   varchar    |          |                   大额支付系统行号 |
| certificate_type                     |   varchar    |          |                           证件类型 |
| certificate_num                      |   varchar    |          |                           证件号码 |
| legal_person                         |   varchar    |          |                         法定代表人 |
| address                              |   varchar    |          |                           通讯地址 |
| email                                |   varchar    |          |                           电子邮箱 |
| capital_accountname                  |   varchar    |          |                   资金结算账户名称 |
| capital_accountnum                   |   varchar    |          |                       资金结算账号 |
| client_name                          |   varchar    |          |                         客户联系人 |
| client_phone_number                  |   varchar    |          |                       客户联系电话 |
| risk_level                           |   varchar    |          |                           风险等级 |
| product_source                       |   varchar    |          |   预约表来源（产金，经办那，销售） |
| max_customer_count                   |     int4     |          |                       最大开户数量 |
| issuer_department                    |   varchar    |          |                           发行部门 |
| issuer                               |   varchar    |          |                             发行方 |
| issue_reason                         |   varchar    |          |                           上柜理由 |
| issue_at                             |   varchar    |          |                           发行场所 |
| income_calculation_method            |   varchar    |          |                   投资收益计算方式 |
| currency                             |   varchar    |          |                               币种 |
| face_amount                          |    float8    |          |                           产品面值 |
| early_termination                    |   varchar    |          |                       提前终止条约 |
| distribution_method                  |   varchar    |          |                 本金及收益分配方式 |
| cancellation                         |   varchar    |          |                               撤单 |
| placement                            |   varchar    |          |                           配售方式 |
| customer_name                        |   varchar    |          |                           客户名称 |
| customer_code                        |   varchar    |          |                           客户代码 |
| contact_phone_number                 |   varchar    |          |                         联系人电话 |
| contact_name                         |   varchar    |          |                         联系人姓名 |
| branch_name                          |   varchar    |          |                       分支机构名称 |
| branch_code                          |   varchar    |          |                       分支机构代码 |
| sales_name                           |   varchar    |          |                             销售人 |
| sales_associates                     |   varchar    |          |                         销售协同人 |
| remarks                              |   varchar    |          |                               备注 |
| product_step                         |   varchar    |          |                           产品阶段 |
| product_status                       |   varchar    |          |                           产品状态 |
| producer                             |   varchar    |          |                         产品执行人 |
| confirmed_doc                        |   varchar    |          |                     上传已用印文档 |
| doc_pdf                              |   varchar    |          |                       pdf 文档记录 |
| creator                              |   varchar    |          |                         产品创建人 |
| documents                            |    jsonb     |          |                           文档记录 |
| pms_code                             |   varchar    |          |                   需求代码（产金） |
| pms_remark                           |   varchar    |          |                       备注（产金） |
| pms_reqstatus                        |   varchar    |          |                   预约状态（产金） |
| pms_fundseries                       |   varchar    |          |                   产品系列（产金） |
| pms_fundseriesname                   |   varchar    |          |               产品系列名称（产金） |
| pms_investsubject                    |   varchar    |          |               挂钩标的范围（产金） |
| pms_reqdate                          |  timestamp   |          |               需求提出时间（产金） |
| pms_createdate                       |  timestamp   |          |                   创建日期（产金） |
| pms_reqcreator                       |   varchar    |          |                 需求提出人（产金） |
| pms_issuenodecode                    |   varchar    |          |               产品发行部门（产金） |
| pms_reqnodecode                      |   varchar    |          |               需求提出部门（产金） |
| pms_subscriratio                     |  timestamp   |          |                   预计中收（产金） |
| req_code                             |   varchar    |          |                           需求代码 |
| customer_remark                      |   varchar    |          |                       客户审批意见 |
| pms_salesperson                      |   varchar    |          |                           （产金） |
| pms_reqmobile                        |   varchar    |          |         分支机构联系人电话（产金） |
| merge_product_code                   |   varchar    |          |                         主需求代码 |
| pms_producer                         |   varchar    |          |                     创建人（产金） |
| istripartite                         |   varchar    |          |                           发行渠道 |
| excessallot                          |   varchar    |          |                     超额认申购判断 |
| activitycode                         |   varchar    |          |                           活动代码 |
| issharewithdrawal                    |   varchar    |          |                       是否支持撤单 |
| issharetransfer                      |   varchar    |          |                       是否支持转让 |
| capital_accountname                  |   varchar    |          |                   资金结算账户名称 |
| capital_accountnum                   |   varchar    |          |                       资金结算账号 |
| accountname                          |   varchar    |          |                           账户名称 |
| bank                                 |   varchar    |          |                             开户行 |
| accountnum                           |   varchar    |          |                               账号 |
| bigpayaccountnum                     |   varchar    |          |                   大额支付系统行号 |
| certificate_type                     |   varchar    |          |                           证件类型 |
| certificate_num                      |   varchar    |          |                           证件号码 |
| legal_person                         |   varchar    |          |                         法定代表人 |
| address                              |   varchar    |          |                           通讯地址 |
| email                                |   varchar    |          |                           客户邮箱 |
| client_name                          |   varchar    |          |                         客户联系人 |
| client_phone_number                  |   varchar    |          |                       客户联系电话 |
| member_long_name                     |   varchar    |          |                       crm 客户名称 |
| crm_id                               |     int4     |          |                      crm 客户的 id |
| risk_level                           |   varchar    |          |                           风险等级 |
| product_source                       |   varchar    |          |                         预约表来源 |
| subsidy_party                        | varchar(255) |          |                             补贴方 |
| subsidy_rate                         |    float8    |          |                           补贴费率 |
| liability_matching_party             | varchar(255) |          |                         负债匹配方 |
| principal_protection_rate            |    float8    |          |                       本金保障比例 |
| isdistinctive_quality                |  varchar(2)  |          |             (非保本)是否含有转换期 |
| isdistinctive_quality_start_date     |     date     |          |             (非保本)转换期开始日期 |
| isback_to_sell                       |  varchar(2)  |          |     (非保本)是否支持回售 0 否 1 是 |
| back_to_sell_observation_rule        | varchar(255) |          |               (非保本)回售价格描述 |
| back_to_sell_min_keep_amount         |    float8    |          |           (非保本)回售最低保有份额 |
| back_to_sell_min_subscribe_amount    |    float8    |          |               (非保本)单日回售下限 |
| back_to_sell_max_subscribe_amount    |    float8    |          |               (非保本)单日回售上限 |
| back_to_sell_transfer_amount         |    float8    |          |               (非保本)回售递增数量 |
| back_to_sell_interval                |    jsonb     |       {} |                 (非保本)回售日区间 |
| isend_early                          |  varchar(2)  |        0 | (非保本)支持主动提前终止 0 否 1 是 |
| lock_duration                        |     int4     |          |                   (非保本)锁定期限 |
| isend_early_interval                 |     json     |       {} |         (非保本)主动提前终止日区间 |
| isend_early_observation_rule         | varchar(255) |          |           (非保本)提前终止价格描述 |
| isend_early_min_keep_amount          |    float8    |          |       (非保本)提前终止最低保有份额 |
| isend_early_min_subscribe_amount     |    float8    |          |           (非保本)提前终止数量下限 |
| isend_early_max_subscribe_amount     |    float8    |          |           (非保本)提前终止数量上限 |
| isend_early_transfer_amount          |    float8    |          |           (非保本)提前终止递增份额 |
| min_float_payoff_rate                |    float8    |          |                 (非保本)最低收益率 |
| max_loss_protected_rate              |    float8    |          |               (非保本)最高亏损保护 |
| is_capital                           |  varchar(2)  |          |                   (非保本)是否保本 |

---

## sended_file_type()

| 字段名       | 类型 | 备注 | 默认值 |
| ------------ | :--: | ---: | -----: |
| product_code |      |      |
| file_type    |      |      |

---

## sending_history()

| 字段名       | 类型 | 备注 | 默认值 |
| ------------ | :--: | ---: | -----: |
| procode      |      |      |
| service_type |      |      |
| sending_date |      |      |
| retstatus    |      |      |

---

## ta_otc_data(OTC 表--用于比较 10011 端口推送数据)

| 字段名                            |     类型     |     备注 |                             默认值 |
| --------------------------------- | :----------: | -------: | ---------------------------------: |
| id                                |     int4     | not null |                               主键 |
| procode                           | varchar(100) |          |                           需求内码 |
| factcollect                       | varchar(20)  |          |                           发行上限 |
| fundcode                          | varchar(100) |          |                           产品代码 |
| fundname                          | varchar(200) |          |                           产品名称 |
| fundshortname                     | varchar(200) |          |                           产品简称 |
| parvalue                          |    float8    |          |                           产品面值 |
| moneytype                         | varchar(20)  |          |                               币种 |
| isotc                             | varchar(10)  |          |                      是否 OTC 产品 |
| risklevel                         | varchar(10)  |          |                       产品风险等级 |
| subsribemode                      | varchar(20)  |          |                       产品认购模式 |
| issuetype                         | varchar(50)  |          |                           配售方式 |
| issueprice                        | varchar(20)  |          |                           发行价格 |
| minbalance                        |    float8    |          |                 最低募集金额（元） |
| maxbalance                        |    float8    |          |                 最高募集金额（元） |
| subsribedays                      |     int8     |          |                     认购天数（天） |
| issuedate                         | timestamp(6) |          |                       发行开始日期 |
| issueenddate                      | timestamp(6) |          |                       发行结束日期 |
| setupdate                         | timestamp(6) |          |                           成立日期 |
| alimitenddate                     | timestamp(6) |          |                       封闭结束日期 |
| minacconum                        |     int4     |          |                 最低开户数量（个） |
| maxacconum                        |     int4     |          |                 最大账户数量（个） |
| minfirstbala                      |    float8    |          |         个人首次投资最低金额（元） |
| minsubaddbala                     |    float8    |          |             个人最少追加金额（元） |
| maxperonesub                      |    float8    |          |             个人最高认购限额（元） |
| orgminfirstbala                   |    float8    |          |         机构首次投资最低金额（元） |
| orgminsubaddbala                  |    float8    |          |             机构最少追加金额（元） |
| maxorgonesub                      |    float8    |          |             机构最高认购限额（元） |
| maxovershares                     |    float8    |          | 超额认申购判断阈值（最高规模份额） |
| maxoverbalance                    |    float8    |          | 超额认申购判断阈值（最高规模金额） |
| maxoverconfirmflag                | varchar(20)  |          |             超额认申购是否部分确认 |
| interestbegindate                 | timestamp(6) |          |                       产品起息日期 |
| interestenddate                   | timestamp(6) |          |                 认购期计息截止日期 |
| istripartite                      | varchar(20)  |          |                           发行渠道 |
| excessallot                       | varchar(20)  |          |                     超额认申购判断 |
| issharewithdrawal                 |  varchar(20  |          |                 请输入是否支持撤单 |
| activitycode                      | varchar(200) |          |                           活动代码 |
| fundtype                          | varchar(20)  |          |                           产品类型 |
| purchasecounts                    |     int8     |          |                       认购人数上限 |
| timelimit                         |     int8     |          |                           产品期限 |
| contractenddate                   | timestamp(6) |          |                             到期日 |
| minprofit                         |    float8    |          |                     上限利率最低值 |
| profit                            |    float8    |          |                           固定利率 |
| minprofitfeedes                   | varchar(200) |          |                         收益率描述 |
| expectedprofit                    |    float8    |          |                     上限利率最高值 |
| interestdate                      | timestamp(6) |          |                             兑付日 |
| issharetransfer                   | varchar(20)  |          |                       是否支持转让 |
| recorddate                        | timestamp(6) |          |                           登记日期 |
| incomeappointway                  | varchar(20)  |          |                       收益约定方式 |
| extsystem                         |     int4     |          |                           对接系统 |
| underlying                        | varchar(255) |          |                 挂钩标的代码及市场 |
| underlyingname                    | varchar(255) |          |                       挂钩标的名称 |
| direction                         | varchar(255) |          |                               方向 |
| structure                         | varchar(255) |          |                               结构 |
| isdistinctive_quality             |  varchar(2)  |          |                     是否含有转换期 |
| isdistinctive_quality_start_date  |     date     |          |                       转换期开始日 |
| isback_to_sell                    |  varchar(2)  |          |                       是否含有回售 |
| back_to_sell_observation_rule     | varchar(255) |          |                       回售价格描述 |
| back_to_sell_min_keep_amount      |    float8    |          |                     回售最低保有量 |
| back_to_sell_min_subscribe_amount |    float8    |          |                       单日回售下限 |
| back_to_sell_max_subscribe_amount |    float8    |          |                       单日回售上限 |
| back_to_sell_transfer_amount      |    float8    |          |                       回售递增金额 |
| back_to_sell_interval             |    jsonb     |          |                         回售日区间 |
| isend_early                       |  varchar(2)  |          |                           提前终止 |
| lock_duration                     |     int4     |          |                             锁定期 |
| isend_early_interval              |    jsonb     |          |                     提前终止日区间 |
| isend_early_observation_rule      | varchar(255) |          |                 提前终止日价格描述 |
| isend_early_min_keep_amount       |    float8    |          |                 提前终止最低保有量 |
| isend_early_min_subscribe_amount  |    float8    |          |                       单日终止下限 |
| isend_early_max_subscribe_amount  |    float8    |          |                       单日终止上限 |
| isend_early_transfer_amount       |    float8    |          |                   提前终止递增金额 |
| min_float_payoff_rate             |    float8    |          |                         最低收益率 |
| max_loss_protected_rate           |    float8    |          |                       最高亏损保护 |
| knock_out_json                    |    jsonb     |          |                     敲出观察日管理 |
| knock_out_price                   |    float8    |          |                           敲出价格 |
| knock_out_calculation_method      | varchar(255) |          |                   敲出价格匹配方式 |
| knock_in_json                     |    jsonb     |          |                     敲入观察日管理 |
| knock_in_calculation_method       | varchar(255) |          |                   敲入价格匹配方式 |
| knock_in_price                    |    float8    |          |                           敲入价格 |
| knock_out_observation_rule        |              |          |                       敲出价格描述 |
| knock_in_observation_rule         |              |          |                       敲入价格描述 |
| principal_protection_rate         |    float8    |          |                       本金保障比例 |
| options_remarks                   | varchar(255) |          |                       期权扩展信息 |
