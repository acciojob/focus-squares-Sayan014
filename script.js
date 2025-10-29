const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  const hoverHandler = () => {
    squares.forEach((sq, i) => {
      sq.style.backgroundColor = (i === index) ? '#E6E6FA' : '#6F4E37';
    });
  };

  const leaveHandler = () => {
    squares.forEach(sq => sq.style.backgroundColor = '#E6E6FA');
  };

  // Listen to both mouseenter/mouseleave and mouseover/mouseout
  square.addEventListener('mouseenter', hoverHandler);
  square.addEventListener('mouseleave', leaveHandler);
  square.addEventListener('mouseover', hoverHandler);
  square.addEventListener('mouseout', leaveHandler);
});
