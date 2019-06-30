using NUnit.Framework;


namespace BowlingScore2
{
    public class Tests
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
    }
}