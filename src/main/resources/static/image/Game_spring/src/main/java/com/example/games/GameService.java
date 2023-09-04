
package com.example.games;

import org.springframework.stereotype.Service;

@Service
public class GameService {
    
    private RPGGame rpgGame = new RPGGame();
    private TetrisGame tetrisGame = new TetrisGame();
    
    // Implement methods to interact with the games
    public void rpgAttack() {
        rpgGame.attack();
    }
    
    // ... More methods can be added to interact with the games
}
