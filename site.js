const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* ---------- publications data (from Google Scholar, Oct 2026) ---------- */
const PUBS = [
  {title:'Geometry Supports Aligned Language Representations for Speaking and Listening in Hippocampal Neurons',
   authors:["AG Chavez", "X Yan", "M Franch", "EA Mickiewicz", "W Baltazar", "JL Belanger", "D Devara", "M Etta", "T Hamre", "T Ismail", "B Joiner", "Y Kim", "A Kona", "K Mansourian", "A Nangia", "M Pluenneke", "S Soubra", "T Venkateswaran", "K Venkudusamy", "A Chericoni", "KE Kabotyanski", "KA Katlowitz", "RK Mathura", "T Nigam", "DL Paulo", "H Zhu", "E Bartoli", "NR Provenza", "A Watrous", "K Josić", "SA Sheth", "BY Hayden"],
   venue:'Nature Communications', note:'Accepted', year:2026, cites:10, thumb:'manifolds', selected:true, highlight:true, first:true,
   url:'https://www.biorxiv.org/content/10.1101/2025.09.20.677504v2', linkText:'Preprint',
   code:'https://github.com/aniluchavez/hippocampal-speaker-semantics',
   desc:'Hippocampal neurons encode word meaning in semi-orthogonal subspaces that both generalize and differentiate across speaking and listening — across 10 patients and 442 neurons.'},
  {title:'Neural basis of compositional control',
   authors:["A Chericoni", "JM Fine", "TS Ismail", "G Delgado Salazar", "MC Franch", "E Mickiewicz", "AG Chavez", "E Bartoli", "DL Paulo", "V Krishnan", "M Hegazy", "AM Goldman", "L Lin", "GP Banks", "N Giridharan", "M Hasen", "NR Provenza", "A Watrous", "SBM Yoo", "SA Sheth", "BY Hayden"], url:'https://doi.org/10.1038/s41586-026-10896-8',
   venue:'Nature', year:2026, cites:3, thumb:'compose', selected:true},
  {title:'A population code for semantics in human hippocampus',
   authors:["M Franch", "EA Mickiewicz", "JL Belanger", "B Joiner", "KA Katlowitz", "H Zhu", "AG Chavez", "A Chericoni", "AM Goldman", "V Krishnan", "A Maheshwari", "DL Paulo", "E Bartoli", "S Kemmer", "ST Piantadosi", "NR Provenza", "JA Hennig", "SA Sheth", "BY Hayden"], url:'https://doi.org/10.1038/s41593-026-02436-4',
   venue:'Nature Neuroscience', year:2026, cites:27, thumb:'raster', selected:true},
  {title:'Shared neural geometries for bilingual semantic representations in human hippocampal neurons',
   authors:["X Yan", "AG Chavez", "M Franch", "KA Katlowitz", "I Gautam", "B Kim", "A Krishna", "A Shrivastava", "K Van Arsdel", "J Belanger", "A Chericoni", "T Ismail", "EA Mickiewicz", "D Paulo", "H Zhu", "AM Goldman", "V Krishnan", "A Maheshwari", "E Bartoli", "NR Provenza", "SBM Yoo", "BY Hayden", "SA Sheth"], url:'https://doi.org/10.1016/j.cell.2026.05.020',
   venue:'Cell', year:2026, cites:2, thumb:'bilingual', selected:true},
  {title:'Neural geometry in the human hippocampus enables generalization across spatial position and gaze',
   authors:["A Chericoni", "C Diao", "X Yan", "TS Ismail", "EA Mickiewicz", "M Franch", "AG Chavez", "DL Paulo", "V Krishnan", "M Hegazy", "AM Goldman", "L Lin", "GT Sepulveda", "GP Banks", "N Giridharan", "M Hasen", "E Bartoli", "NR Provenza", "SBM Yoo", "J Hennig", "J Jacobs", "SA Sheth", "BY Hayden"], url:'https://doi.org/10.1016/j.neuron.2026.08.004',
   venue:'Neuron', year:2026, cites:5, thumb:'gaze', selected:true},
  {title:'Polysemanticity in human hippocampal neurons',
   authors:["X Yan", "J Li", "M Franch", "H Zhu", "RL Cowan", "J Belanger", "AG Chavez", "A Chericoni", "T Ismail", "K Katlowitz", "L Kolibius", "E Mickiewicz", "D Paulo", "E Bartoli", "JA Hennig", "T Fraczek", "N Provenza", "S Rahimpour", "B Shofty", "EHA Smith", "J Jacobs", "BY Hayden", "S Sheth"], url:'https://doi.org/10.64898/2026.05.02.722435',
   venue:'bioRxiv', year:2026, cites:3, thumb:'poly'},
  {title:'Semantic axes in the brain support analogical representations',
   authors:["H Zhu", "M Franch", "EA Mickiewicz", "\u2026", "AG Chavez", "\u2026"], posUnknown:true,
   venue:'bioRxiv', year:2026, cites:8, thumb:'axes'},
  {title:'A geometric foundation for word meaning in the brain',
   authors:["H Zhu", "M Franch", "EA Mickiewicz", "JL Belanger", "RL Cowan", "KA Katlowitz", "AG Chavez", "A Chericoni", "D Paulo", "X Yan", "S Rahimpour", "B Shofty", "E Bartoli", "JA Hennig", "NR Provenza", "EH Smith", "ST Piantadosi", "BY Hayden", "SA Sheth"], url:'https://doi.org/10.64898/2026.01.28.702241',
   venue:'bioRxiv', year:2026, cites:2, thumb:'geometry'},
  {title:'The effect of sensory deprivation and mutant gene dosage on seizures and sustained attention in a mouse model of absence epilepsy',
   authors:["E Ortiz", "R Yang", "A Sonesra", "AK Ntamatungiro", "M Ruiz", "C Dunbar", "AG Chavez", "B Moscoso", "SJ Park", "A Maheshwari"], url:'https://doi.org/10.1016/j.yebeh.2026.110903',
   venue:'Epilepsy & Behavior', year:2026, cites:1, thumb:'swd'},
  {title:'Attention is all you need (in the brain): semantic contextualization in human hippocampus',
   authors:["KA Katlowitz", "JL Belanger", "T Ismail", "AG Chavez", "A Chericoni", "M Franch", "EA Mickiewicz", "RK Mathura", "DL Paulo", "E Bartoli", "ST Piantadosi", "NR Provenza", "AJ Watrous", "AM Goldman", "V Krishnan", "A Maheshwari", "SA Sheth", "BY Hayden"], url:'https://doi.org/10.1101/2025.06.23.661103',
   venue:'bioRxiv', year:2025, cites:17, thumb:'attention', selected:true},
  {title:'A semantotopic map in human hippocampus',
   authors:["EA Mickiewicz", "M Franch", "KA Katlowitz", "AG Chavez", "H Zhu", "A Chericoni", "X Yan", "JL Belanger", "T Ismail", "DL Paulo", "AM Goldman", "V Krishnan", "A Maheshwari", "E Bartoli", "SR Heilbronner", "NR Provenza", "SA Sheth", "BY Hayden"], url:'https://doi.org/10.1101/2025.10.31.685959',
   venue:'bioRxiv', year:2025, cites:7, thumb:'semantotopic'},
  {title:'Shared neural geometries for bilingual semantic representations',
   authors:["X Yan", "A Krishna", "KV Arsdel", "I Gautam", "Y Kim", "A Shrivastava", "J Belanger", "AG Chavez", "A Chericoni", "M Franch", "T Ismail", "K Katlowitz", "E Mickiewicz", "D Paulo", "H Zhu", "AM Goldman", "V Krishnan", "A Maheshwari", "E Bartoli", "N Provenza", "SBM Yoo", "BY Hayden", "S Sheth"], url:'https://doi.org/10.1101/2025.11.16.688726',
   venue:'bioRxiv', year:2025, cites:8, thumb:'bilingual2'},
  {title:'Plural molecular and cellular mechanisms of pore domain KCNQ2 encephalopathy',
   authors:["TJ Abreo", "EC Thompson", "A Madabushi", "KL Park", "H Soh", "N Varghese", "CG Vanoye", "K Springer", "J Johnson", "S Sims", "Z Ji", "AG Chavez", "MJ Jankovic", "B Habte", "AR Zuberi", "CM Lutz", "Z Wang", "V Krishnan", "L Dudler", "S Einsele-Scholz", "JL Noebels", "AL George", "A Maheshwari", "A Tzingounis", "EC Cooper"], url:'https://doi.org/10.7554/elife.91204',
   venue:'eLife', year:2025, cites:10, thumb:'channel'},
  {title:'KCNQ2/3 gain-of-function variants and cell excitability: differential effects in CA1 versus L2/3 pyramidal neurons',
   authors:["N Varghese", "B Moscoso", "AG Chavez", "K Springer", "E Ortiz", "H Soh", "S Santaniello", "A Maheshwari", "AV Tzingounis"], url:'https://doi.org/10.1523/jneurosci.0980-23.2023',
   venue:'The Journal of Neuroscience', year:2023, cites:31, thumb:'traces', selected:true},
  {title:'Removal of KCNQ2 from parvalbumin-expressing interneurons improves anti-seizure efficacy of retigabine',
   authors:["J Jing", "C Dunbar", "A Sonesra", "AG Chavez", "S Park", "R Yang", "H Soh", "M Lee", "AV Tzingounis", "EC Cooper", "X Jiang", "A Maheshwari"], url:'https://doi.org/10.1016/j.expneurol.2022.114141',
   venue:'Experimental Neurology', year:2022, cites:16, thumb:'traces2'},
];

