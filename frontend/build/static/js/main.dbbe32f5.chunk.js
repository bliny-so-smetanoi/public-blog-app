(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(15),s=n.n(r),i=(n(20),n(11)),o=n(2);function l(){}var u=Object(c.createContext)({token:null,userId:null,login:l,logout:l,isAuth:!1}),j=n(4),d="userData",b=n(5),x=n.n(b),O=n(7),p=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(null),u=Object(j.a)(l,2),d=u[0],b=u[1];return{loading:n,request:Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(t){var n,c,r,s,i,l=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{},a(!0),e.prev=4,c&&(c=JSON.stringify(c),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:r});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=15;break}throw b(i.errors),new Error(i.message||"Something went wrong...");case 15:return a(!1),e.abrupt("return",i);case 19:throw e.prev=19,e.t0=e.catch(4),a(!1),o(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(c.useCallback)((function(){return o(null)}),[]),clearMessages:Object(c.useCallback)((function(){return b(null)}),[]),messages:d}},h=n(9),m=n(6),f=n(12),g=n.n(f),v=n(0);function k(e){var t=e.comments.map((function(e){return Object(v.jsxs)("div",{className:"homepage-main-article-comment",children:[Object(v.jsx)("p",{children:e.name}),Object(v.jsx)("p",{children:e.body_text}),Object(v.jsx)("p",{style:{fontSize:"14px",color:"grey"},children:Object(v.jsx)(g.a,{fromNow:!0,children:e.date_time})})]},e._id)}));return Object(v.jsx)(v.Fragment,{children:t})}var y=n(10);function w(e){var t=Object(c.useState)(e.article),n=Object(j.a)(t,2),a=n[0],r=n[1],s=Object(c.useContext)(u),i=s.userId,o=s.isAuth,l=p(),d=l.request,b=l.loading,f=Object(c.useState)(!1),w=Object(j.a)(f,2),C=w[0],S=w[1],N=Object(c.useState)(!1),_=Object(j.a)(N,2),D=_[0],B=_[1],I=Object(c.useState)(!1),E=Object(j.a)(I,2),L=E[0],z=E[1],T=Object(c.useState)([]),F=Object(j.a)(T,2),P=F[0],A=F[1],R=Object(c.useState)({body_text:""}),q=Object(j.a)(R,2),J=q[0],M=q[1];function G(){return W.apply(this,arguments)}function W(){return(W=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/api/articles/comments/".concat(a._id));case 3:t=e.sent,A(t),B(!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function H(){return(H=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/api/articles/comments/create","POST",Object(m.a)(Object(m.a)({},J),{},{user_id:i,article_id:a._id}));case 3:return e.sent,M({body_text:""}),e.next=7,G();case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Q(){return Y.apply(this,arguments)}function Y(){return(Y=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/api/articles/".concat(a._id),"GET",null,{Authorization:"Bearer "+i});case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isLiked){e.next=9;break}return e.next=3,d("/api/articles/like","DELETE",{id:a._id,userId:i});case 3:if(!e.sent){e.next=7;break}return e.next=7,Q();case 7:e.next=15;break;case 9:return e.next=11,d("/api/articles/like","POST",{id:a._id,userId:i});case 11:if(!e.sent){e.next=15;break}return e.next=15,Q();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{onMouseEnter:function(){return z(!0)},onMouseLeave:function(){return z(!1)},className:"homepage-main-article-card",children:[0!==a.likesCount&&Object(v.jsxs)("div",{children:[a.likesCount," ",a.likesCount>1?"people":"person"," liked this post"]}),Object(v.jsxs)("div",{align:"right",children:["by: ",a.name]}),Object(v.jsx)("div",{style:{fontSize:"16px"},align:"right",children:Object(v.jsx)(g.a,{fromNow:!0,children:a.date_time})}),Object(v.jsx)("b",{style:{fontSize:"20px"},children:a.title}),Object(v.jsxs)("p",{children:[(a.body_text.length<=1700||C)&&a.body_text,a.body_text.length>1700&&!C&&a.body_text.slice(0,1700)+"... ",a.body_text.length>1700&&Object(v.jsx)("i",{style:{textDecoration:"underline"},onClick:function(){return S(!C)},children:C?"show less":"show more"})]}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("div",{style:{minHeight:"30px",display:"flex",justifyContent:"space-between"},children:[!D&&L&&Object(v.jsxs)("span",{className:"button-comment",onClick:G,children:["\u25be",!b&&"show comments",b&&"loading..."]}),!D&&L&&Object(v.jsxs)("span",{children:[Object(v.jsx)(y.a,{}),Object(v.jsxs)("button",{"data-tip":"Press to ".concat(a.isLiked?"unlike":"like"),style:{borderRadius:"15px",border:"1px solid black",backgroundColor:"white"},disabled:!o,onClick:function(){return K.apply(this,arguments)},children:[!a.isLiked&&"Like \u2665",a.isLiked&&"Liked \u2764\ufe0f"]})]})]}),D&&0===P.length&&Object(v.jsx)("div",{align:"center",style:{fontSize:"15px"},children:"No comments added yet..."}),D&&Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"button-comment",onClick:function(){return B(!1)},children:"\u25b4hide comments"}),Object(v.jsx)("div",{style:{paddingLeft:"25px"},children:Object(v.jsx)(k,{comments:P})})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"send-comment",children:[D&&Object(v.jsx)("textarea",{value:J.body_text,disabled:!o,onChange:function(e){M(Object(m.a)(Object(m.a)({},J),{},Object(h.a)({},e.target.name,e.target.value)))},name:"body_text",style:{resize:"none",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"},placeholder:"Write you comments here",rows:4,cols:95}),D&&Object(v.jsx)("button",{style:{color:"#501B1D",fontSize:"16px",backgroundColor:"white",border:"1px solid #501B1D",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"},disabled:!o,onClick:function(){return H.apply(this,arguments)},children:"send comment"})]})]})]})})}function C(e){var t=e.articles.map((function(e){return Object(v.jsx)(w,{article:e},e._id)}));return Object(v.jsx)(v.Fragment,{children:t})}function S(e){var t=Object(c.useContext)(u),n=t.userId,a=t.isAuth,r=p().request,s=Object(c.useState)({body_text:"",title:""}),i=Object(j.a)(s,2),o=i[0],l=i[1];function d(){return(d=Object(O.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r("/api/articles/create","POST",Object(m.a)(Object(m.a)({},o),{},{author:n}));case 3:t.sent,e.onCreate(),l({body_text:"",title:""}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function b(e){l(Object(m.a)(Object(m.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"homepage-main-create",style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("p",{style:{display:"flex",color:"#501B1D",justifyContent:"space-between",fontSize:"20px"},children:[a&&"Create new post:",!a&&"In order to create post you need to log in",Object(v.jsx)("button",{style:{color:"#501B1D",backgroundColor:"white",border:"1px solid #501B1D",borderRadius:"5px"},onClick:function(){return d.apply(this,arguments)},disabled:!a,children:"Create post"})]}),Object(v.jsx)("input",{style:{padding:"5px",outlineColor:"#501B1D"},disabled:!a,onChange:b,name:"title",type:"text",placeholder:"Title",value:o.title}),Object(v.jsx)("textarea",{disabled:!a,onChange:b,name:"body_text",value:o.body_text,placeholder:"Write your text here",style:{resize:"none"},cols:40,rows:10})]})})}function N(){var e=Object(c.useContext)(u).userId,t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],r=n[1],s=p().request,i=Object(c.useCallback)(Object(O.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s("/api/auth/info","POST",{userId:e});case 3:n=t.sent,r(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[s,e]);return Object(c.useEffect)((function(){i()}),[i]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h3",{align:"right",children:["Welcome, ",a.name,"!"]}),Object(v.jsx)("p",{align:"right",children:"Check new posts!"})]})}function _(){var e=Object(c.useContext)(u),t=e.isAuth,n=e.userId,a=p(),r=a.loading,s=a.request,i=Object(c.useState)(),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(c.useCallback)(Object(O.a)(x.a.mark((function e(){var t,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("userData")),console.log(localStorage.getItem("userData")),console.log(t),null!==t){e.next=9;break}return e.next=6,s("/api/articles/","GET",null,{Authorization:"Bearer  "});case 6:return n=e.sent,d(n),e.abrupt("return");case 9:return e.next=11,s("/api/articles/","GET",null,{Authorization:"Bearer "+t.userId});case 11:c=e.sent,d(c);case 13:case"end":return e.stop()}}),e)}))),[s]);return Object(c.useEffect)((function(){b()}),[b]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("main",{className:"homepage-main",children:[Object(v.jsxs)("div",{className:"homepage-main-header",children:[Object(v.jsx)(S,{onCreate:b}),Object(v.jsxs)("div",{className:"homepage-account",children:[t&&null!==n&&Object(v.jsx)(N,{}),r&&Object(v.jsx)("div",{children:"Loading..."})]})]}),Object(v.jsxs)("div",{className:"homepage-main-container",children:[Object(v.jsx)("p",{style:{fontSize:"20px"},children:"Recent posts:"}),r&&Object(v.jsx)("div",{children:"Loading..."}),void 0!==l&&!r&&Object(v.jsx)(C,{articles:l})]})]})})}function D(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("footer",{className:"footer-main",children:Object(v.jsx)("div",{className:"footer-block",children:Object(v.jsxs)("span",{children:["\xa9 Public Blog App by bliny so smetanoi",Object(v.jsx)("br",{}),"Nur-Sultan, Qazaqstan 2022"]})})})})}function B(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"lds-ring",children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})})}function I(e){var t=Object(c.useContext)(u),n=(Object(o.f)(),Object(c.useState)(!1)),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(j.a)(i,2),d=l[0],b=l[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),k=g[0],w=g[1],C=p(),S=C.loading,N=C.request,_=C.error,D=C.clearError,I=C.messages,E=C.clearMessages,L=Object(c.useState)(null),z=Object(j.a)(L,2),T=z[0],F=z[1],P=Object(c.useState)({email:"",password:""}),A=Object(j.a)(P,2),R=A[0],q=A[1],J=Object(c.useState)({email:"",password:"",first_name:"",last_name:""}),M=Object(j.a)(J,2),G=M[0],W=M[1];function H(){return(H=Object(O.a)(x.a.mark((function n(){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==R.password&&""!==R.email){n.next=3;break}return n.abrupt("return");case 3:return b(!0),n.next=6,N("/api/auth/login","POST",Object(m.a)({},R));case 6:c=n.sent,t.login(c.token,c.userId),window.location.reload(),e.onClose(),n.next=14;break;case 12:n.prev=12,n.t0=n.catch(0);case 14:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function Q(){return(Q=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null!==_&&U(),e.next=4,N("/api/auth/register","POST",Object(m.a)({},G));case 4:e.sent,s(!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Y(e){q(Object(m.a)(Object(m.a)({},R),{},Object(h.a)({},e.target.name,e.target.value.trim())))}function K(e){W(Object(m.a)(Object(m.a)({},G),{},Object(h.a)({},e.target.name,e.target.value.trim())))}function U(){F(null),D()}return Object(c.useEffect)((function(){if(null!==I&&void 0!==I){var e=I.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:e.msg},e.index)})}));F(e)}}),[I,E]),Object(c.useEffect)((function(){null!==_&&b(!0)}),[_,D]),e.show?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"modal",children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsxs)("div",{className:"modal-header",children:[Object(v.jsx)("h3",{style:{color:"#501B1D"},children:k?"Sign up":"Log in"}),S&&Object(v.jsx)(B,{}),Object(v.jsx)("span",{onClick:e.onClose,children:"\u2715"})]}),Object(v.jsxs)("div",{className:"modal-body",children:[k&&!r&&Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{onClick:U,children:Object(v.jsx)("button",{onClick:function(){return w(!k)},children:"\u21a9"})}),Object(v.jsxs)("div",{align:"center",children:[null!==T&&T,Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{}),Object(v.jsx)("input",{"data-tip":"email should be in format example@mail.com",className:"signup-input",placeholder:"Email",type:"text",name:"email",value:G.email,onChange:K})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{}),Object(v.jsx)("input",{"data-tip":"password should be at least 8 characters",className:"signup-input",placeholder:"Password",type:"password",name:"password",value:G.password,onChange:K})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{}),Object(v.jsx)("input",{"data-tip":"first name should be filled",className:"signup-input",placeholder:"First name",type:"text",name:"first_name",value:G.first_name,onChange:K})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{}),Object(v.jsx)("input",{"data-tip":"last name should be filled",className:"signup-input",placeholder:"Last name",type:"text",name:"last_name",value:G.last_name,onChange:K})]}),Object(v.jsx)("br",{}),d&&!S&&Object(v.jsx)("div",{align:"center",style:{color:"darkred"},children:Object(v.jsx)("p",{children:_})}),Object(v.jsx)("div",{align:"center",children:Object(v.jsx)("button",{className:"signup-button",onClick:function(){return Q.apply(this,arguments)},children:"Register"})})]})]}),r&&Object(v.jsx)("div",{children:Object(v.jsxs)("p",{children:["You registered, in order to log in, please press this button ",Object(v.jsx)("button",{onClick:function(){w(!1),s(!1)},children:"Log in"})]})}),!k&&Object(v.jsxs)("div",{align:"center",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{marginBottom:"5px"},onClick:U,children:Object(v.jsx)("input",{className:"login-input",placeholder:"Email",type:"text",name:"email",value:R.email,onChange:Y})}),Object(v.jsx)("div",{onClick:U,children:Object(v.jsx)("input",{className:"login-input",placeholder:"Password",type:"password",name:"password",value:R.password,onChange:Y})}),Object(v.jsxs)("div",{children:[d&&Object(v.jsx)("div",{style:{color:"darkred"},children:Object(v.jsx)("p",{children:_})}),null!==T&&T]})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("p",{onClick:U,children:["Do not have account yet? ",Object(v.jsx)("span",{style:{textDecoration:"underline",color:"#501B1D"},onClick:function(){return w(!k)},children:"Sign up"}),"."]})}),Object(v.jsx)("button",{className:"login-button",onClick:function(){return H.apply(this,arguments)},children:"Enter"})]})]}),Object(v.jsx)("div",{className:"modal-footer"})]})})}):null}function E(){Object(o.f)();var e=Object(c.useContext)(u),t=e.isAuth,n=e.logout,a=Object(c.useState)(!1),r=Object(j.a)(a,2),s=r[0],l=r[1];return t?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("nav",{className:"navbar-main",children:Object(v.jsxs)("div",{className:"navbar-block",children:[Object(v.jsx)(i.b,{style:{textDecoration:"none",color:"white",fontSize:"25px"},to:"/",children:Object(v.jsx)("b",{children:"Public Blog App"})}),Object(v.jsx)("button",{style:{borderRadius:"5px",border:"1px solid #501B1D",color:"#501B1D",backgroundColor:"white"},onClick:function(){n(),window.location.reload()},children:"Log out"})]})})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("nav",{className:"navbar-main",children:Object(v.jsxs)("div",{className:"navbar-block",children:[Object(v.jsx)(i.b,{style:{textDecoration:"none",color:"white",fontSize:"25px"},to:"/",children:Object(v.jsx)("b",{children:"Public Blog App"})}),Object(v.jsx)("button",{style:{borderRadius:"5px",border:"1px solid #501B1D",color:"#501B1D",backgroundColor:"white"},onClick:function(){return l(!0)},children:"Log in"})]})}),Object(v.jsx)(I,{show:s,onClose:function(){return l(!1)}})]})}function L(){var e=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(),u=Object(j.a)(l,2),b=u[0],x=u[1],O=Object(c.useCallback)((function(e,t){a(e),x(t),localStorage.setItem(d,JSON.stringify({userId:t,token:e}))}),[]),p=Object(c.useCallback)((function(){x(null),a(null),localStorage.removeItem(d)}),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(d));e&&e.token&&O(e.token,e.userId),o(!0)}),[O]),{login:O,logout:p,token:n,userId:b,ready:i}}(),t=e.token,n=e.login,a=e.logout,r=e.userId,s=!!t;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(u.Provider,{value:{token:t,login:n,logout:a,userId:r,isAuth:s},children:Object(v.jsxs)(i.a,{children:[Object(v.jsx)(E,{}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/",element:Object(v.jsx)(_,{})}),Object(v.jsx)(o.a,{path:"*",element:Object(v.jsx)(_,{})})]}),Object(v.jsx)(D,{})]})})})}s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[28,1,2]]]);