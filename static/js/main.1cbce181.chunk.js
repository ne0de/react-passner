(this["webpackJsonpreact-passner"]=this["webpackJsonpreact-passner"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),i=n(20),o=n(160),l=n(120),j=n(152),d=n(161),u=n(3),h=function(e){var t=Object(i.a)(e.args,2),n=t[0],a=t[1];return Object(u.jsxs)(o.a,{display:"flex",p:3,alignItems:"center",children:[Object(u.jsx)(l.a,{variant:"h5",children:"Passner Safety"}),Object(u.jsxs)(o.a,{ml:3,children:[Object(u.jsx)(j.a,{href:"/",color:"secondary",children:"Inicio"}),Object(u.jsx)(j.a,{color:"secondary",children:"Productos y servicios"}),Object(u.jsx)(j.a,{color:"secondary",children:"Sobre nosotros"})]}),Object(u.jsxs)(o.a,{flexGrow:1,textAlign:"right",children:[Object(u.jsx)(j.a,{href:"/login",color:"secondary",children:"Iniciar sesi\xf3n"}),Object(u.jsx)(j.a,{href:"/register",color:"secondary",children:"Crear cuenta"}),Object(u.jsx)(d.a,{color:"secondary",checked:!a,onChange:function(){return n(a)}})]})]})},b=n(153),x=function(){return Object(u.jsx)(b.a,{maxWidth:"lg",bgcolor:"black",children:Object(u.jsxs)(o.a,{my:7,children:[Object(u.jsx)(l.a,{variant:"h3",component:"h1",align:"center",gutterBottom:!0,children:"Gestiona y administra tus contrase\xf1as"}),Object(u.jsx)(l.a,{variant:"h6",component:"h1",align:"center",gutterBottom:!0,children:"Te facilitamos el uso de tus contrase\xf1as de la forma m\xe1s segura en un dep\xf3sito cifrado en l\xednea"})]})})},m=n(154),O=n(158),p=n(155),g=n(49),f=n.n(g),y=n(69),v=n(44),C=n(50),w=n(70),S=n.n(w),I=n(51),B=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];return[function(e){r(Object(C.a)(Object(C.a)({},n),{},Object(v.a)({},e.target.name,e.target.value))),console.log(n)},function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),console.log(I.a.PASSNER_API_URL),e.next=5,S.a.post(I.a.PASSNER_API_URL+"/user/register",n,{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.error("There was an error!",e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()]},k=function(){var e=B(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)(b.a,{maxWidth:"xl",bgcolor:"black",children:Object(u.jsx)(o.a,{display:"flex",p:6,alignItems:"center",children:Object(u.jsxs)(m.a,{container:!0,spacing:1,children:[Object(u.jsxs)(m.a,{item:!0,xs:7,children:[Object(u.jsx)(l.a,{variant:"h3",component:"h1",align:"center",gutterBottom:!0,children:" Bienvenid@ a Passner "}),Object(u.jsx)(l.a,{variant:"h6",component:"h1",align:"center",gutterBottom:!0,children:" Para acceder a nuestras funcionalidades inicia la sesi\xf3n aqu\xed "})]}),Object(u.jsxs)(m.a,{item:!0,xs:2,children:[Object(u.jsxs)(o.a,{display:"flex",justifyContent:"center",children:[" ",Object(u.jsx)(l.a,{variant:"h5",component:"h1",align:"left",gutterBottom:!0,children:" Inicia sesi\xf3n  "})," "]}),Object(u.jsxs)("form",{onChange:function(e){return n(e)},onSubmit:function(e){return a(e)},children:[Object(u.jsx)(O.a,{variant:"outlined",margin:"dense",fullWidth:!0,required:!0,id:"email",label:"Correo electr\xf3nico",name:"email",autoComplete:"email",autoFocus:!0}),Object(u.jsx)(O.a,{variant:"outlined",margin:"dense",required:!0,fullWidth:!0,id:"password",label:"Contrase\xf1a",type:"password",name:"password",autoComplete:"password",autoFocus:!0}),Object(u.jsx)(o.a,{display:"flex",mt:4,justifyContent:"center",children:Object(u.jsxs)(m.a,{spacing:2,container:!0,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(j.a,{type:"submit",m:3,fullWidth:!0,variant:"contained",color:"secondary",children:" Iniciar sesi\xf3n "})}),Object(u.jsxs)(m.a,{item:!0,xs:12,children:[" ",Object(u.jsx)(p.a,{href:"/",color:"secondary",variant:"body2",children:" \xbfHas olvidado tu contrase\xf1a? "})," "]}),Object(u.jsxs)(m.a,{item:!0,xs:!0,children:[" ",Object(u.jsxs)(p.a,{href:"/register",color:"secondary",variant:"body2",children:[" ","\xbfNo posees una cuenta? Registrate aqu\xed."," "]})," "]})]})})]})]})]})})})},W=function(){var e=B(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)(b.a,{maxWidth:"xl",bgcolor:"black",children:Object(u.jsx)(o.a,{display:"flex",p:6,alignItems:"center",children:Object(u.jsxs)(m.a,{container:!0,spacing:1,children:[Object(u.jsxs)(m.a,{item:!0,xs:7,children:[Object(u.jsx)(l.a,{variant:"h3",component:"h1",align:"center",gutterBottom:!0,children:" Crear una cuenta "}),Object(u.jsx)(l.a,{variant:"h6",component:"h1",align:"center",gutterBottom:!0,children:" Necesitas una cuenta para acceder a nuestras funciones "})]}),Object(u.jsxs)(m.a,{item:!0,xs:2,children:[Object(u.jsxs)(o.a,{display:"flex",justifyContent:"center",children:[" ",Object(u.jsx)(l.a,{variant:"h5",component:"h1",align:"left",gutterBottom:!0,children:" Formulario    "})," "]}),Object(u.jsxs)("form",{onChange:function(e){return n(e)},onSubmit:function(e){return a(e)},children:[Object(u.jsx)(O.a,{variant:"outlined",margin:"dense",fullWidth:!0,required:!0,id:"email",label:"Correo electr\xf3nico",name:"email",autoComplete:"email",autoFocus:!0}),Object(u.jsx)(O.a,{variant:"outlined",margin:"dense",required:!0,fullWidth:!0,id:"password",label:"Contrase\xf1a",type:"password",name:"password",autoComplete:"password",autoFocus:!0}),Object(u.jsx)(o.a,{display:"flex",mt:4,justifyContent:"center",children:Object(u.jsxs)(m.a,{spacing:2,container:!0,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(j.a,{type:"submit",m:3,fullWidth:!0,variant:"contained",color:"secondary",children:" Registrarme "})}),Object(u.jsxs)(m.a,{item:!0,xs:12,children:[" ",Object(u.jsx)(p.a,{href:"/login",color:"secondary",variant:"body2",children:" \xbfYa tienes cuenta? Inicia sesi\xf3n aqu\xed. "})," "]})]})})]})]})]})})})},P=n(157),q=n(156),R=n(72),A={palette:{secondary:{main:"#00796b"},palette:{type:"light"}}},F={palette:{secondary:{main:"#64b5f6"},type:"dark"}},N=n(71),_=n(11);n(109).config();var E=function(){var e=Object(a.useState)(!!JSON.parse(localStorage.getItem("theme"))),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(R.a)(n?A:F);return Object(u.jsxs)(q.a,{theme:c,children:[Object(u.jsx)(P.a,{}),Object(u.jsx)(h,{args:[function(e){return localStorage.setItem("theme",!e),r(!e)},n]}),Object(u.jsx)(N.a,{children:Object(u.jsxs)(_.c,{children:[Object(u.jsx)(_.a,{path:"/login",component:k}),Object(u.jsx)(_.a,{path:"/register",component:W}),Object(u.jsx)(_.a,{path:"/",component:x})]})})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.1cbce181.chunk.js.map