using NUnit.Framework;

namespace Fizzbuzz
{
    public class Fizzbuzz_Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Instantiate()
        {
            Fizzbuzz o = new Fizzbuzz();
            Assert.AreEqual("Fizzbuzz.Fizzbuzz", o.GetType().ToString());
        }
    }
}