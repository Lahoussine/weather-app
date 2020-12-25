(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{180:function(e,t,a){e.exports=a.p+"static/media/temperature.91cd32ac.svg"},181:function(e,t,a){e.exports=a.p+"static/media/humidity.3560569e.svg"},182:function(e,t,a){e.exports=a.p+"static/media/pressure.b65b996a.svg"},243:function(e,t,a){e.exports=a(446)},248:function(e,t,a){},249:function(e,t,a){},256:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){var n={"./01d.svg":436,"./02d.svg":437,"./03d.svg":438,"./04d.svg":439,"./10d.svg":440,"./13d.svg":441,"./13dbis.svg":442,"./humidity.svg":181,"./pressure.svg":182,"./temperature.svg":180,"./wind1.svg":443,"./wind2.svg":444};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=435},436:function(e,t,a){e.exports=a.p+"static/media/01d.b3ed89e4.svg"},437:function(e,t,a){e.exports=a.p+"static/media/02d.069d5c92.svg"},438:function(e,t,a){e.exports=a.p+"static/media/03d.afeac98e.svg"},439:function(e,t,a){e.exports=a.p+"static/media/04d.afeac98e.svg"},440:function(e,t,a){e.exports=a.p+"static/media/10d.b0a54491.svg"},441:function(e,t,a){e.exports=a.p+"static/media/13d.46e57d3b.svg"},442:function(e,t,a){e.exports=a.p+"static/media/13dbis.c204fa6b.svg"},443:function(e,t,a){e.exports=a.p+"static/media/wind1.bd6a00c1.svg"},444:function(e,t,a){e.exports=a.p+"static/media/wind2.289edfe1.svg"},445:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),l=a.n(r),i=(a(248),a(249),a(25)),c=a(26),s=a(28),m=a(27),u=a(29),d=a(21),p=a(464),f=a(476),g=a(184),v=a.n(g),h=a(187),E=a.n(h),y=a(186),b=a.n(y),N=a(185),S=a.n(N),w=a(41);function x(){var e=o.a.useState(0),t=Object(d.a)(e,2),a=t[0],n=t[1];return o.a.createElement(p.a,{className:"menu",style:{width:"100vw"},value:a,onChange:function(e,t){n(t)},showLabels:!0},o.a.createElement(f.a,{className:"menu-item",label:"Weather Forecast",icon:o.a.createElement(v.a,null),component:w.b,to:"/weather-app/weather"}),o.a.createElement(f.a,{className:"menu-item",label:"Map",icon:o.a.createElement(S.a,null),component:w.b,to:"/weather-app/map"}),o.a.createElement(f.a,{className:"menu-item",label:"History",icon:o.a.createElement(b.a,null),component:w.b,to:"/weather-app/history"}),o.a.createElement(f.a,{className:"menu-item",label:"About",icon:o.a.createElement(E.a,null),component:w.b,to:"/weather-app/about"}))}var O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(x,null)}}]),t}(o.a.Component),j=a(465),A=a(466),k=a(467),z=a(88),C=a.n(z),B=a(188),J=(a(135),a(126)),D=a.n(J);a(255);var W=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],l=a[1],i=Object(n.useRef)(null);return Object(n.useEffect)((function(){D.a.accessToken="pk.eyJ1IjoibGFob3Vzc2luZSIsImEiOiJja2hzODZ3Y3UxbmxqMzJrNnZxOWhiZzZrIn0.Cb55NxLJnJ58Ta6Nw2qQtg";r||function(e){var t=e.setMap,a=e.mapContainer,n=new D.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[6.928166326175642,46.99061286692401],zoom:15.99,pitch:40,bearing:20,antialias:!0});n.on("dragend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("zoomend",(function(){console.log(n.getCenter()),console.log(n.getBearing()),console.log(n.getPitch())})),n.on("load",(function(){t(n),n.resize(),navigator.geolocation.getCurrentPosition((function(e){n.setCenter([e.coords.longitude,e.coords.latitude])}),(function(e){return console.log(e)})),n.addSource("floorplan",{type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson"}),n.addLayer({id:"room-extrusion",type:"fill-extrusion",source:"composite","source-layer":"building",paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","base_height"],"fill-extrusion-opacity":.5}})}))}({setMap:l,mapContainer:i})}),[r]),o.a.createElement("div",{ref:function(e){return i.current=e},style:{width:"50vw",height:"calc(50vh - 80px)",position:"absolute"}})},P=a(136).Map,R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=P({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(t),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Home"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(j.a,{id:"card",className:"column info"},o.a.createElement(A.a,null,o.a.createElement(k.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(k.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(C.a,{style:{fontSize:50}})),o.a.createElement("div",{className:"cardRow center"},o.a.createElement(B.a,{progress:75})))))),o.a.createElement(j.a,{id:"card2",className:"column warn"},o.a.createElement(A.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(j.a,{id:"card3",className:"column error"},o.a.createElement(A.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(W,null)))}}]),t}(n.Component),T=a(136).Map,F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a.blabla="blabla",a.map1=T({a:1,b:2,c:3}),a.map2=a.map1.set("b",50),console.log("immutable object "),console.log(a.map1),console.log(a.map2),console.log(a.map1.toJS()),console.log(a.map2.toJS()),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Weather Data Retrieval...");var t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){console.log("position"),console.log(n),t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){console.log("----weather data object in promise-------"),console.log(JSON.parse(JSON.stringify(t))),console.log(JSON.stringify(t.weather[0].description)),e.setState({weather:t,temp:t.main.temp,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){console.log("render");var e={fontSize:24},t={marginBottom:12};return console.log(JSON.stringify(e.fontSize)),console.log("weather json object"),console.log(this.state),console.log(JSON.stringify(this.state.weather.main)),void 0===this.state.weather.main?console.log("loading..."):console.log(this.state.weather.main.temp),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Weather"),o.a.createElement("div",{className:"row space-between debugBorderFushia"},o.a.createElement(j.a,{id:"card",className:"column info"},o.a.createElement(A.a,null,o.a.createElement(k.a,{component:"span",style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},o.a.createElement("div",null,"             Information Alert      ")),o.a.createElement(k.a,{component:"span",className:JSON.stringify(t),gutterBottom:!0},o.a.createElement("div",{className:"valueable "},o.a.createElement("div",{className:"cardRow value "},"5"),o.a.createElement("div",{className:"cardRow central fix debugBorderFushia"},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"title"},"This is a Title"),o.a.createElement("div",{className:"description"},"Description: This is a short description"))),o.a.createElement("div",{className:"cardRow icon"},o.a.createElement(C.a,{style:{fontSize:50}})))))),o.a.createElement(j.a,{id:"card2",className:"column warn"},o.a.createElement(A.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 2"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 2"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 2"))),o.a.createElement(j.a,{id:"card3",className:"column error"},o.a.createElement(A.a,null,o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"primary",gutterBottom:!0},"Word of the Day Primary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"secondary",gutterBottom:!0},"Word of the Day Secondary 3"),o.a.createElement(k.a,{style:{fontSize:JSON.stringify(e.fontSize)+"px"},color:"textPrimary",gutterBottom:!0},"Word of the Day textPrimary 3"),o.a.createElement(k.a,{className:JSON.stringify(t),color:"textSecondary",gutterBottom:!0},"Word of the Day textSecondary 3")))),o.a.createElement("div",{className:"row space-between center map debugBorderGreen"},o.a.createElement(W,null)))}}]),t}(n.Component),M=a(470),I=a(472),U=a(473),L=a(448),G=(a(256),a(18)),V=a(475),H=a(477),K=a(469),Z=a(471),_=a(468),q=(a(434),a(198)),Q=a.n(q);var Y=function(e){var t,n,r,l,i=e.row;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-row space-between"},o.a.createElement("div",{className:"detail-column"},o.a.createElement("div",{className:"detail-row2"},o.a.createElement("p",null,Q()(1e3*(null===i||void 0===i?void 0:i.dt)).format("DD/MM"))),o.a.createElement("div",{className:"detail-row2"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("img",{src:a(180),alt:"temperature",style:{marginRight:5,width:35}}),o.a.createElement("div",{style:{marginTop:5,marginRight:15,marginBottom:0,marginLeft:0}},null===i||void 0===i||null===(t=i.temp)||void 0===t?void 0:t.min,"\xb0"),o.a.createElement("div",{style:{marginTop:5,marginRight:15,marginBottom:0,marginLeft:0}},null===i||void 0===i||null===(n=i.temp)||void 0===n?void 0:n.max,"\xb0")))),o.a.createElement("div",{className:"detail-column"},o.a.createElement("img",{src:a(435)("./"+(null===i||void 0===i||null===(r=i.weather)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.icon)+".svg"),alt:"snowflake"})),o.a.createElement("div",{className:"detail-column"},o.a.createElement("div",{className:"detail-column2"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("img",{src:a(181),alt:"humidity",style:{marginRight:24,width:35}}),o.a.createElement("div",{style:{marginTop:7}},null===i||void 0===i?void 0:i.humidity,"%")),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("img",{src:a(182),alt:"pressure",style:{marginRight:24,width:35}}),o.a.createElement("div",{style:{marginTop:7}},null===i||void 0===i?void 0:i.pressure," hPa"))))))},$=a(43),X=(a(445),"http://www.w3.org/2000/svg");function ee(e,t,a,n,o){var r=document.createElementNS(X,"line");r.setAttributeNS(null,"x1",e),r.setAttributeNS(null,"y1",t),r.setAttributeNS(null,"x2",a),r.setAttributeNS(null,"y2",n),r.setAttributeNS(null,"stroke","grey"),r.setAttributeNS(null,"stroke-width",1),r.setAttributeNS(null,"stroke-opacity",.5),o.appendChild(r)}function te(e,t,a,n){var o=document.createElementNS(X,"text");o.setAttributeNS(null,"x",e),o.setAttributeNS(null,"y",t),o.setAttributeNS(null,"font-size","20px"),o.setAttributeNS(null,"font-family","Helvetica"),o.setAttributeNS(null,"fill","white");var r=document.createTextNode(a);o.appendChild(r),n.appendChild(o)}var ae=function(e){var t=Object(n.useState)(e),a=Object(d.a)(t,2);return a[0],a[1],Object(n.useRef)(),o.a.createElement(o.a.Fragment,null,o.a.createElement("svg",{id:"compass",ref:function(e){var t=document.createElementNS(X,"polygon");t.setAttributeNS(null,"points","150,0 155,12 145,12"),t.setAttributeNS(null,"fill","red"),e.appendChild(t);var a,n,o=document.createElementNS(X,"circle");o.setAttributeNS(null,"cx",150),o.setAttributeNS(null,"cy",150),o.setAttributeNS(null,"r",20),o.setAttributeNS(null,"fill","white"),o.setAttributeNS(null,"fill-opacity",.1),e.appendChild(o),ee(150,100,150,200,e),ee(100,150,200,150,e),te(143,72,"N",e),te(228,158,"E",e),te(143,242,"S",e),te(58,158,"W",e);for(var r=0;r<360;r+=2){var l="grey";0==r||r%30==0?(a=3,l="white",n=50):(a=1,n=45);var i=document.createElementNS(X,"line");if(i.setAttributeNS(null,"x1",150),i.setAttributeNS(null,"y1",30),i.setAttributeNS(null,"x2",150),i.setAttributeNS(null,"y2",n),i.setAttributeNS(null,"stroke",l),i.setAttributeNS(null,"stroke-width",a),i.setAttributeNS(null,"transform","rotate("+r+", 150, 150)"),e.appendChild(i),r%30==0){var c=document.createElementNS(X,"text");r>100?c.setAttributeNS(null,"x",140):r>0?c.setAttributeNS(null,"x",144):c.setAttributeNS(null,"x",147),c.setAttributeNS(null,"y",24),c.setAttributeNS(null,"font-size","11px"),c.setAttributeNS(null,"font-family","Helvetica"),c.setAttributeNS(null,"fill","grey"),c.setAttributeNS(null,"style","letter-spacing:1.0"),c.setAttributeNS(null,"transform","rotate("+r+", 150, 150)");var s=document.createTextNode(r);c.appendChild(s),e.appendChild(c)}}},width:"300",height:"300",xmlns:"http://www.w3.org/2000/svg"}))};var ne=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,null,o.a.createElement($.a.Item,null,o.a.createElement("div",{className:"main"},o.a.createElement("div",null,"Wind"),o.a.createElement(ae,null)),o.a.createElement($.a.Caption,null,o.a.createElement("div",{className:"carousel-item"},o.a.createElement("div",null,"Vitesse Vent"),o.a.createElement("div",null,"Direction Vent")))),o.a.createElement($.a.Item,null,o.a.createElement("div",{className:"main"},o.a.createElement("div",null,"UV")),o.a.createElement($.a.Caption,null,o.a.createElement("div",{className:"carousel-item"},o.a.createElement("div",null,"UV")))),o.a.createElement($.a.Item,null,o.a.createElement("div",{className:"main"},o.a.createElement("div",null,"Pollution")),o.a.createElement($.a.Caption,null,o.a.createElement("div",{className:"carousel-item"},o.a.createElement("div",null,"Visibilit\xe9"))))))};var oe=function(e){var t=e.row,a=o.a.useState(!1),n=Object(d.a)(a,2),r=n[0],l=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,null,o.a.createElement(K.a,{size:"medium",component:"th",scope:"row",onClick:function(){return l(!r)}},o.a.createElement(Y,{key:t.dt,row:t}))),o.a.createElement(_.a,null,o.a.createElement(K.a,{style:{paddingBottom:0,paddingTop:0,paddingLeft:0},colSpan:6},o.a.createElement(H.a,{in:r,timeout:"auto",unmountOnExit:!0},o.a.createElement(V.a,{margin:1},o.a.createElement(k.a,{variant:"h6",gutterBottom:!0,component:"div"},"Detail"),o.a.createElement(M.a,{size:"small"},o.a.createElement(Z.a,null,o.a.createElement(_.a,null,o.a.createElement(K.a,{align:"center"},"In progress..."))),o.a.createElement(I.a,null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(ne,null))))))))))},re=[],le=function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth()+1;return a<10&&(a="0"+a),n<10&&(n="0"+n),a+"/"+n};function ie(e,t,a,n,o){return{name:e,calories:t,fat:a,carbs:n,protein:o}}ie("Frozen yoghurt",159,6,24,4),ie("Ice cream sandwich",237,9,37,4.3),ie("Eclair",262,16,24,6),ie("Cupcake",305,3.7,67,4.3),ie("Gingerbread",356,16,49,3.9);var ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weather:[],position:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=null,a=null;navigator.geolocation.getCurrentPosition((function(n){t=n.coords.latitude,a=n.coords.longitude,fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&appid=526309393592f5cf6ed361609dfd8e78").then((function(e){return e.json()})).then((function(t){re=t,e.setState({weather:t,position:n})})).catch(console.log("error"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t,a,n,r,l,i,c;this.props.classes;return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"History"),o.a.createElement("div",{className:"history-row space-between"},o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Temp\xe9rature"),o.a.createElement("div",{className:"chart-value"},null===(e=re)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.temp,"\xb0"),o.a.createElement(G.c,null,o.a.createElement(G.b,{data:re.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0}))),o.a.createElement(G.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:le}),o.a.createElement(G.a,{type:"monotone",dataKey:"temp.day",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"})))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Humidit\xe9"),o.a.createElement("div",{className:"chart-value"},null===(a=re)||void 0===a||null===(n=a.current)||void 0===n?void 0:n.humidity,"%"),o.a.createElement(G.c,null,o.a.createElement(G.b,{data:re.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),o.a.createElement(G.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:le}),o.a.createElement(G.a,{type:"monotone",dataKey:"humidity",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"})))),o.a.createElement("div",{className:"column card-dark"},o.a.createElement("div",{className:"chart-title"},"Pression "),o.a.createElement("div",{className:"chart-value"},null===(r=re)||void 0===r||null===(l=r.current)||void 0===l?void 0:l.pressure," hPa"),o.a.createElement(G.c,null,o.a.createElement(G.b,{data:re.daily,margin:{top:0,right:-20,left:0,bottom:15}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorAmt",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#923CB5",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#000000",stopOpacity:0}))),o.a.createElement(G.d,{dataKey:"dt",tick:{fontSize:10},tickFormatter:le}),o.a.createElement(G.a,{type:"monotone",dataKey:"pressure",stroke:"#923CB5",fillOpacity:1,fill:"url(#colorAmt)"}))))),o.a.createElement("div",{className:"history-row space-between fit-content"},o.a.createElement(U.a,{component:L.a},o.a.createElement(M.a,null,o.a.createElement(I.a,null,null===(i=re)||void 0===i||null===(c=i.daily)||void 0===c?void 0:c.map((function(e){return o.a.createElement(oe,{key:e.dt,row:e})})))))))}}]),t}(n.Component),se=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"About"))}}]),t}(n.Component),me=a(12);var ue=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("main",null,o.a.createElement(O,null),o.a.createElement(me.c,null,o.a.createElement(me.a,{path:"/weather-app",component:R,exact:!0}),o.a.createElement(me.a,{path:"/weather-app/weather",component:F}),o.a.createElement(me.a,{path:"/weather-app/map",component:W}),o.a.createElement(me.a,{path:"/weather-app/history",component:ce}),o.a.createElement(me.a,{path:"/weather-app/about",component:se})))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(w.a,null,o.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(t,e)}))}}()}},[[243,1,2]]]);
//# sourceMappingURL=main.693a3462.chunk.js.map