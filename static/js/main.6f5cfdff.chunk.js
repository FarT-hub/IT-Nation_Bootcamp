(this.webpackJsonpair=this.webpackJsonpair||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/GC_logo.0662d9de.svg"},function(e,t,a){e.exports=a.p+"static/media/ITN_logo.2f311a05.svg"},function(e,t,a){e.exports=a.p+"static/media/shid_logo.341a487c.svg"},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/slide-1.7e1db0da.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide-2.12a25e24.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide-3.638ec227.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide-4.8a21e8b7.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide-5.bb9f49bb.jpg"},function(e,t,a){e.exports=a.p+"static/media/industry.5ec44869.jpg"},function(e,t,a){e.exports=a.p+"static/media/transport.65643b05.jpg"},function(e,t,a){e.exports=a.p+"static/media/sity_planing.f8f67844.jpg"},function(e,t,a){e.exports=a.p+"static/media/energy.fb084e1e.jpg"},function(e,t,a){e.exports=a.p+"static/media/energetics.43f9dac6.jpg"},function(e,t,a){e.exports=a.p+"static/media/utilisation.a8b6caee.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),s=(a(19),a(20),a(21),function(e){var t=e.title,a=e.links,n=e.logos.map((function(e,t){return r.a.createElement("img",{src:e,alt:"partner-logo",className:"hero-partners-item",key:t})})),i=a.map((function(e,t){return r.a.createElement("a",{href:e.href,className:"hero-navigation-item",key:t},e.title)}));return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero-partners"},n),r.a.createElement("nav",{className:"hero-navigation"},i),r.a.createElement("h1",{className:"hero-title"},t),r.a.createElement("a",{href:"#",className:"hero-link"},"\u041e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c")))}),l=function(e){var t=e.item;return r.a.createElement("div",{className:"facts-slide"},r.a.createElement("img",{src:t.imgUrl,alt:"slide image"}),r.a.createElement("p",{className:"facts-slide-desc"},t.desc))},o=a(45),m=a(47),u=a(46),p=a(43),d=a(44);a(22),a(23),a(24),a(25);u.a.use([p.a,d.a]);var f=function(e){var t=e.title,a=e.slides.map((function(e){return r.a.createElement(o.a,{key:e.id},r.a.createElement(l,{item:e}))}));return r.a.createElement("section",{id:"facts",className:"facts container"},r.a.createElement("h2",{className:"facts-title"},t),r.a.createElement("div",{className:"swiper-button-prev"}),r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".facts-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="facts-pagination-bullet '.concat(t,'"></span>')}},spaceBetween:150,slidesPerView:3,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0},a)),r.a.createElement("div",{className:"swiper-button-next"}),r.a.createElement("div",{className:"facts-pagination"}))},g=(a(26),a(6)),E=function(e){var t=e.sector,a=e.number,i=Object(n.useState)(!1),c=Object(g.a)(i,2),s=c[0],l=c[1],o=Object(n.useState)(!1),m=Object(g.a)(o,2),u=m[0],p=m[1],d=function(e){p(a%3===0),l(e)};return r.a.createElement("div",{className:"sectors-list-item",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{background:"url(".concat(t.imgUrl,") center no-repeat"),backgroundSize:"cover"}},r.a.createElement("p",{className:"sectors-list-item-name"},t.name),s&&r.a.createElement("p",{className:"sectors-list-item-tooltip ".concat(u?"sectors-list-item-tooltip-switched":"")},t.description))},v=function(e){var t=e.title,a=e.subtitle,n=e.items.map((function(e,t){return r.a.createElement(E,{sector:e,number:t+1,key:t})}));return r.a.createElement("section",{id:"policy",className:"sectors container"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"sectors-title"},t),r.a.createElement("p",{className:"sectors-subtitle"},a),r.a.createElement("div",{className:"sectors-list"},n)))},N=a(7),b=a.n(N);a(27),a(28);b.a.accessToken="pk.eyJ1IjoieWFtbnlrIiwiYSI6ImNrZmxhZjZscjAwb2gycm54aWo2bGJvZnEifQ.BbYutmem-GZtYciYeMln1A";var h=function(){var e=Object(n.useRef)(null),t=Object(n.useState)({lng:30.6,lat:50.45,zoom:7}),a=Object(g.a)(t,1)[0];return Object(n.useEffect)((function(){new b.a.Map({container:e.current,style:"mapbox://styles/mapbox/outdoors-v11",center:[a.lng,a.lat],zoom:a.zoom}).addControl(new b.a.NavigationControl("zoom"))}),[]),r.a.createElement("section",{id:"quality",className:"air-quality container"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"air-quality-title"},"\u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),r.a.createElement("div",{className:"air-quality-map",ref:e}),r.a.createElement("p",{className:"air-quality-text"},"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u0434\u0443\u0445\u0430 (\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u0434\u0443\u0445\u0430) \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 \u041a\u0438\u0435\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0430\u043d\u0446\u0438\u044e \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0432\u044b\u0448\u0435.")))},x=a(11),y=a.n(x),j=a(12),k=a.n(j),w=a(13),U=a.n(w),O=(a(29),function(e){var t=e.partners,a=e.links,n=e.author,i=e.designer,c=t.map((function(e,t){return r.a.createElement("img",{key:t,src:e,alt:"partner logo",className:"footer-partners-item"})})),s=a.map((function(e,t){return r.a.createElement("a",{href:e.href,key:t,className:"footer-nav-link"},e.title)}));return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-partners"},c),r.a.createElement("div",{className:"footer-text-wrap"},r.a.createElement("div",{className:"footer-nav"},s),r.a.createElement("p",{className:"footer-nav-text"},"\u0421\u0430\u0439\u0442 \u0431\u044b\u043b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d ",r.a.createElement("span",{className:"text-yellow"},n)," \u0432 \u0443\u0447\u0435\u0431\u043d\u044b\u0445 \u0446\u0435\u043b\u044f\u0445, \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b IT nation. \u0414\u0438\u0437\u0430\u0439\u043d \u0441\u0430\u0439\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d ",r.a.createElement("span",{className:"text-yellow"},i),".")),r.a.createElement("p",{className:"footer-text"},"2020, \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"),r.a.createElement("p",{className:"footer-text"},"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 ",r.a.createElement("br",null),"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438")))});var I=function(){var e=[U.a,k.a,y.a],t=[{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b",href:"#facts"},{title:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430",href:"#quality"},{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u0439",href:"#policy"}],n=[{id:"1111",imgUrl:a(30),desc:"\u0416\u0435\u043d\u0449\u0438\u043d\u044b \u0438 \u0434\u0435\u0442\u0438 - \u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u0436\u0435\u0440\u0442\u0432\u044b \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0434\u0443\u0445\u0430"},{id:"1112",imgUrl:a(31),desc:"\u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0438 \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044b \u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0435\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f\u043c"},{id:"1113",imgUrl:a(32),desc:"\u0417\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u2013 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"},{id:"1114",imgUrl:a(33),desc:"4,2 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u043f\u0440\u0435\u0436\u0434\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0441\u043c\u0435\u0440\u0442\u0438 \u043b\u044e\u0434\u0435\u0439 \u0438\u0437-\u0437\u0430 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u0434\u0443\u0445\u0430"},{id:"1115",imgUrl:a(34),desc:"\u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043e\u0446\u0435\u043d\u043a\u0430\u043c, \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u0442\u0440\u0430\u0442 \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u0435\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 5 \u0442\u0440\u043b\u043d \u0434\u043e\u043b\u043b. \u0432 \u0433\u043e\u0434."}],i=[{name:"\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c",imgUrl:a(35),description:"\u0427\u0438\u0441\u0442\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044e \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 \u0438\u0437 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u044b\u043c\u043e\u0432\u044b\u0445 \u0442\u0440\u0443\u0431; \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0430\u044f \u0443\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u0438 \u0441\u0435\u043b\u044c\u0441\u043a\u043e\u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0442\u0445\u043e\u0434\u043e\u0432, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u0430\u043f\u0442\u0430\u0436 (\u0443\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u043d\u0438\u0435) \u043c\u0435\u0442\u0430\u043d\u0430, \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0432 \u043c\u0435\u0441\u0442\u0430\u0445 \u0443\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0445\u043e\u0434\u043e\u0432, \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430, \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0441\u0436\u0438\u0433\u0430\u043d\u0438\u044e (\u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0438\u043e\u0433\u0430\u0437\u0430)"},{name:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",imgUrl:a(36),description:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u0447\u0438\u0441\u0442\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438; \u0443\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u043e\u0433\u043e \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u043d\u043e\u043c\u0443 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c\u0443 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443, \u043f\u0435\u0448\u0435\u0445\u043e\u0434\u043d\u044b\u043c \u0438 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043d\u044b\u043c \u0441\u0435\u0442\u044f\u043c \u0432 \u0433\u043e\u0440\u043e\u0434\u0430\u0445, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0436\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u043c \u043c\u0435\u0436\u0434\u0443\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u043c \u0433\u0440\u0443\u0437\u043e\u0432\u044b\u043c \u0438 \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043a\u0438\u043c \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0430\u043c; \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0441\u0442\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u0440\u0443\u0437\u043d\u044b\u0445 \u0434\u0438\u0437\u0435\u043b\u044c\u043d\u044b\u0445 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0441 \u043d\u0438\u0437\u043a\u0438\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0441\u0442\u044b\u0445 \u0432\u0438\u0434\u043e\u0432 \u0442\u043e\u043f\u043b\u0438\u0432\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0442\u043e\u043f\u043b\u0438\u0432\u043e \u0441\u043e \u0441\u043d\u0438\u0436\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0441\u0435\u0440\u044b"},{name:"\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",imgUrl:a(37),description:"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0437\u0434\u0430\u043d\u0438\u0439 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 \u0437\u0435\u043b\u0435\u043d\u044b\u0445 \u0438 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0445 \u0438 \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u0431\u043e\u043b\u0435\u0435 \u044d\u043d\u0435\u0440\u0433\u043e\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432"},{name:"\u042d\u043d\u0435\u0440\u0433\u0438\u044f",imgUrl:a(38),description:"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c \u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0432 \u0431\u044b\u0442\u0443 \u0434\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0438\u0449\u0438, \u043e\u0442\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f"},{name:"\u042d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430",imgUrl:a(39),description:"\u0411\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0438\u0434\u043e\u0432 \u0442\u043e\u043f\u043b\u0438\u0432\u0430 \u0441 \u043d\u0438\u0437\u043a\u0438\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 \u0438 \u0432\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u044d\u043d\u0435\u0440\u0433\u0438\u0438, \u043d\u0435 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0436\u0438\u0433\u0430\u043d\u0438\u0438 (\u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u044d\u043d\u0435\u0440\u0433\u0438\u044f \u0441\u043e\u043b\u043d\u0446\u0430, \u0432\u0435\u0442\u0440\u0430 \u0438\u043b\u0438 \u0433\u0438\u0434\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0438\u044f); \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0442\u0435\u043f\u043b\u0430 \u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438; \u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u043d\u0438\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u043c\u044b\u0435 \u043d\u0430 \u043a\u0440\u044b\u0448\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0438\u0437 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0439 \u044d\u043d\u0435\u0440\u0433\u0438\u0438)"},{name:"\u0423\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0442\u0445\u043e\u0434\u043e\u0432",imgUrl:a(40),description:"\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044f \u043e\u0442\u0445\u043e\u0434\u043e\u0432, \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u0442\u0445\u043e\u0434\u043e\u0432, \u0440\u0435\u0446\u0438\u043a\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0442\u0445\u043e\u0434\u043e\u0432; \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0443\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0445\u043e\u0434\u043e\u0432, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0430\u043d\u0430\u044d\u0440\u043e\u0431\u043d\u0430\u044f \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0442\u0445\u043e\u0434\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u0431\u0438\u043e\u0433\u0430\u0437\u0430, \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043c\u044b\u043c\u0438, \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u0438\u043c\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c\u0443 \u0441\u0436\u0438\u0433\u0430\u043d\u0438\u044e \u0442\u0432\u0435\u0440\u0434\u044b\u0445 \u043e\u0442\u0445\u043e\u0434\u043e\u0432"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",logos:e,links:t}),r.a.createElement(f,{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b",slides:n}),r.a.createElement(h,null),r.a.createElement(v,{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u0439",subtitle:"\u0415\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043f\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0432 \u0442\u0430\u043a\u0438\u0445 \u0441\u0435\u043a\u0442\u043e\u0440\u0430\u0445, \u043a\u0430\u043a \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442, \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430 \u0438 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c:",items:i}),r.a.createElement(O,{links:t,partners:e,author:"\u043c\u043d\u043e\u0439",designer:"\u0412\u0430\u043b\u0435\u0440\u0438\u0435\u0439 \u0411\u0443\u0431\u044b\u0440\u044c"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.6f5cfdff.chunk.js.map