/**
 * Created by cljin on 2016/3/28.
 */
/*���������:�ͻ���ģ����commonJs�淶�����������������,��Ϊ����˵����д�����ڱ���Ӳ��,����ͬ������,�ȴ�ʱ��ȡ����Ӳ�̶�ȡʱ��;
*���Ƕ���������ȴ�ʱ��ȡ�������ٿ���,�������,������ᴦ��"����"״̬.���������˵�ģ��Ҫʹ���첽����.*/
var math = require('math');
/*math���ع���,���淽������ִ��*/
math.add(2, 3);


/*AMD:"Asynchronous Module Definition"����д����˼����"�첽ģ�鶨��"*/
require([module],callback);

require(['math'], function (math) {
    math.add(2, 3);
});

/*ע��ģ��math,���������ص�����*/

