export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText);

// código que lida com status de respostas que pode ser usado em vários lugares
// .then(res => {
//   if(res.ok) return res.json(); // se estiver tudo ok com a resposta faz o json()
//   return Promise.reject(res.statusText);  //se não mostra o erro e instrução pula para o catch
// })