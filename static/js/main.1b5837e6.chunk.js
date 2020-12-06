(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{210:function(e,t,a){e.exports=a(401)},215:function(e,t,a){},216:function(e,t,a){},223:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(34),l=a.n(r),c=(a(215),a(216),a(21)),i=a(22),s=a(24),m=a(23),u=a(25),d=a(44),p=a(428),f=a(438),h=a(161),g=a.n(h),y=a(165),E=a.n(y),v=a(164),b=a.n(v),N=a(163),w=a.n(N),S=a(36);function O(){var e=o.a.useState(0),t=Object(d.a)(e,2),a=t[0],n=t[1];return o.a.createElement(p.a,{className:"menu",value:a,onChange:function(e,t){n(t)},showLabels:!0},o.a.createElement(f.a,{className:"menu-item",label:"Weather Forecast",icon:o.a.createElement(g.a,null),component:S.b,to:"/weather-app/weather"}),o.a.createElement(f.a,{className:"menu-item",label:"Map",icon:o.a.createElement(w.a,null),component:S.b,to:"/weather-app/map"}),o.a.createElement(f.a,{className:"menu-item",label:"History",icon:o.a.createElement(b.a,null),component:S.b,to:"/weather-app/history"}),o.a.createElement(f.a,{className:"menu-item",label:"About",icon:o.a.createElement(E.a,null),component:S.b,to:"/weather-app/about"}))}var x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(O,null)}}]),t}(o.a.Component),j=a(429),z=a(430),k=a(431),J=a(74),B=a.n(J),W=a(166),C=(a(114),a(107)),D=a.n(C);a(222);var P=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],l=a[1],c=Object(n.useRef)(null);return Object(n.useEffect)((function(){D.a.accessToken="pk.eyJ1IjoibGFob3Vzc2luZSIsImEiOiJja2hzODZ3Y3UxbmxqMzJrNnZxOWhiZzZrIn0.Cb55NxLJnJ58Ta6Nw2qQtg";r||function(e){var t=e.setMap,a=e.mapContainer,n=new D.a.Map({container:a.current,style:"mapbox://styles/mapbox/dark-v10",center:[6.928166326175642,46.99061286692401],zoom:15.99,pitch:40,bearing:20,antialias:!0});n.on("dragend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("zoomend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("load",(function(){t(n),n.resize(),navigator.geolocation.getCurrentPosition((function(e){n.setCenter([e.coords.longitude,e.coords.latitude])}),(function(e){return console.log(e)})),n.addSource("floorplan",{type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson"}),n.addLayer({id:"room-extrusion",type:"fill-extrusion",source:"composite","source-layer":"building",paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","base_height"],"fill-extrusion-opacity":.5}})}))}({setMap:l,mapContainer:c})}),[r]),o.a.createElement("div",{ref:function(e){return c.current=e},style:{width:"80vw",height:"calc(100vh - 80px)",position:"absolute"}})},A=a(115).Map,R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=A({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(t),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Home"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(j.a,{id:"card",className:"column info"},o.a.createElement(z.a,null,o.a.createElement(k.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(k.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(B.a,{style:{fontSize:50}})),o.a.createElement("div",{className:"cardRow center"},o.a.createElement(W.a,{progress:75})))))),o.a.createElement(j.a,{id:"card2",className:"column warn"},o.a.createElement(z.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(j.a,{id:"card3",className:"column error"},o.a.createElement(z.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(P,null)))}}]),t}(n.Component),T=a(115).Map,M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=T({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),console.log("immutable object "),console.log(a.map1),console.log(a.map2),console.log(a.map1.toJS()),console.log(a.map2.toJS()),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){console.log("position"),console.log(n),t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(JSON.parse(JSON.stringify(t))),console.log(JSON.stringify(t.weather[0].description)),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Weather"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(j.a,{id:"card",className:"column info"},o.a.createElement(z.a,null,o.a.createElement(k.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(k.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(B.a,{style:{fontSize:50}})))))),o.a.createElement(j.a,{id:"card2",className:"column warn"},o.a.createElement(z.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(j.a,{id:"card3",className:"column error"},o.a.createElement(z.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(P,null)))}}]),t}(n.Component),F=a(433),I=a(437),G=a(436),K=a(432),U=a(434),H=a(435),L=a(403),Z=(a(223),a(15)),q=[],Q=function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth()+1;return a<10&&(a="0"+a),n<10&&(n="0"+n),a+"/"+n};function V(e,t,a,n,o){return{name:e,calories:t,fat:a,carbs:n,protein:o}}V("Frozen yoghurt",159,6,24,4),V("Ice cream sandwich",237,9,37,4.3),V("Eclair",262,16,24,6),V("Cupcake",305,3.7,67,4.3),V("Gingerbread",356,16,49,3.9);var Y=function(e){return{table:{minWidth:650}}},$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(t),q=t,e.setState({weather:t,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t,a,n,r,l,c,i,s=this.props.classes;return console.log(s),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"History"),o.a.createElement("div",{className:"history-row space-between"},o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Temp\xe9rature"),o.a.createElement("div",{className:"chart-value"},null===(e=q)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.temp,"\xb0"),o.a.createElement(Z.c,null,o.a.createElement(Z.b,{data:q.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0}))),o.a.createElement(Z.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:Q}),o.a.createElement(Z.a,{type:"monotone",dataKey:"temp.day",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"})))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Humidit\xe9"),o.a.createElement("div",{className:"chart-value"},null===(a=q)||void 0===a||null===(n=a.current)||void 0===n?void 0:n.humidity,"%"),o.a.createElement(Z.c,null,o.a.createElement(Z.b,{data:q.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),o.a.createElement(Z.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:Q}),o.a.createElement(Z.a,{type:"monotone",dataKey:"humidity",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"})))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Pression "),o.a.createElement("div",{className:"chart-value"},null===(r=q)||void 0===r||null===(l=r.current)||void 0===l?void 0:l.pressure," hPa"),o.a.createElement(Z.c,null,o.a.createElement(Z.b,{data:q.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorAmt",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#923CB5",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#000000",stopOpacity:0}))),o.a.createElement(Z.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:Q}),o.a.createElement(Z.a,{type:"monotone",dataKey:"pressure",stroke:"#923CB5",fillOpacity:1,fill:"url(#colorAmt)"}))))),o.a.createElement("div",{className:"history-row space-between debugBorder"},o.a.createElement(K.a,{component:L.a},o.a.createElement(F.a,{className:Y.table,size:"small","aria-label":"a dense table"},o.a.createElement(U.a,null,o.a.createElement(H.a,null,o.a.createElement(G.a,{align:"center"},"Date"),o.a.createElement(G.a,{align:"center"},"Temp\xe9rature"),o.a.createElement(G.a,{align:"center"},"Humidit\xe9"),o.a.createElement(G.a,{align:"center"},"Pression"))),o.a.createElement(I.a,null,null===(c=q)||void 0===c||null===(i=c.daily)||void 0===i?void 0:i.map((function(e){return o.a.createElement(H.a,{key:e.temp.day},o.a.createElement(G.a,{align:"center"},Q(e.dt)),o.a.createElement(G.a,{align:"center"},e.temp.day),o.a.createElement(G.a,{align:"center"},e.humidity),o.a.createElement(G.a,{align:"center"},e.pressure))})))))))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"About"))}}]),t}(n.Component),X=a(37);var ee=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"}),o.a.createElement("div",{className:"container"},o.a.createElement("main",null,o.a.createElement(x,null),o.a.createElement(X.c,null,o.a.createElement(X.a,{path:"/weather-app",component:R,exact:!0}),o.a.createElement(X.a,{path:"/weather-app/weather",component:M}),o.a.createElement(X.a,{path:"/weather-app/map",component:P}),o.a.createElement(X.a,{path:"/weather-app/history",component:$}),o.a.createElement(X.a,{path:"/weather-app/about",component:_})))))},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(S.a,null,o.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()}},[[210,1,2]]]);
//# sourceMappingURL=main.1b5837e6.chunk.js.map