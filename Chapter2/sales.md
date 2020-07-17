# amount_collected()

| 字段名                  |     类型     | 默认值 |         备注 |
| ----------------------- | :----------: | -----: | -----------: |
| id                      |   integer    |        |         主键 |
| product_code            | varchar(100) |        |     产品代码 |
| issue_date              |  timestamp   |        |       认购日 |
| value_date              |  timestamp   |        |       起息日 |
| maturity_date           |  timestamp   |        |       到期日 |
| branch_code             |  timestamp   |        | 分支机构代码 |
| actual_amount_collected |    float8    |        | 实际募集金额 |
| customer_name           | varchar(100) |        |     客户名称 |
| commission_amount       |    float8    |        |     销售份额 |
| crm_id                  |   integer    |        |        CRMID |
| member_long_name        | varchar(255) |        |     CRM 客户 |
| sales_associates        | varchar(100) |        |   销售协同人 |

---

# pro_customer_maturity(大数据推送表-到期日推送)

| 字段名             |     类型     | 默认值 |         备注 |
| ------------------ | :----------: | -----: | -----------: |
| product_code       | varchar(100) |        |     产品代码 |
| customer_code      | varchar(100) |        |     客户代码 |
| branch_code        | varchar(100) |        | 分支机构代码 |
| raise_amount       |    float8    |        |     销售份额 |
| first_issue_date   |  timestamp   |        |       到期日 |
| create_date        |  timestamp   |        |     创建日期 |
| update_date        |  timestamp   |        |     更新日期 |
| customer_full_name | varchar(255) |        |     客户全称 |

---

# pro_customer_subscription(大数据推送表-认购日推送)

| 字段名             |     类型     | 默认值 |         备注 |
| ------------------ | :----------: | -----: | -----------: |
| product_code       | varchar(100) |        |     产品代码 |
| customer_code      | varchar(100) |        |     客户代码 |
| branch_code        | varchar(100) |        | 分支机构代码 |
| raise_amount       |    float8    |        |     销售份额 |
| first_issue_date   |  timestamp   |        |       认购日 |
| create_date        |  timestamp   |        |     创建日期 |
| update_date        |  timestamp   |        |     更新日期 |
| customer_full_name | varchar(255) |        |     客户全称 |

---

# product_amount(发行成功时存入)

| 字段名             |     类型     | 默认值 |     备注 |
| ------------------ | :----------: | -----: | -------: |
| product_code       | varchar(100) |        | 产品代码 |
| total_raise_amount |    float8    |        | 发行金额 |
| create_date        |  timestamp   |        | 创建日期 |
| update_date        |  timestamp   |        | 更新日期 |

---

# product_amount_ta(大数据推送表-定时任务获取份额自动发行产品)

| 字段名             |     类型     | 默认值 |     备注 |
| ------------------ | :----------: | -----: | -------: |
| product_code       | varchar(100) |        | 产品代码 |
| total_raise_amount |    float8    |        | 发行金额 |
| create_date        |  timestamp   |        | 创建日期 |
| update_date        |  timestamp   |        | 更新日期 |

---

# product_branch_amount()

| 字段名        |     类型     | 默认值 |     备注 |
| ------------- | :----------: | -----: | -------: |
| product_code  | varchat(100) |        | 产品代码 |
| branch_code   | varchat(100) |        |
| raise_amount  |    float8    |        | 发行金额 |
| nowadays_date |  timestamp   |        |
| create_date   |  timestamp   |        |
| update_date   |  timestamp   |        |
