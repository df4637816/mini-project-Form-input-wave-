let labels = document.querySelectorAll('label')

let input = document.querySelectorAll('input')

labels.forEach(label=>{
    label.innerHTML = label.innerText.split('')
    .map((n,idx)=>`<span style="transition-delay:${idx*30}ms" >${n}</span>`)
    .join('')
})


