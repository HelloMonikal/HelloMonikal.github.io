        // 获取点击音效的<audio>元素
        var clickSound = document.getElementById('click-sound');
      
        // 在文档的每个元素上添加点击事件监听器
        document.addEventListener('click', function() {
          // 播放点击音效
          clickSound.play();
        });