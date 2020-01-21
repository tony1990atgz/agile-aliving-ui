# agile-aliving-ui

## 测试预览地址
<a href='http://www.4006983383.cn/test/agileui/index.html'>agil-aliving-ui</a>

## 如何安装使用
```
npm install agile-aliving-ui --S
```
### 全局引入
```javascript
import agileui from 'agile-aliving-ui'
Vue.use(agileui)
```

### 按需引入
```javascript
import Vue from 'vue'
import {
  agileLoading,
  agileToast,
  agileConfirm,
  agileKeyboard,
  agileButton,
  agilePreload,
  agileCarboard
  agileToptip,
  agileSwitch,
  agileActionsheet,
  agileQuestionnaire,
  agileCounter
} from 'agile-aliving-ui'

Vue.use(agileLoading)
Vue.use(agileToast)
Vue.use(agileConfirm)
Vue.use(agileKeyboard)
Vue.use(agileButton)
Vue.use(agilePreload)
Vue.use(agileCarboard)
Vue.use(agileToptip)
Vue.use(agileSwitch)
Vue.use(agileActionsheet)
Vue.use(agileQuestionnaire)
Vue.use(agileCounter)
```

### script标签引入
```javascript
<agile-toast ref='toast'/>
<script src='agile-aliving-ui/main.js'></script>
```

### script标签按需引入
```javascript
<agile-toast ref='toast'/>
<script src='agile-aliving-ui/lib/toast.js'></script>
```

## 组件导图
<img src='http://m.qpic.cn/psb?/V13wODfD3QpsWg/GGi9scBKsp5g.IkA5wUZIGBWxaeGvUgSjCcEnMhljXo!/b/dL4AAAAAAAAA&bo=9QlABlwShgsDSRU!&rf=viewer_4' width="100%" />

### 问卷调查组件说明
<img src='http://m.qpic.cn/psb?/V13wODfD3QpsWg/L9tiadMBO4pRhkqrW6HUJi9DbO.iXLyWyzwpnWF0Ub4!/b/dL4AAAAAAAAA&bo=vApABo4LugYDSaU!&rf=viewer_4' width="100%" />
<img src='http://m.qpic.cn/psb?/V13wODfD3QpsWg/3de33XKMysd*SRN7w0tPF5IbHzGyvnXsGytEYFC3ZZ8!/b/dIQAAAAAAAAA&bo=GwaAAlwNeAUDKb8!&rf=viewer_4' width="100%" />


## 现在包含的组件

### 1、toast

```javascript
<agile-toast ref='toast'/>
```
### 2、confirm

```javascript
<agile-confirm  ref='confirm' @confirm='confirm'/>
```
### 3、keyboard

```javascript
<agile-keyboard ref='keyboard' @getvalue='getvalue' @pay='pay'/>
```
### 4、button

```javascript
<agile-button ref='button' type='agile'/>
```
### 5、loading

```javascript
<agile-loading ref='loading'/>
```

### 6、preload.图片预加载

```javascript
<agile-preload ref='preload'/>
```

### 7、carboard.车牌键盘

```javascript
<agile-carboard ref='carboard'/>
```

### 8、toptip. 顶部提示弹框

```javascript
<agile-toptip ref='toptip'/>
```

### 9、switch. 开关选择器

```javascript
<agile-switch ref='switch'/>
```

### 10、switch. 选项弹出层

```javascript
<agile-actionsheet ref='actionsheet'/>
```

### 11、questionnaire. 问卷

```javascript
<agile-questionnaire ref='questionnaire'/>
```
### 12、counter. 计数器,属性limit(最大库存)，startNum(初始化的数值)

```javascript
<agile-counter @getcount='getcount' limit=66 startNum=6 ref='counter'/>
```