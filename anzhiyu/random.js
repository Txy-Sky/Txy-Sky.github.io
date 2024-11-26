var posts=["undefined-Txy/图片的博客/","undefined-Txy/包含图片的博客/","undefined-Txy/这是包含图片的博客/","undefined-Txy/这是我的第一篇博客/","undefined-Txy/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };