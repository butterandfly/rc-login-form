# \<rc-login-form\>[![Build Status](https://travis-ci.org/butterandfly/rc-login-form.svg?branch=master)](https://travis-ci.org/butterandfly/rc-login-form)

一个通用的登录表单，可以自定义表单中输入框、复选框、登录按钮的颜色，登录触发相应的事件

# 安装

确保你已经安装npm及bower，然后使用bower来安装：
```
$ bower install butterandfly/rc-login-form
```

# 使用
基本用法：
```html
<rc-login-form></rc-login-form>
```

`placeholder-data`属性用来设置预填的form数据：
```html
<rc-login-form placeholder-data='{"username": "Admin", "password": "hihihi", "isRememberPassword": true}'></rc-login-form>
```  

### 样式
| Custom property | Description | Default |
|-----------------|-------------|---------|
| --form-color    | 统一设置 输入框获得/失去焦点时标签和下划线、复选框被选择时的颜色 | --primary-color |
| --login-button-color  | 设置登录按钮的背景色和文字颜色 | {} |

### 事件
点击登录表单输入合法会触发`_validatedSubmit`事件，并将表单数据`submitData`提交
```javascript
_validatedSubmit: function(submitData){
  this.fire('rc-login-form-validated-submit', submitData, {bubbles: false});
}
```
不合法则触发`_invalidatedSubmit`事件

```javascript
_invalidatedSubmit: function(){
  this.fire('rc-login-form-invalidated-submit', null, {bubbles: false});
}
```
# 开发
### 安装Polymer-CLI

确保你已经安装[polymer cli](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)，然后使用`polymer serve`来开启一个本地服务器：

### 查看你的应用

```
$ polymer serve
```
### 编译你的应用

```
$ polymer build
```

编译会创建一个 build/ 目录，该目录下有 bundled/ 和 unbundled/ 两个子目录，
可以通过polymer serve 将对应的版本运行在本地服务器上
```
$ polymer serve build/bundled
```
### 运行测试

```
$ polymer test
```
你的应用已经设置由[web-component-tester](https://github.com/Polymer/web-component-tester) 进行测试。运行`polymer test`在本地上测试你的应用。
