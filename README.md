# vuex-examplate

> 基于Vue-component的alert封装

## Build Setup

``` bash
#alert提醒框有四种状态：
    info success error warning

#设置的props：
    type 提醒框类型 默认为info
    title 提示信息 '这里有一个消息要提示'
    closeable 是否禁用关闭 默认为true
    showicon 是否显示图标 默认为fasle
    style 设置提醒框样式 默认为{}

#定制模板：
    slot为iconTmp  定制icon模板
    slot为titleTmp 定制提示信息结构

#监控状态变化：
    事件名close-click   点击关闭X触发
```
