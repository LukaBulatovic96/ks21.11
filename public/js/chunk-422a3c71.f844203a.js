(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-422a3c71"],{"95aa":function(e,s,t){},a55b:function(e,s,t){"use strict";t.r(s);var a=t("7a23");Object(a["w"])("data-v-07c92e6e");var o={class:"login"},n={class:"row"},r={class:"card mx-auto"},c=Object(a["g"])("div",{class:"card-header"},[Object(a["g"])("h4",null,"Login")],-1),u={class:"card-body"},l={class:"form-group"},d=Object(a["g"])("label",{for:"username"},"Username",-1),i={class:"form-group"},b=Object(a["g"])("label",{for:"password"},"Password",-1),p=Object(a["g"])("div",{class:"form-group"},[Object(a["g"])("input",{type:"submit",class:"btn btn-primary",value:"Login"})],-1);function O(e,s,t,O,g,m){return Object(a["t"])(),Object(a["f"])("div",o,[Object(a["g"])("div",n,[Object(a["g"])("div",r,[c,Object(a["g"])("div",u,[Object(a["g"])("form",{onSubmit:s[2]||(s[2]=Object(a["M"])((function(){return m.loginUser&&m.loginUser.apply(m,arguments)}),["prevent"]))},[Object(a["g"])("div",l,[d,Object(a["L"])(Object(a["g"])("input",{class:"form-control",type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":s[0]||(s[0]=function(e){return g.username=e}),id:"username"},null,512),[[a["I"],g.username]])]),Object(a["g"])("div",i,[b,Object(a["L"])(Object(a["g"])("input",{class:"form-control",type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":s[1]||(s[1]=function(e){return g.password=e}),id:"password"},null,512),[[a["I"],g.password]])]),p],32)])])])])}Object(a["u"])();var g=t("5530"),m=t("5502"),f={data:function(){return{username:"",password:""}},methods:Object(g["a"])(Object(g["a"])({},Object(m["b"])(["login"])),{},{loginUser:function(){var e=this,s={username:this.username,password:this.password};this.login(s).then((function(s){s.data.success&&(console.log("LOOOOOOOG"),console.log(s.data.user.type),"admin"==s.data.user.type?e.$router.push("/results"):e.$router.push("/profile"))})).catch((function(e){console.log(e)}))}}),beforeCreate:function(){document.body.className="login"}};t("dc1e");f.render=O,f.__scopeId="data-v-07c92e6e";s["default"]=f},dc1e:function(e,s,t){"use strict";t("95aa")}}]);
//# sourceMappingURL=chunk-422a3c71.f844203a.js.map