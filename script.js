let url = 'https://api.github.com/users/malkusha';
async function getInfo() {
  let info = await fetch(url);
  let content = await info.json();
  let title = document.createElement('h1');
  document.body.prepend(title);
  console.log(info);
  if (info.status !== 200) {
    title.innerHTML = 'Информация о пользователе не доступна';
  } else {
      let link = document.createElement('a');
      link.innerHTML = content.name;
      link.href = content.html_url;
      title.prepend(link);
      let photo = document.createElement('img');
      photo.src = content.avatar_url;
      title.after(photo);
      let des = document.createElement('p');
      des.innerHTML = content.bio;
      photo.after(des);
  };
};
getInfo();
