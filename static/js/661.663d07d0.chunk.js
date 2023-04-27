"use strict";(self.webpackChunkyummy_react_frontend=self.webpackChunkyummy_react_frontend||[]).push([[661],{151:function(t,n,e){e.d(n,{Bp:function(){return m},_l:function(){return c},lG:function(){return u},mm:function(){return s}});var i,r,o,a,p=e(168),d=e(3081),u=d.Z.h2(i||(i=(0,p.Z)(["\n\tfont-weight: 600;\n\tfont-size: 28px;\n\tline-height: 28px;\n\tletter-spacing: -0.02em;\n\tmargin: 0;\n\tcolor: ",";\n\t@media screen and (min-width: 768px) {\n\t\tfont-size: 32px;\n\t\tline-height: 32px;\n\t}\n\t@media screen and (min-width: 1440px) {\n\t\tfont-size: 44px;\n\t\tline-height: 44px;\n\t}\n"])),(function(t){return t.theme.colors.titleColor})),s=d.Z.div(r||(r=(0,p.Z)(["\n\tz-index: 100;\n"]))),c=d.Z.div(o||(o=(0,p.Z)(["\n\tposition: absolute;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: ",";\n\tborder-radius: 3px;\n\ttransform: rotate(-25deg);\n\t@media screen and (min-width: 768px) {\n\t\twidth: 14px;\n\t\theight: 14px;\n\t}\n\t&.left {\n\t\tleft: 120px;\n\t\ttop: 76px;\n\t\t@media screen and (min-width: 768px) {\n\t\t\tleft: 220px;\n\t\t\ttop: 85px;\n\t\t}\n\t\t@media screen and (min-width: 1440px) {\n\t\t\tleft: 328px;\n\t\t\ttop: 116px;\n\t\t}\n\t}\n\t&.right {\n\t\tright: 16px;\n\t\ttop: 109px;\n\t\t@media screen and (min-width: 768px) {\n\t\t\tright: 24px;\n\t\t\ttop: 98px;\n\t\t}\n\t\t@media screen and (min-width: 1440px) {\n\t\t\tright: 172px;\n\t\t\ttop: 130px;\n\t\t}\n\t}\n"])),(function(t){return t.theme.colors.primary})),m=d.Z.div(a||(a=(0,p.Z)(["\n\tposition: absolute;\n\twidth: 6px;\n\theight: 6px;\n\tbackground: ",";\n\tborder-radius: 3px;\n\ttransform: rotate(-25deg);\n\tleft: 248px;\n\ttop: 142px;\n\t@media screen and (min-width: 768px) {\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\tleft: 437px;\n\t\ttop: 155px;\n\t}\n\t@media screen and (min-width: 1440px) {\n\t\tleft: 807px;\n\t\ttop: 200px;\n\t}\n"])),(function(t){return t.theme.colors.buttonDarkBG}))},2775:function(t,n,e){e.d(n,{M:function(){return o}});var i=e(151),r=e(3329),o=function(t){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.lG,{children:t.title}),(0,r.jsxs)(i.mm,{children:[(0,r.jsx)(i._l,{className:"left"}),(0,r.jsx)(i._l,{className:"right"}),(0,r.jsx)(i.Bp,{})]})]})}},4468:function(t,n,e){e.d(n,{ME:function(){return p},bT:function(){return u},ym:function(){return d}});var i=e(5861),r=e(4687),o=e.n(r),a=e(1243);a.Z.defaults.baseURL="https://yummy-rest-api.onrender.com/";var p=function(){var t=(0,i.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.post("/ingredients/shopping-list",n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,i.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/ingredients/shopping-list");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,i.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.delete("/ingredients/shopping-list/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6661:function(t,n,e){e.r(n),e.d(n,{default:function(){return q}});var i,r,o,a,p,d,u,s,c,m,h,x,l,f,g=e(168),b=e(3081),w=b.Z.div(i||(i=(0,g.Z)(["\n    margin-bottom: 50px;\n    margin-top: 29px;  //50px - 21px(padding-bottom header) = 29px\n\n    @media "," {\n        margin-bottom: 72px;\n        margin-top: 51px; //72px - 21px(padding-bottom header) = 51px\n    }\n\n    @media "," {\n        margin-top: 79px; //100px - 21px(padding-bottom header) = 79px\n    }\n"])),(function(t){return t.theme.media.tablet}),(function(t){return t.theme.media.desktop})),Z=e(2775),v=e(3329),j=function(){return(0,v.jsx)(w,{children:(0,v.jsx)(Z.M,{title:"Shopping list"})})},k=e(5861),y=e(9439),z=e(4687),_=e.n(z),C=e(2791),B=e(4468),G=e(788),L=b.Z.ul(r||(r=(0,g.Z)(["\n\tbackground-color: ",";\n\tborder-radius: 8px;\n\tpadding: 10px;\n\tmargin: 0 -8px 32px;\n\tmax-width: 1240px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 63% 22% 15%;\n\talign-content: center;\n\n\t@media "," {\n\t\tmin-width: 664px;\n\t\tmax-width: 1159px;\n\t\tgrid-template-columns: 65% 23% 12%;\n\t\tmargin: 0 0 50px 0;\n\t\tpadding: 20px;\n\t}\n\t@media "," {\n\t\tmin-width: 1160px;\n\t\tgrid-template-columns: 74.6% 18.7% 6.7%;\n\t\tpadding: 21px 40px;\n\t}\n"])),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.media.tablet}),(function(t){return t.theme.media.desktop})),S=b.Z.li(o||(o=(0,g.Z)(["\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tline-height: 1.5;\n\tletter-spacing: 0.03em;\n\tcolor: ",";\n\t&:nth-of-type(2) {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\t\n\t@media "," {\n\t\tfont-size: 18px;\n\t}\n"])),(function(t){return t.theme.colors.buttonLightBG}),(function(t){return t.theme.media.tablet})),D=b.Z.ul(a||(a=(0,g.Z)(["\n\tmax-width: 703px;\n\tmargin-bottom: 100px;\n\tjustify-content: center;\n\n\t@media "," {\n\t\tmin-width: 704px;\n\t\tmax-width: 1159px;\n\t\tmargin-bottom: 200px;\n\t}\n\t@media "," {\n\t\tmin-width: 1160px;\n\t\tmargin-bottom: 195px;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n"])),(function(t){return t.theme.media.tablet}),(function(t){return t.theme.media.desktop})),E=b.Z.li(p||(p=(0,g.Z)(["\n\tborder-bottom: 1px solid ",";\n\tmin-height: 84px;\n\n\tmax-width: 704px;\n\tmargin-bottom: 24px;\n\n\tdisplay: grid;\n\talign-items: start;\n\tgrid-template-columns: 20.4% 42.6% 22% 15%;\n\n\t&:last-of-type {\n\t\tmargin-bottom: 0;\n\t}\n\t@media "," {\n\t\tmin-width: 704px;\n\t\tmax-width: 1160px;\n\t\tmin-height: 140px;\n\t\tgrid-template-columns: 15% 48% 25% 9%;\n\t\tmargin-bottom: 45px;\n\t}\n\t@media "," {\n\t\tmin-width: 1160px;\n\t\tgrid-template-columns: 9% 62.5% 24.2% 2%;\n\t}\n"])),(function(t){return t.theme.colors.fontColorPassive}),(function(t){return t.theme.media.tablet}),(function(t){return t.theme.media.desktop})),F=b.Z.div(d||(d=(0,g.Z)(["\n\tbackground-color: ",";\n\tborder-radius: 6px;\n\twidth: 48px;\n\theight: 48px;\n\tpadding: 6px;\n\t@media "," {\n\t\twidth: 81px;\n\t\theight: 81px;\n\t\tpadding: 8px 6px;\n\t}\n"])),(function(t){return t.theme.colors.primarySoft}),(function(t){return t.theme.media.tablet})),M=(b.Z.img(u||(u=(0,g.Z)(["\n\tbackground-size: cover;\n"]))),b.Z.p(s||(s=(0,g.Z)(["\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tline-height: 1.2;\n\n\tcolor: ",";\n\t/* margin-right: 108px; */\n\t@media "," {\n\t\tfont-size: 16px;\n\t\tline-height: 1.5;\n\t}\n\n\tcolor: #3e4462;\n"])),(function(t){return t.theme.colors.fontColorDark}),(function(t){return t.theme.media.tablet}))),N=b.Z.p(c||(c=(0,g.Z)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-weight: 600;\n\tfont-size: 10px;\n\tline-height: 1.2;\n\tborder-radius: 5px;\n\tmin-width: 37px;\n\n\t/* margin-right: 46px; */\n\tpadding: 4px;\n\ttext-align: center;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\t@media "," {\n\t\tmin-width: 68px;\n\t\tborder-radius: 4px;\n\t\tpadding-right: 8px;\n\t\tpadding-left: 8px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t}\n"])),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.fontColor}),(function(t){return t.theme.media.tablet})),R=b.Z.button(m||(m=(0,g.Z)(["\n\tbackground-color: transparent;\n\tborder: none;\n\theight: 14px;\n\twidth: 14px;\n\tmargin-right: auto;\n\tmargin-left: auto;\n"]))),J=(0,b.Z)(G.J)(h||(h=(0,g.Z)(["\n\theight: 14px;\n\twidth: 14px;\n\tstroke: ",";\n\ttransition: stroke 0.3s ease-in-out, color 0.3s ease-in-out,\n\t\t\tborder-color 0.3s ease-in-out;\n\n\t&:hover {\n\t\ttransition: stroke 0.3s ease-in-out, color 0.3s ease-in-out,\n\t\t\tborder-color 0.3s ease-in-out;\n\t\tstroke: ",";;\n\t}\n\t&:focus {\n\t\tstroke: ",";;\n\t}\n\t\n\t@media "," {\n\t\theight: 20px;\n\t\twidth: 20px;\n\t}\n\t\n"])),(function(t){return t.theme.colors.addRecipeFormFieldsDeleteButton}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.media.tablet})),P=b.Z.p(x||(x=(0,g.Z)(["\n\tfont-weight: 600;\n\tfont-size: 28px;\n\tline-height: 1.2;\n\tletter-spacing: 0.1em;\n\tmargin: 0;\n\tcolor: ",";\n\ttext-align: center;\n\tmargin-bottom: 132px;\n\t@media screen and (min-width: 768px) {\n\t\tfont-size: 32px;\n\t\tline-height: 32px;\n\t}\n\t@media screen and (min-width: 1440px) {\n\t\tfont-size: 44px;\n\t\tline-height: 44px;\n\t}\n"])),(function(t){return t.theme.colors.primary})),T=b.Z.div(l||(l=(0,g.Z)(["\n\tposition: relative;\n"]))),U=(0,b.Z)(G.J)(f||(f=(0,g.Z)(["\n\theight: 50px;\n\twidth: 50px;\n\tfill: ",";\n\n\tposition: absolute;\n\ttop: -80px;\n\tleft: 47%;\n\t@media screen and (min-width: 768px) {\n\t\theight: 75px;\n\t\twidth: 75px;\n\t\ttop: -140px;\n\t}\n\t@media screen and (min-width: 1440px) {\n\t\theight: 85px;\n\t\twidth: 85px;\n\t}\n"])),(function(t){return t.theme.colors.primary})),Y=function(){var t=(0,C.useState)([]),n=(0,y.Z)(t,2),e=n[0],i=n[1];(0,C.useEffect)((function(){(0,B.ym)().then((function(t){var n=t.data;return i(n.shoppingList)})).catch((function(t){return console.error(t)}))}),[]);var r=function(){var t=(0,k.Z)(_().mark((function t(n){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,B.bT)(n);case 2:i((function(t){return t.filter((function(t){return t._id!==n}))}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[e.length>0&&(0,v.jsxs)(L,{children:[(0,v.jsx)(S,{children:"Products"}),(0,v.jsx)(S,{children:"Number"}),(0,v.jsx)(S,{children:"Remove"})]}),(0,v.jsx)(D,{children:e.length>0&&e.map((function(t){var n=t._id,e=t.ttl,i=t.thb,o=t.measure;return(0,v.jsxs)(E,{children:[(0,v.jsx)(F,{children:(0,v.jsx)("img",{src:i,alt:e})}),(0,v.jsxs)(M,{children:[e,(0,v.jsx)("br",{})]}),(0,v.jsx)(N,{children:o}),(0,v.jsx)(R,{type:"button",onClick:function(){return r(n)},children:(0,v.jsx)(J,{id:"icon-close"})})]},n)}))}),0===e.length&&(0,v.jsxs)(T,{children:[(0,v.jsx)(U,{id:"icon-cart"}),(0,v.jsx)(P,{children:"Your Shopping List is Empty"})]})]})},q=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{}),(0,v.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=661.663d07d0.chunk.js.map