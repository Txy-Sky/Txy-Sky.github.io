var posts=["undefined-Txy/渗透测试笔记思路/","undefined-Txy/图片的博客/","undefined-Txy/包含图片的博客/","undefined-Txy/这是包含图片的博客/","undefined-Txy/hello-world/","undefined-Txy/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };