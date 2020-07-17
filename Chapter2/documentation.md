# dictionary(模板字典表)
字段名|类型|默认值|备注
--|:--:|--:|--:
id|int4||主键
magic_word|varchar||关键字	
context|varchar||文字	
pre_defined|bool||	
enabled|bool||	
description|varchar||描述	
---
# template(模板目录表)
字段名|类型|默认值|备注
--|:--:|--:|--:
id|int4||主键
template_type|varchar||模板类型
option_style|varchar||期权结构类型
put_call|varchar||方向
status|bool||状态
holder_type|varchar||发行方式
other_properties|jsonb||	
is_divident|varchar||	
holder_type2|varchar||定制/非定制
istripartite|varchar||发行渠道
---
# template_history(模板实体表)
字段名|类型|默认值|备注
--|:--:|--:|--:
id|int4||主键
template_id|varchar||模板id
file_name|varchar||文件名
file_data|bytea||文件内容（文件实体）
upload_user|varchar||上传人
update_at|timestamp||上传时间
apply|bool||是否使用	
---
### 表涉及的sequence序列
1.  dictionary_id_seq1
2.  template_history_id_seq
3.  template_id_seq