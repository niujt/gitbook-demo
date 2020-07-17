
# calendars(交易日历表)
字段名|类型|默认值|备注
--|:--:|--:|--:|		
calendar_id|integer||日历编号
calendar_name|varchar(100)||日历名称
super_calendar_id|integer||父日历
type|varchar(100)||类型（country 国家，exchange 交易所）
calendar_code|varchar(100)||日历代码
id|integer||主键
---
# holidays(节假日表)
字段名|类型|默认值|备注
--|:--:|--:|--:|		
id|integer||主键
date|date||日期
calendar_id|integer||日历编号
tag|boolean||标记
description|varchar(20)||描述
---
# schedule(起息日，到期日，兑付日等事件提醒表)
字段名|类型|默认值|备注
--|:--:|--:|--:|		
id|integer||主键
contract_code|varchar(200)||产品简称
schedule_type|varchar(200)||事件类型
schedule_date|timestamp||事件日期
description|varchar(200)||描述
update_date|timestamp||更新日期
update_by|varchar(200)||更新人
priority|varchar(25)||优先级
finished|boolean||
to_do|varchar(50)||
notify_interval|integer||