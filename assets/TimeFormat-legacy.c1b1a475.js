System.register([],(function(e,t){"use strict";return{execute:function(){e("d",(function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var g in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+g+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[g]:("00"+n[g]).substr((""+n[g]).length)));return t}))}}}));
