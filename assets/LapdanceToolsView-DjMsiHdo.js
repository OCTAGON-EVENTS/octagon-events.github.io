import{_ as v,c as o}from"./cheers-DY5Ig3dc.js";import{l as r}from"./links-qWIlGKlK.js";import{B as m}from"./Button-ffGoqAzV.js";import{d as O,j as u,e as i,o as I,c as R,q as E,b as A}from"./index-CdkXOMtc.js";const N={default:[":information_source: _You can remove the @Event Ping︱🔔 role in <id:customize> at all times_","","# :smiling_imp:  OCTAGON Event :kiss:","> :zap: Booster doors at **<EARLIER_OPEN_DOORS_TIME>**","> ","> :door: Open doors at **<OPEN_DOORS_TIME>**","> ","> :clock11:  From **<START_TIME>** till **<END_TIME>**","> ","> :pushpin:  [Instances](<https://vrchat.com/home/group/grp_a598c9ca-f698-44e7-9f54-399f1da6e203/instances>)","","### :warning:",'> _Please use a "Good" or better avatar!_',"> _Drink responsibly. Your health is important!_","","_<CHEERS_ORIGINAL>!_","||<CHEERS_LANGUAGE>: <CHEERS_PRONOUNCIATION>||","","[Website](<https://octagon.events/Lapdance>) | [Discord](<<DISCORD>>) | [Bluesky](<<BlUESKY>>) | [Instagram](<<INSTAGRAM>>) | [VRChat](<<VRCHAT>>) | [X](<<X>>)","_ _"]},C={en:N},D={default:["<QUEST_TITLE>","","<QUEST_TEXT>","","<CHEERS_ORIGINAL> (<CHEERS_LANGUAGE>)","","Pronounciation: <CHEERS_PRONOUNCIATION>"]},S={en:D},f={style:{margin:"20px 0","white-space":"pre-line"}},M=O({__name:"LapdanceToolsView",setup(h){const s=u(),e=u(),c=u(),l=u(Math.floor(Math.random()*o.length)),p=i(()=>!e.value||s.value==null?0:new Date(e.value).setHours(e.value.getHours(),e.value.getMinutes()-parseInt(s.value),0,0)),_=i(()=>!e.value||s.value==null?0:new Date(e.value).setHours(e.value.getHours(),e.value.getMinutes()-(parseInt(s.value)+10),0,0)),T=i(()=>{let t=C.en.default.join(`
`);return[["<EARLIER_OPEN_DOORS_TIME>","<t:"+_.value/1e3+":t>"],["<OPEN_DOORS_TIME>","<t:"+p.value/1e3+":t>"],["<START_TIME>","<t:"+e.value/1e3+":t>"],["<END_TIME>","<t:"+c.value/1e3+":t>"],["<CHEERS_ORIGINAL>",o[l.value].en.text],["<CHEERS_LANGUAGE>",o[l.value].en.language],["<CHEERS_PRONOUNCIATION>",o[l.value].en.pronunciation],["<DISCORD>",r.Discord],["<BlUESKY>",r.Bluesky],["<INSTAGRAM>",r.Instagram],["<VRCHAT>",r.VRChat],["<X>",r.X]].forEach(n=>{t=t.replace(n[0],n[1])}),t}),d=i(()=>{let t=S.en.default.join(`
`);return[["<CHEERS_ORIGINAL>",o[l.value].en.text],["<CHEERS_LANGUAGE>",o[l.value].en.language],["<CHEERS_PRONOUNCIATION>",o[l.value].en.pronunciation]].forEach(n=>{t=t.replace(n[0],n[1])}),t});return(t,a)=>(I(),R("main",null,[E(v,{instanceOpenTime:s.value,"onUpdate:instanceOpenTime":a[0]||(a[0]=n=>s.value=n),startDateTime:e.value,"onUpdate:startDateTime":a[1]||(a[1]=n=>e.value=n),endDateTime:c.value,"onUpdate:endDateTime":a[2]||(a[2]=n=>c.value=n)},null,8,["instanceOpenTime","startDateTime","endDateTime"]),A("div",f,[E(m,{text:"Discord",value:T.value,copyOnClick:""},null,8,["value"]),E(m,{text:"VRChat",value:d.value,copyOnClick:""},null,8,["value"])])]))}});export{M as default};
