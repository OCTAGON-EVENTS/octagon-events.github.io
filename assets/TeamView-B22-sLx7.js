import{d as B,o as a,c as o,b as r,t as _,_ as E,u as b,e as I,f as n,F as c,r as p,g as y,h,n as u}from"./index-DIQthVF9.js";const R="/assets/Basti-CzGVcbaC.jpg",C="/assets/Blood-UzgBvTaP.jpg",v="/assets/Danielo-D_tjXpQV.jpg",T="/assets/Foyx-DYGwvedQ.jpg",S="/assets/Hiiemii-BA_xqWjc.jpg",M="/assets/Kyu-DwaE73aD.jpg",w="/assets/Mano-I5h43EbJ.jpg",k="/assets/Miyujii-BU49mJ76.jpg",G="/assets/Nagisa-B3mDG-Hi.jpg",D="/assets/Nolen-ZJrT4vKy.jpg",O="/assets/None-D7Owh4b7.jpg",f="/assets/Shethzor-QkaeFd7E.jpg",x="/assets/Shogun--6hMGtLk.jpg",H="/assets/Sperrow-CeHSs6um.jpg",Y="/assets/Steiner-j0AMxMGP.jpg",A="/assets/Venox-iHpQva7W.jpg",V="/assets/Yami-DvsQLjSf.jpg",z="/assets/Yumi-BYwvzrXv.jpg",F={class:"teamcard"},P={class:"image-container"},L=["src"],U={class:"role"},K={class:"name"},Q=B({__name:"TeamCard",props:{name:{type:String,required:!0},role:{type:String,required:!0},picture:{type:String,required:!1}},setup(i){const t=i;return(m,g)=>(a(),o("div",F,[r("div",P,[r("img",{class:"image",src:t.picture},null,8,L),r("div",U,_(t.role),1),r("div",K,_(t.name),1)])]))}}),j=E(Q,[["__scopeId","data-v-2451b6c8"]]),N={0:{Name:"Shethzor",Branch:"",Role:"OCTAGON Owner",Image:"Shethzor.jpg",EasterEgg:{Name:"Sharhorse",Branch:"",Role:"Hobbyhorser",Image:""}},1:{Name:"Hiiemii",Branch:"",Role:"OCTAGON Co-Owner",Image:"Hiiemii.jpg",EasterEgg:{Name:"Heiimii",Branch:"",Role:"Goner",Image:""}},2:{Name:"ShōgunWasHere",Branch:"",Role:"OCTAGON Co-Owner",Image:"Shogun.jpg",EasterEgg:{Name:"Shōgoon",Branch:"",Role:"Professional gooner",Image:""}},3:{Name:"DerBasti95",Branch:"Rave",Role:"Branch Owner",Image:"Basti.jpg",EasterEgg:{Name:"Gassi95",Branch:"",Role:"Part-time dog",Image:""}},4:{Name:"FoyxPireta",Branch:"NightClub",Role:"Branch Owner",Image:"Foyx.jpg",EasterEgg:{Name:"Traitor",Branch:"",Role:"Talker",Image:""}},5:{Name:"Ｄａｎｉｅｌｏ",Branch:"NightClub",Role:"Admin",Image:"Danielo.jpg",EasterEgg:{Name:"General Daniel",Branch:"",Role:"Generally",Image:""}},6:{Name:"~Kyu~",Branch:"NightClub",Role:"Admin",Image:"Kyu.jpg",EasterEgg:{Name:"Gyu",Branch:"",Role:"Bruno",Image:""}},7:{Name:"Nolen1124",Branch:"NightClub",Role:"Admin",Image:"Nolen.jpg",EasterEgg:{Name:"Yeslen1124",Branch:"",Role:"Maybe sayer",Image:""}},8:{Name:"_VenoX_",Branch:"NightClub",Role:"Admin",Image:"Venox.jpg",EasterEgg:{Name:"Vencocks",Branch:"",Role:"Crusty sock",Image:""}},9:{Name:"༒BloodHound༒",Branch:"NightClub",Role:"Moderator",Image:"Blood.jpg",EasterEgg:{Name:"༒BlackPudding༒",Branch:"",Role:"Crusty Pudding",Image:""}},10:{Name:"Manο",Branch:"NightClub",Role:"Moderator",Image:"Mano.jpg",EasterEgg:{Name:"Малоmeter",Branch:"",Role:"Imperial",Image:""}},11:{Name:"Miyujii",Branch:"NightClub",Role:"Moderator",Image:"Miyujii.jpg",EasterEgg:{Name:"Muyjiji",Branch:"",Role:"What?",Image:""}},12:{Name:"_Nagisa_",Branch:"NightClub",Role:"Moderator",Image:"Nagisa.jpg",EasterEgg:{Name:"NaGUHsa",Branch:"",Role:"GUH",Image:""}},13:{Name:"Sperrow",Branch:"NightClub",Role:"Moderator",Image:"Sperrow.jpg",EasterEgg:{Name:"Bird",Branch:"",Role:"Chirper",Image:""}},14:{Name:"Steiner96",Branch:"NightClub",Role:"Moderator",Image:"Steiner.jpg",EasterEgg:{Name:"Static Stone96",Branch:"",Role:"Undynamic",Image:""}},15:{Name:"ʚYami",Branch:"NightClub",Role:"Moderator",Image:"Yami.jpg",EasterEgg:{Name:"ʚJam",Branch:"",Role:"Bread enjoyer",Image:""}},16:{Name:"ʚYumi",Branch:"NightClub",Role:"Moderator",Image:"Yumi.jpg",EasterEgg:{Name:"ʚYummi",Branch:"",Role:"Flavorless",Image:""}}},q="/assets/None-D7Owh4b7.jpg",J={key:0},W={key:1},Z=B({__name:"TeamView",setup(i){const t=y(),m=b(),g=I(()=>{const s=t.path.substring(1).split("/");return s[0].toLowerCase()!="general"?[s[0]]:[]}),l=s=>s?new URL(Object.assign({"../assets/img/Team/Basti.jpg":R,"../assets/img/Team/Blood.jpg":C,"../assets/img/Team/Danielo.jpg":v,"../assets/img/Team/Foyx.jpg":T,"../assets/img/Team/Hiiemii.jpg":S,"../assets/img/Team/Kyu.jpg":M,"../assets/img/Team/Mano.jpg":w,"../assets/img/Team/Miyujii.jpg":k,"../assets/img/Team/Nagisa.jpg":G,"../assets/img/Team/Nolen.jpg":D,"../assets/img/Team/None.jpg":O,"../assets/img/Team/Shethzor.jpg":f,"../assets/img/Team/Shogun.jpg":x,"../assets/img/Team/Sperrow.jpg":H,"../assets/img/Team/Steiner.jpg":Y,"../assets/img/Team/Venox.jpg":A,"../assets/img/Team/Yami.jpg":V,"../assets/img/Team/Yumi.jpg":z})[`../assets/img/Team/${s}`],import.meta.url).href:q;return(s,$)=>n(m).value!=8?(a(),o("div",J,[(a(!0),o(c,null,p(n(N),(e,d)=>(a(),h(j,{name:e.Name,role:e.Role,picture:l(e.Image),style:u({display:g.value.length==1?g.value.includes(e.Branch)||!e.Branch?"":"none":""})},null,8,["name","role","picture","style"]))),256))])):(a(),o("div",W,[(a(!0),o(c,null,p(n(N),(e,d)=>(a(),h(j,{name:e.EasterEgg.Name,role:e.EasterEgg.Role,picture:l(e.EasterEgg.Image?e.EasterEgg.Image:e.Image),style:u({display:g.value.length==1?g.value.includes(e.Branch)||!e.Branch?"":"none":""})},null,8,["name","role","picture","style"]))),256))]))}});export{Z as default};