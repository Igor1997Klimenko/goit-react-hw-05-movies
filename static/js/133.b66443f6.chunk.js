"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133],{4390:function(n,r,t){t.d(r,{Eb:function(){return u},HI:function(){return c},jO:function(){return a},k4:function(){return f},tP:function(){return s}});var e=t(5861),p=t(7757),x=t.n(p),o=t(4569),i=t.n(o);i().defaults.baseURL="https://api.themoviedb.org/3";var a=function(){var n=(0,e.Z)(x().mark((function n(){var r,t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?page=1&api_key=4867f71c2cc3334fef3a71f8c4706576");case 2:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(x().mark((function n(r){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=4867f71c2cc3334fef3a71f8c4706576&query=".concat(r));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(x().mark((function n(r){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(r,"?api_key=4867f71c2cc3334fef3a71f8c4706576"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(x().mark((function n(r){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(r,"/credits?api_key=4867f71c2cc3334fef3a71f8c4706576"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(x().mark((function n(r){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(r,"/reviews?api_key=4867f71c2cc3334fef3a71f8c4706576"));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},1594:function(n,r,t){t.d(r,{Fi:function(){return H},GX:function(){return B},HK:function(){return F},Iq:function(){return E},Se:function(){return _},TY:function(){return U},UQ:function(){return C},Vr:function(){return k},Yz:function(){return Z},_4:function(){return j},aJ:function(){return w},ny:function(){return z},sC:function(){return q},wE:function(){return A},xE:function(){return y}});var e,p,x,o,i,a,f,c,u,s,d,l,g,b,h,v=t(168),m=t(2499),Z=m.Z.button(e||(e=(0,v.Z)(["\n    font-size: 18px;\n    padding: 5px;\n    cursor: pointer;\n    background: transparent;\n    border: none;\n"]))),w=m.Z.div(p||(p=(0,v.Z)(["\n    background: #004fff3d;\n    padding: 10px;\n    display: flex;\n    box-shadow: 0px 5px 7px -6px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);\n"]))),y=m.Z.button(x||(x=(0,v.Z)(["\n    text-decoration: none;\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    padding: 5px 40px;\n    margin: 10px 0;\n    border-radius: 0 40px 40px 0px;\n    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);\n    background-position: 100% 0;\n    background-size: 200% 200%;\n    font-family: 'Montserrat',sans-serif;\n    font-size: 14px;\n    font-weight: 300;\n    border: none;\n    color: white;\n    box-shadow: 0 16px 32px 0 rgb(0 40 120 / 35%);\n    transition: .5s;\n\n  &:hover{\n      box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);\n      background-position: 0 0;\n  }\n"]))),F=m.Z.form(o||(o=(0,v.Z)(["\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n"]))),k=m.Z.input(i||(i=(0,v.Z)(["\n    padding: 10px;\n    border-radius: 20px 0px 0px 20px;\n    border-color: #0058ff54;\n    outline: none;\n    border-right: transparent;\n"]))),B=m.Z.button(a||(a=(0,v.Z)(["\n    background: #51c7ff;\n    border-color: #0058ff54;\n    border-radius: 0 20px 20px 0;\n    border-left: transparent;\n    cursor: pointer;\n    color: #001ca7;\n    font-weight: 700;\n\n        &:hover{\n            background: #25b9ff;\n            transition: 0.5s;\n            color: #0023d1;\n        }\n"]))),_=m.Z.div(f||(f=(0,v.Z)(["\n    display: flex;\n    margin: 15px 0;\n    box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0);\n"]))),j=m.Z.div(c||(c=(0,v.Z)(["\n    margin: 0 15px;\n"]))),z=m.Z.ul(u||(u=(0,v.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n    justify-content: flex-start;\n"]))),A=m.Z.li(s||(s=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 5px 5px 15px 5px rgba(0,0,0,0);\n    width: min-content;\n    padding: 10px;\n    margin: 25px;\n"]))),E=m.Z.h3(d||(d=(0,v.Z)(["\n    text-align: center;\n    text-transform: uppercase;\n        color: rgba(0,0,0,0.6);\n    text-shadow: 2px 8px 6px rgb(0 0 0 / 20%), 30px -5px 35px rgb(255 255 255 / 30%);\n"]))),C=m.Z.ul(l||(l=(0,v.Z)(["\n    list-style: none;\n    padding: 0;\n    display: flex;\n    margin-left: 20px;\n"]))),U=m.Z.li(g||(g=(0,v.Z)(["\n    display: flex;\n    margin-left: 5px;\n"]))),q=m.Z.button(b||(b=(0,v.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding: 15px 30px;\n  border: 1px solid;\n  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);\n  border-image-slice: 1;\n  font-family: 'Montserrat', sans-serif;\n  text-transform: uppercase;\n  overflow: hidden;\n  letter-spacing: 2px;\n  transition: .8s cubic-bezier(.165, .84, .44, 1);\n\n        &:before {\n            content: \"\";\n            position: absolute;\n            left: 0;\n            top: 0;\n            height: 0;\n            width: 100%;\n            z-index: -1;\n            color: white;\n            background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);\n            transition: .8s cubic-bezier(.165, .84, .44, 1);\n    }\n\n    &:hover {\n  background: rgba(255, 255, 255, 0);\n}\n&:hover:before {\n  bottom: 0%;\n  top: auto;\n  height: 100%;\n}\n"]))),H=m.Z.span(h||(h=(0,v.Z)(["\nfont-size: 80px;\n    color: #fff;\n    padding: 40px 0;\n    letter-spacing: -7px;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-align: center;\n    display: block;\n    animation: blur 3s ease-out infinite;\n    text-shadow: 0px 0px 5px #b71111, 0px 0px 7px #c54c30;\n\n  @keyframes blur {\n  from {\n    text-shadow:0px 0px 10px #fff,\n      0px 0px 10px #fff, \n      0px 0px 25px #fff,\n      0px 0px 25px #fff,\n      0px 0px 25px #fff,\n      0px 0px 25px #fff,\n      0px 0px 25px #fff,\n      0px 0px 25px #fff,\n      0px 0px 50px #fff,\n      0px 0px 50px #fff,\n      0px 0px 50px #7B96B8,\n      0px 0px 150px #7B96B8,\n      0px 10px 100px #7B96B8,\n      0px 10px 100px #7B96B8,\n      0px 10px 100px #7B96B8,\n      0px 10px 100px #7B96B8,\n      0px -10px 100px #7B96B8,\n      0px -10px 100px #7B96B8;\n  }\n}\n"])))},3133:function(n,r,t){t.r(r);var e=t(885),p=t(2791),x=t(6871),o=t(4390),i=t(1594),a=t(184);r.default=function(){var n=(0,x.UO)().id,r=(0,p.useState)([]),t=(0,e.Z)(r,2),f=t[0],c=t[1];return(0,p.useEffect)((function(){(0,o.tP)(n).then((function(n){return c(n)}))}),[n]),(0,a.jsx)(a.Fragment,{children:Boolean(f.length)?(0,a.jsx)("ul",{children:f.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{children:["Author:",t]}),(0,a.jsx)("p",{children:e})]},r)}))}):(0,a.jsx)(i.Fi,{children:"We don`t have any reviews for this movie"})})}}}]);
//# sourceMappingURL=133.b66443f6.chunk.js.map