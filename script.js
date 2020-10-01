let url = window.location.href;
console.log(url);
async function getInfo() {
  let info = await fetch('https://api.github.com/users/6thSence');
  let content = await info.json();
  console.log(content);
};
getInfo();
