let url = 'https://api.github.com/users/malkusha';
let info;
let content;
let avatar;
let name;
let bio;
let page;
async function getInfo() {
  let info = await fetch(url);
  let content = await info.json();
  let title = document.createElement('h1');
  document.body.prepend(title);
  console.log(info);
  if (info.status !== 200) {
    title.innerHTML = 'Информация о пользователе не доступна';
  } else {

      let avatar = content.avatar_url;
      let name = content.name;
      let bio = content.bio;
      let page = content.html_url;

      let link = document.createElement('a');
      link.innerHTML = name;
      link.href = page;
      title.prepend(link);
      let photo = document.createElement('img');
      photo.src = avatar;
      title.after(photo);
      let des = document.createElement('p');
      des.innerHTML = bio;
      photo.after(des);
  };
};
getInfo();
