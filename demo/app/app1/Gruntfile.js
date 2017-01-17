module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //删除bin目录
		clean: {
			all: ['bin']
		},
		copy: {
            //将app中的所有image目录下png,jpg,jpeg,gif格式的文件拷贝到bin/image下
			image: {
				files: [
					{
						expand: true,
						cwd: '', 
						src: '**/image/*.{png,jpg,jpeg,gif}',
						dest: 'bin/image',
						//拷贝所有image相关类型的文件，不带路径
						flatten:true
					}
				]
			},
            //将主html拷贝到bin目录下
            html: {
                files: [
                    {
                        expand: true,
                        cwd: '', 
						src: 'src/zpage/app.html',
						dest: 'bin/',
                        //拷贝不带路径
                        flatten:true
                    },
					{
                        expand: true,
                        cwd: '', 
						src: 'src/zpage/app.min.html',
						dest: 'bin/',
                        //拷贝不带路径
                        flatten:true
                    }
                ]
            }

		},
        //将src中所有js文件合为一个拷贝到bin/js/app.js
        // 将src中所有less文件合为一个拷贝到bin/less/app.less
		concat:{
			options: {
				separator: '\n\n',
				stripBanners: true
			},
			js:{
				src:['src/*/js/**/*.js'],
				dest:'bin/js/app.js'
			},
			less:{
				src:['src/less/*.less'],
				dest:'bin/less/app.less'
			}
		},
        //将less文件编译成css文件
        less: {
            compile: {
                files: {
                    //#region Code generation
                    'bin/less/app.css': 'bin/less/app.less'
                    //#endregion
                }
            }
        },
        //压缩app1.js为app1.min.js
		uglify:{
			options:{
				banner:'/********************************************/\n' + 
					   '/****You can you up, no can no bb************/\n' +
					   '/********************************************/\n'
			},
			static_mappings:{
				files:[{
					src:'bin/js/app.js',
					dest:'bin/js/app.min.js'
				}]
			}
		},
        //压缩app.css为app.min.css
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
				report: 'gzip'
            },
            target: {
                files: {
                    'bin/less/app.min.css': [
						'bin/less/app.css'
                    ]
                }
            }
        },
        //图片压缩，将'bin/image目录下，png,jpg,jpeg,gif,webp,svg类型的文件压缩到bin/image下
		imagemin: {
			prod: {
				options: {
					optimizationLevel: 7,
					pngquant: true
				},
				files: [{
					expand: true, cwd: 'bin/image', src: ['*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'bin/image'}
				]
			}
		},
        //在指定的文件名前加上md5字符串，避免编译后的文件因为浏览器缓存等原因没有生效，依然使用原来的文件
		rev: {
			files: {
				src: ['bin/js/app.min.js', 
				'bin/less/app.min.css',
				'../../lib/walle/js/walle.min.js',
				'../../lib/walle/less/walle.min.css']
			}
		},
        //根据注释替换对css/js等资源的引用
        usemin:{
            html: 'bin/app.min.html'
        }
    });
	
	//#region 不要删除,取巧的配置
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	//#endregion
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.registerTask('default',['clean', 'copy',  'concat', 'less','uglify','imagemin', 'cssmin', 'rev','usemin']);
};