# api_request(请求接口记录表)

| 字段名    |   类型    | 默认值 |                             备注 |
| --------- | :-------: | -----: | -------------------------------: |
| id        |   int4    |        |                             主键 |
| path      |  varchar  |        |                         接口 api |
| type      |  varchar  |        | 请求类型（get,put,patch,delete） |
| params    |   jsonb   |        |                             参数 |
| userinfo  |   jsonb   |        |                             用户 |
| body      |   jsonb   |        |                        请求 body |
| query     |   jsonb   |        |                       请求 query |
| create_at | timestamp |        |                         创建时间 |

---

# log_info(历史记录表)

| 字段名      |   类型    | 默认值 |                                                         备注 |
| ----------- | :-------: | -----: | -----------------------------------------------------------: |
| id          |   int4    |        |                                                         主键 |
| item        |  varchar  |        | "1.新增标的时存放标的代码<br>2.其他存放产品代码或者需求代码" |
| operator    |  varchar  |        |                                        请求人（teamA,teamB） |
| operation   |  varchar  |        |                                                         操作 |
| description |   text    |        |                                                     操作描述 |
| item_type   |  varchar  |        |             保存的历史记录参数类型（期权，产品，收益凭证等） |
| level       |   int4    |        |                                                 历史等级（） |
| issue_time  | timestamp |        |
| record_type |  varchar  |        |                 保存的历史记录类型（发行，资产负债，文档等） |

---

# version(版本表-<font color='red'>弃用</font>)

| 字段名  |  类型   | 默认值 |   备注 |
| ------- | :-----: | -----: | -----: |
| version | varchar |        | 版本号 |
