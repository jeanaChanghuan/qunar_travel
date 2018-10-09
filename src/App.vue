<template>
  <div id="app">
  <!--当组件在 keep-alive 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 
  activated:	keep-alive 组件激活时调用。
  deactivated:	keep-alive 组件停用时调用。

include - 字符串或正则表达式。只有匹配的组件会被缓存。 
exclude - 字符串或正则表达式。任何匹配的组件都不会被缓存。

组件"name"取什么名，这里就引用什么名
组件name 的三个用法
1.组件自递归
2.配合keep-alive include 和 exclude使用
3.在浏览器vue devtools 查看控件
-->
  	<keep-alive exclude="Detail">
  		<router-view/>
  	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>

</style>

