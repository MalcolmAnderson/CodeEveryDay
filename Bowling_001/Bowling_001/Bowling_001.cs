using System;

namespace Bowling_001
{
    public class Game
    {
        int score = 0;

        public int Score {
            get {
                return score; 
            }
        }

        public void Roll (int pins)
        {
            score += pins;
        }
    }
}
