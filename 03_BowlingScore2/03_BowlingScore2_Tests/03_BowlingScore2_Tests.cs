using NUnit.Framework;


namespace BowlingScore2
{
    public class BowlingScore2_Tests
    {
        private ScoreKeeper scoreKeeper;
        [SetUp]
        public void Setup()
        {
            scoreKeeper = new ScoreKeeper();
        }

        [Test]
        public void GutterGameShouldScoreZero()
        {
            for(int i = 0; i<21; i++)
            {
                scoreKeeper.pins(0);
            }
            int expectedScore = 0;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been zero");
        }
    }
}