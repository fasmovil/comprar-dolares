(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),s=a.n(c),r=(a(11),a(2)),i=a(4),u=a.n(i),o=a(6),l=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"229742ab17618c9d26352736",t="https://v6.exchangerate-api.com/v6/".concat("229742ab17618c9d26352736","/pair/USD/ARS"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=a(0),j=function(){var e=function(){var e=Object(n.useState)({time_last_update_unix:0,time_last_update_utc:"",conversion_rate:0}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){l().then((function(e){c({time_last_update_unix:e.time_last_update_unix,time_last_update_utc:e.time_last_update_utc,conversion_rate:e.conversion_rate})}))}),[]),a}(),t=new Date(e.time_last_update_utc).toLocaleString("es-AR"),a=e.conversion_rate,c=Object(n.useState)(0),s=Object(r.a)(c,2),i=s[0],u=s[1],o=Object(n.useState)(0),j=Object(r.a)(o,2),p=j[0],b=j[1],O=Object(n.useState)(0),_=Object(r.a)(O,2),m=_[0],x=_[1],h=Object(n.useState)(0),f=Object(r.a)(h,2),v=f[0],S=f[1],g=Object(n.useState)(0),F=Object(r.a)(g,2),N=F[0],w=F[1];return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h1",{children:"Comprar D\xf3lares"}),Object(d.jsxs)("p",{className:"notas",children:["1 USD = ",e.conversion_rate.toFixed(2)," ARS (consultado el ",t,")"]}),Object(d.jsx)("form",{onSubmit:function(){},children:Object(d.jsx)("input",{type:"number",min:"0",value:i,onChange:function(e){var t=parseFloat(e.target.value),n=t*a,c=.3*n,s=.35*n;u(t),b(n),x(c),S(s),w(n+c+s)},placeholder:"Ingrese cantidad de USD"})}),Object(d.jsxs)("p",{className:"total",children:["TOTAL: ",N.toFixed(2)]}),Object(d.jsxs)("p",{className:"detalle",children:["Pesos al Valor Oficial: ",p.toFixed(2)]}),Object(d.jsxs)("p",{className:"detalle",children:["Impuesto Pa\xeds (30%): ",m.toFixed(2)]}),Object(d.jsxs)("p",{className:"detalle",children:["Impuesto AFIP (35%): ",v.toFixed(2)]})]})};s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85f7d321.chunk.js.map