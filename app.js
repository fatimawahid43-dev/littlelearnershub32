const categories=[
 {title:'ABCs & Phonics',desc:'Letters, sounds and first word adventures.',icon:'Aa',symbol:'✿',color:'#f1aab5',group:'early'},
 {title:'Numbers & Counting',desc:'Count, sort and spot numbers everywhere.',icon:'1 2 3',symbol:'●',color:'#f1ce61',group:'early'},
 {title:'Shapes & Colours',desc:'A bright little world to notice and name.',icon:'◯ △',symbol:'✦',color:'#91cde0',group:'early'},
 {title:'Montessori Activities',desc:'Hands-on invitations to do it myself.',icon:'✋',symbol:'♡',color:'#9bcea7',group:'early'},
 {title:'Preschool Worksheets',desc:'Gentle practice for growing skills.',icon:'✎',symbol:'▤',color:'#c8b4e6',group:'early'},
 {title:'Fine Motor Skills',desc:'Little fingers get busy and clever.',icon:'✂',symbol:'✿',color:'#eca678',group:'creative'},
 {title:'Arts & Crafts',desc:'Make, imagine and bring ideas to life.',icon:'✿',symbol:'✎',color:'#e99ab5',group:'creative'},
 {title:'Screen-Free Play',desc:'Easy ideas for lovely together time.',icon:'♡',symbol:'☼',color:'#8bc8c4',group:'creative'}
];
const products=[
 {name:'My First ABC Adventure',type:'ALPHABET LEARNING KIT',desc:'Letter tracing, sound play and first-word fun in one printable pack.',price:'PKR 450',icon:'Aa',sub:'My first ABC book',dots:'A　B　C',color:'#f1aab5'},
 {name:'Count & Play Activity Pack',type:'NUMBERS & COUNTING',desc:'Counting games and number activities for busy little hands.',price:'PKR 400',icon:'1 2 3',sub:'Count & play',dots:'● ● ●',color:'#f1ce61'},
 {name:'Little Learner Starter Bundle',type:'A LITTLE BIT OF EVERYTHING',desc:'A joyful mix of alphabet, numbers, shapes and creative play.',price:'PKR 990',icon:'✿',sub:'Happy little learner',dots:'ABC　123',color:'#9bcea7'},
 {name:'Preschool Practice Pages',type:'PRINTABLE WORKSHEETS',desc:'Friendly early-learning pages for relaxed practice at home.',price:'PKR 350',icon:'✎',sub:'Little practice pad',dots:'Trace • Colour',color:'#c8b4e6'},
 {name:'Montessori At Home Pack',type:'MONTESSORI ACTIVITIES',desc:'Simple printable prompts to encourage independence and focus.',price:'PKR 550',icon:'♡',sub:'I can do it!',dots:'Sort • Match',color:'#91cde0'},
 {name:'Little Hands Creative Kit',type:'FINE MOTOR & CRAFT',desc:'Cut, colour, trace and create with a screen-free activity pack.',price:'PKR 480',icon:'✂',sub:'Make something!',dots:'Cut • Stick',color:'#eca678'}
];
const resourceGrid=document.querySelector('#resourceGrid');let activeFilter='all';
function drawResources(){const q=document.querySelector('#resourceSearch').value.trim().toLowerCase();const rows=categories.filter(x=>(activeFilter==='all'||x.group===activeFilter)&&(`${x.title} ${x.desc}`).toLowerCase().includes(q));resourceGrid.innerHTML=rows.map(x=>`<article class="resource-card"><div class="resource-art" style="background:${x.color}"><span class="big-icon">${x.icon}</span><span class="mini-icon">${x.symbol}</span></div><h3>${x.title}</h3><p>${x.desc}</p><a href="#shop">Find an activity <span>→</span></a></article>`).join('');document.querySelector('#emptyState').hidden=rows.length>0}
drawResources();document.querySelector('#resourceSearch').addEventListener('input',drawResources);document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');btn.classList.add('active');activeFilter=btn.dataset.filter;drawResources()}));
document.querySelector('#productGrid').innerHTML=products.map(p=>`<article class="product-card"><div class="product-art" style="background:${p.color}"><div class="product-illustration"><span class="prod-top">LITTLE LEARNERS</span><span class="prod-main">${p.icon}</span><span class="prod-sub">${p.sub}</span><span class="prod-dots">${p.dots}</span></div></div><div class="product-info"><div class="product-kind">${p.type}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><div class="price">${p.price} <small>· digital download</small></div><button class="enquire-button" data-product="${p.name}">Enquire ↗</button></div></div></article>`).join('');
// Replace this sample Pakistan country code with the business WhatsApp number before launch.
const whatsappNumber='923001234567';
function waLink(message){return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
document.querySelector('#whatsappLink').href=waLink('Hi Little Learners Hub! I have a question.');document.querySelectorAll('.enquire-button').forEach(b=>b.addEventListener('click',()=>window.open(waLink(`Hi! I'm interested in ${b.dataset.product}. Could you please share more details?`),'_blank','noopener')));
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" rx="30" fill="#fffaf4"/><rect x="50" y="50" width="700" height="900" rx="20" fill="#fff" stroke="#c5e5ce" stroke-width="12"/><text x="400" y="145" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="32" fill="#4f805c">LITTLE LEARNERS HUB</text><text x="400" y="235" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="68" fill="#34405a">MY LITTLE ABCs</text><text x="400" y="290" text-anchor="middle" font-family="Arial" font-size="25" fill="#7c8696">Trace, colour &amp; say the letters!</text><g font-family="Arial" font-weight="bold" text-anchor="middle"><rect x="130" y="350" width="235" height="220" rx="18" fill="#f3b5bd"/><text x="247" y="490" font-size="100" fill="#c95055">Aa</text><text x="247" y="540" font-size="28" fill="#34405a">A is for apple</text><rect x="435" y="350" width="235" height="220" rx="18" fill="#a8d6e5"/><text x="552" y="490" font-size="100" fill="#287a98">Bb</text><text x="552" y="540" font-size="28" fill="#34405a">B is for ball</text><rect x="130" y="610" width="235" height="220" rx="18" fill="#f5d56f"/><text x="247" y="750" font-size="100" fill="#8b6811">Cc</text><text x="247" y="800" font-size="28" fill="#34405a">C is for cat</text><rect x="435" y="610" width="235" height="220" rx="18" fill="#a9d6b7"/><text x="552" y="750" font-size="100" fill="#41844e">✿</text><text x="552" y="800" font-size="28" fill="#34405a">Colour your flower!</text></g><text x="400" y="900" text-anchor="middle" font-family="Arial" font-size="22" fill="#8b93a0">Learn, Explore &amp; Grow Through Play!</text></svg>`;document.querySelector('#downloadFreebie').href='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent(`${d.get('topic')} — Little Learners Hub`);const body=encodeURIComponent(`Hello Little Learners Hub,\n\n${d.get('message')}\n\nFrom: ${d.get('name')}\nEmail: ${d.get('email')}`);document.querySelector('#formStatus').textContent='Your email app is opening with your note ready to send.';window.location.href=`mailto:hello@littlelearnershub.com?subject=${subject}&body=${body}`});
const menuBtn=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();

// Soft animated WebGL color fields behind the existing hero artwork and copy.
(function initHeroShader(){
 const canvas=document.querySelector('#heroShader');
 if(!canvas)return;
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,premultipliedAlpha:false});
 if(!gl)return;
 const vertexSource=`attribute vec2 a_position; varying vec2 v_uv; void main(){v_uv=a_position*.5+.5;gl_Position=vec4(a_position,0.0,1.0);}`;
 const fragmentSource=`precision mediump float;
 uniform vec2 u_resolution; uniform float u_time; varying vec2 v_uv;
 float cloud(vec2 p,vec2 c,vec2 r){vec2 d=(p-c)/r;return exp(-dot(d,d)*1.65);}
 void main(){
   vec2 uv=vec2(v_uv.x*u_resolution.x/u_resolution.y,v_uv.y);
   float t=u_time*.16;
   float pink=cloud(uv,vec2(.28+.055*sin(t),.48+.07*cos(t*.8)),vec2(.34,.42));
   float blue=cloud(uv,vec2(.79+.06*cos(t*.72),.64+.06*sin(t*1.1)),vec2(.30,.46));
   float mint=cloud(uv,vec2(.60+.08*sin(t*.65+2.0),.22+.05*cos(t*.9)),vec2(.31,.39));
   float yellow=cloud(uv,vec2(.10+.06*cos(t*.8+1.0),.82+.04*sin(t)),vec2(.25,.35));
   vec3 color=vec3(.99,.975,.94);
   color=mix(color,vec3(.94,.56,.61),pink*.68);
   color=mix(color,vec3(.45,.73,.85),blue*.62);
   color=mix(color,vec3(.47,.72,.53),mint*.58);
   color=mix(color,vec3(.94,.75,.22),yellow*.54);
   gl_FragColor=vec4(color,.92);
 }`;
 function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);return null}return shader}
 const vertex=compile(gl.VERTEX_SHADER,vertexSource),fragment=compile(gl.FRAGMENT_SHADER,fragmentSource);
 if(!vertex||!fragment)return;
 const program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);
 if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
 gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
 const position=gl.getAttribLocation(program,'a_position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const resolution=gl.getUniformLocation(program,'u_resolution'),time=gl.getUniformLocation(program,'u_time');
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let frame=0,start=performance.now(),inView=true,pageVisible=!document.hidden;
 function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.5);const w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.height*dpr));if(canvas.width===w&&canvas.height===h)return;canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);gl.uniform2f(resolution,w,h)}
 function draw(now){frame=0;gl.uniform1f(time,reduceMotion?0:(now-start)/1000);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(!reduceMotion&&inView&&pageVisible)frame=requestAnimationFrame(draw)}
 function updateVisibility(){pageVisible=!document.hidden;if(!reduceMotion&&inView&&pageVisible&&!frame)frame=requestAnimationFrame(draw);else if((!inView||!pageVisible)&&frame){cancelAnimationFrame(frame);frame=0}}
 resize();
 const observers=[];
 if(!reduceMotion){
   window.addEventListener('resize',()=>{resize();if(!frame&&inView&&pageVisible)frame=requestAnimationFrame(draw)},{passive:true});
   document.addEventListener('visibilitychange',updateVisibility);
   if('ResizeObserver'in window){const observer=new ResizeObserver(()=>{resize();if(!frame&&inView&&pageVisible)frame=requestAnimationFrame(draw)});observer.observe(canvas.parentElement);observers.push(observer)}
   if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;updateVisibility()},{rootMargin:'80px'});observer.observe(canvas);observers.push(observer)}
   canvas._heroObservers=observers;
   if(inView&&pageVisible)frame=requestAnimationFrame(draw);
 }else draw(performance.now());
})();