/* ---------- thumbnail animations: each draw(ctx, w, h, t) ---------- */
const C={ink:'#011f34',pink:'#e45fab',blue:'#3b7ca8',gold:'#c9a227',muted:'#7a7060',border:'#d4c9b0',cream:'#ede7d5',paper:'#f5f0e8'};
const TAU=Math.PI*2;
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const hash=(a,b)=>{const x=Math.sin(a*127.1+b*311.7)*43758.5453;return x-Math.floor(x)};
const ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
function dot(ctx,x,y,r,col,a=1){ctx.globalAlpha=a;ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.globalAlpha=1}
function arrow(ctx,x1,y1,x2,y2,col,p=1){
  const x=x1+(x2-x1)*p,y=y1+(y2-y1)*p,a=Math.atan2(y2-y1,x2-x1);
  ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x,y);ctx.stroke();
  if(p>.15){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-7*Math.cos(a-.4),y-7*Math.sin(a-.4));ctx.lineTo(x-7*Math.cos(a+.4),y-7*Math.sin(a+.4));ctx.fill()}
}
function proj(p,ry,rx,w,h,s){
  const [x,y,z]=p, x1=x*Math.cos(ry)+z*Math.sin(ry), z1=-x*Math.sin(ry)+z*Math.cos(ry);
  const y2=y*Math.cos(rx)-z1*Math.sin(rx), z2=y*Math.sin(rx)+z1*Math.cos(rx);
  return [w/2+x1*s,h/2-y2*s,z2];
}
function label(ctx,txt,x,y,col=C.muted){ctx.font='500 8px "DM Mono",monospace';ctx.fillStyle=col;ctx.fillText(txt,x,y)}
function trace(ctx,w,y0,amp,rate,seed,t,col){
  // scrolling membrane-potential trace with spikes
  ctx.strokeStyle=col;ctx.lineWidth=1.3;ctx.beginPath();
  const off=t*60;
  for(let x=0;x<=w;x++){
    const g=x+off, k=Math.floor(g/14), ph=g-k*14;
    let v=Math.sin(g*.08+seed)*2+Math.sin(g*.31+seed*2)*1;
    if(hash(k,seed)<rate&&ph<4) v=ph<1.5?-amp:(ph<3?amp*.25:2);
    x?ctx.lineTo(x,y0+v):ctx.moveTo(x,y0+v);
  }
  ctx.stroke();
}

