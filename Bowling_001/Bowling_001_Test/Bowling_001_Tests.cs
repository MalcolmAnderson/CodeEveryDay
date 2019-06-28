using NUnit.Framework;

namespace Bowling_001
{
    public class Bowling_Tests
    {
        

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestGutterGame_Equals_0()
        {
            Game g = new Game();
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
            Game g = new Game();
            for(int i=0; i<20; i++)
            {
                g.Roll(1);
            }
            int expectedScore = 20;
            Assert.AreEqual(expectedScore, g.Score);
        }
    }
}