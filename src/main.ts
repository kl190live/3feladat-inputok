document.getElementById('gomb')!.addEventListener('click',()=>{
  const text=document.createElement('section')
  const input=document.createElement('input');
  const input2=document.createElement('input');
  document.getElementById('app')!.appendChild(text)
  text.textContent='Lorem ipsum'
  document.getElementById('app')!.appendChild(input)
  input.type="color"
  document.getElementById('app')!.appendChild(input2)
  input2.type="color"


input.addEventListener('input',()=>{
  text.style.color=input.value
})

input2.addEventListener('input',()=>{
  text.style.backgroundColor=input.value
})
})


