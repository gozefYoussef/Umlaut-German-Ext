function handleKeyDown(event) {
    let text = document.getElementsByTagName('textarea')[0];
    if (event.altKey && event.key.length === 1) {
      switch (event.key) {
        case 'a':
          text.textContent += 'ä';
          break;
        case 's':
          text.textContent += 'ß';
          break;
        case 'u':
          text.textContent += 'ü';
          break;
        case '0':
          text.textContent += 'ö';
          break;
        case 'A':
          text.textContent += 'Ä';
          break;
        case 'U':
          text.textContent += 'Ü';
          break;
        case ')':
          text.textContent += 'Ö';
          break;
      }
    }
  }
  
  document.addEventListener('keydown', handleKeyDown);
  