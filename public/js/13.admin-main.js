webpackJsonp([13],{269:function(n,t,s){"use strict";var a=s(5),e=s.n(a);t["default"]={name:"Login",created:function(){e.a.app("AdminApp").auth().signOut()},data:function(){return{email:"",password:""}},methods:{signInWithPassword:function(){var n=this;return e.a.app("AdminApp").auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){return n.onSignedIn(),t})["catch"](function(n){alert(n.message)})},onSignedIn:function(){this.$router.push({path:"/"})}}}},301:function(n,t,s){t=n.exports=s(3)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},352:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("a",{staticClass:"hiddenanchor",attrs:{id:"signup"}}),n._v(" "),s("a",{staticClass:"hiddenanchor",attrs:{id:"signin"}}),n._v(" "),s("div",{staticClass:"login_wrapper"},[s("div",{staticClass:"animate form login_form"},[s("section",{staticClass:"login_content"},[s("form",{on:{submit:function(t){t.preventDefault(),n.signInWithPassword()}}},[s("h1",[n._v("Login Form")]),n._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:n._s(n.email)},on:{input:function(t){t.target.composing||(n.email=t.target.value)}}})]),n._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:n._s(n.password)},on:{input:function(t){t.target.composing||(n.password=t.target.value)}}})]),n._v(" "),s("div",[s("input",{staticClass:"btn btn-default submit",attrs:{type:"submit",value:"Log in"},domProps:{value:"Log in"}}),n._v(" "),s("a",{staticClass:"reset_pass",attrs:{href:"#"}},[n._v("Lost your password?")])]),n._v(" "),s("div",{staticClass:"clearfix"}),n._v(" "),n._m(0)])])])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"separator"},[s("div",{staticClass:"clearfix"}),n._v(" "),s("br"),n._v(" "),s("div",[s("h1",[s("i",{staticClass:"fa fa-paw"}),n._v(" ForLoop Nigeria")]),n._v(" "),s("p",[n._v("©2016 All Rights Reserved. ForLoop Nigeria")])])])}]}},373:function(n,t,s){var a=s(301);"string"==typeof a&&(a=[[n.i,a,""]]);s(4)(a,{});a.locals&&(n.exports=a.locals)},9:function(n,t,s){var a,e;s(373),a=s(269);var i=s(352);e=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(e=a=a["default"]),"function"==typeof e&&(e=e.options),e.render=i.render,e.staticRenderFns=i.staticRenderFns,n.exports=a}});