1.设计目标
=================================================
（1）设计一个可以让后台程序猿快速上手的前台框架

（2）抽象通用代码模式，为代码生成提供基础

（3）模块化编程，提供架构看护效率

（4）支持标准化的编译构建

2.设计方案
=================================================

####2.1.一级模块划分####

一个完整的前台框架包含lib/walle/app三个部分。

####2.2.二级模块划分####

####2.2.1.lib####

存放第三方库和我们自己的库walle，其中第三方库，只要下载后放入即可，walle会通过编译构建工具自动复制到lib目录下。

####2.2.2.walle####

相当于我们自己的库，主要分为core/component/widget三个部分

####2.2.3.app####

此文件夹下有很多app，即使是同一套代码，在以下场景时可以划分新的app：
	
	1.面向不同的客户；
	2.展示的页面不同；
	3.在不同的设备或系统上显示（例如手机、平板和PC）。

####2.3.walle（二级模块开发）####

####2.3.1.工程构建####

######step1.创建工程######
	
	交互式命令行输入生成package.json
	根据工程实际需求，编写Gruntfile.js

######step2.build工程######
	
	编写build脚本
	执行build脚本（执行完成后，会自动生成node_modules文件夹，其中是下载的npm相关组件）

####2.3.2.core（三级模块开发）####
主要是框架层面的工具类，此demo中主要是IOC、MsgUtils的工具类。

####2.3.3.widget（三级模块开发）####
主要是我们自己根据业务需求封装的控件。



####2.3.4.component（三级模块开发）####
主要是一些一般层级的工具类，例如webSocket工具类。

####2.4.app（二级模块开发）####

####2.4.1.工程构建####

	同2.3.1

####2.4.2.app1（三级模块开发）####

######2.4.2.1.开发全局页面（Zpage）######

######step1.定义yml######
定义yml文件的规范如下：

######step2.生成代码######
代码生成工具。

######step3.代码生成后类结构（C/S/M/Sub/SubDom/SubPost/SubBu）######
	-Controller
	  -Service
	    -MainProvider
	      -SubProvider
		    -SubProviderPost
		    -SubProviderDom
		    -SubProviderBu

######step4.代码生成后类结构（DomainService）######
	-module1
	  -module1.js
	  -module1Repository.js
      -module1RepositoryMock.js

######step5.代码生成后类结构（app.html/app.min.html）######
	app.html:原始的html，供开发人员调试使用
	app.min.html:真正发布的页面

######2.4.2.2.开发模块页面(moduleN)######
	
	同2.4.2.1(没有step5)

######2.4.2.3.为后台提供build脚本######
	每个app以插件的形式向后台提供脚本，将bin目录下的内容拷贝到后台相应文件夹下，此脚本由每个app侧负责维护。	


前台技术基础
===============================================================
####本质####

前台技术本质是操作TAG对象。

####结构####
一个html页面包含若干个TAG对象，每个TAG对象可以包含多个TAG，一个TAG属性包含若干个attribute（具体的属性名和值）和若干个value
	
	-html
		-TAG1:Prop1(ATTRIBUTE;VALUE);Prop2;Prop3...
			-TAG1-1
				...
			-TAG1-2
				...
			...
		-TAG2:Prop1(ATTRIBUTE;VALUE)...
			-TAG2-1
				...
			...
		...


####逻辑操作####
1.TAG对象增加或删除子TAG对象
	
	js语法示例：$("#Id").append($("newTAG"))

2.TAG对象增、删、修改自身的TAG属性，包括修改attribute和value

	js语法示例：$("#Id").value("xxxValue")
			   $("#Id").attri("xxxKey","xxxValue")
				

####grunt相关技术点####

	
	npm install -g grunt-cli
	npm install -g grunt-init
	
	cd <module>
    npm init
    npm install grunt --save-dev
    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-copy --save-dev
    npm install grunt-contrib-less --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-cssmin --save-dev
    npm install grunt-contrib-imagemin --save-dev
    npm install grunt-rev --save-dev
    npm install grunt-usemin --save-dev
    
    manual create/config Gruntfile.js


Reference
=================================================
    Global:
    http://www.cnblogs.com/hubcarl/p/4095122.html
    jikexueyuan
    http://www.gruntjs.net/getting-started
    Less:
    http://www.cnblogs.com/LLJ748211490/p/4672878.html
    https://github.com/gruntjs/grunt-contrib-less
    rev/usemin
    http://www.cnblogs.com/zqzjs/p/5331098.html
    http://www.cnblogs.com/yxy99/p/5244413.html
    grunt copy ÎÄ¼þ¼Ð
    https://segmentfault.com/q/1010000003744963
    grunt rename file
	http://stackoverflow.com/questions/15271121/how-can-i-rename-files-with-grunt-based-on-the-respective-files-parent-folder
	
