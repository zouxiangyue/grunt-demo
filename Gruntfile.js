module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      dev:{
         options: {
             collapseWhitespace: true,
             preserveLineBreaks: false
          
         },
         files: {
             'dist/index.html': './index.html',
          
         } 
      
      }
               
    }
  });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin']); 

};
