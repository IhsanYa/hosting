<script>
let urlHomepageRecent =&quot;<data:blog.homepageUrl.canonical/>&quot;;
let noImageRecent =&quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyko0G4fZvMB4LP96NdXbmB3_O-aJsUXAs3s9nQsBiB_o6ATpGE1btIOC5fy-WOThjwGyrxJPxp9aN57bAU1kBbb2gZBCydqEV14iTLl8LIqzbLZqTlLFOBiNyvYraXhzPn-MQM-9qVrsfDehHMWurgGL3a3Ggec39B1QBJVumRPATdxVCZuz42LDR/s1600/arikadnyana.jpg&quot;; 
/*<![CDATA[*/ function recentByLabel(e){const{namaLabel:t,jumlahPost:a,thumbnailWidth:n,thumbnailHeight:l}=e,i=document.querySelector(e.targetRecent);fetch(`${urlHomepageRecent}feeds/posts/default/-/${t}?max-results=${a}&alt=json`).then((e=>e.json())).then((e=>{const t=e.feed.entry,c=document.createElement("ul");t.slice(0,a).forEach((e=>{const t=e.title.$t,a=e.media$thumbnail?e.media$thumbnail.url.replace(/\/[w,s][0-9][0-9].*\//g,`/w${n}-h${l}-c-rw/`):noImageRecent,i=e.link.find((e=>"alternate"===e.rel)).href,r=document.createElement("li");r.innerHTML=`<div class="listari"><a alt="${t}" href="${i}"><div class="thumbari"><img alt="${t}" src="${a}" width="${n}" height="${l}"></div><span class="arititle"> ${t}</span></a></div>`,c.appendChild(r)})),i.appendChild(c)})).catch((e=>console.error(e)))} /*]]>*/</script>
