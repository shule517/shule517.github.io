module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './lib', //ライブラリの配置先のディレクトリ
          install: true, //grunt実行時にbower installを実行するかどうか
          verbose: false, // ログの詳細を出すかどうか
          cleanTargetDir: true, // targetDirを削除するかどうか
          cleanBowerDir: false, // bowerのcomponentsディレクトリを削除するかどうか
          layout : function (type, component) {
            if (type === 'css') {
              return 'css';
            } else if (type === 'js') {
              return 'js';
            } else {
               return 'fonts';
            }
          }
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
};
