"use strict";(self.webpackChunkyummy_react_frontend=self.webpackChunkyummy_react_frontend||[]).push([[702],{4702:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var i,n=a(168),r=a(3081).Z.div(i||(i=(0,n.Z)(["\n\tpadding-bottom: 60px;\n\toverflow: clip;\n\tposition: relative;\n\tmin-height: calc(100vh - 60px);\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),o=a(9317),m=a(5705),t=a(6727),d=a(9418),c=a(9434),l=a(9273),p=a(3329),u=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,h=t.Ry().shape({name:t.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0491\u0490\u0454\u0404\u0457\u0407\u0456\u04060-9\s]{6,}$/,"Name can include numbers and letters (Latin, Cyrillic), the minimum number of characters in the field is 1 (inclusive), the maximum is 16 (inclusive)").min(1).max(16).required(),password:t.Z_().matches(u,"The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)").min(6).max(16).required(),passwordConfirm:t.Z_().matches(u,"The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)").min(6).max(16).required(),email:t.Z_().min(6).max(64).matches(/^[\w!#$%^&*\-=/{}[\]_|`~?\\+][\w!#$%^&*\\+\-?=/{}[\]_|`~\\.]{1,62}[\w!#$%^&*\-=/{}+[\]_|`~?\\]@([\w]+\.){1,20}[\w]{1,4}$/,"The local part of the mail can contain capital and small Latin letters (A-Z, a-z), numbers (from 0 to 9) and special symbols !#$%^&*_-=*/?+ but no more than 64 characters").email().required()}),x=function(){var e=(0,c.I0)();return(0,p.jsxs)(o.i4,{children:[(0,p.jsx)(m.J9,{initialValues:{name:"",password:"",passwordConfirm:"",email:""},onSubmit:function(s,a){var i=s.name,n=s.password,r=s.email,o=a.resetForm;e((0,l.a$)({name:i,password:n,email:r})),o()},validationSchema:h,children:function(e){var s=e.errors,a=e.touched,i=e.values;return i.passwordConfirm!==i.password&&(s.passwordConfirm="Passwords don't match"),(0,p.jsxs)(o.tN,{autoComplete:"off",children:[(0,p.jsx)(o.jH,{children:"Registration"}),(0,p.jsxs)(o.L1,{className:a.name&&(s.name?"error":"valid"),children:[(0,p.jsx)(o.GB,{id:"icon-person"}),(0,p.jsx)(o.M5,{type:"text",name:"name",placeholder:"Username"}),a.name&&(s.name?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Bc,{name:"name",component:o.pd}),(0,p.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,p.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,p.jsxs)(o.L1,{className:a.password&&(s.password?"error":"valid"),children:[(0,p.jsx)(o.GB,{id:"icon-lock"}),(0,p.jsx)(o.M5,{type:"password",name:"password",placeholder:"Password"}),a.password&&(s.password?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Bc,{name:"password",component:o.pd}),(0,p.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,p.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,p.jsxs)(o.L1,{className:a.passwordConfirm&&(s.passwordConfirm?"error":"valid"),children:[(0,p.jsx)(o.GB,{id:"icon-lock"}),(0,p.jsx)(o.M5,{type:"password",name:"passwordConfirm",placeholder:"Password confirmation"}),a.passwordConfirm&&(s.passwordConfirm?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Bc,{name:"passwordConfirm",component:o.pd}),(0,p.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,p.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,p.jsxs)(o.L1,{className:a.email&&(s.email?"error":"valid"),children:[(0,p.jsx)(o.GB,{id:"icon-letter"}),(0,p.jsx)(o.M5,{type:"email",name:"email",placeholder:"Email"}),a.email&&(s.email?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Bc,{name:"email",component:o.pd}),(0,p.jsx)(o.v7,{id:"icon-validation-error"})]}):(0,p.jsx)(o.v7,{id:"icon-validation-success"}))]}),(0,p.jsx)(d.OL,{type:"submit",children:"Sign up"})]})}}),(0,p.jsx)(o.w2,{to:"/login",children:"Login"})]})},j=a(105),w=a(736),v=function(){return(0,p.jsxs)(r,{children:[(0,p.jsx)(j.E,{}),(0,p.jsx)(x,{}),(0,p.jsx)(w.g,{})]})}}}]);
//# sourceMappingURL=702.adc3946a.chunk.js.map