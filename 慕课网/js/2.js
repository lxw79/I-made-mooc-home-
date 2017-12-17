function getLength(str){
  // \x00-xff代表单字节字符。
  return str.replace(/[^\x00-\xff]/g, "xx").length;
}
 
function findStr(str, n){
  var tmp = 0;
  for (var i = 0; i < str.length; i++){
    if(str.charAt(i)==n){
      tmp++;
    }
  }
  return tmp;
}
 
window.onload=function(){
  var aInput = document.getElementsByTagName('input');
  var email=aInput[0];
  var oName = aInput[1];
  var pwd = aInput[2];
  var pwd2 = aInput[3];
  var aP = document.getElementsByTagName('p');
  var email_msg=aP[1];
  var name_msg = aP[2];
  var pwd_msg = aP[3];
  var pwd2_msg = aP[4];
  var name_length = 0;
 
  email.onblur=function email(str){
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(str)){
      email_msg.innerHTML='OK！'}
    else if (this.value==""){
      email_msg.innerHTML = "不能为空！";
    }
    else {
     email_msg.innerHTML='请输入正确的Email地址'
    }
  }
  
 
  oName.onfocus = function(){
    name_msg.style.display = "inline";
    name_msg.innerHTML = "5-25个字符，推荐使用中文<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 会员名";
  }
 
   oName.onkeyup = function(){
    count.style.visibility = "visible";
    name_length = getLength(this.value);
    count.innerHTML = name_length + "个字符";
    if(name_length==0){
      count.style.visibility = "hidden";
    }
  }
 
  oName.onblur = function(){
    //含有非法字符            
    var reg = /[^\w\u4e00-\u9fa5]/g;    // \w代表“数字、字母（不分大小写）、下划线”，\u4e00-\u9fa5代表汉字。 
 
    if(reg.test(this.value)){
      name_msg.innerHTML = '含有非法字符！';
    }
 
    //不能为空
    else if (this.value==""){
      name_msg.innerHTML = "不能为空！";
    }
 
    //长度超过25个字符
    else if (name_length > 25){
      name_msg.innerHTML = "长度超过25个字符！";
    }
 
    //长度少于6个字符
    else if (name_length < 6){
      name_msg.innerHTML = "长度少于6个字符！";
    }
 
    //OK
    else {
      name_msg.innerHTML = "OK！";
      count.style.visibility = "hidden";
    }
  }
 
//密码
 
  pwd.onfocus = function(){
    pwd_msg.style.display = "inline";
    pwd_msg.innerHTML = '6-16个字符，请使用字母加<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字或符号的组合密码'
  }
  pwd.onblur = function(){
    var m = findStr(pwd.value, pwd.value[0]);
    var reg_n = /[^\d]/g;
    var reg_c = /[^a-zA-Z]/g;
    //不能为空
    if(this.value==""){
      pwd_msg.innerHTML = '不能为空！';
    }
    //不能用相同字符
    else if(m == this.value.length){
      pwd_msg.innerHTML = '不能用相同字符！';
    }
    //长度应为6-16个字符
    else if(this.value.length < 6 || this.value.length > 16){
      pwd_msg.innerHTML = '长度应为6-16个字符！';
    }
    //不能全为数字
    else if(!reg_n.test(this.value)){
      pwd_msg.innerHTML = '不能全为数字！';
    }
    //不能全为字母
    else if(!reg_c.test(this.value)){
      pwd_msg.innerHTML = '不能全为字母！';
    }
    //OK
    else{
      pwd_msg.innerHTML = 'OK！';
    }
  }
 
//确认密码
 
  pwd2.onblur = function(){
    if(this.value != pwd.value){
      pwd2_msg.innerHTML = '两次输入的密码不一致！';
    }
    else if(this.value==""){
      pwd2_msg.innerHTML = '不能为空！';
    }
    else{
      pwd2_msg.innerHTML = 'OK！';
    }
  }
}

