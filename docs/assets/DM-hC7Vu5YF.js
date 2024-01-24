import{d as y,o as n,c as l,a as e,w as h,v as _,u as a,F as v,r as m,t as g,p as I,b as z,e as b,_ as $,f as C,n as P,g as i,h as T,i as O,R as U,H as A}from"./index-sf6Mse-U.js";import{s as t,r as S,l as w,m as x,p as R,c as V,a as k,D as B,R as M}from"./DiceWizard-To6dxxkG.js";const c=d=>(I("data-v-c4ce157c"),d=d(),z(),d),N=c(()=>e("legend",null,"Scenario",-1)),L={class:"story-select"},j=c(()=>e("label",null,"The rich person the goblins are trying to steal from:",-1)),q=["value"],E={class:"story-select"},F=c(()=>e("label",null,"The location of the heist:",-1)),H=["value"],Y={class:"story-select"},G=c(()=>e("label",null,"The mark:",-1)),J=["value"],K={class:"story-select"},W=c(()=>e("label",null,[b("Protected by a cadre of "),e("em",null,"numerous"),b(" but "),e("em",null,"poorly paid"),b(" guards and:")],-1)),Q=["value"],X={class:"story-select"},Z=c(()=>e("label",null,"Locked in:",-1)),ee=["value"],te={class:"buttons"},oe=y({__name:"Scenario",setup(d){function u(){t.value.richPerson=k(0,S.length-1),t.value.location=k(0,w.length-1),t.value.mark=k(0,x.length-1),t.value.protector=k(0,R.length-1),t.value.container=k(0,V.length-1)}function p(){let f=`${t.value.richPerson}${t.value.location}${t.value.mark}${t.value.protector}${t.value.container}`;navigator.clipboard.writeText(f)}return(f,s)=>(n(),l("fieldset",null,[N,e("div",L,[j,h(e("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>a(t).richPerson=o)},[(n(!0),l(v,null,m(a(S),(o,r)=>(n(),l("option",{value:r},g(o),9,q))),256))],512),[[_,a(t).richPerson]])]),e("div",E,[F,h(e("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>a(t).location=o)},[(n(!0),l(v,null,m(a(w),(o,r)=>(n(),l("option",{value:r},g(o),9,H))),256))],512),[[_,a(t).location]])]),e("div",Y,[G,h(e("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>a(t).location=o)},[(n(!0),l(v,null,m(a(x),(o,r)=>(n(),l("option",{value:r},g(o),9,J))),256))],512),[[_,a(t).location]])]),e("div",K,[W,h(e("select",{"onUpdate:modelValue":s[3]||(s[3]=o=>a(t).protector=o)},[(n(!0),l(v,null,m(a(R),(o,r)=>(n(),l("option",{value:r},g(o),9,Q))),256))],512),[[_,a(t).protector]])]),e("div",X,[Z,h(e("select",{"onUpdate:modelValue":s[4]||(s[4]=o=>a(t).container=o)},[(n(!0),l(v,null,m(a(V),(o,r)=>(n(),l("option",{value:r},g(o),9,ee))),256))],512),[[_,a(t).container]])]),e("div",te,[e("button",{onClick:s[5]||(s[5]=o=>u())},"randomize"),e("button",{onClick:s[6]||(s[6]=o=>p())},"copy code")])]))}}),ae=$(oe,[["__scopeId","data-v-c4ce157c"]]),se="/assets/chaos-clock-pf_JY02c.png",ne="/assets/chaos-clock-ticker-aiV_sPO_.png",D=d=>(I("data-v-9404365b"),d=d(),z(),d),le=D(()=>e("legend",null,"The Chaos Clock",-1)),de=D(()=>e("img",{src:se},null,-1)),re=y({__name:"ChaosClock",setup(d){const u=C(()=>t.value.chaosClock*30),p=C(()=>({transform:`translate(-50%, -50%) rotate(${u.value}deg)`}));function f(){t.value.chaosClock++,t.value.chaosClock>11&&(t.value.chaosClock=0)}return(s,o)=>(n(),l("fieldset",null,[le,e("div",{class:"clock",onClick:f},[de,e("img",{style:P(p.value),class:"ticker",src:ne},null,4)])]))}}),ie=$(re,[["__scopeId","data-v-9404365b"]]),ce={class:"consequences"},ue={class:"controls-column"},pe=T("<fieldset data-v-a26d859d><legend data-v-a26d859d>Consequences</legend><p data-v-a26d859d> Oh no! Someone failed a roll, or rolled some 1s on an ass roll. As the dm, it&#39;s time to do one or more of the following: </p><p data-v-a26d859d><strong data-v-a26d859d>Pay a cost</strong>: In attention (a goblin is preoccupied for a while), effectiveness (needs a little extra help from someone else to get the job done), or danger (the situation gets more dangerous or tense) </p><p data-v-a26d859d>- OR -</p><p data-v-a26d859d><strong data-v-a26d859d>Smack someone</strong>: daze a goblin or knock a goblin out. </p><ul data-v-a26d859d><li data-v-a26d859d><em data-v-a26d859d>Dazed</em> - A dazed goblin gets -1d6 to do anything and if hurt again is knocked out. Goblins recover from being dazed after a scene is over. </li><li data-v-a26d859d><em data-v-a26d859d>Knocked out</em> - A knocked out goblin must be carried around like a sack of pear shaped potatoes and wakes up in the next scene as long as they make it out ok, and are captured if they are left behind. It&#39;s pretty easy for a human of average strength to knock a goblin out with a big enough implement. </li></ul><p data-v-a26d859d>- OR -</p><p data-v-a26d859d><strong data-v-a26d859d>Start a ticking clock</strong>: write <em data-v-a26d859d>something bad</em> down (the lava is released, the dogs are loosed, the alarm is set off, someone&#39;s knocked out, the door jams, you lose control of the vehicle), the next time there&#39;s a fuckup in the same situation it comes true or maybe the next time after that </p><p data-v-a26d859d>- OR -</p><strong data-v-a26d859d><p data-v-a26d859d>Escalate the situation (choose one or roll 1d6):</p></strong><ul data-v-a26d859d><li data-v-a26d859d> guards are alerted or start catching up </li><li data-v-a26d859d>light something on fire</li><li data-v-a26d859d>something that wasn&#39;t supposed to break breaks</li><li data-v-a26d859d>drop or lose track of something important</li><li data-v-a26d859d>something goes wildly out of control</li><li data-v-a26d859d>someone gets split from the group (guards, convenient hrach, slide)</li></ul></fieldset>",1),he=y({__name:"DMRules",setup(d){return(u,p)=>(n(),l("div",ce,[e("div",ue,[i(ae),i(ie)]),pe]))}}),_e=$(he,[["__scopeId","data-v-a26d859d"]]),ve={class:"dm"},me={class:"container"},fe=y({__name:"DM",setup(d){return(u,p)=>(n(),l("div",ve,[i(a(U),{class:"back",to:"/"},{default:O(()=>[b("Back")]),_:1}),e("div",me,[i(A,{posttitle:"You are the",title:"disaster master"}),i(B),i(_e),i(M)])]))}});export{fe as default};