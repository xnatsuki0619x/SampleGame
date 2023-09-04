
import java.util.Random;

public class TetrisGame {
    
    private static final int SCALE = 30;
    private int score = 0;
    private Object canvas;
    private Object ctx;
    private Object nextCanvas;
    private Object nextCtx;
    
    private class Tetromino {
        String color;
        int[][] shape;
    }
    
    private Tetromino[] tetrominoes = {
        new Tetromino("cyan", new int[][]{{1, 1, 1, 1}}),
    };
    
    public TetrisGame() {
    }
}
