/**
 * Created by cljin on 2016/3/28.
 */
/**
 * ģ�黯���
 *
 * */

/*һ��д��:'��Ⱦ'��ȫ�ֱ���,ģ���Ա������ֱ�ӹ�ϵ*/
function fn1() {
    //..
}
function fn2() {
    //..
}

/*����д��:���������ȱ��,����ģ���Ա��Ȼ�ᱻ��¶.�޸� module.m1=xx;*/
var module1=new Object({
    _count:0,
    m1: function () {
        //..
    },
    m2: function () {
        //..
    }
});

/*����ִ�к���д��:jsģ�����д��*/
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        //..
    };
    var m2 = function () {
        //..
    };
    return {
        m1: m1,
        m2: m2
    };
})()

/*�Ŵ�ģʽ:һ��ģ����Ҫ�̳���һ����ʱ��*/
var module1=(function (mod) {
    mod.m3= function () {
        //..
    };
    return mod;
})(module1);
/*��������������У�ģ��ĸ�������ͨ�����Ǵ����ϻ�ȡ�ģ�
��ʱ�޷�֪���ĸ����ֻ��ȼ��ء����������һ�ڵ�д������
һ��ִ�еĲ����п��ܼ���һ�������ڿն�����ʱ��Ҫ����
"��Ŵ�ģʽ"�����ǲ�������Ϊ�ն���*/
var module1 = ( function (mod){
    //...
    return mod;
})(window.module1 || {});

/*����ȫ�ֱ���:Ϊ����ģ���ڲ�����ȫ�ֱ�����������ʽ�ؽ�������������ģ�顣*/
var module1 = (function ($, YAHOO) {
    //...
})(jQuery, YAHOO);
/*tip:*/