const THUMBS={
  manifolds(ctx,w,h,t){
    const ry=t*.5-.25, rx=.42, s=h*.33, r=rng(7);
    const planes=[{v:[0,0,1],col:C.pink,name:'speak'},{v:[0,Math.sin(1.05),Math.cos(1.05)],col:C.ink,name:'listen'}];
    planes.forEach((pl,i)=>{
      const c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,b])=>proj([a,b*pl.v[1],b*pl.v[2]],ry,rx,w,h,s));
      ctx.globalAlpha=.12;ctx.fillStyle=pl.col;ctx.beginPath();c.forEach(([x,y],j)=>j?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();
      ctx.globalAlpha=.6;ctx.strokeStyle=pl.col;ctx.lineWidth=1;ctx.stroke();ctx.globalAlpha=1;
      for(let k=0;k<22;k++){const a=r()*1.8-.9,b=r()*1.8-.9,[x,y]=proj([a,b*pl.v[1],b*pl.v[2]],ry,rx,w,h,s);dot(ctx,x,y,1.8,pl.col,.85)}
    });
    const [ax,ay]=proj([-1.25,0,0],ry,rx,w,h,s),[bx,by]=proj([1.25,0,0],ry,rx,w,h,s);
    ctx.setLineDash([3,3]);ctx.strokeStyle=C.muted;ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(bx,by);ctx.stroke();ctx.setLineDash([]);
    label(ctx,'speak',6,12,C.pink);label(ctx,'listen',6,22,C.ink);
  },
  raster(ctx,w,h,t){
    const rows=13,rh=(h-16)/rows,off=t*45,bw=5;
    for(let r=0;r<rows;r++){
      for(let x=0;x<w;x+=bw){
        const k=Math.floor((x+off)/bw), word=k%14===0, p=word&&r%3!==1?.85:.07+.05*(r%4);
        if(hash(r,k)<p){ctx.fillStyle=word?C.pink:C.ink;ctx.globalAlpha=word?.95:.55;ctx.fillRect(x-((x+off)%bw),8+r*rh,1.4,rh*.7)}
      }
    }
    ctx.globalAlpha=1;
    for(let x=-((off)%(14*bw));x<w;x+=14*bw) label(ctx,'word',x+2,h-2,C.pink);
  },
  attention(ctx,w,h,t){
    const n=9,cs=Math.min((w-20)/n,(h-14)/n),x0=(w-cs*n)/2,y0=(h-cs*n)/2,q=Math.floor(t*1.6)%n;
    for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
      const base=.15+.6*hash(i,j*3+1), on=i===q;
      const a=on?Math.min(1,.15+.85*Math.exp(-Math.pow(j-(i*.5+Math.sin(t*2)*1.5),2)/3)):base*.5;
      ctx.globalAlpha=a;ctx.fillStyle=on?C.pink:C.ink;ctx.fillRect(x0+j*cs+1,y0+i*cs+1,cs-2,cs-2);
    }
    ctx.globalAlpha=1;
  },
  semantotopic(ctx,w,h,t){
    const cols=14,rows=10,cw=w/cols,chh=h/rows,pal=[C.pink,C.ink,C.blue,C.gold];
    const cx=.5+.32*Math.sin(t*.9),cy=.5+.3*Math.sin(t*1.3+1);
    for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){
      const u=i/cols,v=j/rows, f=(Math.sin(u*4.2+1)+Math.cos(v*3.6))*1.0+2, c=pal[Math.floor(f)%4];
      const d=Math.hypot(u-cx,(v-cy)*.8), act=Math.exp(-d*d/.012);
      ctx.globalAlpha=.25+.7*act;ctx.fillStyle=c;
      const sz=.55+.4*act;ctx.fillRect(i*cw+cw*(1-sz)/2,j*chh+chh*(1-sz)/2,cw*sz,chh*sz);
    }
    ctx.globalAlpha=1;
  },
  bilingual(ctx,w,h,t,seed=3){
    const r=rng(seed),n=14,P=[...Array(n)].map(()=>[r()*2-1,r()*2-1]);
    const k=.5-.5*Math.cos(t*1.1), th=(1-k)*1.3, dx=(1-k)*.55, s=h*.34;
    const tr=([x,y])=>[x*Math.cos(th)-y*Math.sin(th)+dx,x*Math.sin(th)+y*Math.cos(th)-dx*.3];
    P.forEach((p,i)=>{
      const q=tr(p),ax=w/2+p[0]*s,ay=h/2+p[1]*s,bx=w/2+q[0]*s,by=h/2+q[1]*s;
      ctx.globalAlpha=.25*k+.08;ctx.strokeStyle=C.muted;ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(bx,by);ctx.stroke();
      dot(ctx,ax,ay,2.6,C.ink,.85);dot(ctx,bx,by,2.6,C.pink,.85);
    });
    label(ctx,'EN',6,12,C.ink);label(ctx,'ES',22,12,C.pink);
  },
  bilingual2(ctx,w,h,t){THUMBS.bilingual(ctx,w,h,t,11)},
  gaze(ctx,w,h,t){
    const m=12,W=w-2*m,H=h-2*m;
    ctx.strokeStyle=C.border;ctx.lineWidth=1;ctx.strokeRect(m,m,W,H);
    for(let i=0;i<5;i++)for(let j=0;j<4;j++)dot(ctx,m+W*(i+.5)/5,m+H*(j+.5)/4,7,C.blue,.08+.05*((i+j)%2));
    const pos=s=>[m+W*(.5+.38*Math.sin(s*.8)),m+H*(.5+.36*Math.sin(s*1.3+.5))];
    ctx.strokeStyle=C.ink;ctx.globalAlpha=.35;ctx.beginPath();
    for(let k=0;k<60;k++){const [x,y]=pos(t-k*.03);k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();ctx.globalAlpha=1;
    const [x,y]=pos(t),g=t*1.4+Math.sin(t*2.3);
    ctx.globalAlpha=.25;ctx.fillStyle=C.pink;ctx.beginPath();ctx.moveTo(x,y);ctx.arc(x,y,48,g-.35,g+.35);ctx.closePath();ctx.fill();ctx.globalAlpha=1;
    dot(ctx,x,y,4,C.ink);
  },
  poly(ctx,w,h,t){
    const cx=w/2,cy=h/2,act=Math.floor(t*.9)%4,pal=[C.pink,C.blue,C.gold,C.ink],r=rng(5);
    const pulse=.5+.5*Math.sin(t*6);
    for(let c=0;c<4;c++){
      const a=c*TAU/4+.6,gx=cx+Math.cos(a)*w*.32,gy=cy+Math.sin(a)*h*.32,on=c===act;
      ctx.strokeStyle=pal[c];ctx.globalAlpha=on?.9:.15;ctx.lineWidth=on?1.8:1;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(gx,gy);ctx.stroke();
      for(let k=0;k<6;k++)dot(ctx,gx+(r()-.5)*22,gy+(r()-.5)*18,2.4,pal[c],on?.95:.35);
    }
    ctx.globalAlpha=1;dot(ctx,cx,cy,9+2*pulse,pal[act],.25);dot(ctx,cx,cy,6,C.ink);
  },
  axes(ctx,w,h,t){
    const p=(t*.45)%1.3, a1=ease(Math.min(1,p*2)), a2=ease(Math.max(0,Math.min(1,p*2-.6)));
    const r=rng(9);for(let k=0;k<26;k++)dot(ctx,r()*w,r()*h,1.5,C.border,1);
    const A=[w*.22,h*.72],B=[w*.52,h*.38],Cc=[w*.48,h*.82],D=[w*.78,h*.48];
    ctx.setLineDash([2,3]);ctx.strokeStyle=C.muted;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(...A);ctx.lineTo(...Cc);ctx.moveTo(...B);ctx.lineTo(...D);ctx.stroke();ctx.setLineDash([]);
    arrow(ctx,...A,...B,C.ink,a1);arrow(ctx,...Cc,...D,C.pink,a2);
    [[A,'man'],[B,'king'],[Cc,'woman'],[D,'queen']].forEach(([q,l])=>{dot(ctx,q[0],q[1],3,C.ink);label(ctx,l,q[0]+5,q[1]+10)});
  },
  geometry(ctx,w,h,t){
    const ry=t*.5+.4,rx=.5,s=h*.3,pts=[];
    for(let i=0;i<13;i++)for(let j=0;j<13;j++){const x=i/6-1,z=j/6-1;pts.push([x,.45*Math.sin(x*2.2)*Math.cos(z*2.2),z,i/12])}
    pts.map(p=>[...proj(p,ry,rx,w,h,s),p[3]]).sort((a,b)=>a[2]-b[2]).forEach(([x,y,z,u])=>dot(ctx,x,y,1.6+z*.4,u<.5?C.ink:C.pink,.35+.5*Math.abs(u-.5)*2));
  },
  agents(ctx,w,h,t){
    const pal=[C.ink,C.pink,C.blue];
    pal.forEach((c,i)=>{
      const pos=s=>[w*(.5+.38*Math.sin(s*(.7+i*.23)+i*2)),h*(.5+.36*Math.sin(s*(1.1+i*.17)+i))];
      ctx.strokeStyle=c;ctx.lineWidth=1.3;
      for(let k=1;k<40;k++){const [x1,y1]=pos(t-k*.04),[x2,y2]=pos(t-(k-1)*.04);ctx.globalAlpha=.6*(1-k/40);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()}
      const [x,y]=pos(t);dot(ctx,x,y,4,c);
    });
  },
  chase(ctx,w,h,t){
    const prey=s=>[w*(.5+.38*Math.sin(s*1.1)),h*(.5+.34*Math.sin(s*1.7+1))];
    const [px,py]=prey(t);
    ctx.strokeStyle=C.ink;ctx.lineWidth=1.4;ctx.beginPath();
    for(let k=0;k<50;k++){const [x,y]=prey(t-.35-k*.03);k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.globalAlpha=.5;ctx.stroke();ctx.globalAlpha=1;
    const [cx,cy]=prey(t-.35);dot(ctx,cx,cy,4.5,C.ink);
    dot(ctx,px,py,9,C.pink,.2);dot(ctx,px,py,4,C.pink);
    const [qx,qy]=[w*(.5+.35*Math.cos(t*.6)),h*(.5+.3*Math.sin(t*.9))];dot(ctx,qx,qy,4,C.gold,.9);
  },
  compose(ctx,w,h,t){
    const prims=[s=>[s,-Math.sin(s*Math.PI)*.6],s=>[s,0],s=>[s,Math.sin(s*TAU*2)*.18]],pal=[C.pink,C.ink,C.blue];
    prims.forEach((f,i)=>{const x0=10+i*(w-20)/3,ww=(w-20)/3-10;ctx.strokeStyle=pal[i];ctx.lineWidth=1.5;ctx.beginPath();
      for(let s=0;s<=1;s+=.05){const [u,v]=f(s);s?ctx.lineTo(x0+u*ww,22+v*16):ctx.moveTo(x0+u*ww,22+v*16)}ctx.stroke()});
    const p=(t*.35)%1.25, seg=(w-24)/3, y0=h*.66;
    let x=12,y=y0;
    for(let i=0;i<3;i++){const loc=Math.max(0,Math.min(1,p*3-i));if(loc<=0)break;
      ctx.strokeStyle=pal[i];ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);
      for(let s=0;s<=loc;s+=.04){const [u,v]=prims[i](s);ctx.lineTo(x+u*seg,y+v*26)}ctx.stroke();
      const [u,v]=prims[i](loc);if(loc<1){dot(ctx,x+u*seg,y+v*26,3.5,pal[i])}x+=seg;
    }
    ctx.setLineDash([2,3]);ctx.strokeStyle=C.border;ctx.beginPath();ctx.moveTo(8,h*.42);ctx.lineTo(w-8,h*.42);ctx.stroke();ctx.setLineDash([]);
  },
  traces(ctx,w,h,t){trace(ctx,w,h*.33,26,.22,1,t,C.ink);trace(ctx,w,h*.75,26,.55,4,t,C.pink);label(ctx,'CA1',6,12,C.ink);label(ctx,'L2/3',6,h*.56,C.pink)},
  traces2(ctx,w,h,t){trace(ctx,w,h*.33,26,.6,2,t,C.muted);trace(ctx,w,h*.75,26,.2,6,t,C.pink);label(ctx,'WT',6,12,C.muted);label(ctx,'PV ∆KCNQ2',6,h*.56,C.pink)},
  swd(ctx,w,h,t){
    ctx.strokeStyle=C.ink;ctx.lineWidth=1.3;ctx.beginPath();const off=t*50;
    for(let x=0;x<=w;x++){const g=x+off,burst=Math.sin(g*.012)>.2,ph=(g%18)/18;
      const v=burst?(ph<.12?-30*Math.sin(ph/.12*Math.PI):10*Math.sin((ph-.12)/.88*Math.PI)):Math.sin(g*.3)*2+Math.sin(g*.11)*3;
      x?ctx.lineTo(x,h/2+v):ctx.moveTo(x,h/2+v)}ctx.stroke();label(ctx,'EEG',6,12);
  },
  channel(ctx,w,h,t){
    const cx=w/2,cy=h/2,open=.5+.5*Math.sin(t*1.8);
    for(let i=0;i<4;i++){const a=i*TAU/4+t*.25+Math.PI/4,d=17+open*7;
      dot(ctx,cx+Math.cos(a)*d,cy+Math.sin(a)*d,15,i===1?C.pink:C.ink,i===1?.85:.75)}
    dot(ctx,cx,cy,3+open*5,C.paper);
    for(let k=0;k<5;k++){const y=((t*30+k*28)%(h+20))-10;dot(ctx,cx+(k%2?-3:3),y,2.6,C.gold,open>.55?.9:0)}
    label(ctx,'K⁺',6,12,C.gold);
  },
};

