(this["webpackJsonpsakura-stamp"]=this["webpackJsonpsakura-stamp"]||[]).push([[0],{43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=a(17),o=a(22),d=Object(o.b)({name:"talk",initialState:{name:"\u516b\u6728\u7f8e\u6a39",messages:[]},reducers:{reset:function(e){e.messages=[]},appendMessage:function(e,t){t.payload.id=e.messages.length,t.payload.time="20:38",e.messages.push(t.payload)}}}),l=Object(o.a)({reducer:{talk:d.reducer}}),j=s.c,u=(a(43),a(72)),b=a(46),p=a(62),h=a(74),g=a(64),m=a(65),x=a(73),O=a(67),f=a(66),v=a(68),k=a(69),w=a(2),y=Object(p.a)((function(e){return Object(h.a)({bar:{backgroundColor:"#234"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontWeight:700}})})),N=function(){var e=y(),t=j((function(e){return e.talk.name}));return Object(w.jsx)(g.a,{position:"static",className:e.bar,children:Object(w.jsxs)(m.a,{variant:"dense",children:[Object(w.jsx)(x.a,{edge:"start",className:e.menuButton,color:"inherit",children:Object(w.jsx)(f.a,{})}),Object(w.jsx)(O.a,{variant:"body1",className:e.title,children:t}),Object(w.jsx)(x.a,{color:"inherit",children:Object(w.jsx)(v.a,{})}),Object(w.jsx)(x.a,{color:"inherit",children:Object(w.jsx)(k.a,{})})]})})},W=a(70),C=Object(p.a)((function(){return Object(h.a)({grid:{padding:4}})})),S=function(e){var t=e.message,a=C();return"left"===t.side?Object(w.jsx)(W.a,{container:!0,justify:"center",children:Object(w.jsxs)(O.a,{variant:"body1",children:[t.text," ",t.id]})}):Object(w.jsx)(W.a,{item:!0,container:!0,justify:"flex-end",xs:12,className:a.grid,children:Object(w.jsx)("img",{width:"40%",src:"stamps/".concat(t.text,".png"),alt:t.text})})},G=Object(p.a)((function(){return Object(h.a)({root:{flexGrow:1,overflow:"scroll",backgroundImage:"url(line_background.jpg)",backgroundSize:"cover"},today:{backgroundColor:"#516787",color:"white",borderRadius:16,margin:"8px 0",padding:"4px 12px"}})})),B=function(){var e=G(),t=j((function(e){return e.talk.messages}));return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(W.a,{container:!0,justify:"center",children:Object(w.jsx)(O.a,{className:e.today,variant:"caption",children:"\u4eca\u65e5"})}),t.map((function(e){return Object(w.jsx)(S,{message:e},e.id)}))]})},I=a(71),M=["tehe","nasuo","dame","shirangana","sonnakoto","gungun","otome","mukako","9","10","11","12"],J=function(){var e=Object(s.b)();return function(t){var a={side:"right",name:"",isStamp:!0,text:t};e(d.actions.appendMessage(a))}},R=Object(p.a)((function(){return Object(h.a)({root:{backgroundColor:"white"},title:{backgroundColor:"#234",color:"white",padding:8,fontWeight:700},gridWrapper:{padding:"0 16px"},stampGrid:{padding:8},imgWrapper:{width:"100%",position:"relative",overflow:"hidden",paddingTop:"100%"},img:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},button:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"transparent",color:"transparent",cursor:"pointer",padding:0,borderStyle:"none"}})})),z=function(){var e=R(),t=J();return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsxs)(W.a,{container:!0,justify:"center",alignItems:"center",className:e.title,children:[Object(w.jsx)(O.a,{variant:"body1",children:"\u30b9\u30bf\u30f3\u30d7"}),Object(w.jsx)(I.a,{})]}),Object(w.jsx)("div",{className:e.gridWrapper,children:Object(w.jsx)(W.a,{container:!0,direction:"row",justify:"center",children:M.map((function(a){return Object(w.jsx)(W.a,{item:!0,xs:3,children:Object(w.jsx)("div",{className:e.stampGrid,children:Object(w.jsxs)("div",{className:e.imgWrapper,children:[Object(w.jsx)("img",{src:"stamps/".concat(a,".png"),alt:a,className:e.img}),Object(w.jsx)("button",{type:"button",className:e.button,onClick:function(){return t(a)},children:" "})]})})},a)}))})})]})},D=Object(p.a)((function(){return Object(h.a)({container:{flexGrow:1,padding:0,userSelect:"none"},paper:{height:"100vh","@supports (-webkit-touch-callout: none)":{height:"-webkit-fill-available"},display:"flex",flexDirection:"column"}})})),E=function(){var e=D();return Object(w.jsx)(u.a,{maxWidth:"xs",className:e.container,children:Object(w.jsxs)(b.a,{className:e.paper,elevation:2,children:[Object(w.jsx)(N,{}),Object(w.jsx)(B,{}),Object(w.jsx)(z,{})]})})};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(s.a,{store:l,children:Object(w.jsx)(E,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.de8acfe0.chunk.js.map