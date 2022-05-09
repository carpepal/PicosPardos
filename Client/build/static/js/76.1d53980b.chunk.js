/*! For license information please see 76.1d53980b.chunk.js.LICENSE.txt */
(self.webpackChunkpublic=self.webpackChunkpublic||[]).push([[76],{76:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(885),i=t(791),a=t(434),l=t(942),s=t(694),c=t.n(s),o=t(982),u="...",d=function(e,n){var t=n-e+1;return Array.from({length:t},(function(n,t){return t+e}))},f=t(184),h=function(e){var n=e.onPageChange,t=e.totalCount,r=e.siblingCount,a=void 0===r?1:r,s=e.currentPage,h=e.pageSize,m=e.className,x=function(e){var n=e.totalCount,t=e.pageSize,r=e.siblingCount,a=void 0===r?1:r,l=e.currentPage;return(0,i.useMemo)((function(){var e=Math.ceil(n/t);if(a+5>=e)return d(1,e);var r=Math.max(l-a,1),i=Math.min(l+a,e),s=r>2,c=i<e-2,f=1,h=e;if(!s&&c){var m=d(1,3+2*a);return[].concat((0,o.Z)(m),[u,e])}if(s&&!c){var x=d(e-(3+2*a)+1,e);return[f,u].concat((0,o.Z)(x))}if(s&&c){var g=d(r,i);return[f,u].concat((0,o.Z)(g),[u,h])}}),[n,t,a,l])}({currentPage:s,totalCount:t,siblingCount:a,pageSize:h});if(0===s||x.length<2)return null;var g=x[x.length-1];return(0,f.jsxs)("ul",{className:c()("pagination-container",(0,l.Z)({},m,m)),children:[(0,f.jsx)("li",{className:c()("pagination-item",{disabled:1===s}),onClick:function(){n(s-1)},children:(0,f.jsx)("div",{className:"arrow left"})}),x.map((function(e){return e===u?(0,f.jsx)("li",{className:"pagination-item dots",children:"\u2026"},e):(0,f.jsx)("li",{className:c()("pagination-item",{selected:e===s}),onClick:function(){return n(e)},children:e})})),(0,f.jsx)("li",{className:c()("pagination-item",{disabled:s===g}),onClick:function(){n(s+1)},children:(0,f.jsx)("div",{className:"arrow right"})})]})},m=t(640),x=t(504),g=function(e){var n,t=e.producto,r=(0,a.v9)((function(e){return e.cart})),i=r.lista,l=(r.total,(0,a.I0)()),s=null===(n=i.find((function(e){return t._id===e._id})))||void 0===n?void 0:n.cantidad;return(0,f.jsxs)("div",{className:"w-60 h-72 min-h-max mx-2 my-2  bg-white rounded-lg border border-gray-200 shadow-md hover:scale-110 dark:bg-gray-800",children:[(0,f.jsx)(x.rU,{to:"#",children:(0,f.jsx)("img",{className:"rounded-t-lg w-full h-1/2",src:null===t||void 0===t?void 0:t.image,alt:null===t||void 0===t?void 0:t.name})}),(0,f.jsxs)("div",{className:"p-5 h-1/4",children:[(0,f.jsx)(x.rU,{to:"#",children:(0,f.jsx)("h3",{className:"text-lg text-ellipsis font-bold text-gray-900 dark:text-gray-100",children:null===t||void 0===t?void 0:t.name})}),(0,f.jsxs)("p",{className:"text-gray-700 dark:text-gray-300",children:[null===t||void 0===t?void 0:t.price,"\u20ac"]})]}),(0,f.jsxs)("div",{className:"p-5 flex justify-center items-center mb-3",children:[(0,f.jsx)("button",{onClick:function(){l((0,m.r2)(t))},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"+"}),(0,f.jsx)("span",{className:"mx-2",children:0!==s&&void 0!==s?s:0}),(0,f.jsx)("button",{onClick:function(){l((0,m.jj)(t))},className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",children:"-"})]})]})},p=t(336);function v(e){var n=20*Math.random();return e[Math.floor(n)]}var j=function(){var e,n=(0,a.v9)((function(e){return e.products})),t=n.isLoading,l=n.products,s=(0,a.I0)(),c=(0,i.useState)(1),o=(0,r.Z)(c,2),u=o[0],d=o[1],m=(0,i.useMemo)((function(){var e=10*(u-1),n=e+10;return l.slice(e,n)}),[u,l]);return console.log(l,t),(0,i.useEffect)((function(){s((0,p.Xp)())}),[]),t?(0,f.jsx)("h1",{children:"Loading..."}):(0,f.jsxs)("main",{className:"flex flex-col w-screen h-full",children:[(0,f.jsx)("aside",{}),(0,f.jsxs)("section",{className:"w-screen max-h-2/6  h-2/6 flex flex-row justify-center py-4 items-center bg-gray-500",children:[(0,f.jsx)("div",{className:"w-1/2 h-full flex justify-center items-center",children:(0,f.jsx)("h1",{className:"text-2xl",children:"Recomendacion del dia"})}),(0,f.jsx)("div",{className:"w-1/2 h-full flex justify-center items-center",children:(0,f.jsx)("img",{src:null===(e=v(l))||void 0===e?void 0:e.image,alt:"producto recomendado",className:"max-h-64 object-cover"})})]}),(0,f.jsx)("section",{className:"h-1/3 w-screen flex justify-center items-center p-3",children:(0,f.jsxs)("article",{className:"w-11/12 h-full p-5 m-5  flex flex-wrap items-center ",children:[(0,f.jsx)(g,{producto:v(l)}),m.map((function(e,n){return(0,f.jsx)(g,{producto:e},n)})),(0,f.jsx)(h,{className:"w-full",currentPage:u,totalCount:l.length,pageSize:10,onPageChange:function(e){return d(e)}})]})})]})}},694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=i.apply(null,t);l&&e.push(l)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=76.1d53980b.chunk.js.map