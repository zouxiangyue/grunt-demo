var add=require('../calc.js');

var expect=require('chai').expect;

describe('面积计算功能测试',function(){
  it('w:10,h:20,area:200',function(){
    var rect=rectangle();

    expect(rect.area(10,20)).to.be.equel(200);
  });
  it('w:11,h:20,area:220',function(){
      var rect=rectangle();
           
      expect(rect.area(11,20)).to.be.equel(220);
  });                          
        
})
