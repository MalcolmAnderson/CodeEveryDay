using NUnit.Framework;
using System;

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

        [Test]
        public void DivisibleByFiveReturnsBuzz()
        {
            Assert.AreEqual("Buzz", o.ParseCandidate(5));
        }

        [Test]
        public void NotDivisibleByThreeOrFiveReturnsNumberAsString()
        {
            Assert.AreEqual("11", o.ParseCandidate(11));
        }

        [Test]
        public void DivisibleByThreeAndFiveReturnsFizzBuzz()
        {
            Assert.AreEqual("FizzBuzz", o.ParseCandidate(30));
        }

        [Test]
        public void FizzBuzzOneToFifteenWorksCorrectly()
        {
            string expected = string.Join(
                Environment.NewLine,
                "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz",""
                );


            Assert.AreEqual(expected, o.FizzBuzzOneTo(15));
        }



    }
}