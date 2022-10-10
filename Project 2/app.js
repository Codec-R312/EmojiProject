let data = [
    {
      name: 'Sexy Lexy',
      age: '30'
    },
    {
      name: 'TGOM',
      age: '23'
    },
    {
      name: 'Madam Speaker',
      age: '21'
    },
    {
      name: 'Chef Thudy',
      age: '25'
    },
    {
      name: 'Kele',
      age: '23'
    },
    {
      name: 'Dylan',
      age: '30+'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');