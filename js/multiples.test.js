const multiples = require('./multiples.js');

describe("Multiples.js's", () => {
    test('Function: "get_spelled_out_search_index" should give 10 for multiples of 3, 01 for multiples of 5, 11 for multiples of both and 00 for multiples of neither', () => {
      expect(multiples.get_spelled_out_search_index(3)).toBe("10");
      expect(multiples.get_spelled_out_search_index(15)).toBe("11");
      expect(multiples.get_spelled_out_search_index(5)).toBe("01");
      expect(multiples.get_spelled_out_search_index(2)).toBe("00");
    });

    test('Function: "get_proper_print_value" should print out (in a p element) the number fed to it, unless its a multiple of 3, 5 or both, in which case it will print ot "Three","Five" or "ThreeAndFive" respectively', () => {
      expect(multiples.get_proper_print_value(2)).toBe("<p>2</p>");
      expect(multiples.get_proper_print_value(4)).toBe("<p>4</p>");
      expect(multiples.get_proper_print_value(3)).toBe("<p>Three</p>");
      expect(multiples.get_proper_print_value(5)).toBe("<p>Five</p>");
      expect(multiples.get_proper_print_value(15)).toBe("<p>ThreeAndFive</p>");
    });

    describe('Function: "print_out_numbers" ', () => {
        test('should return paragraph elements in accordance to its up_to parameter', () => {
          expect(multiples.print_out_numbers(100).split("</p><p>").length).toBe(100);
          expect(multiples.print_out_numbers(10).split("</p><p>").length).toBe(10);
          expect(multiples.print_out_numbers(1).split("</p><p>").length).toBe(1);
        });

        test("should return the proper values in it's paragraphs", () => {
          expect(multiples.print_out_numbers(5)).toBe("<p>1</p><p>2</p><p>Three</p><p>4</p><p>Five</p>");
          expect(multiples.print_out_numbers(15).split("</p><p>")[14]).toBe("ThreeAndFive</p>");
        });
    })
});