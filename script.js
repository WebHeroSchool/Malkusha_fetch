let url = 'https://api.github.com/users/malkusha';
let body = document.getElementsByTagName('body');
let time = document.createElement('p');
time.className = 'time';
document.body.prepend(time);
let today = new Promise((resolve, reject) => {
  setTimeout(() => resolve(time.innerHTML = new Date), 2000);
});
let acc = new Promise ((resolve, reject) => {
  setTimeout(() => resolve ( getInfo()), 2000);
});
async function getInfo() {
  let info = await fetch(url);
  let content = await info.json();
  let title = document.createElement('h1');
  document.body.append(title);
  if (info.status !== 200) {
    title.innerHTML = 'Информация о пользователе не доступна';
  } else {
      let link = document.createElement('a');
      link.innerHTML = content.name;
      link.href = content.html_url;
      link.className = 'title';
      title.prepend(link);
      let photo = document.createElement('img');
      photo.src = content.avatar_url;
      photo.className = 'photo';
      title.after(photo);
      let des = document.createElement('p');
      des.innerHTML = content.bio;
      des.className = 'description';
      photo.after(des);
  };
};

Promise.all([today,acc]);
