const expect =require('chai').expect;

describe('矩形计算器接口测试套件',function(){
  it('正确的矩形参数',function(){
    const http = require('http');
    var addr='http://localhost:8080/rectangle?width=20&height=10'

    http.get(global.encodeURI(addr), (res) => {
        var result = '';
        res.on('data', (data) => {
              result += data.toString('utf8');
                
        });

        res.on('end', () => {
              var weather = JSON.parse(result);
              console.log(rect);
              expect(rect.area).to.be.equal(200);
              expect(rect.perimeter).to.be.equal(60)
        });

    });
  })
})
