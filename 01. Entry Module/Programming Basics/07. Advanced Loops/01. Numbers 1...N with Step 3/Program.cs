﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Numbers_1._._.N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int maxNumber = int.Parse(Console.ReadLine());

            for (int curretnNumber = 1; curretnNumber <= maxNumber; curretnNumber += 3)
            {
                Console.WriteLine(curretnNumber);
            }
        }
    }
}
