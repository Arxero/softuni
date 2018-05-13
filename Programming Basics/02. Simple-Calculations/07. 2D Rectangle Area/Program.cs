﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07._2D_Rectangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());

            double area = Math.Max(x1, x2) - Math.Min(x1, x2);
            double perimeter = Math.Max(y1, y2) - Math.Min(y1, y2);

            Console.WriteLine("Area = {0}", area*perimeter);
            Console.WriteLine("Perimeter = {0}", 2 * (area + perimeter));


        }
    }
}
