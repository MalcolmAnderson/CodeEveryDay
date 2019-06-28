using System;

namespace Bowling_001
{
    public class Game
    {
        //private int score = 0;
        private int[] rolls = new int[21];
        private int currentRoll = 0;


        public int Score {
            get {
                int rollIndex = 0;
                int currentFrameScore = 0;
                for(int frame=0; frame< 10; frame++)
                {
                    if (isStrike(rollIndex))
                    {
                        currentFrameScore += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
                        rollIndex++;
                    }
                    else if (isSpare(rollIndex))
                    {
                        currentFrameScore += 10 + rolls[rollIndex + 2];
                        rollIndex += 2;
                    }
                    else
                    {
                        currentFrameScore += rolls[rollIndex] + rolls[rollIndex + 1];
                        rollIndex += 2;
                    }
                }
                return currentFrameScore; 
            }
        }


        private bool isSpare(int rollIndex)
        {
            return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
        }

        private bool isStrike(int rollIndex)
        {
            return rolls[rollIndex] == 10;
        }

        public void Roll (int pins)
        {
            //score += pins;
            rolls[currentRoll++] = pins;
        }
    }
}
