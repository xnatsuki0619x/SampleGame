
package com.example.Game_spring.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloViewController {

    @GetMapping("/hitandblow")
    public String hitandblow(Model model) {
        return "HitandBlow";
    }

    @GetMapping("/gameSelect")
    public String gameSelect(Model model) {
        return "GameSelect";
    }
    
    @GetMapping("/shootingGame")
    public String shootingGame(Model model) {
        return "ShootingGame";
    }
    
    @GetMapping("/rpg")
    public String rpg(Model model) {
        return "RPG";
    }
    
    @GetMapping("/tetris")
    public String tetris(Model model) {
        return "Tetris";
    }
    
    
}
