(this["webpackJsonpsakura-stamp"]=this["webpackJsonpsakura-stamp"]||[]).push([[0],{48:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),s=n.n(i),c=n(18),o=n(23),l=n(30),d=n.n(l),u=Object(o.b)({name:"talk",initialState:{name:"\u516b\u6728\u7f8e\u6a39",messages:[],currentUnit:"start",index:0,loading:!1},reducers:{reset:function(e){e.messages=[]},appendMessage:function(e,t){t.payload.id=e.messages.length,t.payload.time=d()().format("H:mm"),e.messages.push(t.payload)},increment:function(e){e.index+=1},changeUnit:function(e,t){e.currentUnit=t.payload,e.index=0}}}),j=u.actions,m=(j.reset,j.appendMessage),p=j.increment,b=j.changeUnit,x=Object(o.a)({reducer:{talk:u.reducer}}),f=function(){return Object(c.b)()},g=c.c,h=(n(48),n(78)),O=n(52),v=n(68),y=n(80),k=n(70),w=n(71),N=n(79),W=n(73),C=n(72),R=n(74),S=n(75),G=n(2),I=Object(v.a)((function(e){return Object(y.a)({bar:{backgroundColor:"#234"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontWeight:700}})})),U=function(){var e=I(),t=g((function(e){return e.talk.name}));return Object(G.jsx)(k.a,{position:"static",className:e.bar,children:Object(G.jsxs)(w.a,{variant:"dense",children:[Object(G.jsx)(N.a,{edge:"start",className:e.menuButton,color:"inherit",children:Object(G.jsx)(C.a,{})}),Object(G.jsx)(W.a,{variant:"body1",className:e.title,children:t}),Object(G.jsx)(N.a,{color:"inherit",children:Object(G.jsx)(R.a,{})}),Object(G.jsx)(N.a,{color:"inherit",children:Object(G.jsx)(S.a,{})})]})})},E=n(76),M=n(35),T=n.n(M),B=n(81),H=Object(v.a)((function(){return Object(y.a)({timeWrapper:{margin:"0 4px",width:40},time:{color:"#345",marginTop:-4},leftRoot:{display:"flex",padding:4},avatar:{width:32,height:32},triangle:{width:0,height:0,margin:"4px 0 0 -6px",border:"6px solid transparent",borderRight:"18px solid #edf1ee","-webkit-transform":"rotate(35deg)",transform:"rotate(35deg)"},text:{backgroundColor:"#edf1ee",borderRadius:14,padding:"4px 12px",margin:"6px 0 0 -8px"}})})),J=function(e){var t=e.message,n=H();return Object(G.jsxs)(E.a,{item:!0,container:!0,direction:"column",justify:"flex-end",alignItems:"left"===t.side?"flex-start":"flex-end",className:n.timeWrapper,children:["right"===t.side&&Object(G.jsx)(W.a,{variant:"caption",className:n.time,children:"\u65e2\u8aad"}),Object(G.jsx)(W.a,{variant:"caption",className:n.time,children:t.time})]})},z=function(e){var t=e.message,n=H();return"left"===t.side?Object(G.jsxs)("div",{className:n.leftRoot,children:[Object(G.jsx)(B.a,{alt:t.name,src:"members/".concat(t.name,".jpg"),className:n.avatar}),Object(G.jsx)("div",{className:n.triangle}),Object(G.jsx)(W.a,{variant:"body2",className:n.text,children:t.text}),Object(G.jsx)(J,{message:t})]}):Object(G.jsxs)(E.a,{item:!0,container:!0,direction:"row",justify:"flex-end",alignItems:"flex-end",spacing:1,xs:12,children:[Object(G.jsx)(J,{message:t}),Object(G.jsx)(E.a,{item:!0,xs:5,children:Object(G.jsx)("img",{width:"100%",src:"stamps/".concat(t.text,".png"),alt:t.text})})]})},D=Object(v.a)((function(){return Object(y.a)({root:{flexGrow:1,overflow:"scroll",backgroundImage:"url(line_background.jpg)",backgroundSize:"cover"},today:{backgroundColor:"#516787",color:"white",borderRadius:16,margin:"8px 0",padding:"4px 12px"}})}));T.a.polyfill();var F=function(){var e=D(),t=g((function(e){return e.talk.messages})),n=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=n.current;e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}),[t]),Object(G.jsxs)("div",{className:e.root,ref:n,children:[Object(G.jsx)(E.a,{container:!0,justify:"center",children:Object(G.jsx)(W.a,{className:e.today,variant:"caption",children:"\u4eca\u65e5"})}),t.map((function(e){return Object(G.jsx)(z,{message:e},e.id)}))]})},P=n(77),_=["tehe","nasuo","dame","shirangana","sonnakoto","gungun","otome","mukako","9","10","11","12"],q=[{start:[{side:"left",name:"yagi",text:"\u4eca\u65e5\u306e\u663c"},{side:"left",name:"yagi",text:"\u3072\u3058\u304d\u3092\u98df\u3079\u305f"},{side:"left",name:"yagi",text:"\u516b\u6728\u7f8e\u6a39\u3067\u3059"},{side:"input",root:{shirangana:"success",other:"retry"}}],success:[{side:"left",name:"yagi",text:"\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01"},{side:"left",name:"yagi",text:"\u4e2d\u7b49\u90e8\uff12\u5e74\u3001\u526f\u4f1a\u9577\u306e\u516b\u6728\u7f8e\u6a39\u3067\u3059\uff01"},{side:"input",root:{}}],retry:[{side:"left",name:"yagi",text:"......\u3082\u3046\uff11\u56de\u3044\u304d\u307e\u3059\u306d\u30fc\u3001"},{side:"left",name:"yagi",text:"\u305f\u3053\u713c\u304d\u306f"},{side:"left",name:"yagi",text:"\u30bd\u30fc\u30b9\u5c11\u306a\u3081"},{side:"left",name:"yagi",text:"\u516b\u6728\u7f8e\u6a39\u3067\u3059"},{side:"input",root:{shirangana:"success",other:"failure"}}],failure:[{side:"input",root:{}}]}],A=function(){var e=f();return function(t){var n={side:"right",name:"",isStamp:!0,text:t};e(u.actions.appendMessage(n))}},K=Object(v.a)((function(){return Object(y.a)({root:{backgroundColor:"#edf1ee"},title:{backgroundColor:"#234",color:"white",padding:4},gridWrapper:{padding:"0 16px"},stampGrid:{padding:8},imgWrapper:{width:"100%",position:"relative",overflow:"hidden",paddingTop:"100%"},img:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},button:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"transparent",color:"transparent",cursor:"pointer",padding:0,borderStyle:"none"}})})),L=function(){var e=K(),t=A();return Object(G.jsxs)("div",{className:e.root,children:[Object(G.jsxs)(E.a,{container:!0,justify:"center",alignItems:"center",className:e.title,children:[Object(G.jsx)(W.a,{variant:"body1",children:"\u30b9\u30bf\u30f3\u30d7"}),Object(G.jsx)(P.a,{})]}),Object(G.jsx)("div",{className:e.gridWrapper,children:Object(G.jsx)(E.a,{container:!0,direction:"row",justify:"center",children:_.map((function(n){return Object(G.jsx)(E.a,{item:!0,xs:3,children:Object(G.jsx)("div",{className:e.stampGrid,children:Object(G.jsxs)("div",{className:e.imgWrapper,children:[Object(G.jsx)("img",{src:"stamps/".concat(n,".png"),alt:n,className:e.img}),Object(G.jsx)("button",{type:"button",className:e.button,onClick:function(){return t(n)},children:" "})]})})},n)}))})})]})},Q=n(28),V=n.n(Q),X=n(36),Y=function(){var e=f(),t=g((function(e){return e.talk.currentUnit})),n=g((function(e){return e.talk.index})),r=g((function(e){return e.talk.messages}));Object(a.useEffect)((function(){(function(){var a=Object(X.a)(V.a.mark((function a(){var r;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new Promise((function(e){return setTimeout(e,2e3)}));case 2:if("input"!==(r=q[0][t][n]).side){a.next=5;break}return a.abrupt("return");case 5:e(m(r)),e(p());case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e,n,t]),Object(a.useEffect)((function(){if(0!==r.length){var a=r.slice(-1)[0];if("left"!==a.side){var i=q[0][t][n];if("input"===i.side){var s=i.root[a.text]||i.root.other;s&&e(b(s))}}}}),[e,r,t,n])},Z=Object(v.a)((function(){return Object(y.a)({container:{flexGrow:1,padding:0,userSelect:"none"},paper:{height:"100vh","@supports (-webkit-touch-callout: none)":{height:"-webkit-fill-available"},display:"flex",flexDirection:"column"}})})),$=function(){var e=Z();return Y(),Object(G.jsx)(h.a,{maxWidth:"xs",className:e.container,children:Object(G.jsxs)(O.a,{className:e.paper,elevation:2,children:[Object(G.jsx)(U,{}),Object(G.jsx)(F,{}),Object(G.jsx)(L,{})]})})};s.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(c.a,{store:x,children:Object(G.jsx)($,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1089016b.chunk.js.map