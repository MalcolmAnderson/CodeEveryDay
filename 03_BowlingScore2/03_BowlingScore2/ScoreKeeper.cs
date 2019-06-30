using System;

namespace BowlingScore2
{
    public class ScoreKeeper
    {
        int rollNumberDuringDataInput = 0;
        const int AllowableNumberOfRolls = 21;
        int[] rolls = new int[AllowableNumberOfRolls];

        public int Score {
            get {
                int rollnumber = 0;
                int totalScore = 0;
                for (int frame = 0; frame < 10; frame++)
                {
                    if (IsStrike(rollnumber))
                    {
                        totalScore += 10;
                        rollnumber++;
                    }
                    else if (IsSpare(rollnumber))
                    {
                        totalScore += 10 + rolls[rollnumber + 2];
                        rollnumber++;
                    }
                    else
                    {
                        totalScore += rolls[rollnumber] + rolls[rollnumber + 1];
                        rollnumber += 2;
                    }
                }
                return totalScore;
            }
        }
private bool IsSpare(int rollnumber)
        {
            if(rolls[rollnumber] + rolls[rollnumber + 1] == 10)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool IsStrike(int rollnumber)
        {
            return false;
        }

        public void AddPins(int pins)
        {
            if (rollNumberDuringDataInput < AllowableNumberOfRolls)
            {
                rolls[rollNumberDuringDataInput++] = pins;
            }
        }
    }
}
