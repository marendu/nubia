//引入模块
var gulp = require("gulp");
var cleanCss = require("gulp-clean-css");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var connect = require("gulp-connect");
var sass = require("gulp-sass");

//制定任务
gulp.task("default", function(){
	console.log(123);
})

gulp.task("css", function(){
	gulp.src("src/css/**/*.css")
		.pipe(cleanCss())
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
})

gulp.task("html", function(){
	gulp.src("src/**/*.html")
		.pipe(htmlmin({
			removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true
		}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());;
})

//取出js文件，es6转es5，再压缩
gulp.task("js", function(){
	gulp.src("src/js/**/*.js")
		.pipe(babel({
		    presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("src/css/**/*.scss")
	.pipe(sass())
	.pipe(cleanCss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})

gulp.task("server", function(){
	//开启服务器
	connect.server({
		port:8080,
		livereload: true,
		root: "dist"
	})
})

gulp.task("img", function(){
	gulp.src("src/images/**/*")
		.pipe(gulp.dest("dist/images"))
	
})

gulp.task("watch", function(){
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("src/css/**/*.css", ["css"]);
	gulp.watch("src/js/**/*.js", ["js"]);
	gulp.watch("src/css/**/*.scss", ["sass"]);

})
gulp.task("libs",()=>{
	gulp.src("src/libs/**/*")
	.pipe(gulp.dest("dist/libs"));
})

gulp.task("default", ["html", "css", "js","sass", "server", "watch","libs", "img"]);

