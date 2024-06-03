const container_cadastro = document.getElementById('container_cadastro');
const btn_orgBtn = document.getElementById('btn_org');
const btn_userBtn = document.getElementById('btn_user');

btn_orgBtn.addEventListener('click', ()=>{
    container_cadastro.classList.add('active');
});

btn_userBtn.addEventListener('click', ()=>{
    container_cadastro.classList.remove('active');
});