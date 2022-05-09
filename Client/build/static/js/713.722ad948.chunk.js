"use strict";(self.webpackChunkpublic=self.webpackChunkpublic||[]).push([[713],{620:function(e,a,n){n(791);var r=n(184);a.Z=function(e){var a=e.children,n=e.handleSubmit,l=e.name;return(0,r.jsx)("form",{className:"flex flex-col justify-center items-center bg-slate-50 shadow-lg rounded-lg p-5 w-full h-full sm:max-w-3xl ",onSubmit:n,name:l,children:a})}},713:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});n(791);var r=n(942),l=n(434),t=n(154),s=n(849),o=n(504),i=n(871),u=n(620),m=n(184),d=function(e){var a={};return console.log(e),e.username?(e.username.length>16||e.username.length<3)&&(a.username="Debe de tener entre 3 y 16 caracteres"):a.username="Required",e.password?(e.password.length<6||e.password.length>16)&&(a.password="Debe de tener entre 3 y 16 caracteres"):a.password="Required",e.name?(e.name.length<3||e.name.length>16)&&(a.name="Debe de tener entre 3 y 16 caracteres"):a.name="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.phone?/^[0-9]{9}$/.test(e.phone)||(a.phone="Invalid phone number"):a.phone="Required",a},c=function(){var e=(0,l.I0)(),a=(0,i.s0)(),n=(0,l.v9)((function(e){return e.Forms.registerData})),c=n.name,h=n.username,p=n.password,f=n.email,g=n.phone,x=n.error,b=function(a){var n=a.target,l=n.name,t=n.value;e((0,s.D7)({name:"registerData",data:(0,r.Z)({},l,t)}))};return(0,m.jsxs)(u.Z,{name:"register",handleSubmit:function(n){n.preventDefault();var r=d({name:c,username:h,password:p,email:f,phone:g});if(0!==Object.keys(r).length)return console.log("error",r),void e((0,s.R)({name:"registerData",data:r}));e((0,s.R)({name:"registerData",data:{error:r}})),e((0,s.Bp)({name:c,username:h,password:p,email:f,phone:g})).then((function(e){return console.log(e)})),console.log("Enviado"),a("/",{replace:!0})},children:[(0,m.jsx)("h1",{className:"font-bold text-3xl",children:"Register"}),(0,m.jsxs)("div",{className:"w-full flex flex-col justify-center items-center p-4",children:[(0,m.jsx)(t.Z,{name:"name",type:"text",label:"Name",placeholder:"Nombre",value:c,handleInputChange:b,error:x.name}),(0,m.jsx)(t.Z,{name:"username",type:"text",label:"Usuario",placeholder:"Usuario",handleInputChange:b,value:h,error:x.username}),(0,m.jsx)(t.Z,{name:"password",type:"password",label:"Contrase\xf1a",placeholder:"Contrase;a",handleInputChange:b,value:p,error:x.password}),(0,m.jsx)(t.Z,{name:"email",type:"email",label:"Email",placeholder:"Email",handleInputChange:b,value:f,error:x.email}),(0,m.jsx)(t.Z,{name:"phone",type:"text",label:"Telefono",placeholder:"Telefono",handleInputChange:b,value:g,error:x.phone})]}),(0,m.jsx)("div",{className:"my-5",children:(0,m.jsxs)("p",{children:["Ya te has registrado? ",(0,m.jsx)(o.rU,{to:"/login",className:"text-blue-500 hover:text-blue-600",children:"Logeate"})]})}),(0,m.jsx)("button",{type:"submit",className:"p-3 mt-2 bg-gray-600 text-white rounded-md",children:"Enviar"})]})},h=function(){return(0,m.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,m.jsx)(c,{})})}}}]);
//# sourceMappingURL=713.722ad948.chunk.js.map