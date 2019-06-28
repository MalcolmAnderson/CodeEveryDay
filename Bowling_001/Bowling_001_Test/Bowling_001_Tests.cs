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

        //Slide 31 of uncle bob's Bowling Game Kata
        [Test]
        public void testonespare_equals_16()
        {
            g.Roll(5);
            g.Roll(5);
            g.Roll(3);
            RollAllTheSameNumberOfPins(20 - 3, 0);
            expectedScore = 16;
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