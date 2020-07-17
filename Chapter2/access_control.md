# departments(部门)

| 字段名             |    类型     |                                  默认值 |       备注 |
| ------------------ | :---------: | --------------------------------------: | ---------: |
| id                 |   integer   | nextval('departments_id_seq')::regclass |       主键 |
| department         | varchar(50) |                                         |   部门名称 |
| department_group   | varchar(50) |                                         |     部门组 |
| products_group     | varchar(50) |                                         | 产品代码组 |
| issuers            |  integer[]  |                                      {} |          - |
| prerequisite_depts |  integer[]  |                                      {} |          - |

---

# login_control(登陆控制)

| 字段名     |     类型     | 默认值 |         备注 |
| ---------- | :----------: | -----: | -----------: |
| uid        |     int4     |        |      用户 id |
| last_login | varchar(250) |        | 登陆的时间戳 |

---

# role（权限）

| 字段名        |  类型   | 默认值 |                   备注 |
| ------------- | :-----: | -----: | ---------------------: |
| id            |  int4   |        |                   主键 |
| role          | varchar |        |               权限名称 |
| visit         | varchar |        |              用户组 id |
| resource      |  jsonb  |        | 资源（可以访问的页面） |
| permission    |  int4   |        |                     ｜ |
| department_id |  int4   |        |                部门 id |
| role_name     | varchar |        |               权限名称 |

---

# user（用户）

| 字段名        |  类型   | 默认值 |    备注 |
| ------------- | :-----: | -----: | ------: |
| id            |  int4   |        |    主键 |
| username      | varchar |        |  用户名 |
| password      | varchar |        |    密码 |
| name          | varchar |        |    姓名 |
| rid           |  int4   |        | 权限 id |
| department_id |  int4   |        | 部门 id |

---

### 表涉及的 sequence 序列

1. departments_id_seq
2. role_id_seq
3. users_id_seq
