using NUnit.Framework;


namespace BowlingScore2
{
    public class BowlingScore2_Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Instantiate()
        {
            ScoreKeeper scoreKeeper = new ScoreKeeper();
            Assert.Pass();
        }

        [Test]
        public void GutterGameShouldScoreZero()
        {
            ScoreKeeper scoreKeeper = new ScoreKeeper();
            for(int i = 0; i<21; i++)
            {
                scoreKeeper.pins(0);
            }
            int expected = 0;
            int actual = scoreKeeper.Score;
            Assert.AreEqual(expected, actual, "Score should have been zero");

        }
    }
}