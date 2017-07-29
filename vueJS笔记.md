#Vue.js

###一、 npm安装:
####查看版本：
    >$ npm -v
####升级 npm:
    >$ cnpm install vue

#####不创建工程目录：
    *创建package.json文件*
    $ npm init
        *初始化*
    $ cnpm install vue --save-dev
        *安装依赖库*
        *-dev安装到开发环境下*
        *安装完后在package.json下创建devDependencies*
#####1.安装cnpm:

	由于npm安装速度慢，可以使用淘宝NPM镜像,安装命令：
	>$ npm install -g cnpm --registry=https://registry.npm.taobao.org

#####2.构建项目：

    # 全局安装 vue-cli
        $ cnpm install --global vue-cli
    # 创建一个基于 webpack 模板的新项目
        $ vue init webpack my-project
    # 这里需要进行一些配置，默认回车即可
        This will install Vue 2.x version of the template.
        For Vue 1.x use: vue init webpack#1.0 my-project
        ? Project name my-project
        ? Project description A Vue.js project
        ? Author runoob <test@runoob.com>
        ? Vue build standalone
        ? Use ESLint to lint your code? Yes
        ? Pick an ESLint preset Standard
        ? Setup unit tests with Karma + Mocha? Yes
        ? Setup e2e tests with Nightwatch? Yes
           vue-cli · Generated "my-project".
           To get started:
           
             cd my-project
             npm install
             npm run dev
           
           Documentation can be found at https://vuejs-templates.github.io/webpack

#####3.进入项目，安装并运行：

    $ cd my-project
    #安装依赖
    $ cnpm install
    #运行
    $ cnpm run dev
     DONE  Compiled successfully in 4388ms
    > Listening at http://localhost:8080

#
#### 二、vuejs组件的重要选项--data/methods/watch

    new Vue({
        data: { //Vue对象的数据
            a : 1,
            b : []
        },
        methods: { //vue对象的方法
            doSomething: function () {
                this.a++;
            }
        },
        watch:{ //设置了对象监听的方法
            'a' : function(val, oldVal) {
                console.log(val, oldVal);
            }
        }
    })

#
#### 三、模板指令 - HTML和vue对象的粘合剂

**数据渲染：v-text、v-html、{{}}**

    <p>{{a}}</p>
    <p v-text="a"></p>
    <p v-html="a"></p>

**控制模块显示或隐藏：v-if、v-show**

    <p v-if="isShow"></p>                           new Vue({
    <p v-show="isShow"></p>                             data: {
                                                            isShow : true
                                                        }
                                                    })

**渲染循环列表：v-for**

    <ul>
        <li v-for='item in items'>
            <p v-text='item.lable'></p>
        </li>
    </ul>
    new Vue({
        data: {
            items:[
                {lable:'apple'},
                {lable:'banana'}
            ]
        }
    })

**事件绑定：v-on**

    <button v-on:click="doThis"></button>
    <button @click="doThis"></button>
    new Vue({
        data: {
        },
        methods:{
            doThis:function(someThing){
            }
        }
    })

**属性绑定：v-bind**

    <img v-bind:src="imageSrc">
    <div :class="{red: isRed}"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, {classB: isB, classC: isC}]"></div>

#
#### 四、如何划分组件：

    文件结构：
        App.vue
        header.vue
        footer.vue
    模板组件：
        <header></header>
        <footer></footer>
    App.vue:
        import Header from './header'
        import Footer from './footer'
        new Vue({
           data:{
                isShow:true
           },
           components:[
                Header, Footer
           ]
        })

#
#### 五、vuejs组件之间的通信 ：

    # 1.父组件往子组件传递信息：-- props
        <!-- this is app.vue -->
        <header msg='something interesting'></header>
        <footer></footer>
        #
        //this is header.vue
        new Vue({
            data: {
                username:'xxx'
            },
            props:['msg'],
            methods: {
                doThis:function() {
                    console.log(this.msg);
                }
            }
        })
    #子组件向父组件传递数据：


