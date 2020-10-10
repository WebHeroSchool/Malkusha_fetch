let url = 'https://api.github.com/users/malkusha';
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
  let {html_url, avatar_url, bio, name} = content;
  let title = document.createElement('h1');
  document.body.append(title);
  if (info.status !== 200) {
    title.innerHTML = 'Информация о пользователе не доступна';
  } else {
      let link = document.createElement('a');
      link.innerHTML = name;
      link.href = html_url;
      link.className = 'title';
      title.prepend(link);
      let photo = document.createElement('img');
      photo.src = avatar_url;
      photo.className = 'photo';
      title.after(photo);
      let des = document.createElement('p');
      des.innerHTML = bio;
      des.className = 'description';
      photo.after(des);
  };
};

Promise.all([today,acc])
  .then(() => {
    let preload = document.getElementById('preloader');
    preload.classList.toggle('hide');
  })
  .then(() => document.body.classList.toggle('body-promise'))
