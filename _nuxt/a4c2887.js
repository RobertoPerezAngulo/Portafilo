(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{405:function(t,e,r){"use strict";r.r(e);var n=r(486),o=r(481),c=r(476),l=r(494),d=r(398),f=r(399),m=r(389),v=r(363),_=r(489),h=r(482),O=(r(26),r(23),r(28),r(6),r(33),r(27),r(34),r(11));r(25);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"Header",data:function(){return{items:[{name:"Home",icon:"mdi-home",dir:"/"},{name:"About",icon:"mdi-account",dir:"/about"},{name:"Contact",icon:"mdi-email",dir:"/contact"},{name:"Projects",icon:"mdi-folder",dir:"/projects"}]}},methods:{gitHub:function(){window.open("https://github.com/RobertoPerezAngulo","_blank")},DescargaCV:function(){var link=document.createElement("a");link.href="https://github.com/RobertoPerezAngulo/Portafilo/raw/master/root/CV_JoseRobertoPerezAngulo_En.pdf",link.download="file.pdf",link.dispatchEvent(new MouseEvent("click"))}}},k=r(83),component=Object(k.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{attrs:{color:"primary",dark:""}},[e(l.a,{attrs:{fluid:""}},[e(_.a,{scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[e(o.a,t._g({},n))]}}])},[t._v(" "),e(f.a,t._l(t.items,(function(r,i){return e(m.a,{key:i},[e(v.a,[e("nuxt-link",{staticClass:"black--text",attrs:{to:r.dir}},[t._v(t._s(r.name))])],1)],1)})),1)],1),t._v(" "),e(h.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[e(c.a,t._g({attrs:{icon:""},on:{click:function(e){return t.gitHub()}}},w({},n)),[e(d.a,[t._v("mdi-github")])],1)]}}])},[t._v(" "),e("span",[t._v("Visita mi gitHub, es gratis!")])]),t._v(" "),e(h.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[e(c.a,t._g({attrs:{icon:""},on:{click:function(e){return t.DescargaCV()}}},w({},n)),[e(d.a,[t._v("mdi-file-document")])],1)]}}])},[t._v(" "),e("span",[t._v("Descarga mi CV")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,r){"use strict";r.r(e);var n=r(476),o=r(402),c=r(362),l=r(483),d=r(475),f=r(484),m=(r(75),{data:function(){return{loading:!1,selection:1}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}}),v=r(83),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[e(o.a,[e(c.b,{staticClass:"headline"},[t._v("Contactame")]),t._v(" "),e(c.a,[e(l.a,[e(d.a,{attrs:{label:"Nombre",required:""}}),t._v(" "),e(d.a,{attrs:{label:"Correo",required:""}}),t._v(" "),e(f.a,{attrs:{label:"Mensaje",required:""}}),t._v(" "),e(n.a,{attrs:{color:"primary"},on:{click:t.reserve}},[t._v("Enviar")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,r){"use strict";r.r(e);var n=r(83),component=Object(n.a)({},(function(){var t=this._self._c;return t("div",[t("Header"),this._v(" "),t("Home")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(405).default,Home:r(406).default})}}]);