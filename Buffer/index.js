/**
 * Created by cljin on 2016/4/1.
 */
/*�ڴ���TCP�����ļ�����ʱ�����ʹ�ö���������,buffer��������ר�Ŵ�����������ݵĻ�����.
* ����
* new Buffer(10)   //����Ϊ10�ֽ�
* new Buffer([10,1,2]) //ͨ�����鴴��
* new Buffer('10','utf-8') //ͨ���ַ�������
*
* д��
* buf.write()
* buf.write(string[, offset[, length]][, encoding])
*   offset - ��������ʼд�������ֵ��Ĭ��Ϊ 0 ��
*   length - д����ֽ�����Ĭ��Ϊ buffer.length .
*
*��ȡ
*buf.toString
*buf.toString([encoding[, start[, end]]])
*
*ת��
* toJSON
*
*�ϲ�
*Buffer.concat(list[, totalLength])
*   list - ���ںϲ��� Buffer ���������б�
*   totalLength - ָ���ϲ���Buffer������ܳ��ȡ�
*
*����
*buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
*
*�ü�
*buf.slice([start[, end]])
* */




buf = new Buffer(26);
/*for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}*/
console.log( buf.write('ascii',1));