using System;

namespace Bowling_001
{
    public class Game
    {
        private int score = 0;
        private int[] rolls = new int[21];
        private int currentRoll = 0;


        public int Score {
            get {
                int score = 0;
                int i = 0;
                int currentFrameScore = 0;
                for(int frame=0; frame< 10; frame++)
                {
                    currentFrameScore = rolls[i] + rolls[i + 1];
                    score += currentFrameScore;
                    if (currentFrameScore == 10) // spare
                        score += rolls[i + 2];

                    i += 2;
                }
                return score; 
            }
        }

        public void Roll (int pins)
        {
            score += pins;
            rolls[currentRoll++] = pins;
        }
    }
}
