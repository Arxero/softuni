﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _14.Match_Full_Name
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";
            string input = Console.ReadLine();

            MatchCollection matchedNames = Regex.Matches(input, pattern);

            foreach (Match name in matchedNames)
            {
                Console.Write($"{name.Value} ");
            }
            Console.WriteLine();

        }
    }
}
