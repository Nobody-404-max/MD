// Title typing effect
const titleEl = document.getElementById('titleText');
if(titleEl){
  const text = titleEl.textContent || titleEl.dataset.text || "MURDER DRONES DATABASE";
  titleEl.textContent = "";
  let idx = 0;
  function typeLetter(){
    if(idx < text.length){
      titleEl.textContent += text.charAt(idx++);
      setTimeout(typeLetter, Math.random()*100+50);
    }
  }
  typeLetter();
}

// Scroll-triggered animations for cards/messages
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('animate-in');
    }
  });
},{threshold:0.1});
document.querySelectorAll('.card, .chat-message, .upload-box').forEach(el=>{
  observer.observe(el);
});
