(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cae9f8b"],{3807:function(e,t,n){"use strict";n("a039")},a039:function(e,t,n){},a434:function(e,t,n){"use strict";var i=n("23e7"),c=n("23cb"),r=n("a691"),a=n("50c4"),o=n("7b0b"),u=n("65f0"),s=n("8418"),l=n("1dde"),p=l("splice"),b=Math.max,f=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var n,i,l,p,d,j,O=o(this),g=a(O.length),y=c(e,g),v=arguments.length;if(0===v?n=i=0:1===v?(n=0,i=g-y):(n=v-2,i=f(b(r(t),0),g-y)),g+n-i>m)throw TypeError(h);for(l=u(O,i),p=0;p<i;p++)d=y+p,d in O&&s(l,p,O[d]);if(l.length=i,n<i){for(p=y;p<g-i;p++)d=p+i,j=p+n,d in O?O[j]=O[d]:delete O[j];for(p=g;p>g-i+n;p--)delete O[p-1]}else if(n>i)for(p=g-i;p>y;p--)d=p+i-1,j=p+n-1,d in O?O[j]=O[d]:delete O[j];for(p=0;p<n;p++)O[p+y]=arguments[p+2];return O.length=g-i+n,l}})},a57c:function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23");Object(i["w"])("data-v-559cb4bc");var c={class:"group"},r=Object(i["g"])("label",{for:"companys"},"Kompanija: ",-1),a={class:"group"},o=Object(i["g"])("label",{for:"user"},"Zaposleni: ",-1),u={class:"LicniKpi"},s=Object(i["g"])("h2",null,"Licni Kpi",-1),l=["onUpdate:modelValue"],p=["onUpdate:modelValue"],b=["onClick"];function f(e,t,n,f,m,h){return Object(i["t"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("div",c,[r,Object(i["L"])(Object(i["g"])("select",{name:"companys",id:"type","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.type=t}),onChange:t[1]||(t[1]=function(e){return h.onChangeCompany(e)})},[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(e.companys,(function(e){return Object(i["t"])(),Object(i["f"])("option",{key:e.name},Object(i["D"])(e.name),1)})),128))],544),[[i["H"],e.type]])]),Object(i["g"])("div",a,[o,Object(i["L"])(Object(i["g"])("select",{name:"user",id:"type","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.type=t}),onChange:t[3]||(t[3]=function(e){return h.onChangeUser(e)})},[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(m.usersInCompany,(function(e){return Object(i["t"])(),Object(i["f"])("option",{key:e.name},Object(i["D"])(e.name),1)})),128))],544),[[i["H"],e.type]])]),Object(i["g"])("div",u,[s,(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(m.licniKpi,(function(e,t){return Object(i["t"])(),Object(i["f"])("div",{class:"kpi",key:t},[Object(i["L"])(Object(i["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,l),[[i["I"],e.name]]),Object(i["L"])(Object(i["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(t){return e.ponder=t}},null,8,p),[[i["I"],e.ponder]]),Object(i["g"])("button",{type:"button",name:"button",onClick:function(e){return h.ukloniLicni(t)}},"ukloni",8,b)])})),128)),Object(i["g"])("button",{type:"button",name:"button",onClick:t[4]||(t[4]=function(){return h.increaseLicni&&h.increaseLicni.apply(h,arguments)})},"Dodaj Kpi")]),Object(i["g"])("button",{type:"button",name:"button",onClick:t[5]||(t[5]=function(){return h.submit&&h.submit.apply(h,arguments)})},"Submit")],64)}Object(i["u"])();var m=n("1da1"),h=n("5530"),d=(n("96cf"),n("a434"),n("5502")),j={data:function(){return{nmb:0,licniKpi:[],usersInCompany:[],currentCompany:"",currentUser:""}},computed:Object(d["c"])(["companys","users"]),methods:Object(h["a"])(Object(h["a"])({},Object(d["b"])(["getCompanies","setLicniKpi","getAllUsers"])),{},{onChangeCompany:function(e){var t;this.usersInCompany=[];for(var n=0;n<this.companys.length;n++)this.companys[n].name==e.target.value&&(t=this.companys[n]);for(this.currentCompany=t,n=0;n<this.users.length;n++)this.users[n].type===this.currentCompany.name&&this.usersInCompany.push(this.users[n])},onChangeUser:function(e){for(var t,n=0;n<this.users.length;n++)this.users[n].name==e.target.value&&(t=this.users[n]);for(this.currentUser=t,this.licniKpi=[],n=0;n<this.currentUser.performanceEvaluation.licniKpi.length;n++)this.licniKpi.push(this.currentUser.performanceEvaluation.licniKpi[n])},ukloniLicni:function(e){this.licniKpi.splice(e,1)},increaseLicni:function(){var e={name:"",ponder:0};this.licniKpi.push(e)},submit:function(){var e={licniKpi:this.licniKpi,userId:this.currentUser._id};this.setLicniKpi(e)}}),created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCompanies();case 2:return t.next=4,e.getAllUsers();case 4:case"end":return t.stop()}}),t)})))()}};n("3807");j.render=f,j.__scopeId="data-v-559cb4bc";t["default"]=j},b0c0:function(e,t,n){var i=n("83ab"),c=n("9bf2").f,r=Function.prototype,a=r.toString,o=/^\s*function ([^ (]*)/,u="name";i&&!(u in r)&&c(r,u,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-2cae9f8b.abe9d432.js.map