# Toast

Toast for Amaze UI。

操作提示组件

[GitHub项目地址](https://github.com/zhanyouwei/Toast)

## options

#### text

toast 显示的文本

#### duration

toast 持续时间

#### type

toast 类型，支持 `success` `warning` `danger` `secondary` 

## Example

```javascript
$(function () {
  $('body').toast({
    text: 'Amaze UI Toast',
    duration: 10000,
    type:'success'
  });
});
```



