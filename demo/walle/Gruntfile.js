module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		clean: {
            //删除非当前路径下的文件需要强制删除 https://github.com/gruntjs/grunt-contrib-clean/issues/29
            options: {
                force: true
            },
			all: ['../lib/walle']
		},
        copy: {
            image: {
                files: [        
                    {
                        expand: true,
                        cwd: '', 
						src: '**/image/*.{png,jpg,jpeg,gif}', 
						dest: '../lib/walle/image',
                        //拷贝所有image相关类型的文件，不带路径
                        flatten:true
                    }
                ]
            }
        },
		concat:{
			options: {
				separator: '\n\n',
				stripBanners: true
			},
			//core放在前面，最先执行，避免有依赖关系
			js:{
				src:['src/core/*/js/**/*.js', 'src/component/*/js/**/*.js', 'src/widget/*/js/**/*.js'],
				dest:'../lib/walle/js/walle.js'
			},
			less:{
				src:['src/core/*/less/*.less', 'src/component/*/less/*.less', 'src/widget/*/less/*.less'],
				//为了适配以前代码的引用less文件的目录结构
				dest:'../lib/walle/less/less/walle.less'
			}
		},
        less: {
            compile: {
                files: {
                    '../lib/walle/less/walle.css':'../lib/walle/less/less/walle.less'
                }
            }
        },
		uglify:{
			options:{
				banner:'/********************************************/\n' + 
					   '/****You can you up, no can no bb************/\n' +
					   '/********************************************/\n'
			},
			static_mappings:{
				files:[{
					src:'../lib/walle/js/walle.js',
					dest:'../lib/walle/js/walle.min.js'
				}]
			}
		},
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
				report: 'gzip'
            },
            target: {
                files: {
                    '../lib/walle/less/walle.min.css': [
						'../lib/walle/less/walle.css'
                    ]
                }
            }
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
    grunt.registerTask('default',['clean','copy', 'concat', 'less', 'uglify', 'cssmin']);
};