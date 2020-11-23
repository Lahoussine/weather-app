(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{243:function(e,t,a){e.exports=a(437)},248:function(e,t,a){},249:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},250:function(e,t,a){},251:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(16),l=a.n(r),c=(a(248),a(249),a(250),a(251),a(20)),i=a(21),s=a(23),m=a(22),u=a(24),p=a(473),d=a(442),g=a(476),f=a(29),h=(o.a.Component,a(46)),y=a(91),E=a(489),v=a(479),b=a(477),w=a(478),N=a(100),S=a(94),O=a.n(S),x=a(128),D=(a(143),a(144),a(18)),j=a(193);function J(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1;t.getFullYear();return a<10&&(a="0"+a),n<10&&(n="0"+n),n+"/"+a}function z(){console.log("**************"),console.log(new Date(15933996e5)),console.log(new Date(15934032e5)),console.log("**************");var e=new Date;return[J((new Date).setDate(e.getDate()-6)),J((new Date).setDate(e.getDate()-5)),J((new Date).setDate(e.getDate()-4)),J((new Date).setDate(e.getDate()-3)),J((new Date).setDate(e.getDate()-2)),J((new Date).setDate(e.getDate()-1)),J((new Date).getDate())]}n.Component,a(191);var B=a(78),C=a.n(B);a(331);var k=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),r=a[0],l=a[1],c=Object(n.useRef)(null);return Object(n.useEffect)((function(){C.a.accessToken="pk.eyJ1IjoibGFob3Vzc2luZSIsImEiOiJja2hzODZ3Y3UxbmxqMzJrNnZxOWhiZzZrIn0.Cb55NxLJnJ58Ta6Nw2qQtg";r||function(e){var t=e.setMap,a=e.mapContainer,n=new C.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[6.928166326175642,46.99061286692401],zoom:15.99,pitch:40,bearing:20,antialias:!0});n.on("dragend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("zoomend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("load",(function(){t(n),n.resize(),navigator.geolocation.getCurrentPosition((function(e){n.setCenter([e.coords.longitude,e.coords.latitude])}),(function(e){return console.log(e)})),n.addSource("floorplan",{type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson"}),n.addLayer({id:"room-extrusion",type:"fill-extrusion",source:"composite","source-layer":"building",paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","base_height"],"fill-extrusion-opacity":.5}})}))}({setMap:l,mapContainer:c})}),[r]),o.a.createElement("div",{ref:function(e){return c.current=e},style:{width:"80vw",height:"calc(100vh - 80px)",position:"absolute"}})},W=a(161).Map,P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=W({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),console.log("immutable object "),console.log(a.map1),console.log(a.map2),console.log(a.map1.toJS()),console.log(a.map2.toJS()),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){console.log("position"),console.log(n),t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(JSON.parse(JSON.stringify(t))),console.log(JSON.stringify(t.weather[0].description)),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Home"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(b.a,{id:"card",className:"column info"},o.a.createElement(w.a,null,o.a.createElement(N.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(N.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(O.a,{style:{fontSize:50}})),o.a.createElement("div",{className:"cardRow center"},o.a.createElement(x.a,{progress:75})))))),o.a.createElement(b.a,{id:"card2",className:"column warn"},o.a.createElement(w.a,null,o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(b.a,{id:"card3",className:"column error"},o.a.createElement(w.a,null,o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(k,null)))}}]),t}(n.Component),A=(o.a.Component,a(480)),R=a(481),F=a(482),M=a(196),T=a.n(M),I=a(199),G=a.n(I),K=a(198),U=a.n(K),L=a(197),Z=a.n(L),H=Object(A.a)({menu:{width:500,background:"#282c34"},menuItem:{color:"white"}});function q(){H();var e=o.a.useState(0),t=Object(h.a)(e,2),a=t[0],n=t[1];return o.a.createElement(R.a,{className:"menu",value:a,onChange:function(e,t){n(t)},showLabels:!0},o.a.createElement(F.a,{className:"menu-item",label:"Weather Forecast",icon:o.a.createElement(T.a,null),component:f.b,to:"/weather-app/weather"}),o.a.createElement(F.a,{className:"menu-item",label:"Map",icon:o.a.createElement(Z.a,null),component:f.b,to:"/weather-app/map"}),o.a.createElement(F.a,{className:"menu-item",label:"History",icon:o.a.createElement(U.a,null),component:f.b,to:"/weather-app/history"}),o.a.createElement(F.a,{className:"menu-item",label:"About",icon:o.a.createElement(G.a,null),component:f.b,to:"/weather-app/about"}))}var Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(q,null)}}]),t}(o.a.Component),Q=a(161).Map,V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=Q({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),console.log("immutable object "),console.log(a.map1),console.log(a.map2),console.log(a.map1.toJS()),console.log(a.map2.toJS()),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){console.log("position"),console.log(n),t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(JSON.parse(JSON.stringify(t))),console.log(JSON.stringify(t.weather[0].description)),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Weather"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(b.a,{id:"card",className:"column info"},o.a.createElement(w.a,null,o.a.createElement(N.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(N.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(O.a,{style:{fontSize:50}})))))),o.a.createElement(b.a,{id:"card2",className:"column warn"},o.a.createElement(w.a,null,o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(b.a,{id:"card3",className:"column error"},o.a.createElement(w.a,null,o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(N.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(N.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(k,null)))}}]),t}(n.Component),$=a(484),_=a(488),X=a(487),ee=a(483),te=a(485),ae=a(486),ne=a(439),oe=a(35);var re=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];function le(e,t,a,n,o){return{name:e,calories:t,fat:a,carbs:n,protein:o}}var ce=[le("Frozen yoghurt",159,6,24,4),le("Ice cream sandwich",237,9,37,4.3),le("Eclair",262,16,24,6),le("Cupcake",305,3.7,67,4.3),le("Gingerbread",356,16,49,3.9)],ie=(Object(A.a)({table:{minWidth:650}}),function(e){return{table:{minWidth:650}}}),se=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return console.log(e),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"History"),o.a.createElement("div",{className:"history-row space-between"},o.a.createElement("div",{className:"column card-dark"},o.a.createElement(oe.b,{width:500,height:300,data:re,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0}))),o.a.createElement(oe.d,{dataKey:"name",tick:{fontSize:10}}),o.a.createElement(oe.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"}))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement(oe.c,{width:"80%",height:"80%"},o.a.createElement(oe.b,{data:re,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),o.a.createElement(oe.d,{dataKey:"name",tick:{fontSize:10}}),o.a.createElement(oe.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"})))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement(oe.c,{width:"80%",height:"80%"},o.a.createElement(oe.b,{data:re,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorAmt",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#923CB5",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#000000",stopOpacity:0}))),o.a.createElement(oe.d,{dataKey:"name",tick:{fontSize:10}}),o.a.createElement(oe.a,{type:"monotone",dataKey:"amt",stroke:"#923CB5",fillOpacity:1,fill:"url(#colorAmt)"}))))),o.a.createElement("div",{className:"row space-between debugBorder"},o.a.createElement(ee.a,{component:ne.a},o.a.createElement($.a,{className:ie.table,size:"small","aria-label":"a dense table"},o.a.createElement(te.a,null,o.a.createElement(ae.a,null,o.a.createElement(X.a,null,"Dessert (100g serving)"),o.a.createElement(X.a,{align:"right"},"Calories"),o.a.createElement(X.a,{align:"right"},"Fat\xa0(g)"),o.a.createElement(X.a,{align:"right"},"Carbs\xa0(g)"),o.a.createElement(X.a,{align:"right"},"Protein\xa0(g)"))),o.a.createElement(_.a,null,ce.map((function(e){return o.a.createElement(ae.a,{key:e.name},o.a.createElement(X.a,{component:"th",scope:"row"},e.name),o.a.createElement(X.a,{align:"right"},e.calories),o.a.createElement(X.a,{align:"right"},e.fat),o.a.createElement(X.a,{align:"right"},e.carbs),o.a.createElement(X.a,{align:"right"},e.protein))})))))))}}]),t}(n.Component),me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"About"))}}]),t}(n.Component),ue=a(53);var pe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"}),o.a.createElement("div",{className:"container"},o.a.createElement("main",null,o.a.createElement(Y,null),o.a.createElement(ue.c,null,o.a.createElement(ue.a,{path:"/weather-app",component:P,exact:!0}),o.a.createElement(ue.a,{path:"/weather-app/weather",component:V}),o.a.createElement(ue.a,{path:"/weather-app/map",component:k}),o.a.createElement(ue.a,{path:"/weather-app/history",component:se}),o.a.createElement(ue.a,{path:"/weather-app/about",component:me})))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(f.a,null,o.a.createElement(pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()}},[[243,1,2]]]);
//# sourceMappingURL=main.f4b306db.chunk.js.map