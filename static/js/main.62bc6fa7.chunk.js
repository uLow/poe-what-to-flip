(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,r){},12:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(3),c=r.n(o),s=r(1),i=function(e){return"".concat(e)},m=function(e){return fetch(e).then(function(e){return e.text().then(function(a){if(!e.ok)throw new Error("HTTP error: ".concat(e.status," - ").concat(a));try{return JSON.parse(a)}catch(r){throw new Error("Could not JSON parse reponse: ".concat(a,". Error: ").concat(r))}})})},u=function(){return m(i("https://api.pathofexile.com/leagues?type=main&compact=1")).then(function(e){return function(e){var a=e.filter(function(e){var a=e.id;return!(["ssf","standard"].some(function(e){return a.toLowerCase().includes(e)})||"hardcore"===a.toLowerCase())}),r=a.filter(function(e){return!e.id.toLowerCase().includes("hardcore")}),t=a.filter(function(e){return e.id.toLowerCase().includes("hardcore")});return 1!==r.length||1!==t.length?{Standard:"Standard",Hardcore:"Hardcore"}:{"Temp SC":r[0].id,"Temp HC":t[0].id,Standard:"Standard",Hardcore:"Hardcore"}}(e)}).catch(function(e){console.error("Couldn't fetch leagues: ".concat(e))})},l=r(4),h=function(){for(var e={},a=0,r=Object.entries({currency:{currencies:{type:"Currency",name_key:"currencyTypeName",compare_key:"chaosEquivalent"},fragments:{type:"Fragment",name_key:"currencyTypeName",compare_key:"chaosEquivalent"}},item:{accessories:{type:"UniqueAccessory",name_key:"name",compare_key:"chaosValue"},weapons:{type:"UniqueWeapon",name_key:"name",compare_key:"chaosValue"},armours:{type:"UniqueArmour",name_key:"name",compare_key:"chaosValue"},divination_cards:{type:"DivinationCard",name_key:"name",compare_key:"chaosValue"},base_types:{type:"BaseType",name_key:"detailsId",compare_key:"chaosValue"},maps:{type:"Map",name_key:"name",compare_key:"chaosValue"},scarabs:{type:"Scarab",name_key:"name",compare_key:"chaosValue"},jewels:{type:"UniqueJewel",name_key:"name",compare_key:"chaosValue"},flasks:{type:"UniqueFlask",name_key:"name",compare_key:"chaosValue"}}});a<r.length;a++){var t=r[a],n=Object(s.a)(t,2)[1];e=Object.assign(e,n)}return e},p=function(e){var a=n.a.useContext(e);if(!a)throw new Error("".concat(e.displayName," cannot be used outside the provider."));return a},d=n.a.createContext(),y=function(e){var a=n.a.useRef({});return n.a.createElement(d.Provider,Object.assign({value:a},e))},f=function(e){return"undefined"!==typeof e&&null!==e},b=n.a.createContext(),v=function(e){var a=n.a.useState({}),r=Object(s.a)(a,2),t=r[0],o=r[1],c=n.a.useMemo(function(){return[t,o]},[t]);return n.a.createElement(b.Provider,Object.assign({value:c},e))},S=function(e){var a={},r=Object.entries({currency:{currencies:{type:"Currency",name_key:"currencyTypeName",compare_key:"chaosEquivalent"},fragments:{type:"Fragment",name_key:"currencyTypeName",compare_key:"chaosEquivalent"}},item:{accessories:{type:"UniqueAccessory",name_key:"name",compare_key:"chaosValue"},weapons:{type:"UniqueWeapon",name_key:"name",compare_key:"chaosValue"},armours:{type:"UniqueArmour",name_key:"name",compare_key:"chaosValue"},divination_cards:{type:"DivinationCard",name_key:"name",compare_key:"chaosValue"},base_types:{type:"BaseType",name_key:"detailsId",compare_key:"chaosValue"},maps:{type:"Map",name_key:"name",compare_key:"chaosValue"},scarabs:{type:"Scarab",name_key:"name",compare_key:"chaosValue"},jewels:{type:"UniqueJewel",name_key:"name",compare_key:"chaosValue"},flasks:{type:"UniqueFlask",name_key:"name",compare_key:"chaosValue"}}}).map(function(r){var t=Object(s.a)(r,2),n=t[0],o=t[1];return Object.entries(o).map(function(r){var t=Object(s.a)(r,2),o=t[0],c=t[1],u=function(e,a,r){return i("https://poe.ninja/api/data/".concat(e,"overview?league=").concat(r,"&type=").concat(a))}(n,c.type,e);return console.log("Fetching ".concat(o," items for ").concat(e," league from ").concat(u)),m(u).then(function(e){console.log("Fetched: ".concat(e.lines.length," ").concat(o," items")),a[o]=e.lines}).catch(function(e){console.error("Couldn't fetch items: ".concat(e))})})}).flat();return Promise.all(r).then(function(){return a})},k=function(e){var a=p(b),r=Object(s.a)(a,2),t=r[0],o=r[1],c=function(e){var a=p(d),r=!1;return a.current[e]||(a.current[e]=!0,r=!0),r}(e);return n.a.useEffect(function(){e&&!t[e]&&c&&(console.log("".concat(e," league selected, fetching items...")),S(e).then(function(a){var r=Object.assign(function(e){try{return JSON.parse(JSON.stringify(e))}catch(a){return console.error("Object deep clone error: ".concat(a)),{}}}(t),Object(l.a)({},e,a));o(r)}))},[c,t,e,o]),t[e]},w=function(e,a){var r=k(e);return a.map(function(e){return function(e,a){if(!e)return null;for(var r,t=0,n=Object.entries(h());t<n.length;t++){var o=n[t],c=Object(s.a)(o,2),i=c[0],m=c[1];(e[i]||[]).length||console.log("".concat(i," is not available"));var u=!0,l=!1,p=void 0;try{for(var d,y=(e[i]||[])[Symbol.iterator]();!(u=(d=y.next()).done);u=!0){var f=d.value;if(f[m.name_key]===a){(r=f).type=i;break}}}catch(b){l=!0,p=b}finally{try{u||null==y.return||y.return()}finally{if(l)throw p}}if(void 0!==r)break}return r}(r,e)})},T=function(e){var a=e.selectedLeague,r=e.comparison,t=function(e,r){var t=w(a,e),n=w(a,r);return t.concat(n).some(function(e){return!f(e)})?"N/A":function(e,a){var r=0,t=!0,n=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var i=c.value;r+=i[h()[i.type].compare_key]}}catch(f){n=!0,o=f}finally{try{t||null==s.return||s.return()}finally{if(n)throw o}}var m=!0,u=!1,l=void 0;try{for(var p,d=a[Symbol.iterator]();!(m=(p=d.next()).done);m=!0){var y=p.value;r-=y[h()[y.type].compare_key]}}catch(f){u=!0,l=f}finally{try{m||null==d.return||d.return()}finally{if(u)throw l}}return Math.round(r)}(t,n)},o=function(e){var r=e.length,t=w(a,e);return 0===r?"":t.some(function(e){return!f(e)})?"N/A":", cost: ".concat(function(e){var a=0,r=!0,t=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var s=o.value;a+=s[h()[s.type].compare_key]}}catch(i){t=!0,n=i}finally{try{r||null==c.return||c.return()}finally{if(t)throw n}}return Math.round(a)}(t)," chaos, pieces: ").concat(r)},c={order:t(r.base,r.compare)};return n.a.createElement("li",{key:r.key,style:c},function(){var e="".concat(r.name,": ");return e+="".concat(t(r.base,r.compare)," chaos profit"),e+=o(r.compare),r.comment&&(e+=" (".concat(r.comment,")")),e}())},g=function(e){var a=e.selectedLeague,r={"Pure vs. normal Breachstones":[{name:"Chayula",base:["Chayula's Pure Breachstone"],compare:["Chayula's Breachstone"]},{name:"Uul-Netol",base:["Uul-Netol's Pure Breachstone"],compare:["Uul-Netol's Breachstone"]},{name:"Tul",base:["Tul's Pure Breachstone"],compare:["Tul's Breachstone"]},{name:"Xoph",base:["Xoph's Pure Breachstone"],compare:["Xoph's Breachstone"]},{name:"Esh",base:["Esh's Pure Breachstone"],compare:["Esh's Breachstone"]}],"Divination cards vs. outcome":[{name:"The Apothecary (Mageblood)",base:["Mageblood"],compare:["The Apothecary","The Apothecary","The Apothecary","The Apothecary","The Apothecary"]},{name:"The Nurse",base:["The Doctor"],compare:["The Nurse","The Nurse","The Nurse","The Nurse","The Nurse","The Nurse","The Nurse","The Nurse"]},{name:"Succor of the Sinless (Bottled Faith)",base:["Bottled Faith"],compare:["Succor of the Sinless","Succor of the Sinless","Succor of the Sinless","Succor of the Sinless","Succor of the Sinless","Succor of the Sinless"]},{name:"The Sephirot",base:["Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb","Divine Orb"],compare:["The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot","The Sephirot"]},{name:"The Hoarder (Exalted Orb)",base:["Exalted Orb"],compare:["The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder","The Hoarder"]},{name:"Abandoned Wealth (3x Exalted Orb)",base:["Exalted Orb","Exalted Orb","Exalted Orb"],compare:["Abandoned Wealth","Abandoned Wealth","Abandoned Wealth","Abandoned Wealth","Abandoned Wealth"]},{name:"Nook's Crown (Elder Bone Helmet ilvl100)",base:["bone-helmet-86-elder"],compare:["Nook's Crown","Nook's Crown","Nook's Crown","Nook's Crown"]}],"Gilded Scarabs":[{name:"Sulphite",base:["Gilded Sulphite Scarab"],compare:[],comment:"Cameria"},{name:"Legion",base:["Gilded Legion Scarab"],compare:[],comment:"Vagan"},{name:"Harbinger",base:["Gilded Harbinger Scarab"],compare:[],comment:"Tora"},{name:"Bestiary",base:["Gilded Bestiary Scarab"],compare:[],comment:"Jorgin"},{name:"Divination",base:["Gilded Divination Scarab"],compare:[],comment:"Gravicius"},{name:"Cartography",base:["Gilded Cartography Scarab"],compare:[],comment:"Rin"},{name:"Torment",base:["Gilded Torment Scarab"],compare:[],comment:"Leo"},{name:"Shaper",base:["Gilded Shaper Scarab"],compare:[],comment:"Vorici"},{name:"Elder",base:["Gilded Elder Scarab"],compare:[],comment:"Korell"},{name:"Reliquary",base:["Gilded Reliquary Scarab"],compare:[],comment:"Elreon"},{name:"Breach",base:["Gilded Breach Scarab"],compare:[],comment:"It That Fled"},{name:"Ambush",base:["Gilded Ambush Scarab"],compare:[],comment:"Haku"},{name:"Perandus",base:["Gilded Perandus Scarab"],compare:[],comment:"Janus"}],"Item prices":[{name:"Exalted Orb",base:["Exalted Orb"],compare:[]}],"Incursion uniques (vials excluded)":[{name:"Apep's Supremacy",base:["Apep's Supremacy"],compare:["Apep's Slumber"],comment:"Vial of Awakening: https://www.pathofexile.com/trade/search/Metamorph/KYVR6Ri5"},{name:"Slavedriver's Hand",base:["Slavedriver's Hand"],compare:["Architect's Hand"],comment:"Vial of Dominance: https://www.pathofexile.com/trade/search/Metamorph/q2Ew93Cg"},{name:"Mask of the Stitched Demon",base:["Mask of the Stitched Demon"],compare:["Mask of the Spirit Drinker"],comment:"Vial of Summoning: https://www.pathofexile.com/trade/search/Metamorph/mZprJJH6"},{name:"Coward's Legacy",base:["Coward's Legacy"],compare:["Coward's Chains"],comment:"Vial of Consequence: https://www.pathofexile.com/trade/search/Metamorph/REManrf7"},{name:"Fate of the Vaal",base:["Fate of the Vaal"],compare:["Story of the Vaal"],comment:"Vial of Fate: https://www.pathofexile.com/trade/search/Metamorph/ak4Q2pte"},{name:"Omeyocan",base:["Omeyocan"],compare:["Dance of the Offered"],comment:"Vial of the Ritual: https://www.pathofexile.com/trade/search/Metamorph/9d9Wk4uK"},{name:"Zerphi's Heart",base:["Zerphi's Heart"],compare:["Sacrificial Heart"],comment:"Vial of Sacrifice: https://www.pathofexile.com/trade/search/Metamorph/pY25JWi0"},{name:"Soul Ripper",base:["Soul Ripper"],compare:["Soul Catcher"],comment:"Vial of the Ghost: https://www.pathofexile.com/trade/search/Metamorph/rGdy0gHQ"},{name:"Transcendent Flesh",base:["Transcendent Flesh"],compare:["Tempered Flesh"],comment:"Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"},{name:"Transcendent Mind",base:["Transcendent Mind"],compare:["Tempered Mind"],comment:"Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"},{name:"Transcendent Spirit",base:["Transcendent Spirit"],compare:["Tempered Spirit"],comment:"Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"}]};return n.a.createElement("div",null,Object.keys(r).map(function(e){return n.a.createElement("div",{key:e},n.a.createElement("h2",null,e),n.a.createElement("ul",null,r[e].map(function(e,r){return n.a.createElement(T,{selectedLeague:a,comparison:e,key:r})})))}))},_=function(){var e=function(){var e=Object(t.useState)({}),a=Object(s.a)(e,2),r=a[0],n=a[1];Object(t.useEffect)(function(){u().then(function(e){console.log("Leagues: ".concat(JSON.stringify(e))),n(e)})},[]);var o=Object(t.useState)("Temp SC"),c=Object(s.a)(o,2),i=c[0],m=c[1],l=Object(t.useState)(),h=Object(s.a)(l,2),p=h[0],d=h[1];return Object(t.useEffect)(function(){d(r[i])},[r,i]),{metaLeagues:["Temp SC","Temp HC","Standard","Hardcore"],selectedMetaLeague:i,selectedLeague:p,setSelectedMetaLeague:m}}(),a=e.metaLeagues,r=e.selectedMetaLeague,o=e.selectedLeague,c=e.setSelectedMetaLeague;return n.a.createElement("div",null,n.a.createElement("h1",null,"PoE - What to flip?"),n.a.createElement("select",{name:"league",value:r,onChange:function(e){return c(e.target.value)}},a.map(function(e){return n.a.createElement("option",{key:e,value:e},e)})),n.a.createElement(y,null,n.a.createElement(v,null,n.a.createElement(g,{selectedLeague:o}))))},O=(r(11),document.getElementById("root"));c.a.render(n.a.createElement(_,null),O)},5:function(e,a,r){e.exports=r(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.62bc6fa7.chunk.js.map