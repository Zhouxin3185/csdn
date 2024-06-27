var width = document.body.clientWidth - 20;
      var height = document.body.clientHeight - 20;

      //随机生成星星
      for (var i = 0; i < 70; i++) {
        var img = document.createElement("img");
        document.body.appendChild(img);
        img.src = "./imgs/star.png";
        img.style.left = Math.random() * width + "px";
        img.style.top = Math.random() * height + "px";
        img.style.animationDelay = Math.random() * 3 + "s"; //添加动画延迟时间
      }

      //随机生成流星
      for (var i = 0; i < 10; i++) {
        var lx = document.createElement("div");
        lx.className = "star";
        lx.style.right = Math.random() * 400 + 150 + "px";
        lx.style.top = Math.random() * 200 + 100 + "px";
        lx.style.animationDelay = Math.random() * 3 * i + "s"; //添加动画延迟时间
        document.body.appendChild(lx);
      }