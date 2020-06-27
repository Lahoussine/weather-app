(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=(a(84),a(85),a(86),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),d=a(210),p=a(213),h=a(211),f=a(22),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{disablePadding:!0,dense:!0},r.a.createElement(p.a,{button:!0},r.a.createElement(h.a,null,"BLALSA")),r.a.createElement(f.b,{to:"/weather-app"},r.a.createElement(p.a,{button:!0},r.a.createElement(h.a,null,"Home"))),r.a.createElement(f.b,{to:"/weather-app/weather"},r.a.createElement(p.a,{button:!0},r.a.createElement(h.a,null,"Weather Forecast"))),r.a.createElement(f.b,{to:"/weather-app/settings"},r.a.createElement(p.a,{button:!0},r.a.createElement(h.a,null,"Settings"))),r.a.createElement(f.b,{to:"/weather-app/about"},r.a.createElement(p.a,{button:!0},r.a.createElement(h.a,null,"About"))))}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),t}(r.a.Component),E=a(214),v=a(212),y=a(41),w=a(76),O=a.n(w),j=a(32),N=a(40),S=(a(91),a(6)),D=a(74);function k(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1;t.getFullYear();return a<10&&(a="0"+a),n<10&&(n="0"+n),n+"/"+a}function B(){var e=new Date;return[k((new Date).setDate(e.getDate()-6)),k((new Date).setDate(e.getDate()-5)),k((new Date).setDate(e.getDate()-4)),k((new Date).setDate(e.getDate()-3)),k((new Date).setDate(e.getDate()-2)),k((new Date).setDate(e.getDate()-1)),k((new Date).getDate())]}var C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t={labels:B(),datasets:[(e={label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)"},Object(S.a)(e,"backgroundColor","rgba(62, 152, 199, 1)"),Object(S.a)(e,"borderColor","rgba(62, 152, 199, 1)"),Object(S.a)(e,"borderCapStyle","butt"),Object(S.a)(e,"borderDash",[]),Object(S.a)(e,"borderDashOffset",0),Object(S.a)(e,"borderJoinStyle","miter"),Object(S.a)(e,"pointBorderColor","rgba(75,192,192,1)"),Object(S.a)(e,"pointBackgroundColor","#fff"),Object(S.a)(e,"pointBorderWidth",1),Object(S.a)(e,"pointHoverRadius",5),Object(S.a)(e,"pointHoverBackgroundColor","rgba(75,192,192,1)"),Object(S.a)(e,"pointHoverBorderColor","rgba(220,220,220,1)"),Object(S.a)(e,"pointHoverBorderWidth",2),Object(S.a)(e,"pointRadius",1),Object(S.a)(e,"pointHitRadius",10),Object(S.a)(e,"data",[30,28,27,18,22,26,32]),e)]};return r.a.createElement("div",null,r.a.createElement("h2",null,"Temperature history"),r.a.createElement(D.a,{data:t}))}}]),t}(n.Component),x=a(184).Map,W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=x({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),console.log("immutable object "),console.log(a.map1),console.log(a.map2),console.log(a.map1.toJS()),console.log(a.map2.toJS()),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){console.log("position"),console.log(n),t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(JSON.parse(JSON.stringify(t))),console.log(JSON.stringify(t.weather[0].description)),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Home"),r.a.createElement("div",{className:"row space-between debugBorderFushia"},r.a.createElement(E.a,{id:"card",className:"column info"},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},r.a.createElement("div",null,"             Information Alert      ")),r.a.createElement(y.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},r.a.createElement("div",{className:"valueable "},r.a.createElement("div",{className:"cardRow value "},"5"),r.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"title"},"This is a Title"),r.a.createElement("div",{className:"description"},"Description: This is a short description"))),r.a.createElement("div",{className:"cardRow icon"},r.a.createElement(O.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"cardRow center"},r.a.createElement(j.a,{progress:75})))))),r.a.createElement(E.a,{id:"card2",className:"column warn"},r.a.createElement(v.a,null,r.a.createElement(y.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),r.a.createElement(y.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),r.a.createElement(y.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),r.a.createElement(y.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),r.a.createElement(E.a,{id:"card3",className:"column error"},r.a.createElement(v.a,null,r.a.createElement(y.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),r.a.createElement(y.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),r.a.createElement(y.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),r.a.createElement(y.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),r.a.createElement("div",{className:"row center debugBorderGreen"},r.a.createElement(E.a,{className:"column-full "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},r.a.createElement(C,null)))),r.a.createElement(E.a,{className:"column "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},"Humidit\xe9 ",void 0===this.state.weather.main?r.a.createElement("div",null,"chargement"):r.a.createElement(N.a,{value:this.state.weather.main.humidity,text:this.state.weather.main.humidity+"%",styles:Object(N.b)({textColor:"red",pathColor:"turquoise",trailColor:"gold"})})))),r.a.createElement(E.a,{className:"column "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},"Temperature ",void 0===this.state.weather.main?r.a.createElement("div",null,"chargement"):r.a.createElement(N.a,{value:this.state.weather.main.temp,text:this.state.weather.main.temp+"\xb0"})))),r.a.createElement(E.a,{className:"column "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},r.a.createElement(j.a,{progress:33})))),r.a.createElement(E.a,{className:"column "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},r.a.createElement(j.a,{progress:33})))),"          ",r.a.createElement(E.a,{className:"column "},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:"span"},r.a.createElement(j.a,{progress:33}))))))}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},">",r.a.createElement("h2",null,"Weather"),r.a.createElement("p",null,"fvgkdfhvgkfjhvkfhvkfvkf dbfbdfbbbdb dfbdffdbgfbdb bbf al"))}}]),t}(n.Component),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Settings"))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"About"))}}]),t}(n.Component),R=a(23);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement(g,null),r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/weather-app",component:W,exact:!0}),r.a.createElement(R.a,{path:"/weather-app/weather",component:J}),r.a.createElement(R.a,{path:"/weather-app/settings",component:z}),r.a.createElement(R.a,{path:"/weather-app/about",component:A})))))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(f.a,null,r.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()},79:function(e,t,a){e.exports=a(187)},84:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.657c1fa4.chunk.js.map