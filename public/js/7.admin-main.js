webpackJsonp([7],{17:function(n,t,e){var s,i;e(361),s=e(279);var a=e(338);i=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,n.exports=s},279:function(n,t,e){"use strict";var s=e(5),i=e.n(s),a=i.a.database().ref("members_page");t["default"]={name:"MembersPage",data:function(){return{newMember:null,updatingDescription:!1,addingMember:!1}},firebase:{members_page:{source:a,asObject:!0}},methods:{changeMembersDescription:function(){var n=this,t={description:this.members_page.description};this.updatingDescription=!0,this.$firebaseRefs.members_page.update(t,function(t){t?alert("Issue Updating Description: "+t.message):alert("Description successfully modified"),n.updatingDescription=!1})}}}},289:function(n,t,e){t=n.exports=e(3)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},338:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{},[e("h1",[n._v("Members Page")]),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"x_panel"},[n._m(0),n._v(" "),e("div",{staticClass:"x_content"},[e("form",{on:{submit:function(t){t.preventDefault(),n.changeMembersDescription(t)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-md-offset-3"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.members_page.description,expression:"members_page.description"}],attrs:{name:"description",placeholder:"Members Page Description"},domProps:{value:n._s(n.members_page.description)},on:{input:function(t){t.target.composing||(n.members_page.description=t.target.value)}}})])]),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-md-offset-3"},[e("input",{staticClass:"btn btn-success",attrs:{type:"submit",name:"name",value:"Change Description",disabled:n.updatingDescription},domProps:{value:"Change Description"}})])])])])])])]),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"x_panel"},[n._m(1),n._v(" "),e("div",{staticClass:"x_content"},[e("div",{staticClass:"row"},n._l(n.members_page.members,function(t,s){return e("div",{key:s,staticClass:"col-md-4 col-sm-4 col-xs-12 profile_details"},[e("div",{staticClass:"well profile_view"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"left col-xs-7"},[e("h2",[n._v(n._s(t.displayName))])]),n._v(" "),e("div",{staticClass:"right col-xs-5 text-center"},[e("img",{staticClass:"img-circle img-responsive",attrs:{src:t.photoUrl,alt:"",width:"48",height:"48"}})])]),n._v(" "),e("div",{staticClass:"col-xs-12 bottom text-center"},[e("button",{staticClass:"btn btn-xs btn-danger",attrs:{name:"button"},on:{click:function(t){n.removeMember(s)}}},[n._v("X")])])])])}))])])])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"x_title"},[e("h2",[n._v("Change Members Page Description")]),n._v(" "),e("ul",{staticClass:"nav navbar-right panel_toolbox"},[e("li",[e("a",{staticClass:"collapse-link"},[e("i",{staticClass:"fa fa-chevron-up"})])])]),n._v(" "),e("div",{staticClass:"clearfix"})])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"x_title"},[e("h2",[n._v("Public Members")]),n._v(" "),e("ul",{staticClass:"nav navbar-right panel_toolbox"},[e("li",[e("a",{staticClass:"collapse-link"},[e("i",{staticClass:"fa fa-chevron-up"})])])]),n._v(" "),e("div",{staticClass:"clearfix"})])}]}},361:function(n,t,e){var s=e(289);"string"==typeof s&&(s=[[n.i,s,""]]);e(4)(s,{});s.locals&&(n.exports=s.locals)}});