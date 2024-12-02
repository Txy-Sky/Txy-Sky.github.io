var posts=["undefined-Txy/未命名/","undefined-Txy/渗透测试笔记思路/","undefined-Txy/头像/","undefined-Txy/hello-world/","undefined-Txy/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };