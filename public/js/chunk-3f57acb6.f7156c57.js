(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f57acb6"],{"0e4e":function(e,n,t){"use strict";t.r(n);t("b0c0");var o=t("7a23");Object(o["w"])("data-v-6b2d9de8");var a={class:"group"},c=Object(o["g"])("label",{for:"companys"},"Kompanija: ",-1),i={class:"kompetence"},p=Object(o["g"])("h2",null,"Kompetence",-1),u=["onUpdate:modelValue"],r=["onUpdate:modelValue"],m=["onClick"],l={class:"KompanijskiKpi"},s=Object(o["g"])("h2",null,"Kompanijski Kpi",-1),b=["onUpdate:modelValue"],f=["onUpdate:modelValue"],j=["onClick"];function k(e,n,t,k,d,O){return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",a,[c,Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":n[0]||(n[0]=function(n){return e.type=n}),onChange:n[1]||(n[1]=function(e){return O.onChangeCompany(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.companys,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],e.type]])]),Object(o["g"])("div",i,[p,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(d.kompetence,(function(e,n){return Object(o["t"])(),Object(o["f"])("div",{class:"kpi",key:n},[Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.name=n}},null,8,u),[[o["I"],e.name]]),Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(n){return e.ponder=n}},null,8,r),[[o["I"],e.ponder]]),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return O.ukloniKompetencu(n)}},"ukloni",8,m)])})),128)),Object(o["g"])("button",{type:"button",name:"button",onClick:n[2]||(n[2]=function(){return O.increaseKompetence&&O.increaseKompetence.apply(O,arguments)})},"Dodaj kompetencu")]),Object(o["g"])("div",l,[s,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(d.kompanijskiKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("div",{class:"kpi",key:n},[Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.name=n}},null,8,b),[[o["I"],e.name]]),Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(n){return e.ponder=n}},null,8,f),[[o["I"],e.ponder]]),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return O.ukloniKompanijski(n)}},"ukloni",8,j)])})),128)),Object(o["g"])("button",{type:"button",name:"button",onClick:n[3]||(n[3]=function(){return O.increaseKompanijskiKpi&&O.increaseKompanijskiKpi.apply(O,arguments)})},"Dodaj Kpi")]),Object(o["g"])("button",{type:"button",name:"button",onClick:n[4]||(n[4]=function(){return O.submit&&O.submit.apply(O,arguments)})},"Submit")],64)}Object(o["u"])();var d=t("5530"),O=(t("a434"),t("5502")),h={data:function(){return{kompetence:[],kompanijskiKpi:[],currentCompany:""}},computed:Object(O["c"])(["companys"]),methods:Object(d["a"])(Object(d["a"])({},Object(O["b"])(["getCompanies","setCompanyKpi"])),{},{submit:function(){var e={kompetence:this.kompetence,kompanijski:this.kompanijskiKpi,companyName:this.currentCompany};this.setCompanyKpi(e)},increaseKompetence:function(){var e={name:"",ponder:0};this.kompetence.push(e)},increaseKompanijskiKpi:function(){var e={name:"",ponder:0};this.kompanijskiKpi.push(e)},ukloniKompetencu:function(e){this.kompetence.splice(e,1)},ukloniKompanijski:function(e){this.kompanijskiKpi.splice(e,1)},onChangeCompany:function(e){var n;this.kompetence=[],this.kompanijskiKpi=[];for(var t=0;t<this.companys.length;t++)this.companys[t].name==e.target.value&&(n=this.companys[t]);for(this.currentCompany=n.name,t=0;t<n.performanceEvaluation.kompetence.length;t++){var o={name:n.performanceEvaluation.kompetence[t].name,ponder:n.performanceEvaluation.kompetence[t].ponder};this.kompetence.push(o)}for(t=0;t<n.performanceEvaluation.kompanijski.length;t++){var a={name:n.performanceEvaluation.kompanijski[t].name,ponder:n.performanceEvaluation.kompanijski[t].ponder};this.kompanijskiKpi.push(a)}}}),created:function(){this.getCompanies()}};t("ea3c");h.render=k,h.__scopeId="data-v-6b2d9de8";n["default"]=h},"176e":function(e,n,t){},a434:function(e,n,t){"use strict";var o=t("23e7"),a=t("23cb"),c=t("a691"),i=t("50c4"),p=t("7b0b"),u=t("65f0"),r=t("8418"),m=t("1dde"),l=m("splice"),s=Math.max,b=Math.min,f=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!l},{splice:function(e,n){var t,o,m,l,k,d,O=p(this),h=i(O.length),y=a(e,h),g=arguments.length;if(0===g?t=o=0:1===g?(t=0,o=h-y):(t=g-2,o=b(s(c(n),0),h-y)),h+t-o>f)throw TypeError(j);for(m=u(O,o),l=0;l<o;l++)k=y+l,k in O&&r(m,l,O[k]);if(m.length=o,t<o){for(l=y;l<h-o;l++)k=l+o,d=l+t,k in O?O[d]=O[k]:delete O[d];for(l=h;l>h-o+t;l--)delete O[l-1]}else if(t>o)for(l=h-o;l>y;l--)k=l+o-1,d=l+t-1,k in O?O[d]=O[k]:delete O[d];for(l=0;l<t;l++)O[l+y]=arguments[l+2];return O.length=h-o+t,m}})},b0c0:function(e,n,t){var o=t("83ab"),a=t("9bf2").f,c=Function.prototype,i=c.toString,p=/^\s*function ([^ (]*)/,u="name";o&&!(u in c)&&a(c,u,{configurable:!0,get:function(){try{return i.call(this).match(p)[1]}catch(e){return""}}})},ea3c:function(e,n,t){"use strict";t("176e")}}]);
//# sourceMappingURL=chunk-3f57acb6.f7156c57.js.map