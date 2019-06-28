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
            for(int i=0; i<20; i++)
            {
                g.Roll(0);
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