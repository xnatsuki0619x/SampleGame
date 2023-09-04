
package com.example.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameController {
    
    @Autowired
    private GameService gameService;
    
    @RequestMapping("/rpg/attack")
    public void rpgAttack() {
        gameService.rpgAttack();
    }
    
    // ... More endpoints can be added to interact with the games
}
