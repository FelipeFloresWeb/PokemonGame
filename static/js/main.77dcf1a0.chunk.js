(this["webpackJsonppokemon-wiki"]=this["webpackJsonppokemon-wiki"]||[]).push([[0],{22:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(17),r=n.n(o),s=(n(34),n(23)),i=n(24),l=n(29),u=n(28),j=n(11),d=n(3),b=(n(35),n(12)),p=n.n(b),m=n(15),O=n(6),h=n(7),x="GET_POKEMONS_SUCESS",f="GET_POKEMONS_ERROR",k="SELECT_POKEMON",v="FILTER_POKEMONS",g="SET_OPONENT",y=(n(22),n(0));var P=function(e){var t=e.pokemon;return t.name?Object(y.jsxs)("div",{className:"pokemon-card",children:[Object(y.jsxs)("div",{className:"card-selected",children:[Object(y.jsx)("h1",{children:t.name[0].toUpperCase()+t.name.slice(1).toLowerCase()}),Object(y.jsx)("img",{id:"selectedPokemon",src:t.sprites.other.dream_world.front_default,alt:t.name})]}),Object(y.jsxs)("div",{className:"card-selected-text",children:[Object(y.jsx)("p",{children:"Base experience: ".concat(t.base_experience," points")}),Object(y.jsx)("p",{children:"Weight: ".concat(t.weight)}),t.stats.map((function(e){return Object(y.jsx)("p",{children:"".concat(e.stat.name,": ").concat(e.base_stat," points")},"".concat(e.name).concat(e.stat.name))}))]})]}):Object(y.jsx)("div",{children:"Select an Pokemon to see more information about it..."})},S=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=500");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.results,a=c.map((function(e){return e.url})),o=[],e.next=12,Promise.all(a.map(function(){var e=Object(m.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,o.push(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 12:return e.abrupt("return",o);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),C=n.p+"static/media/loading.e61d80e8.gif";var N=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Loading Pokemons..."}),Object(y.jsx)("img",{src:C,alt:"pikachu"})]})};var w=Object(h.b)((function(e){var t=e.pokeReducer;return{isLoading:t.isLoading,selectedPokemon:t.selectedPokemon,allPokemonsArr:t.allPokemonsArr,isSelected:t.isSelected}}),(function(e){return{getPokemons:function(t){return e(function(e){return{type:x,payload:e}}(t))},apiError:function(t){return e(function(e){return{type:f,payload:e}}(t))},select:function(t){return e({type:k,payload:t})}}}))((function(e){var t=e.apiError,n=e.getPokemons,a=e.allPokemonsArr,o=e.error,r=e.select,s=e.isLoading,i=e.selectedPokemon,l=e.isSelected,u=Object(c.useState)(0),j=Object(O.a)(u,2),b=j[0],h=j[1],x=Object(c.useState)(10),f=Object(O.a)(x,2),k=f[0],v=f[1],g=Object(c.useState)(!1),C=Object(O.a)(g,2),w=C[0],B=C[1],E=a.length,L=k===E,_=[];function T(e){var t=e.target.id,n=_.find((function(e){return e.name===t}));console.log(n),i.name!==t&&n&&r(n)}Object(c.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:return c=e.sent,a=c.sort((function(e,t){return e.id-t.id})),e.next=7,n(a);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var F=function(e){switch(e.types[0].type.name){case"water":return"rgb(26, 218, 147)";case"fire":return"red";case"normal":return"rgb(195, 192, 63)";case"bug":return"green";case"electric":return"rgb(255, 158, 0)";case"ground":return"rgb(115, 81, 53)";case"poison":return"rgb(34, 210, 13)";case"grass":return"rgb(146, 223, 46)";case"fighting":return"rgb(155, 166, 162)";case"psychic":return"rgb(105, 29, 144)";case"rock":return"rgb(94, 93, 92)";case"dark":return"rgb(72, 24, 72)";case"fairy":return"rgb(236, 61, 166)"}};return o?Object(y.jsx)("h2",{children:o}):s?Object(y.jsx)("h2",{children:Object(y.jsx)(N,{})}):w?Object(y.jsx)(d.a,{to:"/PokemonGame/BattlePreparation"}):Object(y.jsxs)("div",{id:"main",children:[Object(y.jsx)("h2",{children:"Welcome to Pokemon game!"}),Object(y.jsx)("h3",{children:"Here you will find a lot of information about each pokemon. We have a list of 500 pokemons."}),Object(y.jsx)("h2",{children:"To start select a pokemon..."}),localStorage.myPokemon&&!l?Object(y.jsxs)("div",{id:"recover-pokemon",children:[Object(y.jsx)("h2",{children:"Do you already have a pokemon that is in training want to keep it?"}),Object(y.jsx)("button",{type:"button",onClick:function(){var e=function(e){if(!(localStorage.length<1))return JSON.parse(localStorage.getItem(e))}("myPokemon");r(e)},children:"Yes I want!"})]}):"",Object(y.jsx)("div",{className:"card",children:Object(y.jsx)(P,{pokemon:i})}),Object(y.jsx)("button",{type:"button",disabled:0===b,className:"pokeButton",onClick:function(){h(b-10),v(k-10)},children:"See previous pokemons..."}),Object(y.jsx)("button",{type:"button",disabled:L,className:"pokeButton",onClick:function(){h(b+10),v(k+10)},children:"See next pokemons..."}),Object(y.jsx)("button",{id:"next-page",className:l?"":"display-off",onClick:function(){B(!0)},type:"button",children:"Prepare for battle..."}),Object(y.jsx)("div",{className:"pokemon-cards",children:function(){for(var e=b;e<k;e+=1)_.push(a[e]);return _}().map((function(e){return Object(y.jsx)("label",{htmlFor:e.name,children:Object(y.jsxs)("div",{style:{backgroundColor:F(e)},className:"pokeCard",children:[Object(y.jsxs)("div",{id:"card-text",children:[Object(y.jsx)("input",{className:"input-radio pokeCard pokemons",id:e.name,onClick:T,name:"selected",type:"radio",value:e.name}),Object(y.jsx)("h3",{children:"Click here to select ".concat(e.name)})]}),Object(y.jsx)("div",{id:"card-image",children:Object(y.jsx)("img",{src:e.sprites.front_default,alt:e.name})})]})},e.name)}))})]})})),B="display-off";var E=Object(h.b)(null,(function(e){return{setOpnt:function(t,n){return e(function(e,t){return{type:g,payload:e,payload2:t}}(t,n))}}}))((function(e){var t=e.setOpnt,n=Object(h.c)((function(e){return e.pokeReducer.selectedPokemon})),a=Object(h.c)((function(e){return e.pokeReducer.allPokemonsArr})),o=Object(c.useState)(!1),r=Object(O.a)(o,2),s=r[0],i=r[1],l=Object(c.useState)(!1),u=Object(O.a)(l,2),b=u[0],p=u[1],m=Object(c.useState)({}),x=Object(O.a)(m,2),f=x[0],k=x[1],v=Object(c.useState)(),g=Object(O.a)(v,2),S=g[0],C=g[1],N=Object(c.useState)(!1),w=Object(O.a)(N,2),E=w[0],L=w[1],_=Object(c.useState)(!1),T=Object(O.a)(_,2),F=T[0],G=T[1];function I(e){C(e),document.getElementById("BPText").innerHTML="This is your oponent. Are you ready for the battle?";var t=a[Math.ceil(Math.random()*a.length)];k(t),p(!0)}return F?Object(y.jsx)(d.a,{to:"/PokemonGame/BattleCamp"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.b,{to:"/PokemonGame",children:"Voltar"}),Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Battle Preparation"})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)("h1",{children:"You selected:"}),Object(y.jsx)(P,{pokemon:n})]}),Object(y.jsx)("h2",{children:"want to keep this pokemon and store your information?"}),Object(y.jsx)("h3",{id:"save-to-store",className:"display-off",children:"Congratulations now this pokemon is yours, take good care of it."}),Object(y.jsx)("button",{type:"button",onClick:function(){i(!0);var e,t,c=document.getElementById("save-to-store");e="myPokemon",t=n,localStorage.setItem(e,JSON.stringify(t)),c.classList.remove(B),setTimeout((function(){c.classList.add(B)}),3e3)},children:"Yes I want!"}),Object(y.jsx)("h1",{id:"BPText",children:"Want to battle pokemons of which levels?"}),Object(y.jsxs)("div",{className:"pokemon-cards",children:[b&&Object(y.jsx)("label",{htmlFor:f.name,children:Object(y.jsxs)("div",{className:"pokeCard",style:{backgroundColor:"#D2691E"},children:[Object(y.jsxs)("div",{id:"card-text",children:[Object(y.jsx)("input",{id:f.name,className:"input-radio pokeCard pokemons",onClick:function(){return t(f,S),void G(!0)},name:"selected",type:"radio",value:f.name}),Object(y.jsx)("h3",{children:"Click here to Battle with ".concat(f.name," level ").concat(S)})]}),Object(y.jsx)("div",{id:"card-image",children:Object(y.jsx)("img",{src:f.sprites.front_default,alt:f.name})})]})}),Object(y.jsx)("div",{children:E&&f.stats.map((function(e){return Object(y.jsxs)("p",{children:["".concat(e.stat.name,": "),Object(y.jsx)("strong",{children:"".concat(e.base_stat*S," points")})]},"".concat(e.name).concat(e.stat.name))}))})]}),Object(y.jsx)("button",{id:"level 1",className:s?"":B,onClick:function(){return I(1)},type:"button",children:"Level 1"}),Object(y.jsx)("button",{id:"level 2",className:s?"":B,onClick:function(){return I(2)},type:"button",children:"Level 2"}),Object(y.jsx)("button",{id:"level 3",className:s?"":B,onClick:function(){return I(3)},type:"button",children:"Level 3"}),Object(y.jsx)("button",{id:"checkOponent",className:s?"":B,onClick:function(){return L(!E)},type:"button",children:"CheckOponent"}),Object(y.jsx)("h4",{className:s?"":B,children:"Set Oponent Level here (Max 99 if you can XD)"}),Object(y.jsx)("label",{className:s?"":B,htmlFor:"oponentLvl",children:Object(y.jsx)("input",{id:"oponentLvl",type:"number",step:"1",min:"0",max:"99"})}),Object(y.jsx)("button",{id:"oponentLevelButton",className:s?"":B,onClick:function(){var e=document.getElementById("oponentLvl").value;e>99&&(e=99),I(e)},type:"button",children:"Set Oponent Level"})]})})),L=n(4);var _=function(e){var t=e.pokemon,n=e.level;return t.name?Object(y.jsxs)("div",{className:"pokemon-card",children:[Object(y.jsxs)("div",{className:"card-selected",children:[Object(y.jsx)("h1",{children:"".concat(t.name[0].toUpperCase()).concat(t.name.slice(1).toLowerCase()," ( level: ").concat(n," )")}),Object(y.jsx)("img",{id:"selectedPokemon",src:t.sprites.other.dream_world.front_default,alt:t.name})]}),Object(y.jsxs)("div",{className:"card-selected-text",children:[Object(y.jsx)("p",{children:"Base experience: ".concat(t.base_experience*n," points")}),Object(y.jsx)("p",{children:"Weight: ".concat(t.weight)}),t.stats.map((function(e){return Object(y.jsx)("p",{children:"".concat(e.stat.name,": ").concat(e.base_stat," points")},"".concat(e.name).concat(e.stat.name))}))]})]}):Object(y.jsx)("div",{children:"Select an Pokemon to see more information about it..."})};var T=Object(h.b)(null,null)((function(){var e=Object(h.c)((function(e){return e.pokeReducer.oponent.stats})),t=Object(h.c)((function(e){return e.pokeReducer.oponent.level})),n=Object(h.c)((function(e){return e.pokeReducer.selectedPokemon})),a=Object(c.useState)(e),o=Object(O.a)(a,2),r=o[0],s=o[1],i=Object(c.useState)(!1),l=Object(O.a)(i,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){s(Object(L.a)(Object(L.a)({},r),{},{thisOponent:r.stats.forEach((function(e){e.base_stat*=t}))}))}),[]),Object(c.useEffect)((function(){r.stats[0].base_stat<1&&d(!0)}),[r]),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)(j.b,{to:"/PokemonGame/BattlePreparation",children:"Back To BattlePreparation"}),Object(y.jsx)(P,{pokemon:n}),u?"":Object(y.jsx)("button",{type:"button",onClick:function(){var e=.1*n.stats[1].base_stat,t=.3*n.stats[1].base_stat,c=Math.ceil(Math.random()*-(e-t));s(Object(L.a)(Object(L.a)({},r),{},{thisOponent:r.stats[0].base_stat-=c}))},children:"Attack!"}),u?Object(y.jsx)("div",{children:Object(y.jsx)(j.b,{style:{fontSize:"26px",textDecoration:"none",margin:"6em",color:"black",fontWeight:"700"},to:"/PokemonGame/BattlePreparation",children:"Congratulations you Win! Click here to Back BattlePreparation"})}):Object(y.jsx)(_,{pokemon:r,level:t})]})})),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(j.a,{children:Object(y.jsxs)(d.d,{children:[Object(y.jsx)(d.b,{exact:!0,path:"/PokemonGame",component:w}),Object(y.jsx)(d.b,{exact:!0,path:"/PokemonGame/BattlePreparation",component:E}),Object(y.jsx)(d.b,{exact:!0,path:"/PokemonGame/BattleCamp",component:T})]})}),Object(y.jsx)("h2",{style:{marginTop:"5%"},children:"Created By Felipe Flores"}),Object(y.jsx)("a",{href:"https://github.com/FelipeFloresWeb/PokemonGame",children:"GitHub"}),Object(y.jsx)("p",{children:"Datas from: https://pokeapi.co/"})]})}}]),n}(c.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},I=n(14),M=n(26),R=n(27),A={error:null,isLoading:!0,allPokemonsArr:[],isSelected:!1,selectedPokemon:{},oponent:{stats:{},level:""}};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(L.a)(Object(L.a)({},e),{},{isLoading:!1,allPokemonsArr:t.payload});case f:return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case k:return Object(L.a)(Object(L.a)({},e),{},{isSelected:!0,selectedPokemon:t.payload});case v:return Object(L.a)(Object(L.a)({},e),{},{allPokemonsArr:t.payload});case g:return Object(L.a)(Object(L.a)({},e),{},{oponent:{stats:t.payload,level:t.payload2}});default:return e}},W=Object(I.combineReducers)({pokeReducer:D}),J=Object(I.createStore)(W,Object(M.composeWithDevTools)(Object(I.applyMiddleware)(R.a)));r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(h.a,{store:J,children:Object(y.jsx)(F,{})})}),document.getElementById("root")),G()}},[[47,1,2]]]);
//# sourceMappingURL=main.77dcf1a0.chunk.js.map