(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-007961da"],{"1e43":function(e,n,t){"use strict";t("a96b")},"60d1":function(e,n,t){"use strict";t.r(n);t("b0c0");var a=t("7a23");Object(a["w"])("data-v-1c3c814e");var o=Object(a["g"])("div",{class:"header"},[Object(a["g"])("h1",null,"Formular za ocenjivanje kompetencija - Konacna Procena"),Object(a["g"])("h3",null,"(1=Ne Zadovoljava Ocekivanja)"),Object(a["g"])("h3",null,"(2=Potrebno Poboljsanje)"),Object(a["g"])("h3",null,"(3=Zadovoljava Ocekivanja)"),Object(a["g"])("h3",null,"(4=Iznad Ocekivanja)")],-1),c={class:"form-group"},i=Object(a["g"])("label",{for:"collegue"},"Podredjeni za koga se vrsi konacna procena:",-1),r={class:"kompetence"},l=Object(a["g"])("h3",null,"Kompetence",-1),u={id:"kompetenceTable"},j=Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Kompetence :"),Object(a["g"])("th",null,"Ponder"),Object(a["g"])("th",null,"Samoprocena"),Object(a["g"])("th",null,"Konacna Procena"),Object(a["g"])("th",null,"Rangiranje")],-1),p=["onUpdate:modelValue"],b={class:"licni"},s=Object(a["g"])("h3",null,"Licni KPI",-1),O={id:"licniTable"},d=Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Kompetence :"),Object(a["g"])("th",null,"Ponder"),Object(a["g"])("th",null,"Samoprocena"),Object(a["g"])("th",null,"Konacna Procena"),Object(a["g"])("th",null,"Rangiranje")],-1),m=["onUpdate:modelValue"],k={class:"kompanijski"},g=Object(a["g"])("h3",null,"Kompanijski KPI",-1),h={id:"kompanijskiTable"},f=Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Kompetence :"),Object(a["g"])("th",null,"Ponder"),Object(a["g"])("th",null,"Samoprocena"),Object(a["g"])("th",null,"Konacna Procena"),Object(a["g"])("th",null,"Rangiranje")],-1),v=["onUpdate:modelValue"],P={key:0,class:"rezultat1"},K=Object(a["g"])("p",null,"Rezultati loši, potrebno unapređenje za vršenje trenutne uloge ili prelazak na drugo radno mesto ",-1),y={key:1,class:"rezultat2"},C=Object(a["g"])("p",null,"Rezultati dobri, ali neophodan razvoj za vršenje trenutne uloge ",-1),z={key:2,class:"rezultat3"},D=Object(a["g"])("p",null,"Apsolutno ostvarenje rezultata u trenutnoj ulozi ",-1),E={key:3,class:"rezultat4"},U=Object(a["g"])("p",null,"Prebačaj rezultata u trenutnoj ulozi ",-1),S={class:"komentar"},T=Object(a["g"])("h4",null,"Komentar",-1);function w(e,n,t,w,V,R){return Object(a["t"])(),Object(a["f"])(a["a"],null,[o,Object(a["g"])("div",c,[i,Object(a["L"])(Object(a["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":n[0]||(n[0]=function(e){return V.podredjeniName=e}),onChange:n[1]||(n[1]=function(e){return R.onChangePodredjeni(e)})},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.podredjeni,(function(e){return Object(a["t"])(),Object(a["f"])("option",{key:e.name},Object(a["D"])(e.name),1)})),128))],544),[[a["H"],V.podredjeniName]])]),Object(a["g"])("div",r,[l,Object(a["g"])("table",u,[j,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.kompetence,(function(e,t){return Object(a["t"])(),Object(a["f"])("tr",{key:t},[Object(a["g"])("td",null,Object(a["D"])(e.name),1),Object(a["g"])("td",null,Object(a["D"])(e.ponder)+"%",1),Object(a["g"])("td",null,Object(a["D"])(e.samoProcena),1),Object(a["g"])("td",null,[Object(a["L"])(Object(a["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(n){return e.konacnaProcena=n},onChange:n[2]||(n[2]=function(){return R.updateTable&&R.updateTable.apply(R,arguments)})},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.odgovori,(function(e){return Object(a["t"])(),Object(a["f"])("option",{key:e},Object(a["D"])(e),1)})),128))],40,p),[[a["H"],e.konacnaProcena]])]),Object(a["g"])("td",null,Object(a["D"])(e.rangiranje),1)])})),128))])]),Object(a["g"])("div",b,[s,Object(a["g"])("table",O,[d,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.licniKpi,(function(e,t){return Object(a["t"])(),Object(a["f"])("tr",{key:t},[Object(a["g"])("td",null,Object(a["D"])(e.name),1),Object(a["g"])("td",null,Object(a["D"])(e.ponder)+"%",1),Object(a["g"])("td",null,Object(a["D"])(e.samoProcena),1),Object(a["g"])("td",null,[Object(a["L"])(Object(a["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(n){return e.konacnaProcena=n},onChange:n[3]||(n[3]=function(){return R.updateTable&&R.updateTable.apply(R,arguments)})},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.odgovori,(function(e){return Object(a["t"])(),Object(a["f"])("option",{key:e},Object(a["D"])(e),1)})),128))],40,m),[[a["H"],e.konacnaProcena]])]),Object(a["g"])("td",null,Object(a["D"])(e.rangiranje),1)])})),128))])]),Object(a["g"])("div",k,[g,Object(a["g"])("table",h,[f,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.kompanijskiKpi,(function(e,t){return Object(a["t"])(),Object(a["f"])("tr",{key:t},[Object(a["g"])("td",null,Object(a["D"])(e.name),1),Object(a["g"])("td",null,Object(a["D"])(e.ponder)+"%",1),Object(a["g"])("td",null,Object(a["D"])(e.samoProcena),1),Object(a["g"])("td",null,[Object(a["L"])(Object(a["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(n){return e.konacnaProcena=n},onChange:n[4]||(n[4]=function(){return R.updateTable&&R.updateTable.apply(R,arguments)})},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(V.odgovori,(function(e){return Object(a["t"])(),Object(a["f"])("option",{key:e},Object(a["D"])(e),1)})),128))],40,v),[[a["H"],e.konacnaProcena]])]),Object(a["g"])("td",null,Object(a["D"])(e.rangiranje),1)])})),128))])]),V.ukupno<.75?(Object(a["t"])(),Object(a["f"])("div",P,[Object(a["g"])("h3",null,"Ukupno: "+Object(a["D"])(V.ukupno),1),K])):Object(a["e"])("",!0),V.ukupno>=.75&&V.ukupno<.99?(Object(a["t"])(),Object(a["f"])("div",y,[Object(a["g"])("h3",null,"Ukupno: "+Object(a["D"])(V.ukupno),1),C])):Object(a["e"])("",!0),V.ukupno>=.99&&V.ukupno<1.17?(Object(a["t"])(),Object(a["f"])("div",z,[Object(a["g"])("h3",null,"Ukupno: "+Object(a["D"])(V.ukupno),1),D])):Object(a["e"])("",!0),V.ukupno>=1.17?(Object(a["t"])(),Object(a["f"])("div",E,[Object(a["g"])("h3",null,"Ukupno: "+Object(a["D"])(V.ukupno),1),U])):Object(a["e"])("",!0),Object(a["g"])("div",S,[T,Object(a["L"])(Object(a["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"komentar","onUpdate:modelValue":n[5]||(n[5]=function(e){return V.komentar=e}),id:"komentar"},null,512),[[a["I"],V.komentar]])]),Object(a["g"])("button",{type:"button",name:"button",onClick:n[6]||(n[6]=function(){return R.submit&&R.submit.apply(R,arguments)})},"Submit")],64)}Object(a["u"])();var V=t("1da1"),R=t("5530"),I=(t("96cf"),t("5502")),L={computed:Object(I["c"])(["user","users","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],licniKpi:[],kompanijskiKpi:[],ukupno:0,evaluatedUser:"",podredjeni:[],podredjeniName:"",podredjeniCeo:""}},methods:Object(R["a"])(Object(R["a"])({},Object(I["b"])(["getProfile","getCompanies","getCollegues","setKpiKonacnaProcena"])),{},{onChangePodredjeni:function(e){for(var n=0;n<this.usersSameCompany.length;n++)this.usersSameCompany[n].name==e.target.value&&(this.podredjeniCeo=this.usersSameCompany[n]);for(n=0;n<this.podredjeniCeo.performanceEvaluation.kompetence.length;n++)this.kompetence[n].samoProcena=this.podredjeniCeo.performanceEvaluation.kompetence[n].samoProcena,this.kompetence[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation.kompetence[n].konacnaProcena,this.kompetence[n].rangiranje=this.podredjeniCeo.performanceEvaluation.kompetence[n].rangiranje;for(n=0;n<this.podredjeniCeo.performanceEvaluation.kompanijski.length;n++)this.kompanijskiKpi[n].samoProcena=this.podredjeniCeo.performanceEvaluation.kompanijski[n].samoProcena,this.kompanijskiKpi[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation.kompanijski[n].konacnaProcena,this.kompanijskiKpi[n].rangiranje=this.podredjeniCeo.performanceEvaluation.kompanijski[n].rangiranje;for(this.licniKpi=[],n=0;n<this.podredjeniCeo.performanceEvaluation.licniKpi.length;n++)this.licniKpi.push(this.podredjeniCeo.performanceEvaluation.licniKpi[n]);this.updateTable()},updateTable:function(){for(var e=0,n=0;n<this.kompetence.length;n++)null!=this.kompetence[n].konacnaProcena&&(this.kompetence[n].rangiranje=(.25*this.kompetence[n].konacnaProcena+.25)*this.kompetence[n].ponder/100,e+=this.kompetence[n].rangiranje);var t=0;for(n=0;n<this.licniKpi.length;n++)null!=this.licniKpi[n].konacnaProcena&&(this.licniKpi[n].rangiranje=(.25*this.licniKpi[n].konacnaProcena+.25)*this.licniKpi[n].ponder/100,t+=this.licniKpi[n].rangiranje);var a=0;for(n=0;n<this.kompanijskiKpi.length;n++)null!=this.kompanijskiKpi[n].konacnaProcena&&(this.kompanijskiKpi[n].rangiranje=(.25*this.kompanijskiKpi[n].konacnaProcena+.25)*this.kompanijskiKpi[n].ponder/100,a+=this.kompanijskiKpi[n].rangiranje);this.ukupno=.2*e+.5*t+.3*a},submit:function(){var e={licniKpi:this.licniKpi,kompanijski:this.kompanijskiKpi,kompetence:this.kompetence,userId:this.podredjeniCeo._id};this.setKpiKonacnaProcena(e)}}),created:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function n(){var t,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getProfile();case 2:return n.next=4,e.getCompanies();case 4:return n.next=6,e.getCollegues(e.user.type);case 6:for(a=0;a<e.companys.length;a++)e.user.type==e.companys[a].name&&(t=e.companys[a]);for(a=0;a<t.performanceEvaluation.kompetence.length;a++)e.kompetence.push(t.performanceEvaluation.kompetence[a]);for(a=0;a<t.performanceEvaluation.kompanijski.length;a++)e.kompanijskiKpi.push(t.performanceEvaluation.kompanijski[a]);for(a=0;a<e.user.performanceEvaluationPodredjeni.length;a++)for(o=0;o<e.usersSameCompany.length;o++)e.user.performanceEvaluationPodredjeni[a]==e.usersSameCompany[o]._id&&e.podredjeni.push(e.usersSameCompany[o]);case 10:case"end":return n.stop()}}),n)})))()}};t("1e43");L.render=w,L.__scopeId="data-v-1c3c814e";n["default"]=L},a96b:function(e,n,t){},b0c0:function(e,n,t){var a=t("83ab"),o=t("9bf2").f,c=Function.prototype,i=c.toString,r=/^\s*function ([^ (]*)/,l="name";a&&!(l in c)&&o(c,l,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-007961da.f9714c32.js.map