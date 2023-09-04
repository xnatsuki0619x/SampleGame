
import java.util.Random;

public class RPGGame {
    
    private int playerX = 50;
    private int playerY = 50;
    private int playerHP = 100;
    private int enemyHP = 50;
    private boolean battleActive = false;
    
    private String playerHPElement;
    private String enemyHPElement;
    private String messageElement;
    
    public RPGGame() {
    }
    
    public void attack() {
        Random rand = new Random();
        int damage = rand.nextInt(20) + 5;
        enemyHP -= damage;
        
        messageElement = "You dealt " + damage + " damage!";
        enemyHPElement = "Enemy HP: " + enemyHP;
        
        if (enemyHP <= 0) {
            battleActive = false;
            messageElement = "You won the battle!";
        }
    }
}
