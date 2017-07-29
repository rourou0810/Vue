## markdown笔记
### *Sublime Text 3 安装及配置
    1.安装两个插件：Markdown Editing 和 Markdown Preview；
    2.上面两个插件安装成功后，依次点击：首选项->插件设置->Markdown Preview->Settings-User,在此文件内写入以下内容：
        `{
            "browser": "default",
            "enable_mathjax": true,
            "enable_highlight": true,
            "enable_autoreload":true,
            "parser": "markdown",
            "enabled_parsers": ["markdown"]
        }`
    3.在浏览器查看效果：ctrl+shift+p->Markdown Preview:Preview in Browser。
#
### *markdown常用语法

#### 1.字体大小：
# 一级标题                  
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题  

    #一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题  

#
####2. 列表：
#####2.1 有序列表

    * 1
    * 2
    * 3

* 1                 
* 2
* 3

#####2.2 无序列表

    1. 1
    2. 2
    3. 3
1. 1
2. 2
3. 3

#
#### 3.引用：用>尖括号
> 这里是引用

#
#### 4.图片与链接：

    链接：[Baidu](http://baidu.com)
    图片：![baidu](https://www.baidu.com/img/baidu_jgylogo3.gif)
##### 4.1 插入链接
[Baidu](http://baidu.com)
##### 4.2 插入图片
![baidu](https://www.baidu.com/img/baidu_jgylogo3.gif)

#
#### 5.粗体与斜体：

    1.粗体：**这是粗体**
    2.斜体：*这是斜体*
**这是粗体**
*这是斜体*

#
#### 6.表格：
    
    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

#
#### 7.分割线：
    分割线的语法只需要三个 * 号，一条细线用#，注意：#号不能用在文档最后。
***
