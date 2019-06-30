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
            for (int i = 0; i < 20; i++)
            {
                scoreKeeper.AddPins(0);
            }
            int expectedScore = 0;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been zero");
        }

        [Test]
        public void AllOnesShouldScoreTwenty()
        {
            for (int i = 0; i < 20; i++)
            {
                scoreKeeper.AddPins(1);
            }
            int expectedScore = 20;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been twenty");
        }

    }
}