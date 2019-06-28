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
                    if (IsStrike(rollIndex))
                    {
                        currentFrameScore += 10 + StrikeBonus(rollIndex);
                        rollIndex++;
                    }
                    else if (IsSpare(rollIndex))
                    {
                        currentFrameScore += 10 + SpareBonus(rollIndex);
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

        private int SpareBonus(int rollIndex)
        {
            return rolls[rollIndex + 2];
        }

        private int StrikeBonus(int rollIndex)
        {
            return rolls[rollIndex + 1] + rolls[rollIndex + 2];
        }

        private bool IsSpare(int rollIndex)
        {
            return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
        }

        private bool IsStrike(int rollIndex)
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
