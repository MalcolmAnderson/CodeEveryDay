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
            RollAllTheSameNumber(0, 20);
            int expectedScore = 0;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been zero");
        }

        [Test]
        public void AllOnesShouldScoreTwenty()
        {
            RollAllTheSameNumber(1, 20);
            int expectedScore = 20;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been twenty");
        }

        private void RollAllTheSameNumber(int pins, int times)
        {
            for (int i = 0; i < times; i++)
            {
                scoreKeeper.AddPins(pins);
            }
        }

    }
}