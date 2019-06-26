﻿using System;

namespace Fizzbuzz
{
    public class Fizzbuzz
    {
        public string ParseCandidate(int candidate)
        {
            string retVal = candidate.ToString();
            string fizz = "";
            string buzz = "";
            if (candidate % 3 == 0)
            {
                retVal = "";
                fizz = "Fizz";
            }
            if (candidate % 5 == 0)
            {
                retVal = "";
                buzz = "Buzz";
            }
            retVal += fizz + buzz;
            return retVal;
        }
    }
}
