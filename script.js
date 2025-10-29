//your JS code here. If required.
  const squares = document.querySelectorAll('.square');

  squares.forEach((square, index) => {
    square.addEventListener('mouseenter', () => {
      squares.forEach((sq, i) => {
        sq.style.backgroundColor = (i === index) ? '#E6E6FA' : '#6F4E37'; // Lavender for hovered, Coffee for others
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach(sq => sq.style.backgroundColor = '#E6E6FA'); // Reset all to Lavender
    });
  });