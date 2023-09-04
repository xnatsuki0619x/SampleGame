 
      let playerX = 50;
        let playerY = 50;
        let playerHP = 100;
        let enemyHP = 50;
        const playerHPElement = document.getElementById("player-hp");
        const enemyHPElement = document.getElementById("enemy-hp");
        const messageElement = document.getElementById("message");
        let battleActive = false;
    
    
    
        
  
    function attack() {
        fetch('/game/rpg/attack')
        .then(response => response.json())
        .then(data => {
            // Update the UI based on the response
            // This is just a placeholder, actual implementation might differ
        });
    
            const damage = Math.floor(Math.random() * 20) + 5;
            enemyHP -= damage;
            enemyHPElement.innerText = enemyHP;
            messageElement.innerText = `プレイヤーがスライムに${damage}ダメージ与えた！`;

            if (enemyHP <= 0) {
                messageElement.innerText = "プレイヤーは勝利した！";
                setTimeout(() => {
                    messageElement.innerText = ""; // 2秒後に勝利のメッセージを消去
                    endBattle();
                }, 2000);
            } else {
                enemyAttack();
            }
        }
        
        
        

        function enemyAttack() {
            const damage = Math.floor(Math.random() * 10) + 1;
            playerHP -= damage;
            playerHPElement.innerText = playerHP;
            messageElement.innerText += `\nスライムがプレイヤーに${damage}ダメージ与えた！`;

            if (playerHP <= 0) {
                messageElement.innerText = "プレイヤーは倒された…";
                endBattle();
            }
        }


        
        function startBattle() {
            battleActive = true; // 追加: 戦闘中フラグをセット
            document.getElementById("game-screen").setAttribute("id", "battle-active");
            checkForBattle();
        }

        function endBattle() {
            battleActive = false; // 追加: 戦闘中フラグをリセット
            document.getElementById("battle-active").setAttribute("id", "game-screen");
            enemyHP = 50;
            enemyHPElement.innerText = enemyHP;
        }

        function checkForBattle() {
            if (!battleActive && Math.random() < 0.1) { // 修正: 戦闘中フラグを確認
                startBattle();
            }
        }

        
        
       document.addEventListener("keydown", function(event) {
        if (battleActive) { // 戦闘中の場合、移動を許可しない
            return; // イベントリスナーを終了
        }
        const key = event.key;
        if (key === "ArrowUp" && playerY > 0) {
            playerY -= 1; // 歩幅を1%に変更
        } else if (key === "ArrowDown" && playerY < 99) { // 画面外に出ないように99%までに制限
            playerY += 1; // 歩幅を1%に変更
        } else if (key === "ArrowLeft" && playerX > 0) {
            playerX -= 1; // 歩幅を1%に変更
        } else if (key === "ArrowRight" && playerX < 99) { // 画面外に出ないように99%までに制限
            playerX += 1; // 歩幅を1%に変更
        }
        document.getElementById("player").style.left = `${playerX}%`;
        document.getElementById("player").style.top = `${playerY}%`;
        checkForBattle(); // ここでcheckForBattle関数を呼び出す
    });
    
    