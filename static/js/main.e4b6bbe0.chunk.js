(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(4),o=n.n(a),i=(n(15),n(2)),h=n.n(i),l=n(5),d=n(6),b=n(7),u=n(9),j=n(8),f=function(e){return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.details.id,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.details.name}),Object(r.jsx)("p",{children:e.details.email})]})]})},p=function(e){var t=e.robots.map((function(e,t){return Object(r.jsx)(f,{details:e},t)}));return Object(r.jsx)("div",{children:t})},v=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{type:"search",placeholder:"search robot",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})},x=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"800px"},children:e.children})},g=(n(17),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({robots:n}),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return this.state.robots.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(v,{searchChange:this.onSearchChange}),Object(r.jsx)(x,{children:Object(r.jsx)(p,{robots:c})})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(c.Component));n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e4b6bbe0.chunk.js.map