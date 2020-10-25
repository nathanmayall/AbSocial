(this["webpackJsonpabsocial-client"]=this["webpackJsonpabsocial-client"]||[]).push([[0],{213:function(e,t,n){e.exports=n(231)},219:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(0),l=n.n(o),c=n(42),s=n(18),i=n(248),m=(n(218),n(219),n(17)),u=n(38),d=n(195),b={user:null};if(localStorage.getItem("jwtToken")){var p=Object(d.a)(localStorage.getItem("jwtToken"));1e3*p.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=p}var E=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function g(e,t){switch(t.type){case"LOGIN":return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}}function f(e){var t=Object(o.useReducer)(g,b),n=Object(m.a)(t,2),a=n[0],r=n[1];return l.a.createElement(E.Provider,Object.assign({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var v=n(204);var j=function(e){var t=e.component,n=Object(v.a)(e,["component"]),a=Object(o.useContext)(E).user;return l.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement(t,e)}}))},O=n(251);var h=function(){var e=Object(o.useContext)(E),t=e.user,n=e.logout,a=window.location.pathname,r="/"===a?"home":a.substr(1),s=Object(o.useState)(r),i=Object(m.a)(s,2),u=i[0],d=i[1],b=function(e,t){var n=t.name;return d(n)};return t?l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:t.username,active:!0,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"logout",onClick:n}))):l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:"home",active:"home"===u,onClick:b,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"login",active:"login"===u,onClick:b,as:c.b,to:"/Login"}),l.a.createElement(O.a.Item,{name:"register",active:"register"===u,onClick:b,as:c.b,to:"/Register"})))},y=n(14),C=n(257),w=n(252),I=n(254),k=n(203),P=n(255),S=n(109),$=n(150),x=n(115),A=n.n(x),N=n(28),D=n(249);var L=function(e){var t=e.content,n=e.children;return l.a.createElement(D.a,{inverted:!0,content:t,trigger:n})};function q(){var e=Object(N.a)(["\n    mutation LikePost($postId: ID!){\n        likePost(postId: $postId){\n            id\n            likes{\n                id username\n            }\n            likeCount\n        }\n    }\n\n\n\n"]);return q=function(){return e},e}var M=Object(y.gql)(q()),R=function(e){var t=e.user,n=e.post,a=n.id,r=n.likeCount,s=n.likes,i=Object(o.useState)(!1),u=Object(m.a)(i,2),d=u[0],b=u[1];Object(o.useEffect)((function(){t&&s.find((function(e){return e.username===t.username}))?b(!0):b(!1)}),[t,s]);var p=Object(y.useMutation)(M,{variables:{postId:a}}),E=Object(m.a)(p,1)[0],g=t?d?l.a.createElement(P.a,{color:"teal"},l.a.createElement(S.a,{name:"heart"})):l.a.createElement(P.a,{color:"teal",basic:!0},l.a.createElement(S.a,{name:"heart outline"})):l.a.createElement(P.a,{as:c.b,to:"/login",color:"teal",basic:!0},l.a.createElement(S.a,{name:"heart outline"}));return l.a.createElement(P.a,{as:"div",labelPosition:"right",onClick:E},l.a.createElement(L,{content:d?"Unlike":"Like"},g),l.a.createElement($.a,{basic:!0,color:"teal",pointing:"left"},r))},Q=n(253);function T(){var e=Object(N.a)(["\n    {\n    getPosts{\n     id\n     body\n     createdAt\n     username\n     likeCount\n     likes{\n        username\n    }\n    commentCount\n    comments{\n        id\n        username\n        createdAt\n        body\n        }\n      } \n}"]);return T=function(){return e},e}var z=Object(y.gql)(T());function B(){var e=Object(N.a)(["\n    mutation deleteComment($postId: ID!, $commentId: ID!){\n        deleteComment(postId: $postId,  commentId: $commentId){\n            id\n            comments{\n                id\n                username\n                createdAt\n                body\n            }\n            commentCount\n        }\n    }\n\n"]);return B=function(){return e},e}function G(){var e=Object(N.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]);return G=function(){return e},e}var H=Object(y.gql)(G()),U=Object(y.gql)(B()),F=function(e){var t=e.postId,n=e.commentId,a=e.callback,r=Object(o.useState)(!1),c=Object(m.a)(r,2),s=c[0],i=c[1],d=n?U:H,b=Object(y.useMutation)(d,{update:function(e){if(i(!1),!n){var r=e.readQuery({query:z}),o=r.getPosts.filter((function(e){return e.id!==t}));e.writeQuery({query:z,data:Object(u.a)(Object(u.a)({},r),{},{getPosts:{newData:o}})})}a&&a()},variables:{postId:t,commentId:n}}),p=Object(m.a)(b,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{content:n?"Delete comment":"Delete post"},l.a.createElement(P.a,{as:"div",color:"red",floated:"right",onClick:function(){return i(!0)}},l.a.createElement(S.a,{name:"trash",style:{margin:0}}))),l.a.createElement(Q.a,{open:s,onCancel:function(){return i(!1)},onConfirm:p}))};var W=function(e){var t=e.post,n=t.body,a=t.createdAt,r=t.id,s=t.username,i=t.likeCount,m=t.commentCount,u=t.likes,d=Object(o.useContext)(E).user;return l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement(k.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"}),l.a.createElement(I.a.Header,null,s),l.a.createElement(I.a.Meta,{as:c.b,to:"/posts/".concat(r)},A()(a).fromNow(!0)),l.a.createElement(I.a.Description,null,n)),l.a.createElement(I.a.Content,{extra:!0},l.a.createElement(R,{user:d,post:{id:r,likes:u,likeCount:i}}),l.a.createElement(L,{content:"Comment on a post"},l.a.createElement(P.a,{labelPosition:"right",as:c.b,to:"/posts/".concat(r)},l.a.createElement(P.a,{color:"blue",basic:!0},l.a.createElement(S.a,{name:"comment alternate outline"})),l.a.createElement($.a,{basic:!0,color:"blue",pointing:"left"},m))),d&&d.username===s&&l.a.createElement(F,{postId:r})))},J=n(169),V=n(250),K=n(126),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.useState)(t),a=Object(m.a)(n,2),r=a[0],l=a[1],c=function(e){l(Object(u.a)(Object(u.a)({},r),{},Object(K.a)({},e.target.name,e.target.value)))},s=function(t){t.preventDefault(),e()};return{onChange:c,onSubmit:s,values:r}};function Y(){var e=Object(N.a)(["\n\nmutation createPost($body: String!){\n    createPost(body: $body){\n        id body createdAt username\n        likes{\n            id username createdAt\n        }\n        likeCount\n        comments{\n            id body username createdAt\n        }\n        commentCount\n    }\n}\n"]);return Y=function(){return e},e}var Z=Object(y.gql)(Y()),_=function(){var e=X((function(){c()}),{body:""}),t=e.values,n=e.onChange,a=e.onSubmit,r=Object(y.useMutation)(Z,{variables:t,update:function(e,n){var a=e.readQuery({query:z}),r=Object(J.a)(a.getPosts);r=[n.data.getPosts].concat(Object(J.a)(a.getPosts)),e.writeQuery({query:z,data:Object(u.a)(Object(u.a)({},a),{},{getPosts:{newData:r}})}),t.body=""}}),o=Object(m.a)(r,2),c=o[0],s=o[1].error;return l.a.createElement(l.a.Fragment,null,l.a.createElement(V.a,{onSubmit:a},l.a.createElement("h2",null,"Create a post:"),l.a.createElement(V.a.Field,null,l.a.createElement(V.a.Input,{placeholder:"Hey, AbSocial!",name:"body",onChange:n,value:t.body,error:!!s}),l.a.createElement(P.a,{type:"submit",color:"teal"},"Submit"))),s&&l.a.createElement("div",{className:"ui error message",style:{marginBottom:20}},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,s.graphQLErrors[0].message))))};var ee=function(){var e=Object(o.useContext)(E).user,t=Object(y.useQuery)(z),n=t.loading,a=t.data,r=(a=void 0===a?{}:a).getPosts;return l.a.createElement(C.a,{columns:3},l.a.createElement(C.a.Row,{className:"page-title"},l.a.createElement("h1",null,"Recent Posts")),l.a.createElement(C.a.Row,null,e&&l.a.createElement(C.a.Column,null,l.a.createElement(_,null)),n?l.a.createElement("h1",null,"Loading posts..."):l.a.createElement(w.a.Group,null,r.map((function(e){return l.a.createElement(C.a.Column,{key:e.id,style:{marginBottom:20}},l.a.createElement(W,{post:e}))})))))};function te(){var e=Object(N.a)(["\n\nmutation login(\n    $username: String!\n    $password: String!\n) {\n    login(username: $username, password: $password) {\n        id \n        email \n        username \n        createdAt \n        token\n    }\n}\n"]);return te=function(){return e},e}var ne=Object(y.gql)(te()),ae=function(e){var t=Object(o.useContext)(E),n=Object(o.useState)({}),a=Object(m.a)(n,2),r=a[0],c=a[1],s=X((function(){g()}),{username:"",password:""}),i=s.onChange,u=s.onSubmit,d=s.values,b=Object(y.useMutation)(ne,{update:function(n,a){var r=a.data.login;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),p=Object(m.a)(b,2),g=p[0],f=p[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(V.a,{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Login"),l.a.createElement(V.a.Input,{label:"username",placeholder:"Username...",name:"username",type:"text",value:d.username,error:!!r.username,onChange:i}),l.a.createElement(V.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:d.password,error:!!r.password,onChange:i}),l.a.createElement(P.a,{type:"submit",primary:!0},"Login")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))};function re(){var e=Object(N.a)(["\n\nmutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n) {\n    register(\n        registerInput: {\n            username: $username\n            email: $email\n            password: $password\n            confirmPassword: $confirmPassword\n        }\n    ){\n        id email username createdAt token\n    }\n}\n"]);return re=function(){return e},e}var oe=Object(y.gql)(re()),le=function(e){var t=Object(o.useContext)(E),n=Object(o.useState)({}),a=Object(m.a)(n,2),r=a[0],c=a[1],s=X((function(){g()}),{username:"",password:"",confirmPassword:"",email:""}),i=s.onChange,u=s.onSubmit,d=s.values,b=Object(y.useMutation)(oe,{update:function(n,a){var r=a.data.register;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),p=Object(m.a)(b,2),g=p[0],f=p[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(V.a,{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Register"),l.a.createElement(V.a.Input,{label:"username",placeholder:"Username...",name:"username",type:"text",value:d.username,error:!!r.username,onChange:i}),l.a.createElement(V.a.Input,{label:"Email",placeholder:"Email...",name:"email",type:"email",value:d.email,error:!!r.email,onChange:i}),l.a.createElement(V.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:d.password,error:!!r.password,onChange:i}),l.a.createElement(V.a.Input,{label:"Confirm Password",placeholder:"Confirm Password...",name:"confirmPassword",type:"password",value:d.confirmPassword,error:!!r.confirmPassword,onChange:i}),l.a.createElement(P.a,{type:"submit",primary:!0},"Register")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))};function ce(){var e=Object(N.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(N.a)(["\n    mutation($postId: ID!, $body: String!){\n        createComment(postId: $postId, body: $body){\n            id\n            comments{\n                id\n                body\n                createdAt\n                username\n            }\n            commentCount\n        }\n    }\n\n"]);return se=function(){return e},e}var ie=Object(y.gql)(se()),me=Object(y.gql)(ce()),ue=function(e){var t,n=e.match.params.postId,a=Object(o.useContext)(E).user,r=Object(o.useRef)(null),c=Object(o.useState)(""),s=Object(m.a)(c,2),i=s[0],u=s[1],d=Object(y.useQuery)(me,{variables:{postId:n}}).data,b=(d=void 0===d?{}:d).getPost,p=Object(y.useMutation)(ie,{update:function(){u(""),r.current.blur()},variables:{postId:n,body:i}}),g=Object(m.a)(p,1)[0];if(b){var f=b.id,v=b.body,j=b.createdAt,O=b.username,h=b.comments,w=b.likes,x=b.likeCount,N=b.commentCount;t=l.a.createElement(C.a,null,l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,{width:2},l.a.createElement(k.a,{src:"https://react.semantic-ui.com/images/avatar/large/molly.png",size:"small",float:"right"}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,{width:10},l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement(I.a.Header,null,O),l.a.createElement(I.a.Meta,null,A()(j).fromNow()),l.a.createElement(I.a.Description,null,v)),l.a.createElement("hr",null),l.a.createElement(I.a.Content,{extra:!0},l.a.createElement(R,{user:a,post:{id:f,likeCount:x,likes:w}}),l.a.createElement(L,{content:"Comment on post"},l.a.createElement(P.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("comment added on post")}},l.a.createElement(P.a,{basic:!0,color:"blue"},l.a.createElement(S.a,{name:"comment alternate outline"})),l.a.createElement($.a,{basic:!0,color:"blue",pointing:"left"},N))),a&&a.username===O&&l.a.createElement(F,{postId:f,callback:function(){e.history.push("/")}}))),a&&l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement("p",null,"Post a comment"),l.a.createElement(V.a,null,l.a.createElement("div",{className:"ui action input fluid"},l.a.createElement("input",{type:"text",placeholder:"What's on your mind...",name:"comment",value:i,onChange:function(e){return u(e.target.value)},ref:r}),l.a.createElement(P.a,{type:"submit",className:"ui button teal",disabled:""===i.trim(),onClick:g},"Submit"))))),h.map((function(e){return l.a.createElement(I.a,{fluid:!0,key:e.id},l.a.createElement(I.a.Content,null,a&&a.username===e.username&&l.a.createElement(F,{postId:f,commentId:e.id}),l.a.createElement(I.a.Header,null,e.username),l.a.createElement(I.a.Meta,null,A()(e.createdAt).fromNow()),l.a.createElement(I.a.Description,null,e.body)))})))))}else t=l.a.createElement("p",null,"Loading Post...");return t};var de=function(){return l.a.createElement(f,null,l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(h,null),l.a.createElement(s.b,{exact:!0,path:"/",component:ee}),l.a.createElement(j,{exact:!0,path:"/login",component:ae}),l.a.createElement(j,{exact:!0,path:"/register",component:le}),l.a.createElement(s.b,{exact:!0,path:"/posts/:postId",component:ue}))))},be=n(202),pe=Object(y.createHttpLink)({uri:"http://10.0.1.155:50000"}),Ee=Object(be.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),ge=new y.ApolloClient({link:Ee.concat(pe),cache:new y.InMemoryCache}),fe=l.a.createElement(y.ApolloProvider,{client:ge},l.a.createElement(de,null));r.a.render(fe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.7d8355f4.chunk.js.map