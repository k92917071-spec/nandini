const gift = document.getElementById("gift");
const openGift = document.getElementById("openGift");
const quotes = [
  "You are not ordinary — you are calm strength with a smiling face.",
  "Your self-respect is your crown. Never lower it for anyone.",
  "The way you care for family shows the kind of heart you carry.",
  "Stay responsible, stay playful, stay exactly Nandini.",
  "Problems come to everyone; your strength is that you search for solutions.",
  "May your next chapter be peaceful, successful and full of smiles.",
  "Some friendships are not planned. They just arrive and feel right."
];

openGift.addEventListener("click", () => {
  gift.classList.remove("hidden");
  openGift.textContent = "Surprise Opened 💖";
  document.getElementById("gift").scrollIntoView({behavior:"smooth"});
  burstHearts(24);
});

document.getElementById("newQuote").addEventListener("click", () => {
  const quote = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("quote").textContent = quote;
  burstHearts(8);
});

function burstHearts(count){
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent=["💖","✨","🌸","🦋","🌼"][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(3+Math.random()*3)+"s";
    h.style.fontSize=(18+Math.random()*18)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6200);
  }
}

document.addEventListener("mousemove", e=>{
  const glow=document.querySelector(".cursor-glow");
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
});

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars=[];
function resize(){
  canvas.width=innerWidth; canvas.height=innerHeight;
  stars=Array.from({length:120},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.8+.4,v:Math.random()*.35+.1}));
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,.85)";
  for(const s of stars){
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    s.y += s.v; if(s.y>canvas.height) s.y=0;
  }
  requestAnimationFrame(draw);
}
addEventListener("resize",resize); resize(); draw();
setInterval(()=>burstHearts(1),2200);
