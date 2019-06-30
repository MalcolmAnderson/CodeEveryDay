using System;

namespace BowlingScore2
{
    public class ScoreKeeper
    {
        int totalScore = 0;
        public int Score {
            get {
                return totalScore;
            }
        }

        public void AddPins(int pins)
        {
            totalScore += pins;
        }
    }
}
