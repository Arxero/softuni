﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9.BookLibrary
{
    class Test
    {
        static void Main()
        {
            StreamReader file = new StreamReader("input.txt");
            int n = int.Parse(file.ReadLine());
            Library lib = new Library() { Books = new List<Book>() };
            for (int i = 0; i < n; i++)
            {
                string[] input = file.ReadLine().Split(' ');
                Book book = new Book()
                {
                    Title = input[0],
                    Author = input[1],
                    Publisher = input[2],
                    ReleaseDate = DateTime.ParseExact(input[3], "dd.MM.yyyy", CultureInfo.InvariantCulture),
                    ISBNnumber = input[4],
                    Price = decimal.Parse(input[5])
                };
                lib.Books.Add(book);
            }
            foreach (var author in lib.Books.Select(x => x.Author).Distinct().OrderByDescending(x => lib.Books.Where(y => y.Author == x).Select(z => z.Price).Sum())
                                                                             .ThenBy(x => x))
            {
                string formatformat = string.Format("{0} -> {1:f2}", author, lib.Books.Where(x => x.Author == author).Select(x => x.Price).Sum());
                File.AppendAllText("output.txt", formatformat + Environment.NewLine);
            }
        }
    }

    class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string ISBNnumber { get; set; }
        public decimal Price { get; set; }
    }

    class Library
    {
        public string Name { get; set; }
        public List<Book> Books { get; set; }
    }
}