/* ---------- render publications ---------- */
const list=document.getElementById('pub-list');
if(list){(function(){
const ME='AG Chavez';
// where I fall in the author list (unknown positions sort last)
PUBS.forEach(p=>{p.pos=p.posUnknown?99:p.authors.indexOf(ME)+1});
PUBS.sort((a,b)=>a.pos-b.pos||b.year-a.year||b.cites-a.cites);
// compact author list that always includes me: first 3, me, last author
function formatAuthors(p){
  const a=p.authors, n=a.length;
  if(p.posUnknown) return a.map(x=>x===ME?'<b>'+x+'</b>':x).join(', ');
  const show=n<=6?a.map((_,i)=>i):[...new Set([0,1,2,p.pos-1,n-1])].sort((x,y)=>x-y);
  const out=[];
  show.forEach((i,k)=>{if(k&&i-show[k-1]>1)out.push('…');out.push(a[i]===ME?'<b>'+ME+'</b>':a[i])});
  return out.join(', ')+(n>6?` <span class="n-auth">(${n} authors)</span>`:'');
}
const ordinal=n=>n+(['th','st','nd','rd'][(n%100-20)%10]||['th','st','nd','rd'][n%100]||'th');
PUBS.forEach((p,i)=>{
  const el=document.createElement('article');
  el.className='pub reveal'+(p.highlight?' highlight':'');
  el.dataset.selected=p.selected?'1':'';
  const href=p.url||'https://scholar.google.com/scholar?q='+encodeURIComponent(p.title);
  const authors=formatAuthors(p);
  el.innerHTML=`<div class="thumb"><canvas></canvas></div>
    <div><h3 class="pub-title"><a href="${href}" target="_blank" rel="noopener">${p.title}</a></h3>
    <p class="pub-authors">${authors}</p>
    <p class="pub-venue"><em>${p.venue}</em><span class="year">${p.year}</span>${p.pos===1?'<span class="badge">First author</span>':p.pos<99?`<span class="badge pos">${ordinal(p.pos)} author</span>`:''}${p.note?`<span class="badge">${p.note}</span>`:''}</p>
    ${p.desc?`<p class="pub-desc">${p.desc}</p>`:''}
    <p class="pub-links"><a href="${href}" target="_blank" rel="noopener">${p.linkText||(p.url?'Paper':'Find paper')}</a>${p.code?`<a href="${p.code}" target="_blank" rel="noopener">Code</a>`:''}<span class="cites">${p.cites} citation${p.cites===1?'':'s'}</span></p></div>`;
  list.appendChild(el);
  setupThumb(el,THUMBS[p.thumb],i);
});

function setupThumb(row,draw,i){
  const cv=row.querySelector('canvas'),ctx=cv.getContext('2d');
  let t=1.2+i*.37,raf=null,last=0;
  function size(){const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;if(!r.width)return;cv.width=r.width*d;cv.height=r.height*d;ctx.setTransform(d*r.width/180,0,0,d*r.width/180,0,0);render()}
  function render(){ctx.clearRect(0,0,180,135);draw(ctx,180,135,t)}
  function loop(now){t+=Math.min(.05,(now-last)/1000);last=now;render();raf=requestAnimationFrame(loop)}
  row.play=()=>{if(raf)return;row.classList.add('playing');last=performance.now();raf=requestAnimationFrame(loop)};
  row.pause=()=>{cancelAnimationFrame(raf);raf=null;row.classList.remove('playing')};
  row.size=size;
  size();new ResizeObserver(size).observe(cv);
}

const canHover=matchMedia('(hover: hover)').matches;
document.querySelectorAll('.pub').forEach(row=>{
  if(reduce)return;
  if(canHover){row.addEventListener('mouseenter',row.play);row.addEventListener('mouseleave',row.pause)}
});
if(!canHover&&!reduce){ // touch screens: play while on screen
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?e.target.play():e.target.pause()),{threshold:.6});
  document.querySelectorAll('.pub').forEach(r=>io.observe(r));
}

/* selected / all toggle */
function applyFilter(f){
  let n=0;
  list.querySelectorAll('.pub').forEach(r=>{const show=f==='all'||r.dataset.selected;r.hidden=!show;if(show){n++;r.classList.add('visible');r.size()}});
  document.getElementById('pub-count').textContent=f==='all'?`${n} papers`:`${n} selected of ${PUBS.length}`;
}
document.querySelectorAll('.toggle button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.toggle button').forEach(x=>x.classList.toggle('on',x===b));applyFilter(b.dataset.filter);
}));
applyFilter('selected');
})()}

/* ---------- scroll reveal ---------- */
const observer=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);observer.unobserve(e.target)}});
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(r=>observer.observe(r));

/* ---------- count-up stats ---------- */
const counter=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;counter.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'',t0=performance.now();
  if(reduce)return;
  (function step(now){const k=Math.min(1,(now-t0)/1200);el.textContent=Math.round(end*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step)})(t0);
}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>counter.observe(el));

