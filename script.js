import { supabase } from './supabase-client.js';

const form = document.getElementById('auth-form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    // 如果已存在账户，则尝试登录
    const { user: u, error: loginError } = await supabase.auth.signIn({ email, password });
    if (loginError) return alert(loginError.message);
    alert('登录成功！');
  } else {
    alert('注册成功，请前往邮箱验证！');
  }
});

async function loadDestinations() {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('id', { ascending: true });
  if (error) return console.error(error);
  const container = document.getElementById('destinations-list');
  container.innerHTML = data.map(d => `
    <div class="card">
      <img src="${d.image_url}" alt="${d.name}">
      <h3>${d.name}</h3>
      <p>${d.description}</p>
    </div>
  `).join('');
}
window.onload = loadDestinations;
