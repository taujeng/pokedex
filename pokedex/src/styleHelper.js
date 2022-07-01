const styleHelper = {

   // Uppercase Words
  upperCase: function(str) {
    return str[0].toUpperCase() + str.slice(1);
  },
    // Format Date
  setDate: function(date) {
      // date we receive:
      // const receivedDate = capturedPokemon[0]['captured_date'];
      // format: "2022-06-30"
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const oldMonth = parseInt(date.slice(5, 7));
      const oldDay = date.slice(8, 10);
      const oldYear = date.slice(0, 4);
  
      const newDate = `${months[oldMonth - 1]} ${oldDay}, ${oldYear}`;
      return newDate;
  },
  // Pokemon Titles
  // createTitle: function(order, name) {
  //   let postTitle="";
  //   while (order.length < 3) {
  //     postTitle = '0' + postTitle;
  //   }
  //   let name1 = name;
  //   // Might have to change this if Pokemon names contain >1 word
  //   name1 = this.upperCase(name1);
  //   postTitle = '#' + postTitle + ' ' + name1;
  //   return postTitle
  // }
}

export default styleHelper