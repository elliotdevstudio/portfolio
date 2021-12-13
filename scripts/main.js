@keyframes slideHeading {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(10%);
  }
}

h1#name-as-heading {
  font-family: 'Nunito Sans', sans-serif;
  margin-left: 20px;
  color: white;
  animation: slideHeading; 
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}