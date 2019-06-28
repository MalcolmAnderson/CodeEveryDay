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
        public void TestGutterGame()
        {
            Game g = new Game();
            for(int i=0; i<20; i++)
            {
                g.Roll(0);
            }
            int expectedScore = 0;
            Assert.AreEqual(expectedScore, g.Score);
        }
    }
}