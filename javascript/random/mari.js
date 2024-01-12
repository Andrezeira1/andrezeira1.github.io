function respostaCasamento(aceito) {
    const mensagem = aceito
      ? "OWNNN, OBRIGADO! 💍💍 E o papo de bater, podemos pensar com calma..."
      : "Poxa, que pena. Se decidir mudar de ideia, estarei aqui!";
    
    alert(mensagem);
  }
  
  function moveButton() {
    const naoBtn = document.getElementById('naoBtn');
    const newX = Math.floor(Math.random() * (window.innerWidth - naoBtn.clientWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - naoBtn.clientHeight));
  
    naoBtn.style.position = 'absolute';
    naoBtn.style.left = newX + 'px';
    naoBtn.style.top = newY + 'px';
  }
  