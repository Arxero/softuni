﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Magicheski_Chisla
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine()); // 8:03

            for (int a = 1; a < 9; a++)
            {
                for (int b = 1; b < 9; b++)
                {
                    for (int c = 1; c < 9; c++)
                    {
                        for (int d = 1; d < 9; d++)
                        {
                            for (int e = 1; e < 9; e++)
                            {
                                for (int f = 1; f < 9; f++)
                                {
                                    if (a * b * c * d * e * f == n)
                                    {
                                        Console.Write($"{a}{b}{c}{d}{e}{f} ");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Console.WriteLine();
        }
    }
}
