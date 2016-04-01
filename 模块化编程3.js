/**
 * Created by cljin on 2016/3/28.
 */
/*��������:1>���ض���ļ���ʱ��:�����ֹͣ��ҳ��Ⱦ,��ҳʧȥ��Ӧ;2>��js�ļ�����������ʱ��,���뱣֤����˳��
* require.js����:1>ʵ��js�첽����,������ҳʧȥ��Ӧ.2>����ģ��֮���������,���ڴ���ı�д��ά��
*async���Ա�ʾ�첽����,IE��֧��,ֻ֧��defer
* // eg: <script src="js/require.js" defer async='true'></script>
*
*data-main���Ե������ǣ�ָ����ҳ�������ģ��.��׺jsʡ��
* // eg:<script src="js/require.js" data-main="js/main"></script>
*
* */
// main.js
require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
    // some code here
});
/*���ϱ�ʾģ��main����moduleA, moduleB, moduleC*/
/*����Ϊ����*/

require.config({
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});
//������ͬһ·������,һ�ַ�ʽ����"jquery": "lib/jquery.min",��һ��ʹ��baseUrl�ı��Ŀ¼
require.config({
    baseUrl:'js/lib',
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});

/**����AMDģ��д��
 * */
//����ģ��
// math.js
define(function (){
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };
});
/*��math.js����������ģ���ʱ��,��һ���������������ʽ����*/
define(['myLib'], function(myLib){
    function foo(){
        myLib.doSomething();
    }
    return {
        foo : foo
    };
});


//���ط���
// main.js
require(['math'], function (math){
    alert(math.add(1,1));
});



/* �ǹ淶ģ��д��:��ʹ��require����֮ǰʹ��config����,��������
* shim����,ר�����ò����ݵ�ģ��.
* ��1��exportsֵ������ı����������������ģ���ⲿ����ʱ�����ƣ�
* ��2��deps���飬������ģ��������ԡ�
* */
require.config({
    shim: {
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
