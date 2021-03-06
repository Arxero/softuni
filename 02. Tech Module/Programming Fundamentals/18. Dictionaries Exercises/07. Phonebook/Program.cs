﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Phonebook
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Dictionary<string, string> phonebook = new Dictionary<string, string>();

            while (input[0] != "END")
            {
                string name = input[1];

                //we add
                if (input[0] == "A")
                {
                    string number = input[2];
                    //adding to the phonebook contacts
                    if (!phonebook.ContainsKey(name))
                    {
                        phonebook.Add(name, number);
                    }
                    else
                    {
                        phonebook[name] = number;
                    }
                }
                //we search
                else if (input[0] == "S")
                {
                    if (phonebook.ContainsKey(name))
                    {
                        Console.WriteLine($"{name} -> {phonebook[name]}");
                    }
                    else
                    {
                        Console.WriteLine($"Contact {name} does not exist.");
                    }
                }
                input = Console.ReadLine().Split().ToArray();
            }
        }
    }
}
