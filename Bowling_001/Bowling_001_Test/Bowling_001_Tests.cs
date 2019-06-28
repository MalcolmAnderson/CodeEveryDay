using NUnit.Framework;

namespace Bowling_001
{
    public class Bowling_Tests
    {

        Game g;

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
            for(int i=0; i< numberOfRolls; i++)
            {
                g.Roll(numberOfPinsEachRoll);
            }
            int expectedScore = 0;
            Assert.AreEqual(expectedScore, g.Score);
        }

        [Test]
        public void TestAllOnes_Equals_20()
        {
            for(int i=0; i<20; i++)
            {
                g.Roll(1);
            }
            int expectedScore = 20;
            Assert.AreEqual(expectedScore, g.Score);
        }
    }
}