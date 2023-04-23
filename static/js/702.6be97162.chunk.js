"use strict";(self.webpackChunkyummy_react_frontend=self.webpackChunkyummy_react_frontend||[]).push([[702],{4702:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var a,n=i(168),r=i(3081).Z.div(a||(a=(0,n.Z)(["\n\tpadding-bottom: 60px;\n\toverflow: clip;\n\tposition: relative;\n\tmin-height: calc(100vh - 60px);\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),o=i(9317),m=i(5705),t=i(6727),d=i(9418),c=i(9434),l=i(9273),u=i(3329),p=/^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]+)$/,h=t.Ry().shape({name:t.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0491\u0490\u0454\u0404\u0457\u0407\u0456\u04060-9\s]{6,}$/,"Name can include numbers and letters (Latin, Cyrillic), the minimum number of characters in the field is 1 (inclusive), the maximum is 16 (inclusive)").min(1).max(16).required(),password:t.Z_().matches(p,"The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)").min(6).max(16).required(),passwordConfirm:t.Z_().matches(p,"The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)").min(6).max(16).required(),email:t.Z_().min(6).max(64).matches(/^[\w]{1,64}@([\w]+\.)+[\w]{1,4}$/,"The local part of the mail can contain capital and small Latin letters (A-Z, a-z), numbers (from 0 to 9), but no more than 64 characters").email().required()}),x=function(){var e=(0,c.I0)();return(0,u.jsxs)(o.i4,{children:[(0,u.jsx)(m.J9,{initialValues:{name:"",password:"",passwordConfirm:"",email:""},onSubmit:function(s,i){var a=s.name,n=s.password,r=s.email,o=i.resetForm;e((0,l.a$)({name:a,password:n,email:r})),o()},validationSchema:h,children:function(e){var s=e.errors,i=e.touched,a=e.values;return a.passwordConfirm!==a.password&&(s.passwordConfirm="Passwords don't match"),(0,u.jsxs)(o.tN,{autoComplete:"off",children:[(0,u.jsx)(o.jH,{children:"Registration"}),(0,u.jsxs)(o.L1,{className:i.name&&(s.name?"error":"valid"),children:[(0,u.jsx)(o.GB,{id:"icon-person"}),(0,u.jsx)(o.M5,{type:"text",name:"name",placeholder:"Username"}),i.name&&(s.name?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.Bc,{name:"name",component:o.pd}),(0,u.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,u.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,u.jsxs)(o.L1,{className:i.password&&(s.password?"error":"valid"),children:[(0,u.jsx)(o.GB,{id:"icon-lock"}),(0,u.jsx)(o.M5,{type:"password",name:"password",placeholder:"Password"}),i.password&&(s.password?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.Bc,{name:"password",component:o.pd}),(0,u.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,u.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,u.jsxs)(o.L1,{className:i.passwordConfirm&&(s.passwordConfirm?"error":"valid"),children:[(0,u.jsx)(o.GB,{id:"icon-lock"}),(0,u.jsx)(o.M5,{type:"password",name:"passwordConfirm",placeholder:"Password confirmation"}),i.passwordConfirm&&(s.passwordConfirm?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.Bc,{name:"passwordConfirm",component:o.pd}),(0,u.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,u.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,u.jsxs)(o.L1,{className:i.email&&(s.email?"error":"valid"),children:[(0,u.jsx)(o.GB,{id:"icon-letter"}),(0,u.jsx)(o.M5,{type:"email",name:"email",placeholder:"Email"}),i.email&&(s.email?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.Bc,{name:"email",component:o.pd}),(0,u.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,u.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,u.jsx)(d.OL,{type:"submit",children:"Sign up"})]})}}),(0,u.jsx)(o.w2,{to:"/login",children:"Login"})]})},j=i(105),v=i(736),f=function(){return(0,u.jsxs)(r,{children:[(0,u.jsx)(j.E,{}),(0,u.jsx)(x,{}),(0,u.jsx)(v.g,{})]})}}}]);
//# sourceMappingURL=702.6be97162.chunk.js.map