var posts=["2024/12/08/CTF-逆向题-pyc思路/","2024/11/29/渗透测试笔记思路/","2024/11/25/hello-world/","2024/07/05/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };