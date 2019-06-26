using NUnit.Framework;

namespace Fizzbuzz
{
    public class Fizzbuzz_Tests
    {
        Fizzbuzz o;

        [SetUp]
        public void Setup()
        {
            o = new Fizzbuzz();
        }

        [Test]
        public void Instantiate()
        {
            Assert.AreEqual("Fizzbuzz.Fizzbuzz", o.GetType().ToString());
        }

        [Test]
        public void DivisibleByThreeReturnsFizz()
        {
            Assert.AreEqual("Fizz", o.ParseCandidate(3));
        }

    }
}