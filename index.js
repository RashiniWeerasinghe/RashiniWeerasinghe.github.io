var typed = new Typed(".typing",{
    strings: [" F r o n t e n d  D e v e l o p e r .","M o b i l e A p p D e v e l o p e r ."],
    typeSpeed:150,
    backSpeed:120,
    loop:true
})

document.querySelectorAll('.progress-ring').forEach(ring => {
    const value = ring.getAttribute('data-value');
    ring.style.setProperty('--value', `${value}%`);
  });
  