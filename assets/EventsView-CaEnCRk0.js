import{d as I,i as H,j as l,e as L,w as _,o as i,c as r,F as q,r as R,b as e,k as w,l as W,t as o,m as p,p as h,_ as $,h as F,g as P}from"./index-LZovhTBL.js";const Q={key:0,class:"main"},z={class:"card"},J={class:"wrapper"},X={class:"dateDisplay"},K={class:"eventDay"},Y={class:"eventMonth"},Z={class:"eventTime"},tt={class:"eventTimeOfDay"},et={class:"dateDisplay"},at={class:"eventDay"},st={class:"eventMonth"},nt={class:"eventTime"},ot={class:"eventTimeOfDay"},it={key:0},rt=["src"],ct=["innerHTML"],lt={key:3},dt={key:1,class:"empty"},ut=I({__name:"GoogleCalendar",props:{calendarID:{type:String,required:!1}},setup(b){W(s=>({"7c355612":d.value}));const y=H("branch",l("General")),d=L(()=>"var("+h[y.value].color+")"),u=b,n=l({items:[]}),c=l(),v=new XMLHttpRequest;function k(){v.onreadystatechange=function(){this.readyState==4&&this.status==200&&(n.value=JSON.parse(this.responseText))},v.open("GET",`https://www.googleapis.com/calendar/v3/calendars/${u.calendarID}/events?key=AIzaSyC7fs2QT_Hb9Q3Tn5_7bhLcOISwqsgLyg4&maxResults=16&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`,!0),v.send()}k();const m=l([]);return _(()=>u.calendarID,()=>{n.value={items:[]},m.value=[],k()},{immediate:!0}),_(n,()=>{const s=n.value.items;for(const a in s){const t=new Date(s[a].start.dateTime),g=new Date(s[a].end.dateTime),D=t.getDate(),O=String(D).length==1?"0"+String(D):D,x=String(t).split(" ")[1].toUpperCase(),f=t.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}).split(" "),M=f[0],B=f.length>1?f[1]:"",T=g.getDate(),G=String(T).length==1?"0"+String(T):T,E=String(g).split(" ")[1].toUpperCase(),S=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}).split(" "),N=S[0],U=S.length>1?S[1]:"",A=s[a].summary,V=s[a].location;let C=null;Object.keys(s[a]).includes("attachments")&&(C="https://drive.google.com/thumbnail?id="+s[a].attachments[0].fileId);const j=s[a].description;m.value.push({start:{day:O,month:x,time:M,timeOfDay:B},end:{day:G,month:E,time:N,timeOfDay:U},summary:A,location:V,imageUrl:C,description:j})}}),_(c,()=>{for(const s in c.value)for(const a in c.value[s].getElementsByTagName("a"))try{c.value[s].getElementsByTagName("a")[a].setAttribute("target","_blank")}catch{continue}}),(s,a)=>(i(),r("main",null,[m.value.length?(i(),r("div",Q,[(i(!0),r(q,null,R(m.value,(t,g)=>(i(),r("div",z,[e("div",J,[e("div",X,[e("div",K,o(t.start.day),1),e("div",Y,o(t.start.month),1),e("div",Z,o(t.start.time),1),e("div",tt,o(t.start.timeOfDay),1)]),a[0]||(a[0]=e("div",{class:"dateDisplay"},"TILL",-1)),e("div",et,[e("div",at,o(t.end.day),1),e("div",st,o(t.end.month),1),e("div",nt,o(t.end.time),1),e("div",ot,o(t.end.timeOfDay),1)])]),e("div",{ref_for:!0,ref_key:"content",ref:c,class:"content",style:{padding:"15px"}},[String(t.summary).startsWith("!")?p("",!0):(i(),r("div",it,o(t.summary),1)),t.imageUrl?(i(),r("img",{key:1,class:"googleDriveImage",src:t.imageUrl},null,8,rt)):p("",!0),t.description&&!String(t.description).startsWith("!")?(i(),r("div",{key:2,innerHTML:t.description,class:"googleCalendarDescription"},null,8,ct)):p("",!0),t.location&&!String(t.location).startsWith("!")?(i(),r("div",lt,"Location: "+o(t.location),1)):p("",!0)],512)]))),256))])):(i(),r("div",dt,a[1]||(a[1]=[e("h1",null,[w("Pretty empty right now."),e("br"),w("Maybe next time?")],-1)])))]))}}),mt=$(ut,[["__scopeId","data-v-139c6a52"]]),pt=I({__name:"EventsView",setup(b){const y=P(),d=l("General"),u=L(()=>{for(const n in h)if(d.value==h[n].path.substring(1))return h[n].GoogleCalendar;return""});return _(()=>y.path,n=>{const c=n.substring(1).split("/");d.value=c[0]},{immediate:!0}),(n,c)=>(i(),F(mt,{calendarID:u.value},null,8,["calendarID"]))}});export{pt as default};
