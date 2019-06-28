using NUnit.Framework;

namespace Bowling_001
{
    public class Bowling_Tests
    {
        Game g;
        int expectedScore;

        [SetUp]
        public void Setup()
        {
            g = new Game();
        }

        [Test]
        public void TestGutterGame_Equals_0()
        {
            int numberOfRolls = 20;
            int numberOfPinsEachRoll = 0;
            RollAllTheSameNumberOfPins(numberOfRolls, numberOfPinsEachRoll);
            expectedScore = 0;
            Assert.AreEqual(expectedScore, g.Score);
        }

        [Test]
        public void TestAllOnes_Equals_20()
        {
            int numberOfRolls = 20;
            int numberOfPinsEachRoll = 1;
            RollAllTheSameNumberOfPins(numberOfRolls, numberOfPinsEachRoll);
            expectedScore = 20;
            Assert.AreEqual(expectedScore, g.Score);
        }

        [Test]
        public void TestPerfectGame_Equals_300()
        {
            int numberOfRolls = 12;
            int numberOfPinsEachRoll = 10;
            RollAllTheSameNumberOfPins(numberOfRolls, numberOfPinsEachRoll);
            expectedScore = 300;
            int actualScore = g.Score;
            Assert.AreEqual(expectedScore, actualScore);
        }

        [Test]
        public void TestOneSpare_Equals_16()
        {
            g.Roll(5);
            g.Roll(5);
            g.Roll(3);
            RollAllTheSameNumberOfPins(17, 0);
            expectedScore = 16;
            Assert.AreEqual(expectedScore, g.Score);
        }

        [Test]
        public void TestOneStrike_Equals_24()
        {
            g.Roll(10);
            g.Roll(3);
            g.Roll(4);
            RollAllTheSameNumberOfPins(16, 0);
            expectedScore = 24;
            Assert.AreEqual(expectedScore, g.Score);
        }

        private void RollAllTheSameNumberOfPins(int numberOfRolls, int numberOfPinsEachRoll)
        {
            for (int i = 0; i < numberOfRolls; i++)
            {
                g.Roll(numberOfPinsEachRoll);
            }
        }
    }
}