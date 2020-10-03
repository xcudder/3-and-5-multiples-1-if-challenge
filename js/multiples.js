const multiples = {
  get_spelled_out_search_index(i){
    var multiple_of_three = +!(i % 3);
    var multiple_of_five = +!(i % 5);

    return multiple_of_three +""+ multiple_of_five;
  },

  get_proper_print_value(i){

    var spelled_out_values = {
      "10":"Three",
      "01":"Five",
      "11":"ThreeAndFive"
    }

    if(!!spelled_out_values[this.get_spelled_out_search_index(i)])
      return "<p>"+spelled_out_values[this.get_spelled_out_search_index(i)]+"</p>";

    return "<p>"+i+"</p>";
  },

  print_out_numbers(up_to){
    let rendering = "";

    for(let i = 1; i <= up_to; i++)
      rendering += this.get_proper_print_value(i);

    return rendering;
  }
}

module.exports = multiples