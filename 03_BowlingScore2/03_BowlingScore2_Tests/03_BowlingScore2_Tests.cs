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

        [Test]
        public void AllFivesShouldScoreOneFifty()
        {
            RollAllTheSameNumber(5, 21);
            int expectedScore = 150;
            int actualScore = scoreKeeper.Score;
            Assert.AreEqual(expectedScore, actualScore, "Score should have been 150");
        }

        [Test]
        public void ShouldIgnore22ndRoll()
        {
            //Assert.DoesNotThrow(typeof(System.IndexOutOfRangeException), "There should never be more than 21 rolls in a game");
            RollAllTheSameNumber(1, 22);
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